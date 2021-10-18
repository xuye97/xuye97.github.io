---
title: "Ubuntu 20.04安装docker"
date: 2021-10-18T17:42:56+08:00
draft: false
tags: ["docker","ubuntu"]
isCJKLanguage: true
categories: ["docker","linux"]
---

## 1. 安装Docker和docker-compose

卸载旧版本，旧版本被叫做docker、docker.io或者docker-engine。

```shell
sudo apt-get remove docker docker-engine docker.io containerd runc
```

更新apt包索引，并允许apt通过https更新repo

```shell
sudo apt update
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
```

添加Docker的官方 GPG key

```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

`9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88` 通过搜索指纹的后8个字符，验证您现在是否拥有带有指纹的密钥

```shell
sudo apt-key fingerprint 0EBFCD88
    
pub   rsa4096 2017-02-22 [SCEA]
      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
sub   rsa4096 2017-02-22 [S]
```

使用以下命令来设置稳定的存储库。其余架构的命令详见 [docker-ce官方安装文档](https://docs.docker.com/engine/install/ubuntu/)

```shell
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

安装docker，顺便安装docker-compose

```shell
sudo apt update
sudo apt install docker-ce
sudo apt install docker-compose
```

启动docker

```shell
sudo systemctl start docker
sudo systemctl enable docker
```

安装完成后，使用如下命令查看安装的docker版本：

```shell
docker --version
```
