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

1. 打开网址：https://sourceforge.net/projects/mingw-w64/files/
2. 下载 **MinGW-W64-install.exe** 安装**（2、3选一个）**
3. 如果 **MinGW-W64-install.exe** 无法安装，就下载下面对应的系统包解压**（2、3选一个）**
4. 环境变量的Path新增一行 **%安装目录%\mingw64\bin**

#### linux

```shell
# ubuntu
sudo apt install gcc
#centos
sudo yum install gcc
```
