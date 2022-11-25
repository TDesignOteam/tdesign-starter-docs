---
title: 使用 Design Token
spline: explain
---

TDesign 组件库提供了`色彩`、`尺寸`、`圆角`、`阴影` 和 `字体` 五大类 Design Token, 我们推荐您在开发自己的页面的时候，尽可能地使用这些 Design Token 来实现背景色、边距、圆角等样式，以方便开发出可以统一变换样式效果的应用。

```CSS
.container {
    background: var(--td-brand-color);
    padding: var(--td-comp-paddingTB-s) var(--td-comp-paddingLR-s);
}
```

具体的 `Design Token` 列表如下：

### 色彩

```CSS
  --td-brand-color-1: #f2f3ff;
  --td-brand-color-2: #d9e1ff;
  --td-brand-color-3: #b5c7ff;
  --td-brand-color-4: #8eabff;
  --td-brand-color-5: #618dff;
  --td-brand-color-6: #366ef4;
  --td-brand-color-7: #0052d9;
  --td-brand-color-8: #003cab;
  --td-brand-color-9: #002a7c;
  --td-brand-color-10: #001a57;

  --td-warning-color-1: #fff1e9;
  --td-warning-color-2: #ffd9c2;
  --td-warning-color-3: #ffb98c;
  --td-warning-color-4: #fa9550;
  --td-warning-color-5: #e37318;
  --td-warning-color-6: #be5a00;
  --td-warning-color-7: #954500;
  --td-warning-color-8: #713300;
  --td-warning-color-9: #532300;
  --td-warning-color-10: #3b1700;

  --td-error-color-1: #fff0ed;
  --td-error-color-2: #ffd8d2;
  --td-error-color-3: #ffb9b0;
  --td-error-color-4: #ff9285;
  --td-error-color-5: #f6685d;
  --td-error-color-6: #d54941;
  --td-error-color-7: #ad352f;
  --td-error-color-8: #881f1c;
  --td-error-color-9: #68070a;
  --td-error-color-10: #490002;

  --td-success-color-1: #e3f9e9;
  --td-success-color-2: #c6f3d7;
  --td-success-color-3: #92dab2;
  --td-success-color-4: #56c08d;
  --td-success-color-5: #2ba471;
  --td-success-color-6: #008858;
  --td-success-color-7: #006c45;
  --td-success-color-8: #005334;
  --td-success-color-9: #003b23;
  --td-success-color-10: #002515;

  --td-gray-color-1: #f3f3f3;
  --td-gray-color-2: #eee;
  --td-gray-color-3: #e7e7e7;
  --td-gray-color-4: #dcdcdc;
  --td-gray-color-5: #c5c5c5;
  --td-gray-color-6: #a6a6a6;
  --td-gray-color-7: #8b8b8b;
  --td-gray-color-8: #777;
  --td-gray-color-9: #5e5e5e;
  --td-gray-color-10: #4b4b4b;
  --td-gray-color-11: #383838;
  --td-gray-color-12: #2c2c2c;
  --td-gray-color-13: #242424;
  --td-gray-color-14: #181818;

  // 文字 & 图标 颜色
  --td-font-white-1: rgba(255, 255, 255, 100%);
  --td-font-white-2: rgba(255, 255, 255, 55%);
  --td-font-white-3: rgba(255, 255, 255, 35%);
  --td-font-white-4: rgba(255, 255, 255, 22%);
  --td-font-gray-1: rgba(0, 0, 0, 90%);
  --td-font-gray-2: rgba(0, 0, 0, 60%);
  --td-font-gray-3: rgba(0, 0, 0, 40%);
  --td-font-gray-4: rgba(0, 0, 0, 26%);

  // 基础颜色
  --td-brand-color: var(--td-brand-color-7);     // 色彩-品牌-可操作
  --td-warning-color: var(--td-warning-color-5); // 色彩-功能-警告
  --td-error-color: var(--td-error-color-6);     // 色彩-功能-失败
  --td-success-color: var(--td-success-color-5); // 色彩-功能-成功

  // 基础颜色的扩展 用于 hover / 聚焦 / 禁用 / 点击 等状态
  --td-brand-color-hover: var(--td-brand-color-6);     // hover态
  --td-brand-color-focus: var(--td-brand-color-2);     // focus态，包括鼠标和键盘
  --td-brand-color-active: var(--td-brand-color-8);    // 点击态
  --td-brand-color-disabled: var(--td-brand-color-3);  // 禁用态
  --td-brand-color-light: var(--td-brand-color-1);     // 浅色的选中态

  // 警告色扩展
  --td-warning-color-hover: var(--td-warning-color-4);
  --td-warning-color-focus: var(--td-warning-color-2);
  --td-warning-color-active: var(--td-warning-color-6);
  --td-warning-color-disabled: var(--td-warning-color-3);
  --td-warning-color-light: var(--td-warning-color-1);

  // 失败/错误色扩展
  --td-error-color-hover: var(--td-error-color-5);
  --td-error-color-focus: var(--td-error-color-2);
  --td-error-color-active: var(--td-error-color-7);
  --td-error-color-disabled: var(--td-error-color-3);
  --td-error-color-light: var(--td-error-color-1);

  // 成功色扩展
  --td-success-color-hover: var(--td-success-color-4);
  --td-success-color-focus: var(--td-success-color-2);
  --td-success-color-active: var(--td-success-color-6);
  --td-success-color-disabled: var(--td-success-color-3);
  --td-success-color-light: var(--td-success-color-1);

  // 遮罩
  --td-mask-active: rgba(0, 0, 0, 60%); // 遮罩-弹出
  --td-mask-disabled: rgba(255, 255, 255, 60%); // 遮罩-禁用

  // 背景色
  --td-bg-color-page: var(--td-gray-color-2);                        // 色彩 - page
  --td-bg-color-container: #fff;                                // 色彩 - 容器
  --td-bg-color-container-hover: var(--td-gray-color-1);             // 色彩 - 容器 - hover
  --td-bg-color-container-active: var(--td-gray-color-3);            // 色彩 - 容器 - active
  --td-bg-color-container-select: #fff;                         // 色彩 - 容器 - select
  --td-bg-color-secondarycontainer: var(--td-gray-color-1);          // 色彩 - 次级容器
  --td-bg-color-secondarycontainer-hover: var(--td-gray-color-2);    // 色彩 - 次级容器 - hover
  --td-bg-color-secondarycontainer-active: var(--td-gray-color-4);   // 色彩 - 次级容器 - active
  --td-bg-color-component: var(--td-gray-color-3);                   // 色彩 - 组件
  --td-bg-color-component-hover: var(--td-gray-color-4);             // 色彩 - 组件 - hover
  --td-bg-color-component-active: var(--td-gray-color-6);            // 色彩 - 组件 - active
  --td-bg-color-secondarycomponent: var(--td-gray-color-4);          // 色彩 - 次级组件
  --td-bg-color-secondarycomponent-hover: var(--td-gray-color-5);    // 色彩 - 次级组件 - hover
  --td-bg-color-secondarycomponent-active: var(--td-gray-color-6);   // 色彩 - 次级组件 - active
  --td-bg-color-component-disabled: var(--td-gray-color-2);          // 色彩 - 组件 - disabled

  // 特殊组件背景色，目前只用于 button、input 组件多主题场景，浅色主题下固定为白色，深色主题下为 transparent 适配背景颜色
  --td-bg-color-specialcomponent: #fff;

  // 文本颜色
  --td-text-color-primary: var(--td-font-gray-1);      // 色彩-文字-主要
  --td-text-color-secondary: var(--td-font-gray-2);    // 色彩-文字-次要
  --td-text-color-placeholder: var(--td-font-gray-3);  // 色彩-文字-占位符/说明
  --td-text-color-disabled: var(--td-font-gray-4);    // 色彩-文字-禁用
  --td-text-color-anti: #fff;                      // 色彩-文字-反色
  --td-text-color-brand: var(--td-brand-color-8);           // 色彩-文字-品牌
  --td-text-color-link: var(--td-brand-color-8);            // 色彩-文字-链接

  // 分割线
  --td-border-level-1-color: var(--td-gray-color-3);
  --td-component-stroke: var(--td-gray-color-3);
  // 边框
  --td-border-level-2-color: var(--td-gray-color-4);
  --td-component-border: var(--td-gray-color-4);

```

### 圆角

```CSS
  --td-radius-small: 2px;
  --td-radius-default: 3px;
  --td-radius-medium: 6px;
  --td-radius-large: 9px;
  --td-radius-extraLarge: 12px;
  --td-radius-round: 999px;
  --td-radius-circle: 50%;
```

### 阴影

```CSS
 // 基础/下层 投影 hover 使用的组件包括：表格 /
  --td-shadow-1: 0 1px 10px rgba(0, 0, 0, 5%), 0 4px 5px rgba(0, 0, 0, 8%), 0 2px 4px -1px rgba(0, 0, 0, 12%);
  // 中层投影 下拉 使用的组件包括：下拉菜单 / 气泡确认框 / 选择器 /
  --td-shadow-2: 0 3px 14px 2px rgba(0, 0, 0, 5%), 0 8px 10px 1px rgba(0, 0, 0, 6%), 0 5px 5px -3px rgba(0, 0, 0, 10%);
  // 上层投影（警示/弹窗）使用的组件包括：全局提示 / 消息通知
  --td-shadow-3: 0 6px 30px 5px rgba(0, 0, 0, 5%), 0 16px 24px 2px rgba(0, 0, 0, 4%), 0 8px 10px -5px rgba(0, 0, 0, 8%);

  // 内投影 用于弹窗类组件（气泡确认框 / 全局提示 / 消息通知）的内描边
  --td-shadow-inset-top: inset 0 .5px 0 #dcdcdc;
  --td-shadow-inset-right: inset .5px 0 0 #dcdcdc;
  --td-shadow-inset-bottom: inset 0 -.5px 0 #dcdcdc;
  --td-shadow-inset-left: inset -.5px 0 0 #dcdcdc;

  // table 特定阴影
  --td-table-shadow-color: rgba(0, 0, 0, 8%);
```

### 字体

```CSS
  --td-font-family: PingFang SC, Microsoft YaHei, Arial Regular;
  --td-font-family-medium: PingFang SC, Microsoft YaHei, Arial Medium;

  // 字体大小 token 适用与font-size属性
  --td-font-size-link-small: 12px;
  --td-font-size-link-medium: 14px;
  --td-font-size-link-large: 16px;
  --td-font-size-mark-small: 12px;
  --td-font-size-mark-medium: 14px;
  --td-font-size-body-small: 12px;
  --td-font-size-body-medium: 14px;
  --td-font-size-body-large: 16px;
  --td-font-size-title-small: 14px;
  --td-font-size-title-medium: 16px;
  --td-font-size-title-large: 20px;
  --td-font-size-headline-small: 24px;
  --td-font-size-headline-medium: 28px;
  --td-font-size-headline-large: 36px;
  --td-font-size-display-medium: 48px;
  --td-font-size-display-large: 64px;

  // 行高 token 适应于 line-height 属性
  --td-line-height-link-small: 20px;
  --td-line-height-link-medium: 22px;
  --td-line-height-link-large: 24px;
  --td-line-height-mark-small: 20px;
  --td-line-height-mark-medium: 22px;
  --td-line-height-body-small: 20px;
  --td-line-height-body-medium: 22px;
  --td-line-height-body-large: 24px;
  --td-line-height-title-small: 22px;
  --td-line-height-title-medium: 24px;
  --td-line-height-title-large: 28px;
  --td-line-height-headline-small: 32px;
  --td-line-height-headline-medium: 36px;
  --td-line-height-headline-large: 44px;
  --td-line-height-display-medium: 56px;
  --td-line-height-display-large: 72px;

  // 字体 token 集合font-size与line-height 适应于 font 属性 推荐使用
  --td-font-link-small: var(--td-font-size-link-small) /
    var(--td-line-height-link-small) var(--td-font-family);
  --td-font-link-medium: var(--td-font-size-link-medium) /
    var(--td-line-height-link-medium) var(--td-font-family);
  --td-font-link-large: var(--td-font-size-link-large) /
    var(--td-line-height-link-large) var(--td-font-family);
  --td-font-mark-small: 600 var(--td-font-size-mark-small) /
    var(--td-line-height-mark-small) var(--td-font-family);
  --td-font-mark-medium: 600 var(--td-font-size-mark-medium) /
    var(--td-line-height-mark-medium) var(--td-font-family);
  --td-font-body-small: var(--td-font-size-body-small) /
    var(--td-line-height-body-small) var(--td-font-family);
  --td-font-body-medium: var(--td-font-size-body-medium) /
    var(--td-line-height-body-medium) var(--td-font-family);
  --td-font-body-large: var(--td-font-size-body-large) /
    var(--td-line-height-body-large) var(--td-font-family);
  --td-font-title-small: 600 var(--td-font-size-title-small) /
    var(--td-line-height-title-small) var(--td-font-family);
  --td-font-title-medium: 600 var(--td-font-size-title-medium) /
    var(--td-line-height-title-medium) var(--td-font-family);
  --td-font-title-large: 600 var(--td-font-size-title-large) /
    var(--td-line-height-title-large) var(--td-font-family);
  --td-font-headline-small: 600 var(--td-font-size-headline-small) /
    var(--td-line-height-headline-small) var(--td-font-family);
  --td-font-headline-medium: 600 var(--td-font-size-headline-medium) /
    var(--td-line-height-headline-medium) var(--td-font-family);
  --td-font-headline-large: 600 var(--td-font-size-headline-large) /
    var(--td-line-height-headline-large) var(--td-font-family);
  --td-font-display-medium: 600 var(--td-font-size-display-medium) /
    var(--td-line-height-display-medium) var(--td-font-family);
  --td-font-display-large: 600 var(--td-font-size-display-large) /
    var(--td-line-height-display-large) var(--td-font-family);
```

### 尺寸

```CSS
  --td-size-1: 2px;
  --td-size-2: 4px;
  --td-size-3: 6px;
  --td-size-4: 8px;
  --td-size-5: 12px;
  --td-size-6: 16px;
  --td-size-7: 20px;
  --td-size-8: 24px;
  --td-size-9: 28px;
  --td-size-10: 32px;
  --td-size-11: 36px;
  --td-size-12: 40px;
  --td-size-13: 48px;
  --td-size-14: 56px;
  --td-size-15: 64px;
  --td-size-16: 72px;

  //全局 component 组件尺寸高度相关 token
  --td-comp-size-xxxs: var(--td-size-6);
  --td-comp-size-xxs: var(--td-size-7);
  --td-comp-size-xs: var(--td-size-8);
  --td-comp-size-s: var(--td-size-9);
  --td-comp-size-m: var(--td-size-10);
  --td-comp-size-l: var(--td-size-11);
  --td-comp-size-xl: var(--td-size-12);
  --td-comp-size-xxl: var(--td-size-13);
  --td-comp-size-xxxl: var(--td-size-14);
  --td-comp-size-xxxxl: var(--td-size-15);
  --td-comp-size-xxxxxl: var(--td-size-16);

  //全局 popup 弹出层整体边距 token
  --td-pop-padding-s: var(--td-size-2);
  --td-pop-padding-m: var(--td-size-3);
  --td-pop-padding-l: var(--td-size-4);
  --td-pop-padding-xl: var(--td-size-5);
  --td-pop-padding-xxl: var(--td-size-6);

  //全局 component 组件左右边距 token
  --td-comp-paddingLR-xxs: var(--td-size-1);
  --td-comp-paddingLR-xs: var(--td-size-2);
  --td-comp-paddingLR-s: var(--td-size-4);
  --td-comp-paddingLR-m: var(--td-size-5);
  --td-comp-paddingLR-l: var(--td-size-6);
  --td-comp-paddingLR-xl: var(--td-size-8);
  --td-comp-paddingLR-xxl: var(--td-size-10);

  //全局 component 组件上下边距 token
  --td-comp-paddingTB-xxs: var(--td-size-1);
  --td-comp-paddingTB-xs: var(--td-size-2);
  --td-comp-paddingTB-s: var(--td-size-4);
  --td-comp-paddingTB-m: var(--td-size-5);
  --td-comp-paddingTB-l: var(--td-size-6);
  --td-comp-paddingTB-xl: var(--td-size-8);
  --td-comp-paddingTB-xxl: var(--td-size-10);

  //全局 component 组件间距 token
  --td-comp-margin-xxs: var(--td-size-1);
  --td-comp-margin-xs: var(--td-size-2);
  --td-comp-margin-s: var(--td-size-4);
  --td-comp-margin-m: var(--td-size-5);
  --td-comp-margin-l: var(--td-size-6);
  --td-comp-margin-xl: var(--td-size-7);
  --td-comp-margin-xxl: var(--td-size-8);
  --td-comp-margin-xxxl: var(--td-size-10);
  --td-comp-margin-xxxxl: var(--td-size-12);
```
