---
title: "linux密钥登录其他linux系统显示权限不足"
date: 2021-04-16T11:05:44+08:00
draft: false
tags: ["ubuntu","ssh"]
isCJKLanguage: true
categories: ["ssh","linux"]
---

    ```shell
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    Permissions 0750 for 'n1' are too open.
    It is required that your private key files are NOT accessible by others.
    This private key will be ignored.
    Load key "密钥文件": bad permissions
    192.168.2.1: Permission denied (publickey).
    ```

> 修改密钥文件权限

    ```shell
    chmod 600 密钥文件
    ```
