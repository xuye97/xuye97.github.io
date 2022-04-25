---
title: "SQL拼接字符串时单引号转义问题"
date: 2022-04-25T09:50:22+08:00
draft: false
tags: ["sql"]
isCJKLanguage: true
categories: ["sql"]
---

### 两个单引号就转义为单引号,如下：

```sql
''''||str||''''
```

eg：

```sql
select ''''||to_char(now(), 'yyyy')||''''
'2022'
```

