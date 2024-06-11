# 安装与上手

## 创建工作文件夹

RowScript 采用 `npm` 生态系统，因此只需使用 `npm init` 命令即可。

```bash
mkdir demo/
cd demo/
npm init
```

## 安装 RowScript

执行以下命令：

```bash
npm install -D rowscript
```

这样就完成了！

* 不需要 `config.json` 或其他文件
* 无需向 `package.json` 文件添加新字段以免影响其结构

它的运行就是如此简洁，所有的默认配置均适用，无需额外调整。

## 你好... 世界?

创建一个名为 `hello.rows` 的文件，内容为：

```ts
console.log("Hello, world!");
```

运行编译器：

```bash
npx rowscript
```

生成的 JavaScript 代码将出现在一个子目录 `./dist/` 中。

用 `node` 运行它：

```bash
$ node ./dist/index.mjs
Hello, world!
```

啊哈，你只用了 5 分钟就掌握了这门语言 ⏰！
