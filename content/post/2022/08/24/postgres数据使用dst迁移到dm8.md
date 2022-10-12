---
title: "Postgres数据使用dst迁移到dm8"
date: 2022-08-24T13:45:28+08:00
draft: false
tags: ["postgresql","dst","dm8"]
isCJKLanguage: true
categories: ["postgresql","dm8"]
---

1. 打开DM数据迁移工具
![打开DM数据迁移工具](/image/2022/08/24/postgres数据使用dst迁移到dm8/01打开DM数据迁移工具.png)

2. 新建工程
![新建工程](/image/2022/08/24/postgres数据使用dst迁移到dm8/02新建工程.png)
![新建工程2](/image/2022/08/24/postgres数据使用dst迁移到dm8/03新建工程2.png)

3. 修改数据库类型映射，选择postgresql下的dm中设定转换类型
![修改数据库类型映射选择postgresql下的dm中设定转换类型](/image/2022/08/24/postgres数据使用dst迁移到dm8/04修改数据库类型映射选择postgresql下的dm中设定转换类型.png)

4. 右键”迁移“->”新建迁移“,并填写迁移名称和描述
![新建迁移](/image/2022/08/24/postgres数据使用dst迁移到dm8/05新建迁移.png)

5. 欢迎界面点击下一步
![欢迎界面下一步](/image/2022/08/24/postgres数据使用dst迁移到dm8/06欢迎界面下一步.png)

6. 选择迁移方式为**PostGreSQL ==> DM**
![迁移方式选择PostGreSQL](/image/2022/08/24/postgres数据使用dst迁移到dm8/07迁移方式选择PostGreSQL.png)

7. 设置PostGreSQL数据源
![设置数据源](/image/2022/08/24/postgres数据使用dst迁移到dm8/08设置数据源.png)

8. 数据源指定驱动（自带的是psql9.4驱动，psql版本9.4以上的需要自定义驱动）[下载地址](https://jdbc.postgresql.org/download.html)
![数据源指定驱动](/image/2022/08/24/postgres数据使用dst迁移到dm8/09数据源指定驱动.png)

9. 设置目的达梦数据库
![设置目的达梦数据库](/image/2022/08/24/postgres数据使用dst迁移到dm8/10设置目的达梦数据库.png)

10. 指定对象复制或查询，选中模式，取消右下角的 ”使用默认数类型映射关系(M)“ 使用自定义的类型映射关系，然后下一步
![指定对象复制或查询](/image/2022/08/24/postgres数据使用dst迁移到dm8/11指定对象复制或查询.png)

11. 点击完成，开始转移
![完成](/image/2022/08/24/postgres数据使用dst迁移到dm8/12完成.png)

12. 出现 ”获取列信息失败“ 错误，大概率可能是第8步没有指定驱动
![获取列信息失败](/image/2022/08/24/postgres数据使用dst迁移到dm8/13获取列信息失败.png)
