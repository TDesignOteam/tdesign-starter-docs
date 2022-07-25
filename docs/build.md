---
title: 构建
spline: explain
---

### 项目构建

```bash
npm run build
```

该命令会生成 `dist`目录，用于存放构建生成的所有的静态资源。

### 资源预览

```bash
npm run serve
```

该命令会启动一个静态 Web 服务器，将 `dist` 文件夹运行在<http://localhost:5000>，这样就可以在本地环境查看构建产物是否正常。
可通过 `--port`参数来配置服务的运行端口。

**tip: 预览服务器不支持热重载，静态资源有改动，需重新打包，并重启预览服务器。**
