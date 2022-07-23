---
title: "Arm Ubuntu2004安装docker"
date: 2022-01-08T09:23:14+08:00
draft: false
tags: ["arm","ubuntu","docker"]
isCJKLanguage: true
categories: ["ubuntu","docker"]
---

1. 删除旧版本

   ```shell
   sudo apt-get remove docker docker-engine docker.io containerd runc
   ```

2. 安装需要的包

   ```shell
   sudo apt install \
       apt-transport-https \
       ca-certificates \
       curl \
       software-properties-common
   ```

3. 添加 Docker 官方的 GPG

   ```shell
   sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
   ```

4. 将 Docker 的源添加到 /etc/apt/sources.list

   ```shell
   sudo echo "deb https://download.docker.com/linux/ubuntu zesty edge" > /etc/apt/sources.list.d/docker.list
   ```

5. 安装

   ```shell
   sudo apt update && sudo apt install docker-ce
   ```

6. 启动

   ```shell
   systemctl start docker
   ```

7. 查看版本

   ```shell
   docker version
   ```

8. 设置开机自启

   ```shell
   systemctl enable docker
   ```
