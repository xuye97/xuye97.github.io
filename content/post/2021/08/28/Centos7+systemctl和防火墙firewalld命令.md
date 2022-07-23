---
title: "Centos7.0+ 防火墙firewalld命令"
date: 2021-08-28T10:44:32+08:00
draft: false
tags: ["centos","防火墙","firewalld"]
isCJKLanguage: true
categories: ["centos"]
---

1. 查看防火墙状态：

   ```shell
   firewall-cmd --state
   ```

2. 查看开放的端口：

   ```shell
   firewall-cmd --list-ports
   ```

3. 查看某个端口是否开放

   ```shell
   firewall-cmd--zone=public--query-port=80/tcp #返回yes代表开启
   ```

4. 开启防火墙端口：

   ```shell
   firewall-cmd --zone=public --add-port=80/tcp --permanent
   #命令含义：
   #–zone #作用域
   #–add-port=80/tcp #添加端口，格式为：端口/通讯协议
   #–permanent #永久生效，没有此参数重启后失效
   ```

5. 关闭防火墙端口：

   ```shell
   firewall-cmd --zone=public --remove-port=80/tcp --permanent
   ```

6. 重新加载配置：

   ```shell
   firewall-cmd --reload
   ```

### 注意：添加端口后，必须用命令firewall-cmd --reload重新加载一遍才会生效
