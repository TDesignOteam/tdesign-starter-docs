---
title: 样式与静态资源
spline: explain
---

### 本地静态资源存放

静态资源可以放在 `./src/assets` 目录下，然后在文件中通过相对路径引入。

### 如何引入并使用字体、图片及 SVG

#### 使用字体

将字体文件`.ttf`放在`./src/assets/fonts` 目录下。

然后在文件`./src/style/font-family.less`中引入该字体文件。

```
@font-face {
  font-family: "w7";
  src: url("w7.ttf");
  font-weight: normal;
  font-style: normal;
}
```

在 module.less 的文件里引入

```css
@import "./src/style/font-family.less";
```

#### 使用图片

将图片文件放在 `./src/assets/images` 目录下。

在 jsx 文件中通过相对路径引入`assets/images/image.png`。

### 引入 SVG

SVG 是一种可变向量图，提供了 DOM 编程的接口，更多关于 SVG 的[点击这里](https://developer.mozilla.org/zh-CN/docs/Web/SVG)

通过源码引入，如下:

```jsx
<Fragment>
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="33" height="33" rx="16.5" stroke="white" />
    <path d="M16.35 17.6501V21.5H17.65V17.6501H21.5V16.3501H17.65V12.5H16.35V16.3501H12.5V17.6501H16.35Z" />
  </svg>
</Fragment>
```

通过路径引入，可以像组件一样使用（此功能实现借助了插件 `vite-plugin-svgr` ）

```jsx
import Logo from "assets/svg/assets-t-logo.svg?component";

export default function Component() {
  return <Logo />;
}
```
