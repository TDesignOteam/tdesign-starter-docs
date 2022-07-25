---
title: 路由与菜单
spline: router-menu
---

路由与菜单的管理，是前端项目中非常重要的一部分。

为了减少开发配置和理解成本，在 TDesign Starter 项目中，管理菜单路由都规范在`src/router` 这个目录下进行配置。

配置内容是一个对应菜单层级的可嵌套的数组，如

```js
import { lazy } from "react";
[
  {
    path: "/list",
    name: "list",
    component: Layout,
    redirect: "/list/base",
    meta: { title: "列表页", icon: ListIcon },
    children: [
      {
        path: "base",
        name: "ListBase",
        component: lazy(() => import("@/pages/list/base/index.vue")),
        meta: { title: "基础列表页" },
      },
      {
        path: "card",
        name: "ListCard",
        component: lazy(() => import("@/pages/list/card/index.vue")),
        meta: { title: "卡片列表页" },
      },
      {
        path: "filter",
        name: "ListFilter",
        component: lazy(() => import("@/pages/list/filter/index.vue")),
        meta: { title: "筛选列表页" },
      },
      {
        path: "tree",
        name: "ListTree",
        component: lazy(() => import("@/pages/list/tree/index.vue")),
        meta: { title: "树状筛选列表页" },
      },
    ],
  },
];
```

数组中每个配置字段都有具体的作用：

- `path` 是当前路由的路径，会与配置中的父级节点的 path 组成该页面路由的最终路径
- `name` 影响多标签 Tab 页的 keep-alive 的能力
- `component` 渲染该路由时使用的页面组件
- `redirect` 重定向的路径
- `meta` 主要用途是路由在菜单上展示的效果的配置
  - `meta.title` 该路由在菜单上展示的标题
  - `meta.icon` 该路由在菜单上展示的图标
  - `meta.hidden` 决定该路由是否在菜单上进行展示
  - `meta.single` 如果是多级菜单且只存在一个节点，想在菜单上只展示一级节点，可以使用该配置。_请注意该配置需配置在父节点_
- `children` 子菜单的配置
