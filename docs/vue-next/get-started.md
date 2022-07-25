---
title: 快速开始
spline: explain
---

### 初始化项目

为了方便您快速开始使用 TDesign Starter 开发您的项目，TDesign 提供了一个脚手架 [tdesign-starter-cli](https://www.npmjs.com/package/tdesign-starter-cli)，方便您通过它来初始化项目。在安装脚手架之前，请确保您已经拥有`node`与`npm`的开发环境。

安装`tdesign-starter-cli`

```bash
npm i tdesign-starter-cli -g
```

创建项目

```bash
td-starter init
```

<img src="https://tdesign.gtimg.com/starter/starter-cli.png" style="border-radius:6px;border: 1px solid var(--component-border);"/>

### 启动项目

安装依赖

```bash
npm install
```

运行项目

```bash
# Mac OS or Windows
npm run dev

# Linux
npm run dev:linux
```

`npm` 本身是跨平台的，这两条命令的区别在于启动 DevServer 时，是否主动在浏览器打开相应的页面。

**tip: 如启动失败，请通过 `node -v` 检查 Node 版本是否在 14.0.0 以上。**

执行成功后，打开浏览器，您会拥有一个基于 TDesign ，提供了内置多种页面和配置的中后台系统。

<img src="https://tdesign.gtimg.com/starter/starter.png" width="800" style="border-radius:6px;border: 1px solid var(--component-border);"/>

### 环境介绍

| [<img src="https://tdesign.gtimg.com/docs/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> IE / Edge | [<img src="https://tdesign.gtimg.com/docs/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://tdesign.gtimg.com/docs/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://tdesign.gtimg.com/docs/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari |
| --- | --- | --- | --- |
| Edge >=84 | Firefox >=83 | Chrome >=84 | Safari >=14.1 |
                                                                         

### 新手知识

[Vue](https://cn.vuejs.org/)

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

[Vue Router](https://router.vuejs.org/zh/)

项目使用Vue Router进行路由管理。
Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。

[Pinia](https://pinia.vuejs.org/)

项目使用Pinia进行全局的状态管理。
Pinia 是由vue.js官方成员重新设计的新一代状态管理器，开发者可以使用Pinia提供的各类基于Composition API的封装，更方便地在vue的项目中进行状态管理。
