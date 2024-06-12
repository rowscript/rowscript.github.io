# 局部绑定

在此，我们讨论函数中能够定义的局部绑定（local bindings）。

## 不可变绑定

函数中的不可变（immutable）绑定使用 `const` 关键字进行声明。又称为局部常量（local constant）。

```ts
function f() {
    const a = 42;
}
```

## 可变绑定

函数中的可变（mutable）绑定使用 `let` 关键字进行声明。又称为局部变量（local variable）。后续的表达式中，可以对局部声明的可变绑定进行修改。

```ts
function f() {
    let a = 42;
    a = 69;
}
```

## 无绑定

任意的表达式也可以不用绑定来直接使用。

### Unit 类型无绑定

如果一个表达式的类型是 `unit`，那么它可以直接像一个 JavaScript 语句来使用。

```ts
function f0() {
}

function f1(): number {
    42
}

function main() {
    f0(); // ✅ okay
    f1(); // ❌ invalid，表达式类型是 number
}
```

### 非 unit 类型无绑定

如上一个例子中的 `f1`，函数返回类型为 `number`，非 `unit` 类型的无绑定需要写成：

```ts
function main() {
    _ = f1();
}
```

这是因为，`_ = expr;` 的语法能够起到提醒读者此处函数返回值显式忽略的效果。
