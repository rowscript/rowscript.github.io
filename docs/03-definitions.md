# 定义

类似 JavaScript，一个 RowScript 程序的顶部包含任意数量的定义（definitions）。

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
