---
title: "el-dialog 的坑(关闭弹窗时触发了子组件的created/mounted)"
date: 2023-07-28T13:55:44+08:00
draft: false
tags: ["vue","elementui","destroy-on-close"]
isCJKLanguage: true
categories: ["vue","elementui"]
---

**设置了destroy-on-close为true的一个el-dialog，在关闭时候，触发了子组件的mounted。**

### 解决:
    取消 destroy-on-close 的使用，如果需要进行销毁dialog中的元素，可以使用 v-if

[原文地址：https://blog.csdn.net/qq_41883423/article/details/119216285](https://blog.csdn.net/qq_41883423/article/details/119216285)