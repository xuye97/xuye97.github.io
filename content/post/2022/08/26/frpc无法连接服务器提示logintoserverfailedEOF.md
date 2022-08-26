---
title: "frpc无法连接服务器提示 [W] [service.go:102] login to server failed: EOF"
date: 2022-08-26T15:23:18+08:00
draft: false
tags: ["frpc"]
isCJKLanguage: true
categories: ["错误处理","frp"]
---

需要 [common] 下增加一行配置 **tls_enable = true**

```ini
[common]
server_addr = example.com
server_port = example_port
token = example_token
tls_enable = true
```

[原文地址：https://blog.phpgao.com/frp_tcp_reset.html](https://blog.phpgao.com/frp_tcp_reset.html)
