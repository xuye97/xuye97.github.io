---
title: "Ubuntu命令方式安装中文语言包"
date: 2021-03-04T09:29:03+08:00
draft: false
tags: ["ubuntu"]
isCJKLanguage: true
categories: ["linux","ubuntu"]
---

安装之前执行 echo $LANG 查看语言环境

中文语言包:

language-pack-zh-hans 简体中文

language-pack-zh-hans-base

language-pack-zh-hant 繁体中文

language-pack-zh-hant-base

>安装中文语言包
```shell script
sudo apt-get install  language-pack-zh-han*
```


>运行语言支持检查
```shell script
sudo apt install $(check-language-support)
```


>修改配置文件：
```shell script
vim /etc/default/locale
```

>将原始内容注释掉或删掉，替换为如下内容：
```shell script
LANG="zh_CN.UTF-8"
LANGUAGE="zh_CN:zh"
LC_NUMERIC="zh_CN"
LC_TIME="zh_CN"
LC_MONETARY="zh_CN"
LC_PAPER="zh_CN"
LC_NAME="zh_CN"
LC_ADDRESS="zh_CN"
LC_TELEPHONE="zh_CN"
LC_MEASUREMENT="zh_CN"
LC_IDENTIFICATION="zh_CN"
LC_ALL="zh_CN.UTF-8"
```


>修改环境文件(环境变量(当前用户)):
```shell script
vim /etc/environment
```


>不修改原有内容,直接在原内容下面新开一行加入下列内容：
```shell script
LANG="zh_CN.UTF-8"
LANGUAGE="zh_CN:zh"
LC_NUMERIC="zh_CN"
LC_TIME="zh_CN"
LC_MONETARY="zh_CN"
LC_PAPER="zh_CN"
LC_NAME="zh_CN"
LC_ADDRESS="zh_CN"
LC_TELEPHONE="zh_CN"
LC_MEASUREMENT="zh_CN"
LC_IDENTIFICATION="zh_CN"
LC_ALL="zh_CN.UTF-8"
```


>修改环境文件(环境变量(所有用户)):
```shell script
vim /etc/profile
```


>不修改原有内容,直接在原内容下面新开一行加入下列内容：
```shell script
LANG="zh_CN.UTF-8"
```