---
title: "Docker容器启动报WARNING: IPv4 forwarding is disabled. Networking will not work"
date: 2021-06-04T14:29:53+08:00
draft: false
tags: ["docker","linux","centos"]
isCJKLanguage: true
categories: ["docker","linux"]
---

> 解决办法

```shell
vi /etc/sysctl.conf
```

> 修改数据

```shell
 net.ipv4.ip_forward = 1
```

> 重启网络
>
> 查看是不是修改成功

```shell
sysctl net.ipv4.ip_forward
```

> 如果返回为“ net.ipv4.ip_forward = 1 ”则表示成功了
>
> 这时，重启容器即可。



> 还可以通过run时加-p 参数指定IP的方式来解决，比如 -p 0.0.0.0:999:999（指定ip就按ipv4来，否则默认全部是ipv6的）