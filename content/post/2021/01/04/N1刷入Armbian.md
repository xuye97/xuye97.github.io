---
title: "N1刷入Armbian"
date: 2021-01-04T19:04:33+08:00
draft: false
tags: ["n1","armbian"]
isCJKLanguage: true
categories: ["n1"]
---

> 假设N1已经设置优盘启动

## 一、准备

1. 电脑
2. 优盘
3. [balenaEtcher](https://oneindex.superen.xyz/?/%E7%B3%BB%E7%BB%9F/N1%E5%88%B7Armbian/%E5%86%99%E7%9B%98%E5%B7%A5%E5%85%B7balenaEtcher-Setup-1.5.101.exe)
4. [Armbian_5.77_Aml-s905_Debian_stretch_default_5.0.2_20190401.img](https://oneindex.superen.xyz/?/%E7%B3%BB%E7%BB%9F/N1%E5%88%B7Armbian/Armbian_5.77_Aml-s905_Debian_stretch_default_5.0.2_20190401.img)
5. [meson-gxl-s905d-phicomm-n1-xiangsm.dtb](https://oneindex.superen.xyz/?/%E7%B3%BB%E7%BB%9F/N1%E5%88%B7Armbian/meson-gxl-s905d-phicomm-n1-xiangsm.dtb)

## 二、开始刷机

1. 使用[balenaEtcher](https://oneindex.superen.xyz/?/%E7%B3%BB%E7%BB%9F/N1%E5%88%B7Armbian/%E5%86%99%E7%9B%98%E5%B7%A5%E5%85%B7balenaEtcher-Setup-1.5.101.exe)将镜像烧录到优盘

2. 优盘从电脑上拔下来再插上，会显示出来一个磁盘 “BOOT”  

3. 将 [meson-gxl-s905d-phicomm-n1-xiangsm.dtb](https://oneindex.superen.xyz/?/%E7%B3%BB%E7%BB%9F/N1%E5%88%B7Armbian/meson-gxl-s905d-phicomm-n1-xiangsm.dtb)复制到 “dtb” 文件夹

4. 修改 “BOOT” 目录下的 “*uEnv.ini*” 文件第一行 修改为

   ```ini
   dtb_name=/dtb/meson-gxl-s905d-phicomm-n1-xiangsm.dtb
   ```

5. **先让N1断电**，然后插上U盘到靠近HDMI的USB口，然后通电即可进入armbian系统

6. ssh链接到armbian 或者 直接登录 默认用户名/密码：root/1234

7. 执行脚本

   ```shell
   nand–sata-install
   ```

8. 刷完后关机，拔优盘

### 重刷Armbian方法：优盘启动重新运行 nand–sata-install

## 三、问题处理

1. 偶尔无法联通外网

   修改/etc/network/interfaces，注释hotplug热插拔模式，换成auto即可：

   ```json
   vim /etc/network/interfaces
   #allow-hotplug eth0
   auto eth0
   ```

2. armbian的有线网卡每次重启后MAC地址都会变

   从路由器或者命令  ip addr 获取当前的mac 地址，然后修改/etc/network/interfaces文件 写死mac地址：增加一行

   ```shell
   hwaddress mac地址
   ```

3. ssh终端无法显示中文，也无法输入中文：

   修改/etc/environment中的LC_ALL：

   ```shell
   ARCH=arm64
   LC_ALL="en_US.utf-8"
   ```

4. 优化apt源服务器：

   修改 **/etc/apt/sources.list** 为下面数据：

   ```shell
   deb [ arch=arm64,armhf ] https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch main contrib non-free
   
   #deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch main contrib non-free
   
   deb [ arch=arm64,armhf ] https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-updates main contrib non-free
   
   #deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-updates main contrib non-free
   
   deb [ arch=arm64,armhf ] https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-backports main contrib non-free
   
   #deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-backports main contrib non-free
   
   deb [ arch=arm64,armhf ] https://mirrors.tuna.tsinghua.edu.cn/debian-security/ stretch/updates main contrib non-free
   
   #deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security/ stretch/updates main contrib non-free
   
   #deb [ arch=arm64,armhf ] https://mirrors.tuna.tsinghua.edu.cn/debian/ sid main contrib non-free
   ```

   修改完后运行命令：

   ```shell
   apt-get update
   apt-get upgrade
   ```

5. 修改为上海时区：

   ```shell
   timedatectl set-timezone Asia/Shanghai
   ```
   