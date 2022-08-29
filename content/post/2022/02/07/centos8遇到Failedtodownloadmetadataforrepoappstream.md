---
title: "Centos8遇到Error: Failed to download metadata for repo 'appstream': Cannot prepare internal mirrorlist: No URLs in mirrorlist"
date: 2022-02-07T14:58:42+08:00
draft: false
tags: ["centos8"]
isCJKLanguage: true
categories: ["centos","linux"]
---

centos8运行更新时提示**Error: Failed to download metadata for repo 'appstream': Cannot prepare internal mirrorlist: No URLs in mirrorlist**

解决方法：

```shell
sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-Linux-*
sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-Linux-*
sudo dnf install centos-release-stream -y
sudo dnf swap centos-{linux,stream}-repos -y
sudo dnf distro-sync -y
```

原文地址：<https://flutterq.com/failed-to-download-metadata-for-repo-appstream-cannot-prepare-internal-mirrorlist-no-urls-in-mirrorlist>
