---
sidebar_position: 1
---

# Primitive Types

Following JavaScript primitive types are supported and compatible in RowScript:

* [`string`], e.g. `"hello"`
* [`number`], e.g. `42`
* [`boolean`], i.e. `false` and `true`
* [`bigint`], e.g. `42n`

[`string`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

[`number`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

[`boolean`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[`bigint`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

## Builtin Operators

Some of the famous ["thanks for inventing JavaScript"] overpowered operators are not allowed in RowScript. Operators
like `+`/`-` are only effective on arguments with the same type.

```js
1 + 2 // ✅

1 + "123" // ❌
```

["thanks for inventing JavaScript"]: https://www.reddit.com/r/ProgrammerHumor/comments/8srix1/thanks_brendan_for_giving_us_the_javascript

## Unit

There are **no** `null`, `undefined` and `void` in RowScript, due to the mess when they work together. Instead, we use a
new primitive type `unit`. It's quite like `void`, but you can actually define a variable with this type, which makes it
different.

Values of type `unit` could be created using `()`, we call it "unit value".

```ts
const a: unit = ();
```

Note that upon code generation, unit values would be translated into `undefined` for compatibility.
