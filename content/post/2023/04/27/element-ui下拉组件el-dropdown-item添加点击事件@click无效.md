---
title: "Element Ui下拉组件el-dropdown-item添加点击事件@click无效"
date: 2023-04-27T17:12:10+08:00
draft: false
tags: ["vue","element-ui","el-dropdown-item","@click"]
isCJKLanguage: true
categories: ["vue"]
---

```js
<el-dropdown-item v-if="userPermissions" icon="el-icon-tickets" class="text-blue"
                    @click.native="testFun(scope.row)">温度记录</el-dropdown-item>
```

**@click后面增加 .native 修饰符**

.native 作用：native修饰符可以让父组件接收到原生事件, 否则只能接收自定义事件
