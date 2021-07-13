---
title: "ubuntu系统vi编辑模式下命令错乱"
date: 2021-07-13T15:08:00+08:00
draft: false
tags: ["ubuntu","vi"]
isCJKLanguage: true
categories: ["linux","ubuntu"]
---

> ubuntu预装的是vim-tiny，而平常我们使用的是vim-full

1. 卸载vim-tiny

   ```shell
   sudo apt-get remove vim-tiny
   ```

2. 安装vim-full

   ```shell
   sudo apt-get install vim
   ```

3. 恢复正常
