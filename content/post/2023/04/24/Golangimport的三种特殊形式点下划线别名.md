---
title: "Golang import的三种特殊形式：点、下划线、别名"
date: 2022-04-24T16:41:25+08:00
draft: false
tags: ["golang","import","别名"]
isCJKLanguage: true
categories: ["golang"]
---

### 1. 点
**作用：这个包导入之后调用这个包内的函数的时候，可以省略前缀的包名**
```go
package main

import . "fmt"

func main() {
   Println("Hello, World!")
}
```

### 2. 下划线

**作用：当使用下划线引入一个包时，该包下文件里左右的init()函数都会被执行**

```go
package main
import _ "github.com/go-sql-driver/mysql"
```

### 3. 别名

**作用：把包命名成另外的名字**

```go
package main

import egg "fmt"

func main() {
   egg.Println("Hello, World!")
}
```
