---
title: "ubunt+uwin10双系统时间不一致"
date: 2021-01-21T10:51:58+08:00
draft: false
tags: ["ubuntu","win10","双系统"]
isCJKLanguage: true
categories: ["ubuntu","错误处理"]
---

### 原因
> 本地时间是操作系统上的时间
> 硬件时间是计算机的BIOS时间
> 因为双系统装在同一个计算机上，所以win10与ubuntu16.04的硬件时间是一定相同的，因此出现上述问题的原因是两个系统的本地时间不同。

双系统本地时间不同的原因：

> windows10中本地时间与硬件时间相同，当修改win10系统时间（本地时间）时，实际上计算机硬件时间也随之变为本地时间。
> ubuntu等linux发行版的本地时间与硬件时间不同，硬件时间使用UTC时间，即协调世界时(Coordinate Universal Time)，中国与UTC的时差为+8，即UTC+8，因此本地时间与硬件时间有8小时的时差。
> 所以，当win10与ubuntu的本地时间--硬件时间转换关系不同时，一定会出现时间不同步问题。
### ubuntu20.04+win10解决办法：(同样适用于18.04)
```shell
#安装ntpdate：
sudo apt-get install ntpdate

#设置校正服务器：
sudo ntpdate time.windows.com

#设置硬件时间为本地时间：
sudo hwclock --localtime --systohc
```
**最后重启电脑**