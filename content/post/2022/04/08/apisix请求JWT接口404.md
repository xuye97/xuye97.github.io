---
title: "Apisix请求JWT接口404"
date: 2022-04-08T17:27:47+08:00
draft: false
tags: ["apisix","jwt"]
isCJKLanguage: true
categories: ["apisix"]
---

**apisix启用jwt-auth插件会新增一个管理接口 /apisix/plugin/jwt/sign 但是这个接口需要手动暴露，不然请求会返回404**

1. 最简单的方式

   ```shell
   $ curl -X PUT 'http://127.0.0.1:9080/apisix/admin/routes/r1' \
       -H 'X-API-KEY: <api-key>' \
       -H 'Content-Type: application/json' \
       -d '{
       "uri": "/apisix/plugin/jwt/sign",
       "plugins": {
           "public-api": {}
       }
   }'
   #请求方式：curl 'http://127.0.0.1:9080/apisix/plugin/jwt/sign?key=user-key'
   ```

2. 暴露自定义的路由

   ```shell
   $ curl -X PUT 'http://127.0.0.1:9080/apisix/admin/routes/r2' \
       -H 'X-API-KEY: <api-key>' \
       -H 'Content-Type: application/json' \
       -d '{
       "uri": "/gen_token",
       "plugins": {
           "public-api": {
               "uri": "/apisix/plugin/jwt/sign"
           },
           "key-auth": {}
       }
   }'
   #请求方式：curl 'http://127.0.0.1:9080/gen_token?key=user-key'
   ```

3. 暴露需要认证的路由（请求的时候必须加认证头apikey 不然返回401）

   ```shell
   $ curl -X PUT 'http://127.0.0.1:9080/apisix/admin/routes/r2' \
       -H 'X-API-KEY: <api-key>' \
       -H 'Content-Type: application/json' \
       -d '{
       "uri": "/gen_token",
       "plugins": {
           "public-api": {
               "uri": "/apisix/plugin/jwt/sign"
           },
           "key-auth": {}
       }
   }'
   #请求方式：curl -i 'http://127.0.0.1:9080/gen_token?key=user-key' -H "apikey: test-apikey"
   ```
   



### <api-key>就是admin api 

### admin api 存放在apisix配置文件的 apisix.admin_key role为admin 的key的值

文档地址：https://apisix.apache.org/zh/docs/apisix/plugins/public-api/

