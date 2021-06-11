---
title: "Centos安装python3"
date: 2021-06-11T16:43:18+08:00
draft: false
tags: ["centos","python"]
isCJKLanguage: true
categories: ["centos","linux"]
---

```shell
yum install -y update && yum install -y upgrade
yum install gcc gcc-c++
yum -y install gcc automake autoconf libtool make
yum groupinstall -y 'Development Tools'
yum install -y gcc openssl-devel bzip2-devel libffi-devel
下载和编译python3.9.5
wget https://www.python.org/ftp/python/3.9.5/Python-3.9.5.tgz

mkdir /usr/local/python3 
cd Python-3.9.5/
./configure --prefix=/usr/local/python3 --enable-optimizations --with-ssl 
make && make install
ln -s /usr/local/python3/bin/python3 /usr/local/bin/python3
ln -s /usr/local/python3/bin/pip3 /usr/local/bin/pip3
pip3 install --upgrade pip
```

