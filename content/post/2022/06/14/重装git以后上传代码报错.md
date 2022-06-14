---
title: "重装git以后上传代码报错"
date: 2022-06-14T15:34:31+08:00
draft: false
tags: ["git"]
isCJKLanguage: true
categories: ["git","错误处理"]
---

* 安装新的git以后长传代码报错
```shell
Unable to negotiate with 47.98.49.44 port 22: no matching host key type found. Their offer: ssh-rsa
fatal: Could not read from remote repository.
Please make sure you have the correct access rights
and the repository exists.
```
> 解决方法：
```ini
#修改 ~/.ssh/config 文件，没有就创建
Host 服务器域名
    HostName 服务器域名
    User git
    IdentityFile ~/.ssh/id_rsa
    IdentitiesOnly yes
    PubkeyAcceptedAlgorithms +ssh-rsa
    HostkeyAlgorithms +ssh-rsa
```