---
title: "Vmware提示此主机不支持64位客户机操作系统，此系统无法运行"
date: 2021-10-27T14:00:55+08:00
draft: false
tags: ["vmware"]
isCJKLanguage: true
categories: ["错误处理"]
---

### 1. 关闭Hyper-V

控制面板 ->卸载程序->启用或关闭Windows功能->取消Hyper-V前面的√->确定

### 2. 启用BIOS的VT

重启电脑进入BIOS，找到 Intel Virtualization Technology（不同主板名字有可能不同） 设置为 Enable
