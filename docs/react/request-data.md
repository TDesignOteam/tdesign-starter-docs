---
title: 请求与数据
spline: explain
---

### 发起请求

TDesign React Starter 初始化的项目中，采用 [axios](https://github.com/axios/axios) 做为请求的资源库，并对其做了封装，在组件中发起请求示例如下。

```js
import request from "utils/request";

request
  .get("/api/get-list")
  .then((res) => {
    if (res.code === 0) {
    }
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {});
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
