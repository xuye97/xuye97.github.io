---
title: "Centos设置静态网络地址"
date: 2021-06-04T14:09:37+08:00
draft: false
tags: ["centos","静态地址"]
isCJKLanguage: true
categories: ["linux","centos"]
---

> 修改文件：/etc/sysconfig/network-scripts/ifcfg-enp0s3
>
> “enp0s3” 可能不同

```shell
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static#静态地址
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=enp0s3
UUID=91875330-9d2e-4637-820c-abc80df62926
DEVICE=enp0s3
ONBOOT=yes#开机启动
IPADDR=192.168.2.27#ip地址
NETMASK=255.255.255.0#子网掩码
GATEWAY=192.168.2.254#网关
DNS1=192.168.2.254#DNS服务器1
DNS2=192.168.2.254#DNS服务器2
```
