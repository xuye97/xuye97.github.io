---
title: "dnf命令使用代理"
date: 2021-03-24T13:13:07+08:00
draft: false
tags: ["dnf","代理","centos"]
isCJKLanguage: true
categories: ["linux","centos"]
---

entos 8 配置DNF代理方法
centos 8 默认使用dnf代替了yum，原yum配置文件（/etc/yum.conf）默认链接到dnf配置文件（/etc/dnf/dnf.conf）
原来只需更改yum配置文件进行代理设置的方法已经不好用了。
centos 8需按如下修改

    ```shell
    cat /etc/dnf/dnf.conf

    [main]
    gpgcheck=1
    installonly_limit=3
    clean_requirements_on_remove=True

    proxy=协议://地址:端口
    proxy_username=用户名（没有可不要）
    proxy_password=密码（没有可不要）
    ```
