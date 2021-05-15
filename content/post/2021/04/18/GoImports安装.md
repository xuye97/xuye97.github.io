---
title: "GoImports安装"
date: 2021-04-18T21:23:28+08:00
draft: true
tags: ["golang","goimports"]
isCJKLanguage: true
categories: ["golang"]
---

Go开发过程中时候总需要手工引入包和删除没有使用的包，此时有人意识到可以改善下，想Java、C#、Python等等，总能自动的帮你处理下包。现在Go官方提供了 GoImports 工具，而在 Sublime Text 下也提供了相关的插件来支持自动检测。
> 运行命令获取 GoImprots 工具包
```shell
go get golang.org/x/tools/cmd/goimports
```