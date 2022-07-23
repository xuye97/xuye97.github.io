---
title: "linux 搜狗输入法 隐藏状态栏"
date: 2021-07-15T11:25:08+09:00
draft: false
tags: ["ubuntu","搜狗输入法"]
isCJKLanguage: true
categories: ["linux","ubuntu"]
---

## linux 搜狗输入法 隐藏状态栏

### 解决方案

修改搜狗拼音的配置文件

````shell
vi ~/.config/sogoupinyin/conf/env.ini
#将StatusAppearance的值修改为0
StatusAppearance=1    #修改前
StatusAppearance=0    #修改后
````
