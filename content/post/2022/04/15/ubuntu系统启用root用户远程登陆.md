---
title: "Ubuntu系统启用root用户远程登陆"
date: 2022-04-15T10:05:25+08:00
draft: false
tags: ["ubuntu","linux","ssh"]
isCJKLanguage: true
categories: ["ubuntu","linux"]
---

1. 编辑 /etc/ssh/sshd_config 文件

   ```shell
   #修改 PermitRootLogin 为true
   $ sudo vim /etc/ssh/sshd_config
   #LoginGraceTime 2m
   #PermitRootLogin prohibit-password
   PermitRootLogin yes
   #StrictModes yes
   #MaxAuthTries 6
   #MaxSessions 10
   ```

2. 重置root密码

   ```shell
   sudo passwd root
   ```

3. 重启ssh服务

   ```shell
   sudo  systemctl  restart  sshd
   ```

   
