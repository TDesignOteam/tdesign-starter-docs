---
title: 进行个性化配置
spline: config
---

### 个性化配置

TDesign Starter 内置了配置面板，可以通过右上角的图标打开。
<img src="https://tdesign.gtimg.com/starter/starter-config.png" style="border-radius:6px;border: 1px solid var(--component-border);"/>

个性化配置的功能，有两种使用方式

1. 您可以把它作为您项目的一部分，原封不动地提供给您的用户使用；

2. 您也可以在我们的 demo 中上进行配置，将新的配置文件复制到您的项目中的`src/config/style`中作为您的配置，并把右上角的配置能力相关的代码从项目代码中删除。作为项目的配置，默认配置如下：

```json
{
  "showFooter": true, // 是否展示Footer
  "isSidebarCompact": false, // 是否固定sideBar
  "showBreadcrumb": false, // 是否展示面包屑
  "mode": "light", // 主题模式
  "layout": "side", // 导航布局
  "splitMenu": false, // 是否分割菜单
  "isSidebarFixed": true, // 侧边是否固定
  "isHeaderFixed": true, // 头部是否固定
  "isUseTabsRouter": false, // 是否使用多标签页功能
  "showHeader": true, // 是否分割菜单
  "brandTheme": "default" // 主题色
}
```

在配置中，我们内置提供了多种配置，包括`主题模式`、`主题色`、`导航布局`以及`各类元素开关`。

### 主题模式与主题色

我们会根据您选择的主题模式（亮色或暗色）和主题色，计算出当前的配色色阶，并全局应用到 TDesign 的组件中，这里主要借助了 TDesign 自身的 CSS Token 色彩变量的能力和[tvision-color](https://www.npmjs.com/package/tvision-color)来计算色阶中的具体颜色。

### 导航布局

TDesign Starter 默认提供了三种布局模式，分别是`侧边栏导航布局`、` 侧边栏布局加头部导航`和`头部导航`。

### 元素开关配置

TDesign Starter 也提供了多种元素开关，包括`footer`、`breadcrumb`、`header`、`多标签Tab页功能`，都可以自由配置是否开启。

以`多标签Tab页`为例，在 TDesign Starer 的整体设计中，由于展示需要，默认是关闭的。所以如果您的项目中对多标签 Tab 页有比较强的使用需求，可以自行将`isUseTabsRouter` 默认设置为 true，项目默认会开启多标签 Tab 页功能。

<img src="https://tdesign.gtimg.com/starter/starter-router.png" style="border-radius:6px;border: 1px solid var(--component-border);"/>
