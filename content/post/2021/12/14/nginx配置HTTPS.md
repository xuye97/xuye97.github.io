---
title: "Nginx配置HTTPS"
date: 2021-12-14T14:11:41+08:00
draft: false
tags: ["https","nginx"]
isCJKLanguage: true
categories: ["实用工具"]
---

### 在**conf.d**中增加配置文件扩展名为 .conf

```shell
vim /etc/nginx/conf.d/blog.conf
```

### 编辑配置文件

```shell
server {
    # 服务器端口使用443，开启ssl
    listen       443 ssl;
    # 域名，多个以空格分开
    server_name  domain1.com domain2.com;
    
    # ssl证书地址
    ssl_certificate     /app-data/cert/domain1.com.cer;  # pem文件的路径
    ssl_certificate_key  /app-data/cert/domain1.com.key; # key文件的路径
    
    # ssl验证相关配置
    ssl_session_timeout  5m;    #缓存有效期
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;    #加密算法
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;    #安全链接可选的加密协议
    ssl_prefer_server_ciphers on;   #使用服务器端的首选算法

    location / {
        proxy_pass  http://127.0.0.1:55001; # 转发规则
        proxy_set_header Host $proxy_host; # 修改转发请求头，让8080端口的应用可以受到真实的请求
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    }
}
```

### 如果要配置多个，创建多个配置文件即可，server_name不能相同

### 重启nginx

```shell
systemctl restart nginx
```
