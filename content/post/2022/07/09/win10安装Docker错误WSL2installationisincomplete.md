---
title: "Win10安装Docker错误 WSL 2 installation is incomplete"
date: 2022-07-09T10:17:03+08:00
draft: false
tags: ["docker"]
isCJKLanguage: true
categories: ["docker"]
---
**win10安装docker desktop，打开的时候报错：**

![docker desktop报错](/image/2022/07/09/win10installdockererrorwsl2installationisincomplete.png)

## 解决方法

1. 检查系统是否开启了**适用于Linux 的 Windows子系统**，路径：控制面板\程序\程序和功能\启用或关闭windows功能

    ![适用于Linux 的 Windows子系统](/image/2022/07/09/适用于linux的windows子系统.png)

2. 如果开启了**适用于Linux 的 Windows子系统**还是报错，那就是wsl 2版本过低，下载新版安装就可以了

    下载地址：<https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi>
