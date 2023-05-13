---
title: 权限控制
spline: permission-control
---

许多系统需要通过权限，控制用户有哪些权限访问部分菜单和路由，常见的控制权限的方式有`后端权限控制`和`前端权限控制`。

### 后端权限控制

在 TDesign Vue Next Starter 0.7.0 版本开始，我们将默认权限控制的方式统一为`后端权限控制`。

通过后端权限控制，可以达到更细颗粒度的权限控制，包括图标、顺序、菜单命名等细节。

使用后端权限控制，需要后端配合一个菜单请求的接口，根据用户身份信息，返回具体的序列化后的菜单列表，模板会将它转换为路由和菜单。
由于是序列化的菜单列表，与[路由与菜单](./router-menu)章节相比，需要在返回的菜单接口中将几个非序列化的字段进行序列化。

- `component` 字段：
  - 非具体页面路由，默认提供了`LAYOUT`、`BLANK`和`IFRAME`
  - 具体页面路由，请设置为对应页面在项目中的相对路径，如基础列表页对应的是`/list/base/index`
- `meta.icon` 字段：请直接使用 TDesign 的 icon 的中划线命名，如`view-list`，所有图标可以在 [TDesign 图标列表](https://tdesign.tencent.com/vue/components/icon#%E5%85%A8%E9%83%A8%E5%9B%BE%E6%A0%87) 中找到。
  
  **tips:此处图标的序列化是借助了 vite 3+ 的能力引入 node_modules 中的第三方包，会根据 name 引入对应的包内的图标 不会发起网络请求。**

序列化后的菜单列表示例如下所示，或可以参考此接口进行返回 👉🏻 [请求菜单列表](https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/get-menu-list)

```javascript
[
  {
    path: "/list",
    name: "list",
    component: "LAYOUT",
    redirect: "/list/base",
    meta: {
      title: "列表页",
      icon: "view-list",
    },
    children: [
      {
        path: "base",
        name: "ListBase",
        component: "/list/base/index",
        meta: {
          title: "基础列表页",
        },
      },
      {
        path: "card",
        name: "ListCard",
        component: "/list/card/index",
        meta: {
          title: "卡片列表页",
        },
      },
      {
        path: "filter",
        name: "ListFilter",
        component: "/list/filter/index",
        meta: {
          title: "筛选列表页",
        },
      },
      {
        path: "tree",
        name: "ListTree",
        component: "/list/tree/index",
        meta: {
          title: "树状筛选列表页",
        },
      },
    ],
  },
];
```

### 前端权限控制

如果您需要使用`前端权限控制`，我们也提供了一个雏形的前端权限控制版本，您可以通过替换`store/permission.ts`的内容为`store/permission-fe.ts`的内容来实现。

在此权限控制下，请将系统可能涉及到的菜单都在`router/modules`下参考固定路由，按项目的具体需求准备好。不需要发起菜单请求，通过用户的 roles 字段中允许访问的菜单，达到对菜单进行过滤筛选，只能访问部分菜单的效果。
