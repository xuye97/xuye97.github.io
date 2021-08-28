---
title: "Centos7+ systemctl和防火墙firewalld命令"
date: 2021-08-28T10:44:32+08:00
draft: false
tags: ["centos","防火墙","firewalld"]
isCJKLanguage: true
categories: ["centos"]
---

 一、防火墙的开启、关闭、禁用命令

1. 设置开机启用防火墙：

   ```shell
   systemctl enable firewalld.service
   ```

2. 设置开机禁用防火墙：

   ```shell
   systemctl disable firewalld.service
   ```

3. 启动防火墙：

   ```shell
   systemctl start firewalld
   ```

4. 关闭防火墙：

   ```shell
   systemctl stop firewalld
   ```

5. 检查防火墙状态：

   ```shell
   systemctl status firewalld 
   ```

二、使用firewall-cmd配置端口

1. 查看防火墙状态：

   ```shell
   firewall-cmd --state
   ```

2. 查看开放的端口：

   ```shell
   firewall-cmd --list-ports
   ```

3. 开启防火墙端口：

   ```shell
   firewall-cmd --zone=public --add-port=80/tcp --permanent
   #命令含义：
   #–zone #作用域
   #–add-port=80/tcp #添加端口，格式为：端口/通讯协议
   #–permanent #永久生效，没有此参数重启后失效
   ```

4. 关闭防火墙端口：

   ```shell
   firewall-cmd --zone=public --remove-port=80/tcp --permanent
   ```

5. 重新加载配置：

   ```shell
   firewall-cmd --reload
   ```


　　**注意：添加端口后，必须用命令firewall-cmd --reload重新加载一遍才会生效**
