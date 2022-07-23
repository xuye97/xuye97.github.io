---
title: "Goland 编译出现：exec: \"gcc\": executable file not found in %PATH%"
date: 2021-05-24T17:12:28+08:00
draft: false
tags: ["golang","gcc"]
isCJKLanguage: true
categories: ["错误处理","golang"]
---

### 原因

> 在项目中引用 了cgo库，需要gcd编译c代码

## 解决办法

### window: **安装MinGW-W64**

#### linux

```shell
# ubuntu
sudo apt install gcc
#centos
sudo yum install gcc
```
