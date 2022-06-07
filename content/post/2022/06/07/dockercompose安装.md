---
title: "docker-compose安装"
date: 2022-06-07T15:42:34+08:00
draft: false
tags: ["docker-compost"]
isCJKLanguage: true
categories: ["docker"]
---

> Docker Compose是 docker 提供的一个命令行工具，用来定义和运行由多个容器组成的应用。使用 compose，可以通过 YAML 文件声明式的定义应用程序的各个服务，并由单个命令完成应用的创建和启动。
* 下载docker-compose的当前稳定版
	```shell
	sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
* 赋予执行权限
	```shell
	sudo chmod +x /usr/local/bin/docker-compose
* 创建软链
	```shell
	ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
* 查看版本,验证安装
	```shell
	docker-compose --version