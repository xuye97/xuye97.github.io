---
title: "Ubuntu安装Typora"
date: 2021-04-22T17:30:00+08:00
draft: fasle
tags: ["ubuntu","typora"]
isCJKLanguage: true
categories: ["ubuntu"]
---

[官网地址：https://www.typora.io/#linux](https://www.typora.io/#linux)

```shell
# sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys BA300B7755AFCFAE
wget -qO - https://typora.io/linux/public-key.asc | sudo apt-key add -

# add Typora's repository
sudo add-apt-repository 'deb https://typora.io/linux ./'
sudo apt-get update

# install typora
sudo apt-get install typora
```
或者直接[下载](https://typora.io/linux/Typora-linux-x64.tar.gz)二进制包