---
title: "群晖dsm-video-station-刮削器设置"
date: 2021-07-02T19:09:15+08:00
draft: false
tags: ["dsm","tmd","刮削器","linux"]
isCJKLanguage: true
categories: ["dsm","linux"]
---

## 一、The Movie Database 账号注册与 API 接口获取

1. 网站 [https://www.themoviedb.org](https://www.themoviedb.org) 注册一个账号
2. 注册完后点击   头像 -> 账户设置 -> API -> click here
3. 创建页面选择 Developer（开发者） 接受协议
4. 填写信息，可能会报错 ：“Application summary please elaborate on how you plan to use our API” 直接把错误信息填进简介就行

5. 提交完后，复制 API密钥（v3 auth）下面的密钥复制到video station保存

## 二、将The Movie Database的IP加入到群晖的host

```shell
13.226.238.76 api.themoviedb.org
13.224.161.90 api.themoviedb.org
13.35.7.102 api.themoviedb.org
13.225.103.26 api.themoviedb.org
13.226.191.85 api.themoviedb.org
13.225.103.110 api.themoviedb.org
52.85.79.89 api.themoviedb.org
13.225.41.40 api.themoviedb.org
13.226.251.88 api.themoviedb.org
13.225.89.239 api.thetvdb.com
13.249.175.212 api.thetvdb.com
13.35.161.120 api.thetvdb.com
```