---
title: "Go语言速率限制 rate 库"
date: 2024-10-31T14:11:12+08:00
draft: false
tags: ["go","golang","rate","速率限制"]
isCJKLanguage: true
categories: ["golang"]
---

`golang.org/x/time/rate` 是一个 Go 语言的库，用于控制事件的频率。这个库的核心是实现"速率限制"，即在给定时间内限制某些操作的发生频率。

### 工作原理

**创建限制器**：当你使用这个库时，首先要创建一个限制器（Limiter）。你会设定这个限制器的速率，比如每秒可以处理多少个请求。

**请求令牌**：每次你要执行操作时，你会先从限制器请求一个令牌。如果有可用的令牌，你的操作就会立即执行。如果没有令牌，你的操作会等待，直到有令牌为止。

**令牌的补充**：限制器会按照你设置的速率添加令牌。这保证了操作不会超过你设定的频率。

### 应用场景

这个库通常用于控制访问频率，比如：

- 控制对数据库的查询频率，防止过载。
- 控制API的调用频率，避免因频繁调用而被服务端限制或封禁。
- 在分布式系统中控制服务间的通信频率，确保系统稳定。

### 简单应用

```go
package main

import (
	"context"
	"fmt"
	"golang.org/x/time/rate"
)
func main() {
	limiter := rate.NewLimiter(rate.Limit(6), 1)//每秒最多运行6次
	for i := 0; i < 100; i++ {
		limiter.Wait(context.Background())
		fmt.Println(i)
	}
}
```

