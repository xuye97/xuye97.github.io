---
title: "Win10/11 映射WebDAV 远程挂载webdav"
date: 2022-09-26T10:40:01+08:00
draft: false
tags: ["windows","win10","win11","webdav"]
isCJKLanguage: true
categories: ["windows"]
---

1. 此电脑 右键-管理-服务-WebClient 设为自动，停止服务

   ![01-webclient设为自动并停止服务.png](/image/2022/09/26/win1011映射webdav远程挂载webdav/01-webclient设为自动并停止服务.png)

2. 修改注册表（win+R 输入 regedit）使得WIN同时支持http和https：

   **HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters\BasicAuthLevel** 值修改成**2**，即同时支持http和https，默认只支持https，然后重启服务

   ![02-修改注册表.png](/image/2022/09/26/win1011映射webdav远程挂载webdav/02-修改注册表.png)

3. 在Windows资源管理器空白处右键，选添加一个网络位置 填写正确的连接加端口号在之后的对话框填写用户名密码，即是webdav的登陆用户名和密码。

   ![03-添加网络位置向导.png](/image/2022/09/26/win1011映射webdav远程挂载webdav/03-添加网络位置向导.png)

   ![04-你想在哪创建这个网络位置.png](/image/2022/09/26/win1011映射webdav远程挂载webdav/04-你想在哪创建这个网络位置.png)

   ![05-指定网站位置.png](/image/2022/09/26/win1011映射webdav远程挂载webdav/05-指定网站位置.png)

   ![06-身份验证.png](/image/2022/09/26/win1011映射webdav远程挂载webdav/06-身份验证.png)

   ![07-设置名称.png](/image/2022/09/26/win1011映射webdav远程挂载webdav/07-设置名称.png)

   ![08-完成.png](/image/2022/09/26/win1011映射webdav远程挂载webdav/08-完成.png)
