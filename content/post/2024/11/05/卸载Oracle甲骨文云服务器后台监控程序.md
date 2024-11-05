---
title: "卸载Oracle甲骨文云服务器后台监控程序"
date: 2024-11-05T13:46:52+08:00
draft: false
tags: ["甲骨文","oracle"]
isCJKLanguage: true
categories: ["实用工具"]
---

#### 甲骨文提供的VPS服务中包含了一些默认的监管工具：

```shell
# Centos
yum remove oracle-cloud-agent
yum remove oracle-cloud-agent-updater

# Ubuntu
snap remove oracle-cloud-agent
snap remove oracle-cloud-agent-updater
```



#### 卸载相关程序

- **rpcbind**

  使用`netstat -ntlp`命令发现`rpcbind`监听了`111`端口,如担心安全可执行以下命令卸载禁用:

  ```shell
  systemctl stop rpcbind
  systemctl stop rpcbind.socket
  systemctl disable rpcbind
  systemctl disable rpcbind.socket
  ```

   

- **oracle-cloud-agent**

  卸载甲骨文云官方后台监控程序

  ```shell
  systemctl stop oracle-cloud-agent
  systemctl disable oracle-cloud-agent
  systemctl stop oracle-cloud-agent-updater
  systemctl disable oracle-cloud-agent-updater
  ```