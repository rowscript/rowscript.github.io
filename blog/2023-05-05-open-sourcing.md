---
title: 开源 RowScript
authors: anqur
tags: [ 新闻 ]
---

我们开源了 RowScript 编译器，欢迎查看！

```bash
npm install -D rowscript@latest
```

目前，编译器仅提供了以下模块：

* 核心语法：RowScript 核心的构建模块，如函数类型（Pi Type）
* 内置功能：在代码中可访问但未提供文档的构建模块
* 预置库：无需导入即可访问、配有详尽文档的构建模块
* 标准库：通过导入来访问、与编译器本体一起打包提供的构建模块
