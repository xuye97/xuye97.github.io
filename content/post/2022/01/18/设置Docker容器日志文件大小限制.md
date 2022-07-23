---
title: "设置Docker容器日志文件大小限制"
date: 2022-01-18T08:55:16+08:00
draft: false
tags: ["docker","日志"]
isCJKLanguage: true
categories: ["docker"]
---

1. 新建/etc/docker/daemon.json，若有就不用新建了。添加log-dirver和log-opts参数：

   ```shell
   # vim /etc/docker/daemon.json
   
   {
     "log-driver":"json-file",
     "log-opts": {"max-size":"200m", "max-file":"1"}
   }
   ```

   max-size 单个容器的单个日志文件上限 200m代表 200M

   max-file 每个容器可以有几个日志文件，如果是多个日志名后面加序号

2. 重启docker的守护线程

   ```shell
   systemctl daemon-reload
   systemctl restart docker
   ```

### 设置的日志大小规则，只对新建的容器有效
