---
title: "Goland安装后打开Terminal报错Failed to start [powershell.exe, -NoExit, -ExecutionPolicy, Bypass xxxx"
date: 2023-08-22T11:26:51+08:00
draft: false
tags: ["idea","goland","terminal"]
isCJKLanguage: true
categories: ["错误处理"]
---

## 问题

**安装Goland以后打开Terminal，报错：Failed to start [powershell.exe, -NoExit, -ExecutionPolicy, Bypass, -File, xxxxx**

## 原因

**powershell.exe的路径不正确**

## 解决方法

**打开settings -> Tools -> Terminal，将Shell path 改为`C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`然后重启即可**
