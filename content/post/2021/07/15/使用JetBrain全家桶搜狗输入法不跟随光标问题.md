---
title: "使用JetBrain全家桶搜狗输入法不跟随光标问题"
date: 2021-07-15T11:20:08+09:00
draft: false
tags: ["ubuntu","搜狗输入法"]
isCJKLanguage: true
categories: ["linux","ubuntu"]
---

## 使用JetBrain全家桶搜狗输入法不跟随光标问题

> 在 linux 平台下使用搜狗输入法在 IDEA/PYCHARM（pycharm2020.3） 中输入中文时，输入法候选框总是静止在 IDEA 的左下角，而不能跟随光标进行移动。

### 原因

> `Idea` 的 `jre` 运行环境一个 bug，导致输入法无法定位到鼠标位置

#### 解决方法

1. 下载已经修改好的 JRE 环境:

   ```shell
   https://cloud.189.cn/web/share?code=aUf2ErMJFvAr（访问码：m9xu）
   ```

2. 下载完成后解压到任意目录

3. 修改启动脚本 idea.sh goland.sh 等

   ```shell
   export IDEA_JDK=/home/$username/software/idea/java-11.0.7-jetbrain
   ```

4. 注释下的第一行增加一行

****IDEA_JDK 不是不变的，是使用的软件名大写加_JDK 比如使用goland 就应该写 GOLAND_JDK****
