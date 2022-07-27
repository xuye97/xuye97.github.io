---
title: "Debian 10/11 开启bbr"
date: 2022-07-27T10:12:16+08:00
draft: true
tags: ["linux","debian","bbr"]
isCJKLanguage: true
categories: ["linux","debian"]
---

1. **/etc/sysctl.conf** 文件修改

    ```shell
    #修改文件：
    net.core.default_qdisc=fq
    net.ipv4.tcp_congestion_control=bbr

    #或者直接运行命令：
    echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
    echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
    ```

2. 保存并生效

    ```shell
        sysctl -p
    ```

3. 查看是否开启成功（多选一）

    ```shell
        #这个命令显示 "net.ipv4.tcp_available_congestion_control = reno cubic bbr" 成功
        sysctl net.ipv4.tcp_available_congestion_control
        #这个命令显示 "tcp_bbr                20480  6" 成功
        lsmod | grep bbr
    ```
