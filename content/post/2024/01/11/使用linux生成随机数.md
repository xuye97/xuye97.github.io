---
title: "使用linux生成随机数"
date: 2024-01-11T17:20:51+08:00
draft: false
tags: ["linux","随机数"]
isCJKLanguage: true
categories: ["linux"]
---

```shell
</dev/urandom tr -dc '12345!@#$%qwertyuioplkjhgfdsazxcvbnm!@#$%^&*()_+{}|":?><XCVBZXCVBNML67890KJHGFDSAQWERTYUIOP' | head -c16; echo
```

__-c16__ 16代表生成多少位
