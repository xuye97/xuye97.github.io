---
title: "linux Golang项目编译报错 cgo: exec gcc: exec: \"gcc\": executable file not found in $PATH"
date: 2021-04-15T13:33:20+08:00
draft: true
tags: ["golang","linux"]
isCJKLanguage: true
categories: ["linux","golang"]
---

这个问题原因是项目内有引用c的库.

golang在使用cgo调用c的库. 所以是cgo报的错.

解决方法:**安装gcc就行**

    ```shell
    sudo apt install gcc
    ```
