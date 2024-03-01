---
title: Open Sourcing RowScript
authors: anqur
tags: [ news ]
---

我们开源了 RowScript 编译器，欢迎随时查看！

```bash
npm install -D rowscript@latest
```

Currently, only a few constructs are provided with the compiler, in many forms:

* Core syntax: Constructs embedded in the very core of RowScript, like the function type
* Builtins: Constructs that are accessible in code, yet without documentation
* Prelude: Constructs that are accessible without imports, with thorough documentation
* Standard package: Constructs that are accessible with imports, bundled with the compiler
