---
title: 问题排查与反馈
spline: explain
---

### 问题排查

#### 1、出现 Cannot find module ‘worker_threads’

Vite 运行依赖 Node `12.0.0` 以上版本, Node 10.5 版本之前不支持 Worker，可通过`node -v`确认 Node 版本，如果是小于`12`的 Node 版本，升级 Node 版本即可。

#### 2、 出现 wasm code commit Allocation failed - process out of memory

方法一、启动项目时内存溢出，需要升级 Node 版本至 `15.3.0` [(完整问题)](https://stackoverflow.com/questions/48387040/how-do-i-determine-the-correct-max-old-space-size-for-node-js)

方法二、调整 Node 内存大小使用限制
`max_old_space_size=4096`[(完整问题)](https://segmentfault.com/a/1190000010437948)

#### 3、 出现 The authenticity of host 'github.com (xx.xx.xx.xx)' can't be established

该问题会出现在 `0.0.4` 版本以下的 tdesign-starter-cli。请升级到 `0.0.5` 及以上的版本。或者参考此[链接](https://stackoverflow.com/questions/18710120/the-authenticity-of-host-github-com-192-30-252-128-cant-be-established)进行处理，TDesign 也会尽快优化 cli 的使用链路，避免这个问题的出现。

#### 4、 使用 tdesign-starter-cli 出现 Error: 'git clone' failed with status 128

该问题会出现在 `0.0.5` 版本以下的 tdesign-starter-cli。请升级到 `0.0.5` 及以上的版本。

#### 5、菜单栏二级路由只有一个的时候，如何与一级路由合并只显示一个？

router 目录下，为需要调整展示的一级路由的 meta 字段增加`single:true`即可

#### 7、TDesign Starter 新增功能或问题修复如何同步？

目前来说，TDesign Starter 和普通的业务代码一样，没法做到像 npm 包一样通过升级来达到同步新增功能或修复问题的效果。
但是我们会定期（每周或每两周）将本周的重要的更新提供发布打上 tag 并发布在仓库的 release 中，方便您同步新增功能或问题的修复。如果您在使用过程中遇到了问题，并成功修复，也非常欢迎为我们提交 Pull Request，一起完善 TDesign Starter 这个开源项目 ❤。

<br/>
