# 安装与上手

## 创建目录

RowScript 完全拥抱 npm 生态，因此只需使用 `npm init` 命令初始化项目即可。

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

完成！

* 不需要 `config.json` 或其他文件
* 无需向 `package.json` 文件添加新字段以免影响其结构

所有的默认配置均适用，无需额外调整。

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
