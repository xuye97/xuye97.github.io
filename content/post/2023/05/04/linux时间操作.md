---
title: "Linux时间操作"
date: 2023-05-04T11:57:00+08:00
draft: false
tags: ["linux","时间","系统时间","硬件时间","时间同步","date","timedatectl","hwclock","ntp","ntpdate"]
isCJKLanguage: true
categories: ["linux"]
---

Linux的时间分为System Clock（系统时间）和Real Time Clock （硬件时间，简称RTC）。

系统时间：指当前Linux Kernel中的时间。

硬件时间：主板上有电池供电的时间。

### 系统时间：

1. **data**

   ```shell
   # 查看系统当前时间
   $ date
   Thu May  4 11:35:48 CST 2023
   # 查看当前时区
   $ date -R
   Thu, 04 May 2023 11:36:13 +0800
   # 设置时间：date –set（月/日/年 时：分：秒）
   $ date –set "05/04/23 11:37"
   ```

2. **timedatectl**

   ```shell
   $ timedatectl
   # 本地时间，初始值来自于RTC，由内核维护，系统启动之后和RTC就没有关系，通常等于RTC+时区值（如下的本地时间=RTC+8）
                  Local time: Thu 2023-05-04 11:39:14 CST
   # 系统时间永远是UTC，在应用程序使用的时候转换为本地时间
              Universal time: Thu 2023-05-04 03:39:14 UTC
   # 指硬件时间，一般是主板上的特殊电路，专用于记录时间，有电池供电，不受服务器和操作系统的开启关闭影响。也称作BIOS时间。
   # 当/etc/sysconfig/clock 文件中 UTC=true时， BIOS 使用UTC时间； UTC=false时， BIOS 使用本地时间。
                    RTC time: Thu 2023-05-04 03:39:14
   # 本地时区，即服务器所在的时区，在中国通常使用Asia/Shanghai
                   Time zone: Asia/Shanghai (CST, +0800)
   System clock synchronized: yes
                 NTP service: active
   # 设置RTC时间，为"no"表示未设置
             RTC in local TZ: no

   # 常用命令：
   timedatectl set-timezone "Asia/Shanghai"  #设置时区为上海
   timedatectl set-ntp true		#开启ntp同步
   timedatectl set-ntp false		#禁止ntp同步
   timedatectl set-local-rtc 1		#将RTC设置为本地时间
   timedatectl set-local-rtc 0		#将RTC设置为UTC
   timedatectl set-time 15:58:30					#只设置时间
   timedatectl set-time 20151120					#只设置日期
   timedatectl set-time '11:37:40 2023-05-04'		#设置时间和日期
   ```

### 硬件时间

1. 硬件时间

   ```shell
   # 查看硬件时间
   $ hwclock
   2023-05-04 11:47:15.998057+08:00
   # 设置硬件时间
   $ hwclock –set –date = （月/日/年 时：分：秒）
   # 将系统时间写入硬件时间
   $ hwclock --systohc
   # 强制系统时间写入CMOS中防止重启失效
   $ hwclock -w
   ```

### 时间同步

1. 时间同步

   ```shell
   # 安装ntpdate工具
   $ sudo yum -y install ntp ntpdate
   # 系统时间与网络时间同步
   $ sudo ntpdate time.windows.com
   #设置硬件时间为本地时间：
   $ sudo hwclock --localtime --systohc
   ```
