---
title: "Postgresql开启慢查询日志"
date: 2021-05-14T09:10:27+08:00
draft: false
tags: ["postgresql","慢日志"]
isCJKLanguage: true
categories: ["postgresql"]
---

## 修改系统设置（二选一）

### 修改配置文件（**postgresql.conf**）

```shell
logging_collector = on
log_destination = 'stderr'
log_directory = 'log'
log_filename = 'postgresql-%Y-%m-%d_%H%M%S.log'

log_rotation_age = 1440             #minute,多长时间创建新的文件记录日志。0 表示禁扩展。
log_rotation_size = 10240           #kb,文件多大后创建新的文件记录日志。0 表示禁扩展。
log_truncate_on_rotation = on       #可重用同名日志文件

log_statement = all  #需设置跟踪所有语句，否则只能跟踪出错信息，设置跟踪的语句类型，有4种类型：none(默认), ddl, mod, all。跟踪所有语句时可设置为 "all"。
log_min_duration_statement = 200   #milliseconds,记录执行200毫秒及以上的语句，跟踪慢查询语句，单位为毫秒。如设置 200，表示日志将记录执行200毫秒以上的SQL语句
```



### 命令修改

```shell
postgres=# ALTER SYSTEM SET logging_collector=on;
postgres=# ALTER SYSTEM SET log_destination = 'stderr';
postgres=# ALTER SYSTEM SET log_directory = 'log';
postgres=# ALTER SYSTEM SET log_filename = 'postgresql-%Y-%m-%d_%H%M%S.log';
postgres=# ALTER SYSTEM SET log_rotation_age = 1440;
postgres=# ALTER SYSTEM SET log_rotation_size = 10240;
postgres=# ALTER SYSTEM SET log_truncate_on_rotation = on;
postgres=# ALTER SYSTEM SET log_statement = all;
postgres=# ALTER SYSTEM SET log_min_duration_statement = 200;
```

> 这时候修改了并没有生效，需要重新加载

```shell
postgres=# select pg_reload_conf();
postgres=# show log_min_duration_statement;
 log_min_duration_statement
----------------------------
 200ms
(1 row)
```

### 针对某个某数据库进行设置

```shell
postgres=# alter database 数据库名 set log_min_duration_statement=100;
```

### sql查看慢语句

```shell
查询执行时间超过1秒的SQL
postgres=# select * from pg_stat_activity where state<>'idle' and now()-query_start > interval '1 s' order by query_start;
```