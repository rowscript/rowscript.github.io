# 常用类型

## 基本类型

RowScript 支持并兼容以下 JavaScript 基本类型：

* [`string`], 例如 `"hello"`
* [`number`], 例如 `42`
* [`boolean`], 即 `false` 和 `true`
* [`bigint`], 例如 `42n`

[`string`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

[`number`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

[`boolean`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[`bigint`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

### 内置操作符

RowScript 不支持所谓 JavaScript 中著名的 [“感谢发明了 JavaScript”] 梗，使得操作符的功能过于“强大”。比如，`+`/`-`
操作符仅适用于类型相同的参数。

```js
1 + 2 // ✅

1 + "123" // ❌
```

[“感谢发明了 JavaScript”]: https://www.reddit.com/r/ProgrammerHumor/comments/8srix1/thanks_brendan_for_giving_us_the_javascript

## Unit 类型

在 RowScript 中，我们决定不采用 `null`、`undefined` 和
`void`，原因是它们一旦混合使用便容易引发混乱。作为替代，我们引入了一种名为 `unit` 的新基本类型。这种类型与 `void`
类似，不过区别在于用户实际上可以声明一个此类型的变量，这一特性让它独树一帜。

可以使用 `()` 创建 unit 类型的值，我们称之为“unit value”。

```ts
const a: unit = ();
```

在将代码编译到 JavaScript 时，unit value 会被转换为 `undefined` 以保证兼容性。

## 函数类型

函数类型（function type）和 TypeScript 相似，拥有相同的语法：

```ts
const first: (x: number, y: number) => number = (x, y) => x;
//           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
//           此处即为函数类型的表达式
```

在函数类型的表达式中，函数的参数名字是必须要填写的，这点和 TypeScript 一致，这是因为参数名字能起到文档注释的效果，参数名称不同并不会导致函数类型的不同。

## 对象类型

对象类型（object type）和 TypeScript 同样类似，可以通过直接的方式表达一个对象类型：

<!-- @formatter:off -->

```ts
function f(): {n: number} {
    {n: 42}
}
```

<!-- @formatter:on -->

也可以搭配类型别名使用：

<!-- @formatter:off -->

```ts
type Data = {n: number};

function f(): Data {
    {n: 42}
}
```

<!-- @formatter:on -->

### 对象拼接

不同的对象可以进行拼接（concatenation），拼接中如果出现相同的属性（property)，即使两个属性的类型不同，但是拼接操作左边的对象
**会被右边的对象覆盖**。

使用操作符 `...` 拼接两个不同的对象。

<!-- @formatter:off -->

```ts
function f(): {n: string} {
    const a = {n: 42};
    const b = a...{n: "hello"};
    b
}

const a = f(); //=> {n: "hello"}
```

<!-- @formatter:on -->

### 向下转换

对象可以进行向下转换（downcast），即将一个“更大”的对象转换成一个“更小”的对象，去掉多余的属性，保留用户所选的属性。

使用 `{...expr}` 语法对对象进行向下转换。

<!-- @formatter:off -->

```ts
function f(): {n: number} {
    const a = {m: "hello", n: 42};
    {...a}
}

const a = f(); //=> {n: 42}
```

<!-- @formatter:on -->

## 枚举类型

TODO
