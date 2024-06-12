# 概述

RowScript 是一种新的 JavaScript 方言，旨在大大改善两类 web 开发者的使用体验：

* **应用程序开发者**：开发者应该使用强大的工具、框架和灵活的类型系统来编写他们的应用程序
* **库开发者**：开发者应该能够以较少的 [类型体操] 来编写他们的库，这些类型体操通常是杂乱无章且晦涩难懂的

通过使用 RowScript 的工具和类型系统，允许您编写更具可扩展性和足以胜任各种任务的代码。

除此之外，RowScript 还包含了许多保守同时又激进的语言特性。总结成一句话就是：

:::tip

RowScript：“完成 TypeScript 没法做的事，砍掉 JavaScript 不必要的特性。”

:::

[类型体操]: https://github.com/type-challenges/type-challenges

## 新语言，旧语法

RowScript 虽然是一门新的语言，但是它使用了大量的 JavaScript/TypeScript 语法，极大地降低了用户的学习负担。

即使是 JS/TS 中没有的语言特性，RowScript 同样重新利用了许多 JS/TS 的关键词和部分语法，使新的特性看起来相对不那么生涩。

例如，RowScript 中关于接口（interface）的语法：

<!-- @formatter:off -->

```ts
interface ToString {
    toString(v: ToString): string;
}

function getString<T>(n: T): string
where T instanceof ToString
{
    n.toString()
}
```

<!-- @formatter:on -->

新的用户也能很快地猜到，函数 `getString` 要求接收一个类型 `T`，并且要求 `T` 实现了接口
`ToString`，使得函数内部可使用 `toString` 对 `n` 进行字符串转换。

## JS 对象、类、函数

JS 中的对象（object）、类（class）和函数（function）往往会产生使用上的分歧。

用户可以用对象的风格封装数据与方法。

```js
const a = {
    n: 42,
    getN() {
        return this.n;
    }
};
```

最原始的函数风格，也是一种选择。

```js
function B(n) {
    this.n = n;
    this.getN = function () {
        return this.n;
    }
}

const b = new B(42);
```

较新的类的方式，是另一种新的选择。

```js
class C {
    constructor(n) {
        this.n = n;
    }

    getN() {
        return this.n;
    }
}

const c = new C(42);
```

但是这三者都有各自的细微不同，不能轻易的互换，更不可能在 JS 层面得到很好的统一。

RowScript 中支持对象和类，但两者在生成出来的 JavaScript 代码中只是简单的对象，没有其他任何添加剂。

```ts
class D {
    n: number;

    getN(): number {
        this.n
    }
}

const d = new D(42);
```

编译后的 JS 代码：

```js
const d = {n: 42};
```

## Void、Null、Undefined、Never、Any、Unknown

JS/TS 中有许许多多令人匪夷所思的类型：

* `void`
* `null`
* `undefined`
* `never`
* `any`
* `unknown`

而在 RowScript 中，这些类型由以下两个特性达成了统一：

* `unit` 类型：统一 `void`、`null`、`undefined` 和 `never`（相信我，在用户层面，用户并不需要关心 `never` 类型）
* 带有类型擦除（type erasure）的泛型：取代 `any` 和 `unknown`

举个例子，TypeScript 中的 `any` 可能出现在程序的边界中：

```ts
declare function foo(v: any);
```

在 RowScript 中，使用泛型函数即可：

```ts
function foo<T>(v: T);
```

在代码生成阶段，泛型 `T` 会被自动擦除。

## JS/TS 令人痛苦的 union 类型

在 TypeScript 中 *narrow* 一个 union 类型通常是很痛苦的事情，这是因为你总需要引入奇怪的分支判断：

```ts
function printId(id: number | string) {
    if (typeof id === "string") {
        console.log("Phew, it's a string...");
    }
}
```

那如果假设在编译期间还是无法判断 `id` 的具体类型呢？那么我们又要开始手工制造一个有标签（tagged）的 union 类型：

```ts
type StringID = {
    str: string;
    type: "string_id";
}

type NumberID = Omit<StringID, "type"> & {
    n: number;
    type: "number_id";
}

type ID = StringID | NumberID;
```

此时你会意识到，虽然 TS 已经提供了所谓的实用类型（utility types）降低了一些噪音，但是 `Omit`、不成文的 `type`
成员作为规范、手动将小写的类型名字作为标签等等，过度的模板代码（boilerplate）依旧存在。

在 RowScript 中，枚举（enum）类型很好地解决了这个问题：

<!-- @formatter:off -->

```ts
type ID = [ StringID(string) | NumberID(number) ];
```

<!-- @formatter:on -->

RowScript 的枚举类型和 PureScript、Elm、Haskell 等函数式编程语言中的 ADT（algebraic data types）稍有不同，和 Rust
的枚举类型也有差异，可在后续章节中深入探索枚举类型。

## JS/TS 对可变参数缺少类型支持

JS 中最常用的函数莫过于 `console.log`，但是这一函数在 TS 中有着令人尴尬的类型：

```ts
declare function log(...data: any[]): void;
```

虽然 TS 中拥有 [可变元组类型（variadic tuples）]，但这个类型没法和可变参数（variadic）产生互动。

在 RowScript 中，可变参数通过泛型来实现，但是有一定的功能限制。RowScript 中的 `console.log` 类型：

```ts
function log<Args>(...: Args);
```

[可变元组类型（variadic tuples）]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types

## 更多语言特性

除此之外，RowScript 还提供了如同行多态（row polymorphism）、静态反射（static reflection）、操作符重载、副作用类型（effect
types）等等十分时髦的新特性，跟着这本指南继续往下探索吧！
