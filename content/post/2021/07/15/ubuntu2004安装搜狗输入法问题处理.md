---
title: "ubuntu2004安装搜狗输入法问题处理"
date: 2021-07-15T11:18:08+09:00
draft: false
tags: ["ubuntu","搜狗输入法"]
isCJKLanguage: true
categories: ["linux","ubuntu"]
---

## 1. 使用JetBrain全家桶搜狗输入法不跟随光标问题

> 在 linux 平台下使用搜狗输入法在 IDEA/PYCHARM（pycharm2020.3） 中输入中文时，输入法候选框总是静止在 IDEA 的左下角，而不能跟随光标进行移动。

#### 原因：

> `Idea` 的 `jre` 运行环境一个 bug，导致输入法无法定位到鼠标位置

#### 解决方法:

1. 下载已经修改好的 JRE 环境:

   ```shell
   https://cloud.189.cn/web/share?code=aUf2ErMJFvAr（访问码：m9xu）
   ```

2. 下载完成后解压到任意目录

3. 修改启动脚本 idea.sh goland.sh 等

   ```shell
   export IDEA_JDK=/home/$username/software/idea/java-11.0.7-jetbrain
   ```

4. 注释下的第一行增加一行

****IDEA_JDK 不是不变的，是使用的软件名大写加_JDK 比如使用goland 就应该写 GOLAND_JDK****



## 禁用搜狗输入法Linux版的简繁切换快捷键

> 在 Ctrl+Shift+F 格式化代码的时候发现并没有格式化代码，而是触发了简繁切换

#### 解决方案

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



## linux 搜狗输入法 隐藏状态栏

#### 解决方案

修改搜狗拼音的配置文件

````shell
vi ~/.config/sogoupinyin/conf/env.ini
#将StatusAppearance的值修改为0
StatusAppearance=1    #修改前
StatusAppearance=0    #修改后
````

