---
title: "Centos安装Docker"
date: 2021-05-26T14:53:36+08:00
draft: false
tags: ["centos8","docker"]
isCJKLanguage: true
categories: ["centos","docker"]
---

> Centos7，Centos8都适用

### 1、更新系统

```shell
sudo yum update -y && yum upgrade -y
```

### 2、安装yum-utils

```shell
sudo yum install -y yum-utils
```

### 3、添加源

```shell
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

### 4、Enable the nightly or test repositories

```shell
sudo yum-config-manager --enable docker-ce-nightly
sudo yum-config-manager --enable docker-ce-test
```

### 5、安装最新的Docker和Containerd

```shell
sudo yum install -y https://download.docker.com/linux/fedora/30/x86_64/stable/Packages/containerd.io-1.2.6-3.3.fc30.x86_64.rpm
sudo yum install -y docker-ce docker-ce-cli
```

### 6、启动Docker

```shell
sudo systemctl start docker
```

### 7、配置Docker开机自启动

```shell
sudo systemctl enable docker
```
