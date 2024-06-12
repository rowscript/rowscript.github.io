# 定义

类似 JavaScript，一个 RowScript 程序的顶部（top level）包含任意数量的定义（definitions）。

## 常量定义

常量可使用 `const` 关键词来定义：

```ts
const a = 42;
```

也可以不使用任何名字绑定任意的表达式，如：

```ts
42;
```

这长得像是 JavaScript 中一般的语句（statement），但是实际上它只是以下结构的语法糖：

```ts
const _ = 42;
```

注意，在程序的顶部是不允许使用 `let` 定义的，也就是说，全局可变的定义是不支持的：

```ts
let a = 42; // ❌ invalid

// 可将可变状态封装在一个全局对象中。
const states = { // ✅ okay
    a: 42
};
```

## 函数定义

RowScript 中的函数定义（functions）与 JS/TS 相似。

```ts
function f() {
}
```

你需要明确指定函数定义的返回类型，如果不明确指定返回类型，将不会进行任何类型推断，而是认为函数返回的是 `unit` 类型。

```ts
function f0() { // ❌ invalid
    42
}

function f1(): number { // ✅ okay
    42
}
```

用户不需要在函数的最后加上 `return` 语句。如果省略返回值，系统自动将其视为 `unit` 类型。

```ts
function f0(): number {
    42
}

function f1(): unit {
    const n = f0();
}
```

### 函数类型和表达式

可以使用 *箭头函数* 创建函数表达式，这与 TypeScript 中的非常相似。

```ts
const f: (x: number) => number = x => x;
```

### 泛型函数

函数定义可以是泛型的，如同 TypeScript。

```ts
function id<T>(x: T): T {
    x
}
```

另见泛型相关的高级用法（TODO）。

## 类型别名

类型别名（type alias）用于创建某个类型的“别名”，和 TypeScript 相似。

```ts
type ID = number;

type Person<T> = {
    id: ID,
    data: T
};
```

注意类型别名会让报错信息变得复杂，因为类型别名会在报错展示中 **默认展开定义**。并且别名类型可能会因为原始类型过度的能力而失去抽象的正确性，举个例子，对于
`ID` 类型来说以下功能应该是没有任何意义的，但是因为 `number` 的能力而导致了抽象的错误。

```ts
type ID = number;

const a: ID = 114;
const b: ID = 514;
const c = a + b; // ID 的相加并无实际意义
```

## 外部声明

JS 的全局环境往往是复杂多变的，在 `globalThis` 或 `window` 中往往可能有一些普遍可用的函数定义（例如 jQuery 的
`$`）。我们可以使用外部声明（postulate）来定义已经存在的外部结构。通常这又叫做 FFI（foreign function interface）。

### 外部函数

外部函数（function postulate）用于定义外部已经存在的函数：

```ts
function foo();
```

虽然语法和 TypeScript 类似，但用户并不需要额外的 `.d.ts` 文件，也不需要 `declare` 关键字。

### 外部类型

外部类型（type postulate）用于定义外部已经存在的类型：

```ts
type Foo;
```

## 类定义

见 TODO。

## 接口定义

见 TODO。
