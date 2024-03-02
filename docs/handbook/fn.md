---
sidebar_position: 2
---

# 函数

## 函数定义

RowScript 中的函数定义与 JavaScript / TypeScript 中的类似。

```ts
function f() {
    return
}
```

用户需要在函数的最后加上 `return` 语句，这个关键字虽然略显多余，但却是必须的，以明确函数的返回类型。如果省略返回值和类型，系统将自动将其视为 `unit` 类型。

```ts
function f(): unit {
    return ()
}
```

你需要明确指定函数定义的返回类型，如果不明确指定返回类型，将不会进行任何类型推断。

```ts
function f0() { // ❌ invalid
    return 42
}

function f1(): number { // ✅ okay
    return 42
}
```

## 函数类型和表达式

可以使用 *箭头函数* 创建函数表达式，这与 TypeScript 中的非常相似。但是，函数的类型使用不同的箭头符号 -> 来与函数表达式区分开来。

```plaintext
const f: (x: number) -> number = x => x;
```

## 泛型函数

函数定义可以是泛型的，如同 TypeScript。

```ts
function id<T>(x: T): T {
    return x
}
```
