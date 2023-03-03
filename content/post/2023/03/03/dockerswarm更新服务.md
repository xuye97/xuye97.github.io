---
title: "Docker Swarm 更新服务"
date: 2023-03-03T08:56:49+08:00
draft: false
tags: ["docker","swarm"]
isCJKLanguage: true
categories: ["docker"]
---

## 修改端口映射

```shell
#增加端口映射
docker service update --publish-add 8443:8443 my_nginx
#删除端口映射
docker service update --publish-rm 8443:8443 my_nginx
```

## 修改环境变量

```shell
#增加环境变量
docker service update --env-add ETCD_AUTO_COMPACTION_RETENTION=1 my_etcd
#删除环境变量
docker service update --env-RM ETCD_AUTO_COMPACTION_RETENTION=1 my_etcd
```

## 其他更新命令

```shell
docker service update [OPTIONS] SERVICE
```

| 名字，简写                   | 默认  | 描述                                                         |
| :--------------------------- | :---- | :----------------------------------------------------------- |
| --args                       |       | 服务命令参数                                                 |
| --config-add                 |       | 添加或更新服务上的配置文件                                   |
| --config-rm                  |       | 删除配置文件                                                 |
| --constraint-add             |       | 添加或更新展示位置约束                                       |
| --constraint-rm              |       | 删除约束                                                     |
| --container-label-add        |       | 添加或更新容器标签                                           |
| --container-label-rm         |       | 用钥匙取出容器标签                                           |
| --credential-spec            |       | 托管服务帐户的凭证规范（仅限Windows）                        |
| --detach，-d                 | true  | 立即退出，而不是等待服务收敛                                 |
| --dns-add                    |       | 添加或更新自定义DNS服务器                                    |
| --dns-option-add             |       | 添加或更新DNS选项                                            |
| --dns-option-rm              |       | 删除一个DNS选项                                              |
| --dns-rm                     |       | 删除自定义的DNS服务器                                        |
| --dns-search-add             |       | 添加或更新自定义DNS搜索域                                    |
| --dns-search-rm              |       | 删除一个DNS搜索域                                            |
| --endpoint-mode              |       | 端点模式（vip或dnsrr）                                       |
| --entrypoint                 |       | 覆盖图像的默认入口点                                         |
| --env-add                    |       | 添加或更新环境变量                                           |
| --env-rm                     |       | 删除一个环境变量                                             |
| --force                      | false | 即使没有更改需要，也强制更新                                 |
| --group-add                  |       | 向容器添加一个附加的补充用户组                               |
| --group-rm                   |       | 从容器中删除先前添加的补充用户组                             |
| --health-cmd                 |       | 运行以检查运行状况的命令                                     |
| --health-interval            |       | 运行检查之间的时间（ms \| s \| m \| h）                      |
| --health-retries             | 0     | 需要报告不健康的连续失败                                     |
| --health-retries             |       | 在重新计数到不稳定（ms \| s \| m \| h）之前，容器初始化的开始时间段 |
| --health-timeout             |       | 允许一次检查运行的最长时间（ms \| s \| m \| h）              |
| --host-add                   |       | 添加或更新自定义主机到IP映射（主机：IP）                     |
| --host-rm                    |       | 删除自定义的主机到IP映射（主机：IP）                         |
| --hostname                   |       | 容器主机名                                                   |
| --image                      |       | 服务镜像标签                                                 |
| --label-add                  |       | 添加或更新服务标签                                           |
| --label-rm                   |       | 去除标签                                               |
| --limit-cpu                  |       | 限制CPU                                                      |
| --limit-memory               | 0     | 限制记忆                                                     |
| --log-driver                 |       | 记录驱动程序的服务                                           |
| --log-opt                    |       | 记录驱动程序选项                                             |
| --mount-add                  |       | 添加或更新服务上的装载                                       |
| --mount-rm                   |       | 通过目标路径移除一个安装                                     |
| --network-add                |       | 添加一个网络                                                 |
| --network-rm                 |       | 删除网络                                                     |
| --no-healthcheck             | false | 禁用任何容器指定的HEALTHCHECK                                |
| --no-resolve-image           | false | 不要查询注册表来解析图像摘要和支持的平台                     |
| --placement-pref-add         |       | 添加展示位置首选项                                           |
| --placement-pref-rm          |       | 删除展示位置偏好设置                                         |
| --publish-add                |       | 添加或更新已发布的端口                                       |
| --publish-rm                 |       | 通过目标端口删除发布的端口                                   |
| --quiet，-q                  | false | 抑制进度输出                                                 |
| --read-only                  | false | 将容器的根文件系统挂载为只读                                 |
| --replicas                   |       | 任务数量                                                     |
| --reserve-cpu                |       | 预留CPU                                                      |
| --reserve-memory             | 0     | 保留内存                                                     |
| --restart-condition          |       | 条件满足时重新启动（“none”\|“on-failure”\|“any”）            |
| --restart-delay              |       | 重启尝试之间的延迟（ns \| us \| ms \| s \| m \| h）          |
| --restart-max-attempts       |       | 放弃前的最大重启次数                                         |
| --restart-window             |       | 用于评估重新启动策略的窗口（ns \| us \| ms \| s \| m \| h）  |
| --rollback                   | false | 回退到先前的规范                                             |
| --rollback-delay             | 0     | 任务回滚之间的延迟（ns \| us \| ms \| s \| m \| h）          |
| --rollback-failure-action    |       | 回滚失败的操作（“暂停”\|“继续”）                             |
| --rollback-max-failure-ratio | 0     | 在回滚期间容忍的失败率                                       |
| --rollback-monitor           | 0     | 每个任务回滚后监视失败的持续时间（ns \| us \| ms \| s \| m \| h） |
| --rollback-order             |       | 回滚顺序（“start-first”\|“stop-first”）                      |
| --rollback-parallelism       | 0     | 同时回滚的任务的最大数量（0一次全部回滚）                    |
| --secret-add                 |       | 添加或更新服务的密钥                                         |
| --secret-rm                  |       | 去掉一个密钥                                                 |
| --stop-grace-period          |       | 强制杀死一个容器之前的等待时间（ns \| us \| ms \| s \| m \| h） |
| --stop-signal                |       | 停止容器的信号                                               |
| --tty, -t                    | false | 分配一个伪TTY                                                |
| --update-delay               | 0     | 更新之间的延迟（ns \| us \| ms \| s \| m \| h）              |
| --update-failure-action      |       | 更新失败的操作（“暂停”\|“继续”\|“回滚”）                     |
| --update-max-failure-ratio   | 0     | 更新期间容错的失败率                                         |
| --update-monitor             | 0     | （ns \| us \| ms \| s \| m \| h）每个任务更新后的持续时间    |
| --update-order               |       | 更新顺序（“start-first”\|“stop-first”）                      |
| --update-parallelism         | 0     | 同时更新的最大任务数（0个一次全部更新）                      |
| --user，-u                   |       | 用户名或UID（格式：<名称\| uid>：<组\| gid>）                |
| --with-registry-auth         | false | 向注册代理发送注册表认证详细信息                             |
| --workdir，-w                |       | 容器内的工作目录                                             |
