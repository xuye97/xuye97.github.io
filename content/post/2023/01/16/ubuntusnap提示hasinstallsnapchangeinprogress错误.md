---
title: "Ubuntu snap提示has “install-snap” change in progress 错误"
date: 2023-01-16T09:09:20+08:00
draft: false
tags: ["ubuntu","linux","snap"]
isCJKLanguage: true
categories: ["ubuntu","linux","错误处理"]
---

> 在Ubuntu 22.04使用snap安装spotify软件报时错：**错误：snap "spotify" has "install-snap" change in progress** 其实就是软件之前安装了一次，只是没安装完就强行停止了

### 解决方法：

```shell
root@xyemy-GL552JX:~# snap changes 
ID   状态     生成                  就绪                  摘要
1    Done   2022-08-09          明天 01:54（美国山区标准时间）  Initialize system state
3    Done   今天 18:32（美国山区标准时间）  今天 18:41（美国山区标准时间）  刷新 "firefox" snap
4    Done   今天 18:41（美国山区标准时间）  今天 18:42（美国山区标准时间）  刷新 "core20" snap
5    Done   今天 18:42（美国山区标准时间）  今天 18:43（美国山区标准时间）  刷新 "snapd" snap
6    Done   今天 18:43（美国山区标准时间）  今天 18:45（美国山区标准时间）  刷新 "gnome-3-38-2004" snap
7    Done   今天 18:43（美国山区标准时间）  今天 18:43（美国山区标准时间）  Remove inactive vulnerable "snapd" snap (16292)
8    Done   今天 18:54（美国山区标准时间）  今天 18:54（美国山区标准时间）  刷新 "snapd-desktop-integration" snap
9    Doing  今天 21:02（美国山区标准时间）  -                   安装 "spotify" snap from "latest/stable" channel
2    Done   明天 01:53（美国山区标准时间）  明天 01:56（美国山区标准时间）  初始化设备
```

**可以看到ID=9 Doing就是我之前安装失败的。**

终止任务：

```shell
# 9 就是之前命令获取到的ID
sudo snap abort 9
```

终止之后再运行 **snap changes**

```shell
root@xyemy-GL552JX:~# snap changes 
ID   状态     生成                  就绪                  摘要
1    Done   2022-08-09          明天 01:54（美国山区标准时间）  Initialize system state
3    Done   今天 18:32（美国山区标准时间）  今天 18:41（美国山区标准时间）  刷新 "firefox" snap
4    Done   今天 18:41（美国山区标准时间）  今天 18:42（美国山区标准时间）  刷新 "core20" snap
5    Done   今天 18:42（美国山区标准时间）  今天 18:43（美国山区标准时间）  刷新 "snapd" snap
6    Done   今天 18:43（美国山区标准时间）  今天 18:45（美国山区标准时间）  刷新 "gnome-3-38-2004" snap
7    Done   今天 18:43（美国山区标准时间）  今天 18:43（美国山区标准时间）  Remove inactive vulnerable "snapd" snap (16292)
8    Done   今天 18:54（美国山区标准时间）  今天 18:54（美国山区标准时间）  刷新 "snapd-desktop-integration" snap
9    Error  今天 21:02（美国山区标准时间）  今天 21:49（美国山区标准时间）  安装 "spotify" snap from "latest/stable" channel
2    Done   明天 01:53（美国山区标准时间）  明天 01:56（美国山区标准时间）  初始化设备
```

**可以看到ID为9的状态是Error了，然后就可以重新安装了**
