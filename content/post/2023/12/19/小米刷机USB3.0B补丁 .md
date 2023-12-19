---
title: "小米刷机USB3.0B补丁 "
date: 2023-12-19T09:56:03+08:00
draft: false
tags: ["刷机","补丁","USB3.0B","windows"]
isCJKLanguage: true
categories: ["刷机"]
---

小米手机刷机fastboot模式插入后找不到设备，新建一个 **.bat** 文件将下面代码复制进去，然后运行

```bat
@echo off
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\usbflags\18D1D00D0100" /v "osvc" /t REG_BINARY /d "0000" /f
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\usbflags\18D1D00D0100" /v "SkipContainerIdQuery" /t REG_BINARY /d "01000000" /f
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\usbflags\18D1D00D0100" /v "SkipBOSDescriptorQuery" /t REG_BINARY /d "01000000" /f

pause
```
