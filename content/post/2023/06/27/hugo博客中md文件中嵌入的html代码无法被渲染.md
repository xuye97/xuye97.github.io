---
title: "Hugo博客中md文件中嵌入的html代码无法被渲染"
date: 2023-06-27T10:14:44+08:00
draft: false
tags: ["hugo","md","makedown","html"]
isCJKLanguage: true
categories: ["hugo","错误处理"]
---

> 原因：某一次 Hugo 更新内置的 Markdown 渲染引擎从 Blackfriday 换成了 goldmark ， Markdown 里的 HTML 代码默认会被干掉

### 解决方法：修改配置文件

__配置文件是yaml格式的修改或添加一下配置：__

```yaml
markup:
  goldmark:
    renderer:
      unsafe: true
```

__配置文件是toml格式的修改或添加一下配置：__

```toml
[markup.goldmark.renderer]
unsafe=true
```
