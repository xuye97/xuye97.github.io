---
title: "Git更改远程仓库地址"
date: 2022-04-02T17:30:48+08:00
draft: false
tags: ["git"]
isCJKLanguage: true
categories: ["git"]
---

## 1. 修改命令

    ```shell
    git remote set-url origin 新的地址
    ```

## 2. 先删后加

    ```shell
    git remote rm origin
    git remote add origin 新的地址
    ```

## 3.直接修改    **.git/config**    文件

    ```shell
    #修改后如果git pull提示fatal: refusing to merge unrelated histories：
    git pull origin master --allow-unrelated-histories
    ```
