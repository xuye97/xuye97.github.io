---
title: "pip设置国内镜像源"
date: 2021-08-07T09:12:08+09:00
draft: false
tags: ["pip"]
isCJKLanguage: true
categories: ["pip"]
---

国内的一些代理源：

阿里云 ：<http://mirrors.aliyun.com/pypi/simple/>

中国科学技术大学：<https://pypi.mirrors.ustc.edu.cn/simple/>

清华大学：<https://pypi.tuna.tsinghua.edu.cn/simple/>

豆瓣：<http://pypi.douban.com/simple/>

1. 创建文件

   ```shell
   #window
   在 C:\Users\%username%\ 下创建文件 pip.ini
   #linux
   mkdir ~/.pip && vi ~/.pip/pip.conf
   ```

2. 修改配置文件：

   ```shell
   [global]
   index-url = https://pypi.tuna.tsinghua.edu.cn/simple/
   [install]
   trusted-host=pypi.tuna.tsinghua.edu.cn
   ```

### 可以设置成别的源，替换地址就可以
