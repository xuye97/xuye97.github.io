---
title: "postgresql时间戳日期转换"
date: 2021-04-07T12:16:19+08:00
draft: false
tags: ["postgresql","时间"]
isCJKLanguage: true
categories: ["postgresql"]
---

```shell
# 获取当前时间戳
SELECT EXTRACT(epoch FROM NOW());
# 日期转时间戳
SELECT EXTRACT(epoch FROM CAST('2020-05-06 00:30:10' AS TIMESTAMP));
# 时间戳转日期
SELECT TO_TIMESTAMP(1589178132.43633); 
# 时间戳转date
select to_date(to_timestamp(1588725010)::text,'YYYY-MM-DD');

```
