---
title: "Git切换账户"
date: 2021-10-14T11:48:35+08:00
draft: false
tags: ["git","账户"]
isCJKLanguage: true
categories: ["git"]e 
---

换了公司电脑之前有人用过，上传代码一直是前一个人的名字，刚开始以为是密钥的问题，换了两次密钥还是之前的那个人的名字。

**查看当前用户名及邮箱**

```shell
git config user.name	#当前git用户名
git config user.email	#当前git邮箱
```

**设置新的用户名及邮箱**

```shell
git config --global user.name "用户名"
git config --global user.email "邮箱地址"
```

再次提交代码就正常了
