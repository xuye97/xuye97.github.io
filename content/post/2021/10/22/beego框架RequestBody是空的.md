---
title: "Beego框架RequestBody是空的"
date: 2021-10-22T17:44:09+08:00
draft: false
tags: ["golang","beego"]
isCJKLanguage: true
categories: ["golang"]
---

## beego使用的时候需要接收POST请求的Body里面的数据，但是Context.Input.RequestBody 是空的

解决方法配置文件增加一行配置：

```shell
copyrequestbody = true
```
