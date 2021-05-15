---
title: "使用acme申请证书"
date: 2021-04-22T16:44:36+08:00
draft: false
tags: ["证书","acme"]
isCJKLanguage: true
categories: ["默认分类"]
---

## DNS 验证申请证书

获取 Cloudflare API 令牌
在域名管理首页（右下角）

### 安装 ACME

```shell
curl https://get.acme.sh | sh
```

### 设置 API 令牌

```shell
# Cloudflare DNS=dns_cf
export CF_Key="密钥"
export CF_Email="Cloudflare登录名"

# 阿里云 DNS=dns_ali
export Ali_Key="1234"
export Ali_Secret="sADDsdasdgdsf"

# Dnspod DNS=dns_dp
export DP_Id="1234"
export DP_Key="sADDsdasdgdsf"

# Godaddy DNS=dns_gd
export GD_Key="sdfsdfsdfljlbjkljlkjsdfoiwje"
export GD_Secret="asdfsdfsfsdfsdfdfsdf"

# AWS DNS=dns_aws
export AWS_ACCESS_KEY_ID="sdfsdfsdfljlbjkljlkjsdfoiwje"
export AWS_SECRET_ACCESS_KEY="xxxxxxx"

# Linode DNS=dns_linode
export LINODE_API_KEY="xxxxxxxx"
```

### 验证 DNS 并申请证书

```shell
~/.acme.sh/acme.sh --issue --dns $DNS -d 根域名 -d *.根域名 # DNS 替换为上面 DNS=后面的参数
mkdir 证书存放路径
~/.acme.sh/acme.sh --installcert -d 根域名 --key-file 证书存放路径/private.key --fullchain-file 证书存放路径/cert.crt #将证书安装，证书将要过期的时候会自动更新
~/.acme.sh/acme.sh --upgrade --auto-upgrade #自动更新
chmod -R 755 证书存放路径 
```

## Web  验证申请证书

**这种方式，需要开放 80 端口，并保持不被占用的状态，这种方式不支持泛域名。**

### 首先安装 socat

````shell
yum install socat -y
```

### 配置DNS解析将域名解析到服务器上

### 安装 ACME 并申请证书

```shell
curl https://get.acme.sh | sh
~/.acme.sh/acme.sh  --issue -d 域名 --standalone
mkdir 证书安装路径
~/.acme.sh/acme.sh --installcert -d 域名 --key-file 证书安装路径/private.key --fullchain-file 证书安装路径/cert.crt
~/.acme.sh/acme.sh --upgrade --auto-upgrade #自动更新
chmod -R 755 证书安装路径
```