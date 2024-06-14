# 控制结构

控制结构（control）提供了函数提前返回（early return）、循环退出（break）和继续（continue）等带有明显流程控制的特性。

需要注意的是，控制结构只能在以下位置使用：

* 函数定义
* 类方法定义
* 实例方法定义

**无法在以下情况使用**：

* Lambda 表达式语句块
* Try 语句块

这是因为 RowScript 是一个相对推荐表达式（expression-first）的语言，用户可以将 lambda 表达式语句块、try
语句块封装成额外的函数定义，而不推荐将这些细微的结构因为控制结构变得臃肿。哦对了，事实上实现起来也比较困难 🤪。

## If

If 语句又叫做守卫（guard）语句，提供了简单的 `if` 和 `else` 分支，并且用户能在分支中使用 `return` 退出函数。

```ts
function f(): number {
    if (true) {
        console.log("ok");
    } else {
        return 42
    }

    1 + 1
}
```

用户可省略 `else` 分支：

```ts
function f(): number {
    if (true) {
        return 42
    }

    1 + 1
}
```

## Fori

Fori 循环类似 JavaScript，是最常见的循环结构之一：

```ts
function f(): number {
    for (let i = 0; i < 10; i = i + 1) {
        console.log(i);

        if (false) {
            break;
        }

        if (true) {
            continue;
        }

        return 42
    }

    1 + 1
}
```

之所以叫做“fori”这个名字，是因为 `i` 通常作为循环变量的名称，并且 `fori` 是许多 IDE 或编辑器的代码模板关键词。

## Forof

Forof 循环同样类似 JavaScript，如果一个结构符合 [迭代协议]，那么 forof 循环可以用于迭代一个结构的成员：

```ts
function f() {
    const a = [1, 2, 3];
    for (const x of a) {
        console.log(x);
    }
}
```

Forof 循环中同样可以使用 `break`、`continue`、`return` 语句。 实际上，forof 循环是 fori 循环的语法糖，以上的代码等同于：

```ts
function f() {
    const a = [1, 2, 3];
    const it = a.iter();
    for (const r = it.next(); r.isOk(); r = it.next()) {
        const x = r.unwrap();
        console.log(x);
    }
}
```

[迭代协议]: ./iterator

## While

While 循环同样类似 JavaScript，while 循环中也可以使用 `break`、`continue`、`return` 语句：

```ts
function f() {
    while (true) {
        console.log("okay");
    }
}
```
