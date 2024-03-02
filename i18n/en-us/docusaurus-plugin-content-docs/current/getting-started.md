---
sidebar_position: 2
---

# Getting Started

## Create a Workspace

RowScript adopts `npm` ecosystem, so `npm init` is all you need.

```bash
mkdir demo/
cd demo/
npm init
```

## Install RowScript

Run the following command:

```bash
npm install -D rowscript
```

And, that's it!

* No `*config.json` or other files needed
* No new fields should be added to `package.json` file to mess up its schema

It just works, default configurations are all fine.

## Hello... World?

Create a file called `hello.rows`:

```ts
import console;

console::log("Hello, world!");
```

Run the compiler:

```bash
npx rowscript
```

And the generated JS code would show up at a subdirectory `./dist/`.

Run it with `node`:

```bash
$ node ./dist/index.mjs
Hello, world!
```

Ah ha, you just mastered this language in 5 minutes ⏰!
