---
title: "Acme操作"
date: 2021-12-10T16:34:24+08:00
draft: false
tags: ["acme"]
isCJKLanguage: true
categories: ["实用工具"]
---

### 更新acme.sh

```shell
#更新
acme.sh --upgrade
#自动更新
acme.sh  --upgrade  --auto-upgrade
#关闭自动更新
acme.sh --upgrade  --auto-upgrade  0
```

### 证书操作

```shell
#证书列表
acme.sh --list
#删除证书
acme.sh --remove -d domain.com
#撤销证书
acme.sh --revoke -d domain.com
```

