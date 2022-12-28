---
title: 项目部署
spline: explain
---

如上一节所述，运行`npm run build`会将所有运行所需资源构建在`dist`目录，入口文件在 `dist/index.html`。

执行完项目构建的指令之后，只需将 HTTP 服务器的访问路径指向这个文件即可。

### Docker 部署

Docker 可参考下面的文件

**注意：Dockerfile 要放在项目的根路径下。**

```bash
FROM tdesign.tencent.com/noc/nodejs:16.6 AS builder
LABEL maintainer="username<username@tencent.com>"

ARG BRANCH
COPY . /

RUN npm config set registry https://registry.npmjs.org/
RUN npm install && npm run build

FROM tdesign.tencent.com/iyunwei/openresty

#EXPOSE 80

COPY ./docker/nginx.conf /etc/nginx/conf.d
RUN  mkdir -p /data/wwwlogs/ && chown -R nobody:nobody /data/wwwlogs/
COPY --from=builder dist dist
```

### Hash Router 部署

#### 开启 Hash 路由

项目默认是 `history router`，路径上不会默认带上 `#`, 如果希望使用 hash 路由, 可以修改`BrowserRouter`为`HashRouter`,在 `src/main.tsx`配置如下：

```js
import { HashRouter } from "react-router-dom";

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
    document.getElementById("app")
  );
};
```

### 服务器配置

因为 TDesign Starter 的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 http://oursite.com/user/id 就会返回 404。

所以，您要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是您的 app 所依赖的页面。
nginx 服务器配置如下：

```bash
server {
    if ($request_method = HEAD) {
        return 200;
    }

    location / {
        alias   /usr/share/nginx/html/;
        index  index.html index.htm;
        try_files  $uri $uri/ /index.html;
    }

    access_log /var/log/nginx/access.log main;
    error_log /var/log/nginx/error.log error;


    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

Apache、Node、Express 等更多服务器配置, 可以点击[查看详情](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)
