---
title: "Git撤回push到远程的代码"
date: 2021-05-07T10:13:15+08:00
draft: false
tags: ["git","提交记录"]
isCJKLanguage: true
categories: ["git"]
---

> 撤回错误上传的代码

## 查看提交记录

```shell
$ git log
commit 3cb10f20846181a579b2d75e6aaa7afbd9416a4b (HEAD -> stable, origin/stable)
Author: Username <xxx@outlook.com>
Date:   Thu May 6 14:01:18 2021 +0800

    提交备注1

commit 4709d2919a9ba1b6cc76b25512c4539c9119fe21
Author: Username <xxx@outlook.com>
Date:   Thu May 6 16:22:08 2021 +0800

    提交备注2

commit 30b174cef05c0142dfc5cad31bc22091c4862a8f
Author: Username <xxx@outlook.com>
Date:   Thu May 6 10:50:19 2021 +0800

    提交备注3

```

> commit 后面就是提交记录的id
>
> 现在需要回滚到 “提交备注2” 

## 回滚

```shell
git reset --soft 4709d2919a9ba1b6cc76b25512c4539c9119fe21
```

## 查看提交记录

```shell
$ git log
commit 4709d2919a9ba1b6cc76b25512c4539c9119fe21
Author: Username <xxx@outlook.com>
Date:   Thu May 6 16:22:08 2021 +0800

    提交备注2

commit 30b174cef05c0142dfc5cad31bc22091c4862a8f
Author: Username <xxx@outlook.com>
Date:   Thu May 6 10:50:19 2021 +0800

    提交备注3
```

> 最上面的 "提交备注1" 3cb10f20846181a579b2d75e6aaa7afbd9416a4b 已经看不到了，这表示撤销成功了。

## 本地的代码强制推到远程

```shell
git push origin test --force  #test是分支名字
```

> 结束