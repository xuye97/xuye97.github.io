---
title: "Linux安装ctop"
date: 2022-12-01T14:38:22+08:00
draft: false
tags: ["ctop","docker","linux"]
isCJKLanguage: true
categories: ["docker"]
---

**ctop提供对多个容器的实时指标的展示，使用ctop命令我们可以快速查看容器CPU、Memory、Network、IO等指标的实时情况。**

#### github地址：<https://github.com/bcicen/ctop/>

### 安装

```shell
sudo wget https://github.com/bcicen/ctop/releases/download/v0.7.7/ctop-0.7.7-linux-amd64 -O /usr/local/bin/ctop
sudo chmod +x /usr/local/bin/ctop
```

### 命令

```shell
# 只查看正在运行中的容器
$ ctop -a
# 查看包含指定字符串的容器
ctop -f string
# 反转默认颜色
ctop -i
# 反向容器排列顺序（默认存活在前）
ctop -r
# 按指定字段排序（name、cpu、mem、net、io、pids）
# eg: ctop -s cpu
ctop -s
```
