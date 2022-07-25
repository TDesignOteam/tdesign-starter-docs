# TDesign Starter 文档的开发指南

## 写作前准备

```sh
# 拉取远程文档仓库

git clone git@github.com:TDesignOteam/tdesign-starter-docs.git

# 基于 master 创建个人分支

git checkout -b feature/my-branch-name

# 安装依赖包

npm i

# 启动服务器

npm run dev

# 可以开始写作了，enjoy！
```

## 写作步骤

### 一、创建 Markdown 文件

```sh
touch docs/get-started.md
```

### 二、将你的文档添加到左侧菜单栏（可选）

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

写作完成后，请提 MR（合入 `master`）给其他同学审查。

MR 通过后，CI 会自动将文档发布上线。
