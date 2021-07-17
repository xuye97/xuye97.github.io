---
title: "Ubuntu2004可以看到图片缩略图打开提示错误"
date: 2021-07-17T15:12:02+08:00
draft: false
tags: ["ubuntu","图片"]
isCJKLanguage: true
categories: ["ubuntu"]
---

> ubuntu 2004 可以看到图片文件的缩略图但是打开的时候提示不是一个PNG格式的文件：

```shell
Could not load image "image.png"
Fatal error reading PNG image file:Not a PNG file
```

> **解决方法：**

```shell
$ file image.png
image.png: JPEG image data, JFIF standard 1.01, aspect ratio, density 1x1, segment length 16, comment: "Intel(R) JPEG Library, version 1,5,4,36", baseline, precision 8, 1920x1200, components 3
```

可以看到image.png 的格式应该是jpeg ，将扩展名修改为jpeg就可以正常打开了

