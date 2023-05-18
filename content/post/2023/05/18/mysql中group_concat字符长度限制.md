---
title: "Mysql中group_concat字符长度限制"
date: 2023-05-18T14:11:25+08:00
draft: false
tags: ["mysql","group_concat","长度限制"]
isCJKLanguage: true
categories: ["mysql"]
---

**group_concat长度默认限制1024字符，超出1024部分将会被舍弃**

### 解决方法：

1. 永久修改（修改配置文件）**重启数据库生效**

   ```ini
   # 修改my.ini(Windows) 或者 my.cnf(Linux) 添加或者修改以下配置
   group_concat_max_len = 102400
   # 102400 是你要设置的长度
   # 重启生效
   ```

2. 命令修改（临时，重启失效）

   ```sql
   use mysql;
   #查询最大值
   SHOW VARIABLES LIKE "group_concat_max_len";

   SET GLOBAL group_concat_max_len=102400;
   SET SESSION group_concat_max_len=102400;
   # 重启失效
   ```
