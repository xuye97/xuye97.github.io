---
title: "Beego注解路由"
date: 2025-01-22T11:18:54+08:00
draft: false
tags: ["golang","beego","注解路由"]
isCJKLanguage: true
categories: ["golang","beego"]
---



1. 软件版本

   ```ini
   beego 版本：1.12.0
   bee 版本：1.9.1
   ```

2. 配置文件 **app.conf**

   ```ini
   runmode = dev
   enable_docs = true
   ```

3. 控制器

   ```go
   package controllers
   
   import (
       "github.com/astaxie/beego"
   )
   
   type MainController struct {
       beego.Controller
   }
   
   // @router / [get]
   func (c *MainController) Get() {
       c.Ctx.WriteString("Hello, Beego!")
   }
   ```

4. 路由文件

   ```go
   package routers
   
   import (
       "github.com/astaxie/beego"
       "test/api/controllers"
   )
   
   func init() {
       beego.Router("/", &controllers.MainController{})
   }
   ```

5. main.go

   ```go
   package main
   
   import (
       _ "test/api/routers" // 导入路由包
       "github.com/astaxie/beego"
   )
   
   func main() {
       beego.Run()
   }

6. 生成路由

   ```shell
   bee run
   ```

   

<font color="#dd0000">注意：</font>程序默认读取 **app.conf** 里面配置 如果没有**app.conf** 需要在**注册路由之前**代码设置：

```go
beego.BConfig.WebConfig.EnableDocs = true
```

<font color="#dd0000">**必须是注册路由之前设置**</font>
