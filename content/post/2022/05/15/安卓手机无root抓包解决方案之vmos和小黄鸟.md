---
title: "安卓手机无root抓包解决方案之VMOS+小黄鸟"
date: 2022-05-15T15:28:49+08:00
draft: false
tags: ["vmos","httpcanary","抓包","安卓","小黄鸟"]
isCJKLanguage: true
categories: ["实用工具"]
---

1. 真机安装小黄鸟和VMOS
2. 小黄鸟的设置目标应用为VMOS，SSL证书设置-->选择导出根证书，类型为System Trusted (.0)
3. 导出的证书路径为 内部存储/HttpCanary/cert/xxxx.0
4. 打开VMOS 新建一个虚拟机，并开启超级用户功能。
5. 再VMOS虚拟机里面打开常用工具，下载ROOT EXPLOER
6. 虚拟机中点击 添加>文件>内部存储>HttpCanary>cert>xxxx.0（刚才小黄鸟导出的证书）
7. 虚拟机中点击 添加>应用 选择需要抓包的应用
8. 打开ROOT EXPLOER 并授予ROOT权限
9. 使用 ROOT EXPLOER  将 存储/VMOSfiletransferstatiom/xxxx.0 (刚才导入的文件) 复制到 根目录/etc/security 文件夹里面
10. 返回真机启动小黄鸟
11. 返回虚拟机启动要抓包的软件，就可以抓包了
