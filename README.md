<p style="display:flex; justify-content: center">

</p>
<p align="center">
  <a href="https://tdesign.tencent.com/starter/react/#/dashboard/base" target="_blank">
    <img alt="TDesign Logo" width="200" src="https://tdesign.gtimg.com/starter/brand-logo.svg">
  </a>
</p>

<p align="center">
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatility"></a>
  <a href="https://github.com/Tencent/tdesign-react-starter/blob/develop/LICENSE">
    <img src="https://img.shields.io/npm/l/tdesign-react.svg?sanitize=true" alt="License">
  </a>
</p>

### 项目简介

TDesign Starter Docs 是一个 TDesign Starter 系列项目的文档仓库，TDesign Starter 官网文档所呈现的内容来自 TDesign Starter Docs。

## 启动项目

```sh
npm i

npm run dev

```

## 修改文档

如果只是对现有文档进行改动，请修改 docs 目录下对应的文件内容即可。

## 补充文档

如果是补充新文档 则需要创建新的 Markdown 文件 并将文档添加到菜单栏。

### 创建 Markdown 文件

```sh
touch docs/get-started.md
```

### 将你的文档添加到菜单栏

打开 `site/config.js` 文件，修改 export 的对象即可。比如，

```js
module.exports = {
  docs: [
    {
      title: "上手",
      type: "quick-start", // 普通文档
      children: [
        {
          title: "快速开始",
          name: "get-started",
          path: "/starter/docs/get-started",
          component: () => import("@docs/get-started.md"),
        },
      ],
    },
  ],
};
```

> 感谢参与贡献！
>
> 为保持内容排版的一致性，请在开始前，参阅[中文排版规范](https://github.com/sparanoid/chinese-copywriting-guidelines)。

## 静态资源

图片等静态资源存放在 `./assets/` 目录中，之后在 Markdown 文件中通过相对路径引用即可。比如，

```md
<!-- my-doc.md -->

![demo](./assets/images/demo.jpg)
```

## 提交内容

完成后，请提 PR（合入 `develop`）进行文档内容的审查。
