---
title: "Etcd报错 etcdserver: mvcc: database space exceeded "
date: 2023-01-28T09:24:07+08:00
draft: false
tags: ["etcd"]
isCJKLanguage: true
categories: ["etcd","错误处理"]
---

### ETCD报错：

```shell
message: etcdserver: mvcc: database space exceeded
```

### 检查主机是否安装etcd操作工具（etcdctl）

```shell
$ etcdctl --h
# 未安装，接下来安装工具，版本自行去github找， 已安装的话直接去下一步
# https://github.com/etcd-io/etcd/releases
$ wget https://github.com/etcd-io/etcd/releases/download/v3.5.7/etcd-v3.5.7-linux-amd64.tar.gz
$ tar -zxvf etcd-v3.5.7-linux-amd64.tar.gz
$ cp etcd-v3.5.7-linux-amd64/etcdctl /usr/local/bin/etcdctl
```

### 查看节点状态

```shell
# 设置变量, use API-3
$ export ETCDCTL_API=3
# 查看节点状态 --write-out="table"是输出的格式，可以是json，可以是table，默认是simple，这个参数可以不加
$ etcdctl --endpoints=http://127.0.0.1:2379 endpoint status --write-out="table"
+-----------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+------------------+
|       ENDPOINT        |        ID        | VERSION | DB SIZE | IS LEADER | IS LEARNER | RAFT TERM | RAFT INDEX | RAFT APPLIED INDEX |      ERRORS      |
+-----------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+------------------+
| http://127.0.0.1:2379 | 7324a99283754a09 |   3.5.2 |  2.1 GB |      true |      false |         5 |   22157139 |           22157139 |    alarm:NOSPACE |
+-----------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+------------------+
```

**可以看到，这里的`db size`已经达到2.1G，在etcd启动的时候，如果没有配置`--quota-backend-bytes`的大小，默认只有2G，因此，导致了程序无法写入etcd**

### 获取旧版本号

```shell
$ etcdctl --endpoints=http://127.0.0.1:2379 endpoint status --write-out="json" | egrep -o '"revision":[0-9]*' | egrep -o '[0-9].*'
10390397
```

**10390397 得到的这个数据值，就是当前的版本号，当我们压缩的时候，他就变成旧版本号了**

### 压缩旧版本

```shell
$ etcdctl --endpoints=http://127.0.0.1:2379 compact 10390397
```

### 清理磁盘碎片

```shell
$ etcdctl --user=root --password=124365 --endpoints=http://127.0.0.1:2379 defrag
Finished defragmenting etcd member[http://127.0.0.1:2379]
```

### 验证空间是否释放

```shell
$ etcdctl --endpoints=http://127.0.0.1:2379 endpoint status --write-out="table"
+-----------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+------------------+
|       ENDPOINT        |        ID        | VERSION | DB SIZE | IS LEADER | IS LEARNER | RAFT TERM | RAFT INDEX | RAFT APPLIED INDEX |      ERRORS      |
+-----------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+------------------+
| http://127.0.0.1:2379 | 7324a99283754a09 |   3.5.2 |  111 kB |      true |      false |         5 |   22158333 |           22158333 |    alarm:NOSPACE |
+-----------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+------------------+
```

**可以看到ERRORS那一列还是有警告，所以要清除警告**

### 清除警告

```shell
$ etcdctl --endpoints=http://127.0.0.1:2379 alarm disarm
memberID:23232785869456026121 alarm:NOSPACE
```

### 再次查看状态

```shell
$ etcdctl --endpoints=http://127.0.0.1:2379 endpoint status
+-----------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
|       ENDPOINT        |        ID        | VERSION | DB SIZE | IS LEADER | IS LEARNER | RAFT TERM | RAFT INDEX | RAFT APPLIED INDEX | ERRORS |
+-----------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
| http://127.0.0.1:2379 | 7324a99283754a09 |   3.5.2 |  1.4 MB |      true |      false |         5 |   22163977 |           22163977 |        |
+-----------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
```

**可以看到警告没有了，存储占用只有1.4M了，完工**
