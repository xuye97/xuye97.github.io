---
title: "Ubuntu设置apt代理"
date: 2021-10-26T13:33:17+08:00
draft: false
tags: ["linux","ubuntu","apt","代理"]
isCJKLanguage: true
categories: ["linux","ubuntu"]
---

### 1. 临时使用（推荐）

```shell
#在apt后加 -o ，没有用户名 密码可省略
sudo apt-get -o Acquire::http::proxy="socks5h://用户名:密码@服务器地址:端口号/" update
```

### 2. 修改环境变量

```shell
#没有用户名 密码可省略
export http_proxy=http://用户名:密码@服务器地址:端口号
sudo apt-get update
```

### 3. 修改配置文件

```shell
sudo vi /etc/apt/apt.conf
#增加：
Acquire::http::proxy="http://用户名:密码@服务器地址:端口号/"
```
