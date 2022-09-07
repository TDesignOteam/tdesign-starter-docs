---
title: 进入开发
spline: explain
---

### 项目结构

正如您初始化项目后可以看到，TDesign Starter 的整个项目的目录结构如下：

```bash
.
├── PROXY.md
├── README.md                         # 说明文档
├── commitlint.config.js              # commintlint 规范
├── docker                            # docker 部署配置文件
│     └── nginx.conf                    # 若开启 browerhistroy 可参考配置
├── docs
├── globals.d.ts
├── index.html                        # 主 html 文件
├── jsx.d.ts
├── mock                              # mock 目录
│     └── index.ts
├── node_modules                      # 项目依赖
├── package-lock.json
├── package.json
├── public
│     └── favicon.ico
├── .env                               # 生产环境变量
├── .env.development                  # 开发环境变量
├── shims-vue.d.ts
├── src                               # 页面代码
├── tsconfig.json
└── vite.config.js                    # vite 配置文件
```

### 页面代码结构

如上图所示，`src`目录下是页面代码，大部分情况下，您只需要增删`src`目录下的代码即可。

`src`内的结构如下所示，TDesign 推荐您在使用的过程中，遵守既有的目录结构，以规范项目代码的组织结构。

```bash
src
├── App.vue
├── assets                            # 资源层
├── components                        # 公共组件层
│     ├── breadcrumb.vue
│     ├── ...
│     └── tvision
│          └── index.vue
├── config                             # 配置层
│     ├── global.ts                      # 全局常量配置
│     ├── color.ts                      # 全局主题色彩配置
│     ├── host.ts                       # host配置
│     └── style.ts                       # 布局样式配置
├── constants
│     └── index.ts
├── layouts                            # 布局层
│     ├── setting.vue
│     ├── blank.vue
│     └── index.tsx
├── main.jsx                           # 入口逻辑文件
├── pages                              # 业务模块层
│     ├── dashboard-base                     # 一个页面组件
│     │     ├── const.ts                       # 该页面组件用到的常量
│     │     ├── index.less                     # 该页面组件的样式文件
│     │     ├── index.ts
│     │     └── index.vue
│     ├── ...
│     └── user
│           ├── index.less
│           └── index.vue
├── permission.js                           # 权限页面
├── router                                 # 路由层
│     └── index.js
├── store                                  # vuex 数据层
│     ├── index.ts
│     └── modules
│           ├── notification.ts
│           ├── setting.ts
│           └── user.ts
├── style                                 # 样式目录
│     ├── font-family.less                  # 字体文件（腾讯体W7）
│     ├── layout.less                       # 全局样式布局
│     ├── reset.less                       # 对默认样式的重置
│     └── variables.less                    # 全局样式token
└── utils                                 # 工具层
      ├── color.ts                          # 色彩工具
      ├── charts.ts                          # 图表工具
      └── request.ts                        # 请求工具

```

### 开始开发

#### 新增页面

在已有 TDesign Starter 项目中，新增页面是非常方便的。

首先，在 `./src/pages` 下，创建新页面的目录以及相关的文件。

```bash
cd src/pages && mkdir my-new-page

cd my-new-page && touch index.vue  # 可根据实际需求增加样式、变量、等文件
```

```vue
<!-- src/pages/my-new-page/index.vue -->
<templates>
  <div>
    <t-page-header>index.vue示例</t-page-header>
  </div>
</templates>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
// 如果需要导入样式
@import "./index.less";

//...
</style>
```

然后，需要在配置新页面的路由。根据具体的需求，修改 `src/router/modules` 中的文件。

```javascript
export default [
  // ...其他路由
  {
    path: "/new-page",
    title: "新页面侧边栏标题",
    component: "../layouts/td-layout.tsx",
    redirect: "/login/index",
    children: [
      {
        title: "新页面",
        path: "index",
        meta: { needLogin: false },
        component: "../pages/new-page/index.vue",
      },
    ],
  },
];
```

配置后，就可以在项目的侧边栏中找到新页面的入口了。

菜单（侧边栏和面包屑）由路由配置自动生成，根据路由变化可自动匹配，开发者无需手动处理这些逻辑。

**tip：如果您对 vue 的开发方式不是很熟悉，可以查阅 [新手知识](https://vuejs.org/)。**

#### 开发组件

当 TDesign 提供的组件不能满足您的需求的时候，您可以根据需要开发新的组件, 推荐放置在`src/component`目录下。

组件的开发方式和 **页面组件** 的开发方式类似，不过您不再需要去为它增加路由，而是在您的组件中引用即可。

首先，在 `src/components` 下新增一个组件文件，`NewComponent.vue`

```vue
<!-- 自定义组件 NewComponent.vue -->
<template>
  <div>
    <slot name="new-component" />
    <slot />
  </div>
</template>
```

然后，在页面组件中去引用这个组件

```vue
<!-- 页面组件 new-page.vue -->
<template>
  <div>
    <t-page-header>个人中心</t-page-header>
    <!-- 使用组件，在组件中的内容会替换掉组件的slot-->
    <my-component> 我插入slot组件的内容 </my-component>
  </div>
</template>
<script>
// 引入组件
import MyComponent from "@/components/new-component.vue";

export default {
  // 注册组件
  components: {
    MyComponent,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less">
// 如果需要导入样式
@import "./index.less";

//...
</style>
```

这样，一个简单的组件就可以投入使用了。

**tip 如果您对 vue 的开发方式不是很熟悉，可以查阅 [新手知识](https://vuejs.org/)。**

### 布局配置

网站布局支持空布局、侧边栏导航布局、 侧边栏布局加头部导航和头部导航等四种中后台常用布局。布局文件位于 `./src/layouts`。

使用这些布局，您只需要在 `src/router` 中配置路由的时候，将 `父级路由` 配置成相应的布局组件就可以了。示例代码如下：

```js
export default [
  {
    path: "/login",
    title: "登录页",
    component: "../layouts/blank.vue", // 这里配置成需要的布局组件
    icon: "chevron-right-rectangle",
    redirect: "/login/index",
    children: [
      {
        title: "登录中心",
        path: "index",
        meta: { needLogin: false },
        component: "../pages/login/index.vue",
      },
    ],
  },
];
```

如果项目内置的布局不能满足您的需求，您也可以自己实现定制化布局，推荐使用 [TDesign UI layout](http://tdesign.tencent.com/vue/components/layout)
