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

### 属性访问

访问一个属性（property）和 JavaScript 相似，使用 `.` 语法即可：

```ts
const a = {n: 42};
const b = a.n;
```

需要注意的是，假设一个对象的属性是一个函数，那么属性访问后的直接调用是不合法的：

```ts
const a = {f: () => 42};

a.f(); // ❌ invalid

(a.f)(); // ✅ okay
```

这么设计的原因有两个：

1. 推荐将所谓的“方法（method）”声明在 [类] 中，使用类来对数据和方法统一排布
2. 由于 [“点”语法]（dot syntax）的特殊性，`f` 在这里可能会是全局的函数，可能是类的方法，也可能是对象的对象，显式的括号能够起到一个强调“对象的属性”的作用，给读者提供了很好的提醒效果

[类]: ./class

[“点”语法]: ./dot-syntax

### 对象拼接

不同的对象可以进行拼接（concatenation），拼接中如果出现相同的属性，即使两个属性的类型不同，但是拼接操作左边的对象
**会被右边的对象覆盖**。

使用操作符 `...` 拼接两个不同的对象。

<!-- @formatter:off -->

```ts
function f(): {n: string} {
    const a = {n: 42};
    const b = a ... {n: "hello"};
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

枚举类型（enumeration type）类似 TypeScript 中的 union 类型，但是额外添加了 union 下每个类型的标签（tag，又称作
discriminant）。

一个枚举类型的值被称为 **variant**，一个 variant 是其标签和具体数值的结合体。用户可以用 **大驼峰风格** 的标识符创建一个
variant，例如：

```ts
const a = Hello;
```

值得注意的是，此时 `a` 的类型为 `[Hello]`，即当前只有 `Hello` 这一个标签的情况。当 variant
的数值类型没有指定时，类型默认为 `unit`，所以 `[Hello]` 实际上是 `[Hello(unit)]` 的语法糖。以上代码生成的 JS 结果为：

```js
// JS
const a = {Hello: undefined};
```

可以用类似函数调用的方式给 variant 加上具体的数值，例如：

<!-- @formatter:off -->

```ts
const a = SomeValue(42);
```

<!-- @formatter:on -->

此时 `a` 的类型为 `[SomeValue(number)]`，生成的 JS 代码为：

```js
// JS
const a = {SomeValue: 42};
```

从技术的角度说，RowScript 的枚举类型和 Rust 的枚举类型，以及 PureScript、Elm、Haskell 等语言的 ADT（algebraic data
type）不同的地方在于，RowScript 枚举类型是 **可以任意扩展的**，这点来说，它和 OCaml 语言的 [polymorphic variant] 十分之相似。

那我们应该如何任意扩展呢？

[polymorphic variant]: https://ocaml.org/manual/5.2/polyvariant.html

### 向上转换

我们可以通过向上转换（upcast）的方式扩展一个枚举类型。向上转换和向下转换相反，我们将一个“更小”的 variant 向“更大”的 variant
进行转换。

使用 `[...expr]` 语法进行向上转换：

<!-- @formatter:off -->

```ts
const a: [SomeValue(number) | NoValue] = [...NoValue];
```

<!-- @formatter:on-->

可以观察到 `NoValue` 的类型为 `[NoValue]`，通过向上转换后转换成了 `[SomeValue(number) | NoValue]` “更大”的枚举类型。

由于向上转换是十分常用的操作，所以向上转换被做成了隐式（implicit）的，即一个 variant 的向上转换是完全自动的。以下代码都是合法的：

<!-- @formatter:off -->

```ts
const a: [Foo] = Foo;
const b: [Foo | Bar] = a;
const c: [Foo | Bar | Baz] = b;
```

<!-- @formatter:on-->

### Switch

一个 variant 可以通过 switch 表达式进行值匹配。

<!-- @formatter:off -->

```ts
function f(a: [SomeValue(number) | NoValue]) {
    switch (a) {
        case SomeValue(n):
            console.log(n);
        case NoValue:
            console.log("no value");
    }
}
```

<!-- @formatter:on -->

当 switch 缺少一个标签的 case 时，会产生编译错误。

<!-- @formatter:off -->

```ts
function f(a: [SomeValue(number) | NoValue]) {
    switch (a) {
        case SomeValue(n):
            console.log(n);

        // ❌ invalid，缺少 NoValue 分支。
    }
}
```

<!-- @formatter:on -->

使用默认分支（default branch）来覆盖其他可能的情况：

<!-- @formatter:off -->

```ts
function f(a: [SomeValue(number) | NoValue]) {
    switch (a) {
        case SomeValue(n):
            console.log(n);
        default:
            console.log("no value");
    }
}
```

<!-- @formatter:on -->

## 数组类型

TODO

## Map 类型

TODO
