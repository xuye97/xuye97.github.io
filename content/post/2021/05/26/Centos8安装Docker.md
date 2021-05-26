---
title: "Centos8安装Docker"
date: 2021-05-26T14:53:36+08:00
draft: false
tags: ["centos8","docker"]
isCJKLanguage: true
categories: ["centos","docker"]
---

**1、安装yum-utils**

```
sudo yum install -y yum-utils
```

**2、添加源**

```
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

**3、Enable the nightly or test repositories**

```
sudo yum-config-manager --enable docker-ce-nightly
sudo yum-config-manager --enable docker-ce-test
```

**4、安装最新的Docker和Containerd**

```
sudo yum install https://download.docker.com/linux/fedora/30/x86_64/stable/Packages/containerd.io-1.2.6-3.3.fc30.x86_64.rpm
sudo yum install docker-ce docker-ce-cli
```

**5、启动Docker**

```
sudo systemctl start docker
```

**6、配置Docker开机自启动**

```
sudo systemctl enable docker
```