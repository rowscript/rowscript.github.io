---
sidebar_position: 1
---

# 总体思想

有几个初衷激励我们发明了 RowScript。

## Totality

> Total type theory really is adequate for general-purpose programming.
>
> -- Jon Sterling, [Make Three To Throw Away], WITS '22

在编译过程中，通过彻底地 (`By totality`) 执行所有可能的计算，结合依值类型系统，我们能够将这些计算结果转化为实用的类型信息。这一机制使得库作者能够构建更优秀的框架，减少对技巧和变通方法的依赖。最重要的是，它提供了良好且交互式的**类型调试支持**。

[Make Three To Throw Away]: https://www.jonmsterling.com/slides/sterling-2022-wits.pdf

## Universal Scripting

> It makes sense to think of JavaScript as the universal scripting language.
>
> -- Ryan Dahl, [JavaScript Containers]

JavaScript 因其无处不在的特性，我们首选将代码编译到 JavaScript，而非 WebAssembly，这是因为我们相信，在现代编程语言工具的支持下，这种通用语言的强大潜力。 :)

[JavaScript Containers]: https://tinyclouds.org/javascript_containers

## Row Polymorphism

> Row polymorphism can be a typed solution to JavaScript's prototype-based design.
>
> -- [玩火 (niltok)], from a group talk in 2021

在最初，我们尝试用 [row polymorphism] （行多态） 来模拟一些有趣的 JavaScript 代码，这也是 "**Row**Script" 名称的起源。我们进一步发展了行多态特性和更多有趣的东西，使得类型系统健壮且多样化。

值得注意的是，RowScript 中的行多态与 PureScript 中的行多态特性不同。在这里，行可以用来创建**可扩展的枚举类型**。

[玩火 (niltok)]: https://github.com/niltok
[row polymorphism]: https://en.wikipedia.org/wiki/Row_polymorphism
[that in PureScript]: https://github.com/purescript/documentation/blob/master/language/Types.md#rows
