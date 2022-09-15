---
title: "Windows运行docker报错 Hardware assisted virtualization and data execution protection must be enabled in the BIOS"
date: 2022-09-15T10:05:44+08:00
draft: false
tags: ["docker"]
isCJKLanguage: true
categories: ["docker","错误处理"]
---

> windows运行Docker的时候报错：**Hardware assisted virtualization and data execution protection must be enabled in the BIOS**

## 解决方法：

1. 管理员身份打开**powershell**运行一下命令：

   ```powershell
   #打开Hyper-V
   dism.exe /Online /Enable-Feature:Microsoft-Hyper-V /All
   #启用 Hypervisor
   bcdedit /set hypervisorlaunchtype auto
   ```

   **重启**

2. 如果方法一不生效：
   1. 进入`控制面板\程序\程序和功能\启用或关闭Windows功能`并完全取消选中所有 Hyper-V 相关组件。重新启动系统。
   2. 再次进入`控制面板\程序\程序和功能\启用或关闭Windows功能`启用 Hyper-V。重新启动系统。
