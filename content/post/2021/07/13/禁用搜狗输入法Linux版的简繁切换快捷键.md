---
title: "禁用搜狗输入法Linux版的简繁切换快捷键"
date: 2021-07-13T14:49:18+08:00
draft: false
tags: ["linux","ubuntu","搜狗输入法","fcitx"]
isCJKLanguage: true
categories: ["linux","ubuntu"]
---

> 工作环境切换到linux安装了搜狗输入法，在 Ctrl+Shift+F 格式化代码的时候发现并没有格式化代码，而是触发了简繁切换

## 解决方案

1. 修改fcitx的配置文件

   ```shell
   vi ~/.config/sogoupinyin/conf/env.ini
   #将下面这行注释取消并置空
   #Hotkey=CTRL_SHIFT_F  #修改前
   Hotkey=				  #修改后
   ```

2. 修改搜狗拼音的配置文件

   ```shell
   vi ~/.config/sogoupinyin/conf/env.ini
   #将ShortCutFanJian的值修改为0
   ShortCutFanJian=1    #修改前
   ShortCutFanJian=0    #修改后
   ```

3. 修改完文件保存后重新登录账户
