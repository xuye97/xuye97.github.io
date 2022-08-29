---
title: "Ubuntu创建图标"
date: 2021-03-24T10:44:35+08:00
draft: false
tags: ["ubuntu","图标"]
isCJKLanguage: true
categories: ["ubuntu"]
---

> ubuntu图标目录： **/usr/share/applications**

进入图标存放的位置创建一个文件后缀是 .desktop 的
填写数据

```shell
[Desktop Entry]
Version=7.2 #应用的版本号，非必填  
Name=Postman #应用名称，必填  
GenericName=Postman #应用通用名称，非必填  
Comment=Postman # 关于应用的描述说明，非必填  
Exec=/home/xxx/software/Postman/Postman #打开应用程序所要执行的命令，Type=Application时才有意义，非必填  
Icon=/home/xxx/software/Postman/Postman.png #应用icon图标所在路径，非必填  
Terminal=false #软件打开时是否启动终端，Type=Application时才有意义，非必填  
Type=Application #应用类型，Application，Link，或者是Document，必填  
URL=https://www.baidu.com/ #URL定义了该Desktop Entry文件指向的URL，只有在Type=Link时才有意义，非必填  
```

## 路径全部都需要使用绝对路径才有效
