---
title: "Docker安装pgadmin4"
date: 2023-03-06T14:37:51+08:00
draft: false
tags: ["docker","pgadmin4","postgres"]
isCJKLanguage: true
categories: ["docker","postgres"]
---

## 安装

```shell
docker run -it \
	--name pgadmin \
	--restart always \
	-p 5433:80 \
	-v $PWD/data:/var/lib/pgadmin \
	-v $PWD/log:/var/log/pgadmin \
	-e PGADMIN_DEFAULT_EMAIL=登录邮箱 \
	-e PGADMIN_DEFAULT_PASSWORD=登录密码 \
	-e PGADMIN_CONFIG_WTF_CSRF_ENABLED=False \
	-e PGADMIN_CONFIG_ENHANCED_COOKIE_PROTECTION=False \
	dpage/pgadmin4
```

| 变量名                                    | 是否必须 | 注释                      |
| ----------------------------------------- | -------- | ------------------------- |
| PGADMIN_DEFAULT_EMAIL                     | 是       | 登录邮箱                  |
| PGADMIN_DEFAULT_PASSWORD                  | 是       | 登录密码                  |
| PGADMIN_CONFIG_WTF_CSRF_ENABLED           | 否       | CSRF保护，默认true        |
| PGADMIN_CONFIG_ENHANCED_COOKIE_PROTECTION | 否       | 增强的cookie保护 默认true |

## 使用nginx反代

```shell
location /pgadmin/ {
        proxy_pass http://pgadmin/;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_redirect  off;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Script-Name /pgadmin;##告诉pgadmin前缀
}
```
