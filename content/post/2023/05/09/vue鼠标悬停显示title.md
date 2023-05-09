---
title: "Vue鼠标悬停显示title"
date: 2023-05-09T17:31:15+08:00
draft: false
tags: ["vue"]
isCJKLanguage: true
categories: ["vue"]
---

**VUE自带title属性可以实现**

```js
<template>
    <div :title=message>{{ message }}</div>
</template>

<script>
export default {
    data() {
        return {
            message: "测试显示"
        }
    }
}
</script>
```

