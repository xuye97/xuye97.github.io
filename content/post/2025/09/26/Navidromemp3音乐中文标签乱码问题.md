---
title: "Navidrome mp3 音乐中文标签乱码问题"
date: 2025-09-26T09:26:51+08:00
draft: true
tags: ["Navidrome","mp3","乱码"]
isCJKLanguage: true
categories: ["nas"]
---

## 问题

![01-问题](/image/2025/09/26/Navidromemp3音乐中文标签乱码问题/01-问题.png)

## 解决方法

### 1.ssh进入服务器

```shell
sudo apt update
sudo apt install python3-mutagen
```

### 2.进入你的音乐目录

```shell
find . -iname "*.mp3" -execdir mid3iconv -e gbk {} \;
```

### 运行截图

![02-运行结果](/image/2025/09/26/Navidromemp3音乐中文标签乱码问题/02-运行结果.png)
