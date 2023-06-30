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
    request.get<ListResult>
    {
      url: Api.BaseList,
    }
  );
}

export function getCardList() {
  return (
    request.get<CardListResult>
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

### 请求代理

项目中默认启用了直连代理模式，在`src/config/proxy.ts`中的`isRequestProxy`设置开关

**tips: 如果`isRequestProxy`为`true`则采用该配置文件中的地址请求，会绕过`vite.config.js`中设置的代理**

您可以在关闭直连代理模式后，在`vite.config.js`中进行代理设置，使用`Vite`的`http-proxy`。

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


### Mock 数据

如果需要进行数据 Mock，在 `vite.config.js` 中，将 viteMockServe 中配置 `localEnabled` 为 `true` ，即可开启 mock server 的拦截。

```js
viteMockServe({
    mockPath: 'mock',
    localEnabled: true,
}),
```

### 高级配置-部分请求不代理的场景

在某些业务场景下可能会使用到腾讯云的COS对象存储或其他厂商的上传服务，在此情况下则无法直接使用`@/utils/request`进行请求，否则地址会被代理。

此情况下可以在`src/utils/request/index.ts`中最下方添加新的请求实例

- 示例：

```js
function createOtherAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(
    merge(
      <CreateAxiosOptions>{
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
        // 例如: authenticationScheme: 'Bearer'
        authenticationScheme: '',
        // 超时
        timeout: 10 * 1000,
        // 携带Cookie
        withCredentials: true,
        // 头信息
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        // 数据处理方式
        transform,
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 接口地址
          apiUrl: '',
          // 是否自动添加接口前缀
          isJoinPrefix: false,
          // 接口前缀
          // 例如: https://www.baidu.com/api
          // urlPrefix: '/api'
          urlPrefix: '',
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          // 需要对返回数据进行处理
          isTransformResponse: false,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 格式化提交参数时间
          formatDate: true,
          // 是否加入时间戳
          joinTime: true,
          // 忽略重复请求
          ignoreRepeatRequest: true,
          // 是否携带token
          withToken: true,
          // 重试
          retry: {
            count: 3,
            delay: 1000,
          },
        },
      },
      opt || {},
    ),
  );
}
export const requestOther = createOtherAxios();
```

在添加新实例后，引入新实例`@/utils/requestOther`即可继续开发

### 高级配置-不需要重试的场景

此情况下可以在`src/utils/request/index.ts`中最下方的`createAxios`方法中的参数`retry`移除即可

### 高级配置-修改请求返回的通用模型

首先需要您在`src/types/axios.d.ts`中的`Result`中声明您的通用模型

- 示例：

```js
export interface Result<T = any> {
  code: number;
  data: T;
}
```

随后在`src/utils/request/index.ts`中的`transform`方法中对您的数据进行预处理

**tips: 如果您不需要对数据预处理则可以在最下方将`isTransformResponse`设置关闭**

### 高级配置-修改请求params参数的序列化方式

使用[qs](https://github.com/ljharb/qs)序列化请求params参数

首先需要您在`src/utils/request/Axios.ts`中的`supportParamsStringify`方法中选择您需要的序列化方式

- 示例：

```js
// 支持params数组参数格式化
  supportParamsStringify(config: AxiosRequestConfig) {
    const headers = config.headers || this.options.headers;
    const contentType = headers?.['Content-Type'] || headers?.['content-type'];

    if (contentType === ContentTypeEnum.FormURLEncoded || !Reflect.has(config, 'params')) {
      return config;
    }

    return {
      ...config,
      //修改此处的arrayFormat，选项有'indices' 'brackets' 'repeat' 'comma'等，请参考qs文档根据项目需要选择
      paramsSerializer: (params: any) => stringify(params, { arrayFormat: 'brackets' }), 
    };
  }
```

随后在同一文件中的`request`方法中，取消调用`supportParamsStringify`行的注释
```js
conf = this.supportParamsStringify(conf);
```

**tips: axios会使用内置的toFormData以brackets方式序列化params参数，`如果您不需要修改，无需进行上述操作`**
