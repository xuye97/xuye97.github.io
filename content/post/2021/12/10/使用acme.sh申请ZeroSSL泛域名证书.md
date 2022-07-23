---
title: "使用acme.sh申请ZeroSSL泛域名证书"
date: 2021-12-10T16:15:23+08:00
draft: false
tags: ["证书","acme","ZeroSSL"]
isCJKLanguage: true
categories: ["实用工具"]
---

### 安装acme.sh

```shell
curl  https://get.acme.sh | sh
#查看acme版本
acme.sh -v
```

### 将acme.sh server更改为ZeroSSL

```shell
acme.sh --set-default-ca  --server zerossl
```

### 配置DNS API

**使用Cloudflare命令：**

```shell
export CF_Key="sdfsdfsdfljlbjkljlkjsdfoiwje"
export CF_Email="xxxx@sss.com"
```

**其他更多命令：<https://github.com/acmesh-official/acme.sh/wiki/dnsapi>**

### acme.sh申请ZeroSSL泛域名SSL证书

```shell
#example@example.com 需要修改为自己邮箱，已经注册会自动关联
acme.sh  --register-account  -m example@example.com --server zerossl
#申请ZeroSSL泛域名SSL证书 --dns 参数的值可以在上面的链接里面找到
#domain.com需要替换为自己的域名
acme.sh --dns dns_cf --issue -d domain.com -d *.domain.com
```

### 安装证书

```shell
acme.sh  --installcert  -d  domain.com   \
        --key-file   /app-data/cert/domain.com.key \
        --fullchain-file /app-data/cert/domain.com.crt
```
