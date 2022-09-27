---
title: "Beego 静态文件处理"
date: 2022-09-27T10:01:34+08:00
draft: false
tags: ["golang","beego","静态文件"]
isCJKLanguage: true
categories: ["golang","beego"]
---

静态文件注册:

```go
beego.SetStaticPath("/attachment","static/attachment")
beego.SetStaticPath("/public","static/public")
```

- 第一个参数是路径，url 路径信息
- 第二个参数是静态文件目录（相对应用所在的目录）

默认情况下 beego 会判断目录下文件是否存在，不存在直接返回 404 页面，如果请求的是 `index.html`，那么由于 `http.ServeFile` 默认是会跳转的，不提供该页面的显示。因此 beego 可以设置 

```go
beego.BConfig.WebConfig.DirectoryIndex=true
```

这样来使得显示 `index.html` 页面。

开启该功能之后，用户访问目录就会显示该目录下所有的文件列表：

![01-目录下所有的文件列表](/image/2022/09/27/beego静态文件处理/01-目录下所有的文件列表.png)

