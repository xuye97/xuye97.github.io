---
title: "Docker manifest 使用"
date: 2022-04-07T15:38:43+08:00
draft: false
tags: ["docker","manifest"]
isCJKLanguage: true
categories: ["docker"]
---

1. 开启 manifest

   ```shell
   $ vi /etc/docker/daemon.json
   {
     "experimental": true
   }
   ```

2. 开启experimental：

   ```shell
   #临时法:
   export DOCKER_CLI_EXPERIMENTAL=enabled
   #永久法:
   $vi ~/.docker/config.json
   {
       "experimental": "enabled"
   }
   ```

3. 创建 manifest 

   ```shell
   docker manifest create --insecure aaa/aaa:latest bbb/bbb:arm64 ccc/ccc:x86
   ```

   **aaa/aaa:latest 是manifest list地址，也就是最后统一了架构后的镜像地址**

   **bbb/bbb:arm64 ccc/ccc:x86  已经在仓库中有的镜像地址 要上传以后才行**

   **--insecure  防止远端仓库没有https证书的问题**

4. 向manifest添加镜像

   ```shell
   docker manifest create --insecure  --amend aaa/aaa:latest ddd/ddd:amd64
   ```

   **增加--amend选项，将x86的架构信息增加到了aaa中。**

5. 推送到仓库

   ```shell
   $docker manifest push aaa/aaa:latest
   ```

6. 查看已经push的manifest 

   ```she
   $docker manifest inspect aaa/aaa:latest
   ```

   
