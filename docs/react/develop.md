---
title: 进入开发
spline: explain
---

### 项目结构

正如您初始化项目后可以看到，TDesign Starter 的整个项目的目录结构如下：

```bash
.
├── README.md                         # 说明文档
├── commitlint.config.js              # commintlint 规范
├── docs
├── index.html                        # 主 html 文件
├── mock                              # mock 目录
│     └── index.ts
├── node_modules                      # 项目依赖
├── package-lock.json
├── package.json
├── public
│     └── favicon.ico
├── src                               # 页面代码
├── tsconfig.json
└── vite.config.js                    # vite 配置文件
```

### 页面代码结构

如上图所示，`src`目录下是页面代码，大部分情况下，您只需要增删`src`目录下的代码即可。

`src`内的结构如下所示，TDesign 推荐您在使用的过程中，遵守既有的目录结构，以规范项目代码的组织结构。

```bash
src
├── assets                            # 资源层
├── components                        # 公共组件层
├── config                             # 配置层
│     ├── host.ts                      # 全局host配置
│     └──color.ts                       # 全局主题色彩配置
│
├── layouts                            # 布局层
├── services                           # 接口模型
├── types                              # 类型文件
├── main.tsx                           # 入口逻辑文件
├── pages                              # 业务模块层
│     ├── Board                   # 一个页面组件
│     │     ├── index.module.less             # 该页面组件的样式文件
│     │     └── index.tsx
│     └── ...
├── modules                                  # redux 数据层
│     ├── index.ts
│     └── global
│           └── index.ts
├── style                                 # 样式目录
│     └── index.less
└── utils                                 # 工具层
      └── request.ts                        # 请求工具

```

### 开始开发

#### 新增页面

在已有 TDesign React Starter 项目中，新增页面是非常方便的。

首先，在 `./src/pages` 下，创建新页面的目录以及相关的文件。

```bash
cd src/pages/ && mkdir NewPage

cd NewPage && touch index.tsx  # 可根据实际需求增加样式、变量、等文件
```

在 `index.tsx` 中增加组件代码，如下

```jsx
import React from "react";

const NewPage = () => (
  <>
    <div>...</div>
    <div>...</div>
  </>
);

export default React.memo(NewPage);
```

然后，需要在配置新页面的路由。首先修改 `src/config/router` 中的文件，注册新页面。

```js
import NewPage from "pages/NewPage";

export default [
  // ...其他路由
  {
    path: "/newPage",
    Component: NewPage,
  },
];
```

然后，在 menu 中增加该路由。修改 `src/config/menu` 新增该页面，如果不需要在菜单中展示 这一步可以跳过。

```js
import NewPage from "pages/NewPage";

export default [
  // ...其他菜单项
  {
    key: "pageKey",
    path: "/newPage",
    label: "新增页面",
    Icon: ViewModuleIcon,
  },
];
```

配置后，就可以在项目的侧边栏中找到新页面的入口了。

**tip：如果您对 react 的开发方式不是很熟悉，可以查阅 [新手知识](https://zh-hans.react.dev/)。**

#### 开发组件

当 TDesign 提供的组件不能满足您的需求的时候，您可以根据需要开发新的组件, 如果是公共组件，推荐放置在`src/component`目录下。

组件的开发方式和 **页面组件** 的开发方式类似，不过您不再需要去为它增加路由，而是在您的页面组件中引用即可。

首先，在 `src/components` 下新增一个组件文件，`NewComponent.tsx`

```jsx
import React, { useState } from "react";

export default function NewComponent() {
  const [stateA, setStateA] = useState(1);

  return <div>{stateA}</div>;
}
```

然后，在页面组件中去引入组件

```jsx
import React, { useState } from "react";
// 引入组件
import NewComponent from "components/NewComponent";

const NewPage = () => (
  <div>
    <NewComponent />
  </div>
);

export default React.memo(NewPage);
```

这样，一个简单的组件就可以投入使用了。

**tip 如果您对 react 的开发方式不是很熟悉，可以查阅 [新手知识](https://zh-hans.react.dev/)。**

### 布局配置

网站布局支持空布局、侧边栏导航布局、 侧边栏布局加头部导航和头部导航等四种中后台常用布局。布局文件位于 `./src/layouts`。

```

如果项目内置的布局不能满足您的需求，您也可以自己实现定制化布局，推荐使用 [TDesign UI layout](http://tdesign.tencent.com/react/components/layout)
```
