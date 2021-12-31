---
title: "Oracle Cloud甲骨文免费VPS 梯子防火墙设置"
date: 2021-12-31T11:30:31+08:00
draft: false
tags: ["oracle","甲骨文","ubuntu"]
isCJKLanguage: true
categories: ["linux","ubuntu"]
---

Oracle Cloud甲骨文免费VPS在创建vps后如果需要搭建梯子，需要对防火墙进行设置。
1、在子网中的安全列表中对入口规则和出口规则进行更改，对0.0.0.0/0的所有协议进行放行。
2、做完第一步是对网络的防火墙打开了，但是vps搭建的梯子还是不能连接，需要对vpc机器的防火墙进行设置

```shell
#开放所有端口
sudo iptables -P INPUT ACCEPT
sudo iptables -P FORWARD ACCEPT
sudo iptables -P OUTPUT ACCEPT
sudo iptables -F
#Oracle自带的Ubuntu镜像默认设置了Iptable规则，关闭它
apt-get purge netfilter-persistent
reboot

#强制删除
rm -rf /etc/iptables && reboot
```

参照：https://www.lingbaoboy.com/2019/09/oracle-cloudvps.html

实测环境ubuntu 20.04

