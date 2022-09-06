---
title: "Golang 设置时区"
date: 2022-09-06T13:44:47+08:00
draft: false
tags: ["golang","时区"]
isCJKLanguage: true
categories: ["golang"]
---

## 1. 使用 `time.FixedZone` **(推荐)**

```go
import (
	"fmt"
	"time"
)
func main() {
	//东八区 FixedZone 第一个参数是名字，  第二个参数是偏移量 单位（秒）
	var cstZone = time.FixedZone("CST", 8*60*60)
	fmt.Println(time.Now().In(cstZone).Format(time.RFC822))
}

控制台打印数据：
06 Sep 22 13:52 CST
```

## 2. `LoadLocation`

```go
import (
	"fmt"
	"time"
)
func main() {
    //time.LoadLocation 支持的地区在 %GOPATH%/lib/time/zoneinfo.zip 压缩文件里面
    var cstSh, _ = time.LoadLocation("Asia/Shanghai") //上海
	fmt.Println(time.Now().In(cstSh).Format("2006-01-02 15:04:05"))
}
```

