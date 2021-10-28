---
title: "Manjaro21报错 Cannot find the fakeroot binary"
date: 2021-10-28T09:42:31+08:00
draft: false
tags: ["linux","manjaro"]
isCJKLanguage: true
categories: ["linux","manjaro","错误处理"]
---

**原因：**

> 因为没安装 fakeroot、binutils 等打包基本工具

**解决方法：**

```shell
pacman -S base-devel
```

