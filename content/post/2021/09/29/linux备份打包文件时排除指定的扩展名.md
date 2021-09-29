---
title: "Linux 备份打包文件时排除指定的扩展名"
date: 2021-09-29T13:33:45+08:00
draft: false
tags: ["linux","tar","打包"]
isCJKLanguage: true
categories: ["linux"]
---

1. 忽略少量扩展名

   ```shell
   tar -zcvf app.tar.gz --exclude *.log /app/					#忽略扩展名为log的文件
   tar -zcvf app.tar.gz --exclude *.log --exclude *.jpg /app/	#忽略扩展名为log jpg的文件
   ```

2. 忽略很多扩展名

   ```shell
   tar -zcvf app.tar.gz --exclude-from=exclude.txt /app/	
   ```

   **exclude.txt文件名随便，内容如下**

   ```shell
   *.tif
   *.TIF
   *.gif
   *.GIF
   *.bmp
   *.BMP
   *.jpg
   *.JPG
   *.jpeg
   *.JPEG
   *.png
   *.PNG
   ```

   

