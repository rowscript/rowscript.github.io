---
sidebar_position: 1
---

# 基本类型

RowScript 支持并兼容以下 JavaScript 基本类型：

* [`string`], 例如 `"hello"`
* [`number`], 例如 `42`
* [`boolean`], 即 `false` 和 `true`
* [`bigint`], 例如 `42n`

[`string`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

[`number`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

[`boolean`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[`bigint`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

## 内置操作符

RowScript 不支持一些在 JavaScript 中著名的（["thanks for inventing JavaScript"]）、功能过于「强大」的操作符。比如，+/- 操作符仅适用于类型相同的参数。

```js
1 + 2 // ✅

1 + "123" // ❌
```

["thanks for inventing JavaScript"]: https://www.reddit.com/r/ProgrammerHumor/comments/8srix1/thanks_brendan_for_giving_us_the_javascript

## Unit 类型

在 RowScript 中，我们决定不采用 `null`、`undefined` 和 `void`，原因是它们一旦混合使用便容易引发混乱。作为替代，我们引入了一种名为 `Unit` 的新基本类型。这种类型与 `void` 类似，不过区别在于您实际上可以声明一个此类型的变量，这一特性让它独树一帜。

可以使用 `()` 创建 Unit 类型的值，我们称之为 "Unit value"。

```ts
const a: unit = ();
```

在将代码编译到 JavaScript 时，`Unit` 会被转换为 `undefined` 以保证兼容性。