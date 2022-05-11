---
title: "VirtualBox网络连接方式选择桥接网卡的时候显示发现无效设置网卡未指定"
date: 2022-05-11T10:13:44+08:00
draft: false
tags: ["virtualbox"]
isCJKLanguage: true
categories: ["virtualbox","错误处理"]
---

## 1.错误样例
![发现无效设置网卡未指定](/image/2022/05/11/virtualbox网络连接方式选择桥接网卡的时候显示发现无效设置网卡未指定/01发现无效设置网卡未指定.png)
## 2.错误原因
	window10中没有安装virtualbox的桥接驱动
## 3.解决方法：
### 3.1 打开网络连接
![打开网络连接](/image/2022/05/11/virtualbox网络连接方式选择桥接网卡的时候显示发现无效设置网卡未指定/02打开网络连接.png)
### 3.2 右键virtualbox网络的属性
![右键virtualbox的属性](/image/2022/05/11/virtualbox网络连接方式选择桥接网卡的时候显示发现无效设置网卡未指定/03右键virtualbox的属性.png)
### 3.3 没有 **VirtualBox NDIS6 Bridged Networking Driver** 就需要继续操作
点击 **安装** --> **服务** --> **添加** --> **从磁盘安装** --> **浏览**
### 3.4 找到virtualbox安装目录中 **drivers/network/netlwf/VBoxNetLwf.inf** 文件
![右键virtualbox的属性](/image/2022/05/11/virtualbox网络连接方式选择桥接网卡的时候显示发现无效设置网卡未指定/04找到VBoxNetLwf文件.png)
### 3.5 找到文件后确定安装
### 3.6 最后在属性页面看到 **VirtualBox NDIS6 Bridged Networking Driver** 就是成功了
![success](/image/2022/05/11/virtualbox网络连接方式选择桥接网卡的时候显示发现无效设置网卡未指定/05成功.png)
![success](/image/2022/05/11/virtualbox网络连接方式选择桥接网卡的时候显示发现无效设置网卡未指定/06成功.png)