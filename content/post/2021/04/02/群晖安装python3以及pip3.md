---
title: "群晖安装python3以及pip3"
date: 2021-04-02T14:15:00+08:00
draft: true
tags: ["dsm","python","pip"]
isCJKLanguage: true
categories: ["dsm","linux"]
---

## 1.群辉安装Python

直接去群辉的套件中心，一键安装即可，然后再用SSH登录，输入`python -V或者`python3 -V`即可查看Python版本，并且进入对应的Python环境。

## 2. 安装pip3

1. 远程ssh登录群晖，获取root权限

2. 下载脚本

   ```shell
    wget https://bootstrap.pypa.io/pip/2.7/get-pip.py
   ```

3. 安装

   ```shell
   python3 get-pip.py
   ```

## 3. 执行 pip3 提示没有找到命令

安装完后执行 pip3 提示没有找到命令，安装pip的时候打印了日志说安装在哪里

  ```shell
  Collecting pip<21.0
    Using cached pip-20.3.4-py2.py3-none-any.whl (1.5 MB)
  Collecting wheel
    Using cached wheel-0.36.2-py2.py3-none-any.whl (35 kB)
  Installing collected packages: wheel, pip
    WARNING: The script wheel is installed in '/volume1/@appstore/py3k/usr/local/bin' which is not on PATH.
    Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
    WARNING: The scripts pip, pip3 and pip3.5 are installed in '/volume1/@appstore/py3k/usr/local/bin' which is not on PATH.
    Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.

  ```

## 解决方法

  ```shell
  export PATH="/volume1/@appstore/py3k/usr/local/bin:$PATH"
  ```
