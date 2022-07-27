---
title: 路由与菜单
spline: router-menu
---

路由与菜单的管理，是前端项目中非常重要的一部分。

为了减少开发配置和理解成本，在 TDesign Starter 项目中，管理菜单路由都规范在`src/router` 这个目录下进行配置。

**tips: 通常情况下不需要去理解和修改`index.ts`, 只需要在`modules`目录下增删文件，即可自动添加更新路由**

配置内容是一个对应菜单层级的可嵌套的数组，如

```js
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
        component: () => import("@/pages/list/base/index.vue"),
        meta: { title: "基础列表页", orderNo: 0 },
      },
      {
        path: "card",
        name: "ListCard",
        component: () => import("@/pages/list/card/index.vue"),
        meta: { title: "卡片列表页", hiddenBreadcrumb: true },
      },
      {
        path: "filter",
        name: "ListFilter",
        component: () => import("@/pages/list/filter/index.vue"),
        meta: { title: "筛选列表页" },
      },
      {
        path: "tree",
        name: "ListTree",
        component: () => import("@/pages/list/tree/index.vue"),
        meta: { title: "树状筛选列表页" },
      },
    ],
  },
];
```

数组中每个配置字段都有具体的作用：

- `path` 是当前路由的路径，会与配置中的父级节点的 path 组成该页面路由的最终路径；如果需要跳转外部链接，可以将`path`设置为 http 协议开头的路径。
- `name` 影响多标签 Tab 页的 keep-alive 的能力
- `component` 渲染该路由时使用的页面组件
- `redirect` 重定向的路径
- `meta` 主要用途是路由在菜单上展示的效果的配置
  - `meta.title` 该路由在菜单上展示的标题
  - `meta.icon` 该路由在菜单上展示的图标
  - `meta.orderNo` 该路由在菜单上展示先后顺序，数字越小越靠前，默认为零
  - `meta.hidden` 决定该路由是否在菜单上进行展示
  - `meta.hiddenBreadcrumb` 如果启用了面包屑，决定该路由是否在面包屑上进行展示
  - `meta.single` 如果是多级菜单且只存在一个节点，想在菜单上只展示一级节点，可以使用该配置。_请注意该配置需配置在父节点_
- `children` 子菜单的配置

由于 TDesign 菜单的限制，最多只允许配置到`三级菜单`。如果菜单层级超过三级，我们建议梳理业务场景，判断层级是否合理。

由于设计美观需要，官网示例只展示了二级菜单，如果存在三级的配置需求，可以参考以下的代码进行配置：

**tips: 务必注意，三级菜单需要在二级菜单中的组件包含`<router-view>`标签才能正常显示，[详情](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)**
```js
{
 path: '/menu',
 name: 'menu',
 component: Layout,
 meta: { title: '一级菜单', icon: 'menu-fold' },
 children: [
    {
      path: 'second',
      meta: { title: '二级菜单' },
      component: () => import('@/layouts/blank.vue'),
      children: [
           {
             path: 'third',
             name: 'NestMenu',
             component: () => import('@/pages/nest-menu/index.vue'),
             meta: { title: '三级菜单' },
           },
      ],
    },
  ],
},
```
