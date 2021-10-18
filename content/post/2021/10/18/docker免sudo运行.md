---
title: "Docker免sudo运行"
date: 2021-10-18T17:37:52+08:00
draft: false
tags: ["docker"]
isCJKLanguage: true
categories: ["docker"]
---

**默认情况下，普通用户没有权限执行 docker 相关操作, 我们需要将普通用户加入到 docker 组**

```shell
sudo usermod -aG docker 用户名
```

运行命令以后断开SSH重新链接就可以了
