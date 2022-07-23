---
title: "Arm64 docker安装mysql"
date: 2022-01-10T08:41:02+08:00
draft: false
tags: ["arm","docker","mysql"]
isCJKLanguage: true
categories: ["docker","mysql"]
---

        ```shell
        docker run -d \
                --name mysql \
                -v $PWD/conf:/etc/mysql/conf.d \
                -v $PWD/logs:/logs \
                -v $PWD/data:/var/lib/mysql \
                -e MYSQL_ROOT_PASSWORD=数据库密码 \
                --restart=always \
                biarms/mysql:5.7.30-linux-arm64v8
        ```
