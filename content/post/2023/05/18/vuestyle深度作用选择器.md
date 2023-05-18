---
title: "vue style 深度作用选择器 '>>>' '/deep/' '::v-deep'"
date: 2023-05-18T10:15:46+08:00
draft: false
tags: ["vue","style","深度作用选择器",">>>","/deep/","::v-deep"]
isCJKLanguage: true
categories: ["vue"]
---

### Vue style 深度作用选择器

**作用：修改UI库中的默认样式**

1. **>>>**

   ```js
   <style scoped>
   >>> .el-table--small .el-table__cell {
       padding: 6px 0;
   }
   >>> .el-table--small {
       font-size: .8rem;
   }
   </style>
   ```

2. **/deep/**

   ```js
   <style scoped>
   /deep/ .el-table--small .el-table__cell {
       padding: 6px 0;
   }
   /deep/ .el-table--small {
       font-size: .8rem;
   }
   </style>
   ```

3. **::v-deep**

   ```js
   <style scoped>
   ::v-deep .el-table--small .el-table__cell {
       padding: 6px 0;
   }
   ::v-deep .el-table--small {
       font-size: .8rem;
   }
   </style>
   ```
