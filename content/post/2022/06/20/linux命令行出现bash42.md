---
title: "Linux登录进去命令行出现 -bash-4.2"
date: 2022-06-20T15:07:13+08:00
draft: false
tags: ["linux","ssh"]
isCJKLanguage: true
categories: ["linux","ssh"]
---

> Linux服务器新建立的用户在登录时显示“-bash-4.2$”，而不是“user@主机名+路径”的显示方式。出现的此问题的原因是用户根目录下丢失了.bash_profile和.bashrc两个环境变量文件。

### **解决办法：**

```shell
cp /etc/skel/.bashrc ~
cp /etc/skel/.bash_profile ~
```

### 之后退出重新连接就可以了
