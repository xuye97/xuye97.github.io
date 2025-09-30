---
title: "Win11 关闭内存压缩"
date: 2025-09-30T13:51:08+08:00
draft: false
tags: ["windows"]
isCJKLanguage: true
categories: ["windows"]
---

使用系统管理员权限，打开PowerShell，然后输入 **Get-MMAgent**

```powershell
PS C:\Windows\system32> Get-MMAgent

ApplicationLaunchPrefetching : True
ApplicationPreLaunch         : True
MaxOperationAPIFiles         : 512
MemoryCompression            : True
OperationAPI                 : True
PageCombining                : True
PSComputerName               :

```

**MemoryCompression** 就是内存压缩

输入命令 **Disable-MMAgent -mc** 关闭内存压缩

```powershell
PS C:\Windows\system32> Disable-MMAgent -mc
```

**Get-MMAgent** 查看状态

```powershell
PS C:\Windows\system32> Get-MMAgent


ApplicationLaunchPrefetching : True
ApplicationPreLaunch         : True
MaxOperationAPIFiles         : 512
MemoryCompression            : False
OperationAPI                 : True
PageCombining                : True
PSComputerName               :

```

想要重新开启内存压缩可以使用管理员权限powershell运行 **Enable-MMAgent -mc**

```powershell
PS C:\Windows\system32> Enable-MMAgent -mc
```
