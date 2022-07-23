---
title: "Docker可视化---Portainer安装"
date: 2022-07-01T15:01:09+08:00
draft: false
tags: ["docker","portainer"]
isCJKLanguage: true
categories: ["docker"]
---

> Portainer 是一个轻量级的管理 UI ，可让你轻松管理不同的 Docker 环境（Docker 主机或 Swarm 群集）。它由可在任何 Docker 引擎上运行的单个容器组成，旨在使部署更简单

```shell
docker rm -f prtainer
docker run -d \
 -p 9000:9000 \
 -v /var/run/docker.sock:/var/run/docker.sock \
 --restart=always \
 --name prtainer portainer/portainer
```

* -d 后台运行
* -p 端口映射 冒号前面是宿主机端口 后面是容器内端口
* -v 需要管理本地docker 才需要，不需要管理本地可以删除
* --restart=always 自动重启
* --name 设置容器名

### 启动后浏览器访问 http:IP:9000
