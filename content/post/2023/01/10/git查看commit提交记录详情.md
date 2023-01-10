---
title: "Git查看commit提交记录详情"
date: 2023-01-10T10:55:56+08:00
draft: false
tags: ["git"]
isCJKLanguage: true
categories: ["git"]
---

**git show 查看提交的详情**

1.查看最新的commit

 ```shell
 git show
 ```

 2.查看指定commit hashID的所有修改：

 ```shell
 git show commitId
 ```

 3.查看某次commit中具体某个文件的修改：

 ```shell
 git show commitId fileName
 ```

