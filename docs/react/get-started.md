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

**tip: 如启动失败，请通过 `node -v` 检查 Node 版本是否在 16+ 以上。**

执行成功后，打开浏览器，您会拥有一个基于 TDesign ，提供了内置多种页面和配置的中后台系统。

<img src="https://tdesign.gtimg.com/starter/starter.png" width="800" style="border-radius:6px;border: 1px solid var(--component-border);"/>

### 环境介绍

| [<img src="https://tdesign.gtimg.com/docs/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://tdesign.gtimg.com/docs/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://tdesign.gtimg.com/docs/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari |
| --- | --- | --- | --- |
| Edge >=84 | Firefox >=83 | Chrome >=84 | Safari >=14.1 |
                                                                         
