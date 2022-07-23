---
title: "Git撤销commit"
date: 2021-11-09T10:26:51+08:00
draft: false
tags: ["git"]
isCJKLanguage: true
categories: ["git"]
---

## 执行commit发现提交了不该提交的想要撤回

```shell
git reset --soft HEAD^
```

## 想要一下撤回多次提交

```shell
git reset --soft HEAD~2   #2是想要撤回commit的次数
```

## commit注释写错了：

```shell
git commit --amend   #进入默认vim编辑器，修改注释完毕后保存
```
