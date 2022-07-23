---
title: "PostgreSQL根据时区获取时间"
date: 2021-06-09T10:49:44+08:00
draft: false
tags: ["postgresql",“时间”,"时区"]
isCJKLanguage: true
categories: ["postgresql"]
---

> postgres获取指定时区的时间

```sql
SELECT to_char(now()::timestamp at time zone 'cst+8', 'YYYY/MM/DD HH12:MI:SS')
```

| to_char             |
| ------------------- |
| 2021/06/09 10:52:51 |

> "cst+8" 是时区，代表东八区
