---
title: "fatal error: alsa/asoundlib.h: No such file or directory"
date: 2021-05-22T20:31:03+08:00
draft: false
tags: ["golang"]
isCJKLanguage: true
categories: ["错误处理","golang"]
---

> 最近想写一个在家里装了armbian的N1上播放歌曲的小东西,在测试测试后出现了一下错误:

```shell
root@n1:~/music# go run main.go
# github.com/hajimehoshi/oto
/app/gopath/pkg/mod/github.com/hajimehoshi/oto@v0.3.1/driver_linux.go:23:28: fatal error: alsa/asoundlib.h: No such file or directory
 #include <alsa/asoundlib.h>
                            ^
compilation terminated.
```

**解决方法:**

```shell
apt-get install libasound2-dev -y
```