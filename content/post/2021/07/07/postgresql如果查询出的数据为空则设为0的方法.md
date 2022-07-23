---
title: "Postgresql如果查询出的数据为空，则设为0的方法"
date: 2021-07-07T15:05:57+08:00
draft: false
tags: ["postgresql"]
isCJKLanguage: true
categories: ["postgresql"]
---

```sql
SELECT COALESCE(sum(amount),0) from biz where xxx
```
