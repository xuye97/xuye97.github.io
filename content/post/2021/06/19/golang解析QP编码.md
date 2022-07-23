---
title: "Golang解析QP编码"
date: 2021-06-19T15:01:36+08:00
draft: false
tags: ["golang","qp","quoted-printable"]
isCJKLanguage: true
categories: ["golang"]
---

> **Quoted-printable**可译为“可打印字符引用编码”，编码常用在电子邮件中，如：Content-Transfer-Encoding: quoted-printable ，它是MIME编码常见一种表示方法！ 在邮件里面我们常需要用可打印的ASCII字符 (如字母、数字与"=")表示各种编码格式下的字符！Quoted-printable将任何8-bit字节值可编码为3个字符：一个等号"="后跟随两个十六进制数字(0–9或A–F)表示该字节的数值。例如，ASCII码换页符（十进制值为12）可以表示为"=0C"， 等号"="（十进制值为61）必须表示为"=3D"，gb2312下“中”表示为=D6=D0。除了可打印ASCII字符与换行符以外，所有字符必须表示为这种格式。

```go
qpStr, _ := ioutil.ReadAll(quotedprintable.NewReader(strings.NewReader("=E6=88=91=E6=98=AF=E6=9C=80=E5=B8=85=E7=9A=84")))
```
