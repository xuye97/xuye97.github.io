---
title: "Golang下载文件并解析文件名"
date: 2022-03-29T10:50:52+08:00
draft: false
tags: ["golang"]
isCJKLanguage: true
categories: ["golang"]
---

## 下载文件时，文件名存在返回头的 Content-Disposition 中

## 格式 Content-Disposition: attachment;filename=044001617111_94691918.pdf

```go
import (
	"github.com/spf13/cast"
	"io/ioutil"
	"mime"
	"net/http"
)

func GetFileByUrl(fileUrl string) ([]byte, string) {
	resp, err := http.Get(fileUrl)
	if err != nil {
		log.Error(err)
		return nil, ""
	}
	defer resp.Body.Close()
	fd, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Error(err)
		return nil, ""
	}
	if resp.StatusCode != 200 {
		log.Error(string(fd))
		return nil, ""
	}
	fileName := ""
	//获取返回头
	getDispos := resp.Header.Get("Content-Disposition")
	if getDispos != "" {
		//解析返回头
		_, params, err := mime.ParseMediaType(getDispos)
		if err == nil {
			if _, ok := params["filename"]; ok {
				fileName = cast.ToString(params["filename"])
			}
		}
	}
	return fd, fileName
}

```
