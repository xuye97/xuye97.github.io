---
title: "使用openssl把pem证书转换为crt和key"
date: 2022-05-25T11:16:54+08:00
draft: false
tags: ["openssl","证书","pem"]
isCJKLanguage: true
categories: ["实用工具"]
---

### pem转crt格式

    ```shell
    openssl x509 -in xxx.pem -out xxx.crt  
    ```

### pem转key格式

    ```shell
    openssl rsa -in xxx.pem -out xxx.key  
    ```
