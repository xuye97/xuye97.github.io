---
title: "GO 快速判断一个IP是否在给定的网段内"
date: 2025-03-13T13:28:29+08:00
draft: false
tags: ["golang","IP","网段"]
isCJKLanguage: true
categories: ["golang"]
---

可以使用 Go 语言中的 net 包来判断一个 IP 是否在给定的网段内。具体步骤如下：

- 使用 net.ParseCIDR() 方法解析给定的网段，返回网段的 IP 地址和子网掩码。
- 使用 net.ParseIP() 方法解析要判断的 IP 地址。
- 使用 net.IPNet.Contains() 方法判断要判断的 IP 地址是否在网段内。

代码：

```go
package main

import (
	"fmt"
	"net"
)

func main() {
	ip := net.ParseIP("192.168.0.1")
	_, ipNet, _ := net.ParseCIDR("192.168.0.0/31")

	if ipNet.Contains(ip) {
		fmt.Println("IP is in subnet")
	} else {
		fmt.Println("IP is not in subnet")
	}
    ip2 := net.ParseIP("192.168.0.254")

	if ipNet.Contains(ip2) {
		fmt.Println("IP is in subnet")
	} else {
		fmt.Println("IP is not in subnet")
	}
}

运行结果：
  包含
  不包含
```

