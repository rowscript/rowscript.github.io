---
sidebar_position: 2
---

# Functions

## Function Definitions

Function definitions in RowScript look similar to ones in JavaScript/TypeScript.

```ts
function f() {
    return
}
```

Users need to write `return` as the last expression of the function, a slightly noisy but necessary keyword to indicate
what to return. If the return value and type are omitted, they are desugared into a unit value and the unit type.

```ts
function f(): unit {
    return ()
}
```

However, you need to explicitly specify the return type of the function definition, omitting it will not bring in any
type inference.

```ts
function f0() { // ❌ invalid
    return 42
}

function f1(): number { // ✅ okay
    return 42
}
```

## Function Types and Expressions

Function expressions could be created using *arrow functions*, quite like the ones in TypeScript. But the type of
functions adopt a different arrow symbol `->` to disambiguate itself from function expressions.

```plaintext
const f: (x: number) -> number = x => x;
```

## Generic Functions

Function definitions could be generic, as in TypeScript.

```ts
function id<T>(x: T): T {
    return x
}
```
