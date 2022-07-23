---
title: "SSH遇到“WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!”"
date: 2021-01-04T18:58:24+08:00
draft: false
tags: ["ssh"]
isCJKLanguage: true
categories: ["ssh"]
---

服务器重装系统以后再次通过ssh连接会提示：

   ```shell
   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   @    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
   Someone could be eavesdropping on you right now (man-in-the-middle attack)!
   It is also possible that a host key has just been changed.
   The fingerprint for the ECDSA key sent by the remote host is
   SHA256:OWmU6QYc/zKqT3x9CtHcyfbL4ea201sk7XBY5KQVHps.
   Please contact your system administrator.
   Add correct host key in C:\\Users\\%USERNAME%/.ssh/known_hosts to get rid of this message.
   Offending ECDSA key in C:\\Users\\%USERNAME%/.ssh/known_hosts:13
   ECDSA host key for 192.168.2.26 has changed and you have requested strict checking.
   Host key verification failed.
   ```

会出现这些信息是因为，第一次SSH连接时，会生成一个认证，储存在客户端 C:\\Users\\%USERNAME%/.ssh/known_hosts 里面，linux是 ~/.ssh/known_hosts

解决方法：（两个办法选一个）

   1. 删除known_hosts 对应服务器地址的那一行

   2. ```shell
      ssh-keygen -R 服务器IP
      ```
