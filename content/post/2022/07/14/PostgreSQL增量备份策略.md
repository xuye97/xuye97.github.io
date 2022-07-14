---
title: "Docker+PostgreSQL增量备份策略"
date: 2022-07-14T16:39:17+08:00
draft: false
tags: ["postgresql","docker"]
isCJKLanguage: true
categories: ["postgresql"]
---

  >PostgreSQL在做写入利用时，对数据文件做的任何修改信息，起首会写入WAL日志（预写日志），然后才会对数据文件做物理修改。当数据库服务器掉重启时，PostgreSQL在启动时会起首读取WAL日志，对数据文件举行恢复。因此，从理论上讲，如果我们有一个数据库的底子备份（也称为全备），再配合WAL日志，是可以将数据库恢复到任意时间点的。增量备份说白了就是通过底子备份 + 增量WAL日志 举行重做恢复的。

#### **所有命令默认都是在docker映射的数据目录同级执行**

## 增量备份

1. 创建文件夹

    ```shell
    # 备份文件
    mkdir -p pg_backup/archive_wals
    # 备份基础数据中间文件
    mkdir -p pg_backup/basebackup/backups-tmp
    # 存放备份脚本
    mkdir -p pg_backup/scripts
    # 设置备份文件夹的用户为postgres 让用户有权限讲文件复制进来
    chown -R postgres:postgres pg_backup
    ```

2. 运行数据库

    ```shell
    docker rm -f postgres
    docker run -d \
        --restart always \
        --name postgres \
        -e POSTGRES_USER=postgres \
        -e POSTGRES_PASSWORD=mimamima \
        -v $PWD/pg_backup:/pgback \
        -v $PWD/data:/var/lib/postgresql/data \
        -p 5432:5432 \
        postgres:13
    ```

3. 修改数据库配置文件,修改过后重启数据库生效

    ```shell
    vim postgresql.conf

    wal_level = replica
    archive_mode = on
    # 判断文件是否存在，不存在就复制
    # %f 日志文件的文件名 eg:000000010000000000000001
    # %p 日志文件的全部路径  eg:/log/000000010000000000000001
    archive_command = "test ! -f /pg_backup/archive_wals/%f && cp %p /pg_backup/archive_wals/%f"
    ````

4. 基础备份脚本&emsp;**vi pg_backup/scripts/pg_basebackup.sh**

    ```shell
    #!/bin/bash

    DATE=$(date '+%Y%m%d')
    sevendays_time=$(date -d -7days '+%Y%m%d')
    port=5432
    pguser=postgres
    bkpath=pg_backup/basebackup
    bktmp=$bkpath/backups-tmp

    echo "START..............."
    # 删除过期的备份
    rm -rf $bkpath/base_$sevendays_time.tar.gz
    #生成基础备份
    pg_basebackup -Ft -Pv -Xf -z -Z5 -p $port -U $pguser -D $bktmp
    # 基础备份改一下名字并挪到备份文件夹
    mv $bktmp/base.tar.gz $bkpath/base_$DATE.tar.gz
    #手动举行一次WAL切换
    psql -p $port -U $pguser -c "select pg_switch_wal()"
    echo "END"
    ```

5. 设置还原点（可选）

    ```sql
    postgres=# select pg_create_restore_point('restore_point_200207140520');
     pg_switch_wal
    ---------------
    0/18000000
    (1 row)
    ```

6. 获取事务ID（可选）

    ```sql
    postgres=# select txid_current();
     txid_current
    --------------
            701
    (1 row)
    ```

7. 宿主机创建定时任务&emsp;**crontab -e**

    ```shell
    0 0 * * * docker exec -it postgres "/pg_backup/scripts/pg_backup_d.sh"
    ```

## 恢复数据

1. 暂停docker

    ```shell
    docker stop postgres
    ```

2. 恢复基本数据

    ```shell
    # data是docker容器映射到外面的数据库数据
    rm -rf /app/postgres/data
    # base_20220714.tar.gz 是之前脚本备份的基础数据
    tar -xvf pg_backup/basebackup/base_20220714.tar.gz -C /app/postgres/data
    ```

3. 修改配置文件  **vim data/postgresql.conf**

    ```shell
    # 恢复命令
    restore_command = 'cp /pgback/pg_backup/archive_wals/%f %p'
    # 下面几个选项多选一
    # 恢复到指定时间点
    recovery_target_time = '2022-07-14 17:20:00'
    # 恢复到指定还原点 ”restore_point_200207140520“ 是之前创建的还原点
    recovery_target_name = 'restore_point_200207140520'
    # 恢复到指定事务 ”701“ 是之前查询的事务id
    recovery_target_xid = 701
    ```

4. 重新启动数据库

    ```shell
    docker start postgres
    ```

## 到这就完成了
