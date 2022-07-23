---
title: "Supervisor安装和使用"
date: 2021-12-27T17:17:44+08:00
draft: false
tags: ["supervisor","python"]
isCJKLanguage: true
categories: ["实用工具","python"]
---

## 一、安装

1. 安装

   ```shell
   pip install supervisor
   ```

2. 测试supervisor安装是否成功

   ```shell
   echo_supervisord_conf
   ```

3. 卸载

   ```shell
   pip uninstall supervisor
   ```

## 二、配置

1. 生成配置文件

   ```shell
   mkdir /etc/supervisor
   echo_supervisord_conf > /etc/supervisor/supervisord.conf
   ```

2. 启动程序

   ```shell
   supervisord -c /etc/supervisor/supervisord.conf
   ```

## 三、配置开机自启

1. 在 /usr/lib/systemd/system/ 目录下面新建文件supervisord.service，并写入如下内容：

   ```shell
   [Unit]
   Description=Process Monitoring and Control Daemon(Supervisor daemon)
   After=rc-local.service nss-user-lookup.target
    
   [Service]
   Type=forking
   ExecStart=/usr/bin/supervisord -c /etc/supervisor/supervisord.conf
   ExecStop=/usr/bin/supervisord shutdown
   ExecReload=/usr/bin/supervisord reload
   killMode=process
   Restart=on-failure
   RestartSec=42s
    
   [Install]
   WantedBy=multi-user.target
   ```

2. 启动服务

   ```shell
   systemctl enable supervisord
   ```

3. 检查是否自启

   ```shell
   systemctl is-enabled supervisord
   ```

## 四、WEB管理页面

   ```shell
   vi /etc/supervisor/supervisord.conf
   #修改下面的配置，去掉前面的分号，如果没有可以自己添加
   [inet_http_server]             # inet (TCP) server disabled by default
   port=0.0.0.0:9001              # ip_address:port specifier, *:port for all iface
   username=user                  # default is no username (open server)
   password=123                   # default is no password (open server)

   #重新载入配置文件
   supervisorctl reload
   ```

## 五、添加任务

1. 创建文件夹

   ```shell
   mkdir /etc/supervisor/conf.d
   ```

2. 修改配置文件

   ```shell
   vi /etc/supervisor/supervisord.conf
   #将下面配置前面的分号去掉
   [include]
   files = /etc/supervisor/conf.d/*.conf
   ```

3. 创建任务配置文件

   ```shell
   vi /etc/supervisor/conf.d/文件名.conf
   #添加文件内容
   [program:test001] ;冒号后面是项目名
   directory = /root/crons/ ; 程序的启动目录
   command = python test001.py  ; 启动命令，与手动在命令行启动的命令是一样
   autostart = true     ; 在 supervisord 启动的时候同时启动
   startsecs = 5        ; 启动 5 秒后没有异常退出，就当作已经正常启动了
   autorestart = true   ; 程序异常退出后自动重启
   startretries = 3     ; 启动失败自动重试次数，默认是 3
   user = root          ; 用哪个用户启动
   redirect_stderr = true  ; 把 stderr 重定向到 stdout，默认 false
   stdout_logfile_maxbytes = 100MB  ; stdout 日志文件大小，默认 50MB
   stdout_logfile_backups = 20     ; stdout 日志文件备份数
   ; stdout 日志文件，需要注意当指定目录不存在时无法正常启动，所以需要手动创建目录（supervisord 会自动创建日志文件）
   stdout_logfile = /var/log/supervisor/supervisor.log
   loglevel=debug
   ```

4. 重新加载配置生效

   ```shell
   supervisorctl reload
   ```

## 六、命令

   ```shell
   supervisorctl status  #当前运行状态
   supervisorctl stop 项目名   #停止任务
   supervisorctl start 项目名   #开始任务
   supervisorctl restart 项目名 #重启任务
   supervisorctl reload  #重新加载
   supervisorctl update   #更新配置
   ```
