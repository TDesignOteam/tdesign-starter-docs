---
title: 请求与数据
spline: explain
---

### 发起请求

TDesign Starter 初始化的项目中，采用 [axios](https://github.com/axios/axios) 做为请求的资源库，并对其做了封装，可以从`src/utils/request`的路径中引入封装的 request，并在具体场景中使用。我们建议您在`src/apis`目录中管理您的项目使用到的 api，并在具体组件/页面中使用。
大部分情况下，您不需要改动`src/utils/request`中的代码，中需要在`src/apis`目录中新增您使用的接口，并在页面中引入接口使用即可。

```js
// src/apis 管理api请求
import { request } from "@/utils/request";
import type { CardListResult, ListResult } from "@/api/model/listModel";

const Api = {
  BaseList: "/get-list",
  CardList: "/get-card-list",
};

export function getList() {
  return (
    request.get <
    ListResult >
    {
      url: Api.BaseList,
    }
  );
}

export function getCardList() {
  return (
    request.get <
    CardListResult >
    {
      url: Api.CardList,
    }
  );
}
```

```js
// src/pages/list/card 引入接口并使用
import { getCardList } from "@/api/list";

const fetchData = async () => {
  try {
    const { list } = await getCardList();
    productList.value = list;
    pagination.value = {
      ...pagination.value,
      total: list.length,
    };
  } catch (e) {
    console.log(e);
  } finally {
    dataLoading.value = false;
  }
};
```

### Mock 数据

如果需要进行数据 Mock，在 `vite.config.js` 中，将 viteMockServe 中配置 `localEnabled` 为 `true` ，即可开启 mock server 的拦截。

```js
viteMockServe({
    mockPath: 'mock',
    localEnabled: true,
}),
```

### 请求代理

在`vite.config.js`中进行代理设置，使用`Vite`的`http-proxy`。

- 示例：

```js
export default defineConfig({
  server: {
    proxy: {
      // 字符串简写写法
      "/foo": "http://localhost:4567/foo",
      // 选项写法
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      // 正则表达式写法
      "^/fallback/.*": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ""),
      },
      // 使用 proxy 实例
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        },
      },
    },
  },
});
```

完整选项详见[此处](https://github.com/http-party/node-http-proxy#options)
