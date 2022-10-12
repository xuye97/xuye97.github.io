---
title: "Openwrt安装tailscale"
date: 2022-10-12T10:25:07+08:00
draft: false
tags: ["openwrt","tailscale"]
isCJKLanguage: true
categories: ["openwrt","tailscale"]
---

### Github库地址[https://github.com/adyanth/openwrt-tailscale-enabler](https://github.com/adyanth/openwrt-tailscale-enabler)

### 安装：

```shell
cd /tmp
wget -o https://github.com/adyanth/openwrt-tailscale-enabler/releases/download/v1.30.2-389135a-autoupdate/openwrt-tailscale-enabler-v1.30.2-389135a-autoupdate.tgz
tar x -zvC / -f openwrt-tailscale-enabler-v1.30.2-389135a-autoupdate.tgz
opkg update
opkg install libustream-openssl ca-bundle kmod-tun
/etc/init.d/tailscale start
#10.0.0.0/24 需要修改为自己网段,如果不需要“子网路由功能” tailscale up 就可以了
tailscale up --accept-dns=false --advertise-routes=10.0.0.0/24
#设置开机启动
/etc/init.d/tailscale enable
```

**校验是不是开机启动**

```shell
ls /etc/rc.d/S*tailscale*
#打印下面的日志就是正常
/etc/rc.d/S99tailscale
```

### 增加路由器防火墙规则，让内网设备可以访问tailscale设备

**openwrt -> 网络 -> 防火墙 -> 自定义规则**增加以下代码，并重启防火墙

```shell
iptables -I FORWARD -i tailscale0 -j ACCEPT
iptables -I FORWARD -o -i tailscale0 -j ACCEPT
iptables -t nat -I POSTROUTING -o tailscale0 -j MASQUERADE
```

