---
title: "Docker容器使用ipv6网络"
date: 2024-02-19T13:42:13+08:00
draft: false
tags: ["docker","ipv6"]
isCJKLanguage: true
categories: ["docker"]
---

### 编辑文件`daemon.json`

```shell
vi /etc/docker/daemon.json
```

```json
{
  "ipv6": true,
  "fixed-cidr-v6": "fd00::/80",
  "experimental": true,
  "ip6tables": true
}
```

`ipv6` 设置为true，启用对ipv6的支持

`fixed-cidr-v6 ` 配置ipv6子网

`ip6tables` 启用`ip6tables`，`docker`会在`ip6tables`中配置`docker`网络相关的规则链

`experimental` 启用实验特性，`ip6tables`是`docker`的一个实验功能，所以需要设为true,不然`ip6tables`不生效

### 重启docker

```shell
systemctl restart docker
```

