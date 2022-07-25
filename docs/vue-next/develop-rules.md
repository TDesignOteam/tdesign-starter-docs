---
title: 开发规范
spline: explain
---

为了维护项目的代码质量，项目中内置了格式化代码的工具 `Prettier` 和代码检测质量检查工具 `ESlint`。

同时，也推荐您在开发过程中遵循  提交规范，以保持项目仓库的分支、提交信息的清晰整洁。

### 代码编写规范

#### [Prettier](https://prettier.io/)

如果您希望项目中的代码都符合统一的格式，推荐您在 VS Code 中安装 `Prettier` 插件。它可以帮助您在每次保存时自动化格式化代码。

在脚手架搭建好的项目中，已经内置了符合 TDesign 开发规范的 `.prettierrc.js` 文件。您只需要安装 `Prettier` 插件，即可使用代码自动格式化的功能。

#### [ESlint](https://eslint.org/)

`ESlint`可以用来检查代码质量和风格问题。

在脚手架搭建好的项目中，也已经内置了 `.eslintrc` 文件。您可以通过下面命令来进行代码检查和自动修复。

执行以下指令，会进行问题的检查及修复，在 pre-commit 的 git hook 中，项目也内置了检查指令，帮助您在提交代码前发现问题。

```bash
# 代码检查
npm run lint

# 自动修复问题
npm run lint:fix
```

### 目录的命名规范

1.目录名全部使用小写，`kebab-case`形式命名，如果需要有多个单词表达，使用中划线连接。如`new-page`、`components`。

### 文件的命名规范

1.文件名全部使用小写，`kebab-case`形式命名。如`td-layout.tsx`、 `td-header.tsx`。

2.引导型特殊文件、样式及资源目录文件除外,如 `index.ts`、 `main.ts`、`index.vue`。

### 类及接口的命名规范

1.类名全部使用大写驼峰，同时命名跟回文件命名。

2.接口命名以大写 `I` 开头，代表 interface。如`IOption`。

### 分支规范

- 主干分支 -- `develop`
- 功能分支 -- `feature`
- 修复分支 -- `hotfix`

`develop`分支只接受通过 Merge Request 合入功能分支。

为保证提交的记录干净整洁，其他分支合入之前需要先 `rebase` develop 分支。

**分支命名规则**：`feature/20210401_功能名称`。

### commit 规范

推荐使用 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 规范作为您的 commit message 的格式。

同时，当项目是协同开发时，推荐在项目中或者在持续集成的过程中，配置 [commit-lint](https://github.com/conventional-changelog/commitlint) 做 commit message 的检查，以约束协同开发者的 commit 遵守规范。

**tips:如果不熟悉 Conventional Commits 的规范，可以使用 [commitizen](https://github.com/commitizen/cz-cli) 小工具来辅助生成 commit message。**
