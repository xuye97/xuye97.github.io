---
title: "Ubuntu解除热键绑定"
date: 2021-03-04T18:55:10+08:00
draft: false
tags: ["热键绑定","ubuntu"]
isCJKLanguage: true
categories: ["linux","ubuntu"]
---

ubuntu使用idea的时候习惯使用**ctrl+alt+下** 来复制代码，但是这组快捷键已经被系统占用需要手动解除绑定：

    ```shell
    gsettings get org.gnome.desktop.wm.keybindings switch-to-workspace-down 
    ```

返回的应该是

    ```shell 
    ['<Super>Page_Down', '<Control><Alt>Down']
    ```

设置快捷键

    ```shell
    gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-down "['<Super>Page_Dowm']"
    ```

## 完成
