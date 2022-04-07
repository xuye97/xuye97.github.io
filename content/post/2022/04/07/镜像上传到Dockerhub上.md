---
title: "镜像上传到Dockerhub上"
date: 2022-04-07T12:32:00+08:00
draft: false
tags: ["docker"]
isCJKLanguage: true
categories: ["docker"]
---

1. 先注册账号 https://hub.docker.com/

2. 使用Docker hub账号在验证本地登录

   ```shell
   docker login
   ```

3. 先`docker images`看看本地的镜像

   如果REPOITORY的名不是你Docker hub账号和仓库，即`Docker ID/仓库名`，是上传不成功的

   当然可以使用`docker tag 镜像ID 用户名称/镜像源名(repository name):新的标签名(tag)`来更改

4. .使用`docker push`命令将镜像上传到docker hub的仓库

   ```shell
   docker push<hub-user>/<repo-name>:<tag>
   ```

5. https://hub.docker.com/ 登陆账号后查看镜像
