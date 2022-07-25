<template>
  <div class="container">
    <td-header></td-header>
    <div class="banner">
      <div class="banner-content">
        <div class="banner-title">TDesign Starter</div>
        <div class="banner-subtitle">TDesign 解决方案</div>

        <div class="card-container">
          <div class="card">
            <p class="card-title">中后台</p>
            <p class="card-subtitle">Vue</p>
            <a href="/starter/vue/" target="_blank">
              <t-button class="card-btn" variant="outline" theme="default">
                预览
              </t-button>
            </a>
            <a href="/starter/docs/vue/get-started" target="_blank">
              <t-button class="card-btn" variant="outline" theme="default">
                使用文档
              </t-button>
            </a>
            <img
              class="feature-img-light"
              src="https://tdesign.gtimg.com/tdesign-pro/doc/vue.png"
            />
            <img
              class="feature-img-dark"
              src="https://tdesign.gtimg.com/tdesign-pro/doc/vue-dark.png"
            />
          </div>
          <div class="card">
            <p class="card-title">中后台</p>
            <p class="card-subtitle">Vue Next</p>
            <a href="/starter/vue-next/" target="_blank">
              <t-button class="card-btn" variant="outline" theme="default">
                预览
              </t-button>
            </a>
            <a href="/starter/docs/vue-next/get-started" target="_blank">
              <t-button class="card-btn" variant="outline" theme="default">
                使用文档
              </t-button>
            </a>
            <img
              class="feature-img-light"
              src="https://tdesign.gtimg.com/tdesign-pro/doc/vue.png"
            />
            <img
              class="feature-img-dark"
              src="https://tdesign.gtimg.com/tdesign-pro/doc/vue-dark.png"
            />
          </div>
          <div class="card">
            <p class="card-title">中后台</p>
            <p class="card-subtitle">React</p>
            <a href="/starter/react/" target="_blank">
              <t-button class="card-btn" variant="outline" theme="default"
                >预览</t-button
              >
            </a>
            <a href="/starter/docs/react/get-started" target="_blank">
              <t-button class="card-btn" variant="outline" theme="default"
                >使用文档</t-button
              >
            </a>
            <img src="https://tdesign.gtimg.com/tdesign-pro/doc/react.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="feature">
        <div class="feature-left">
          <div class="feature-title">主题配置</div>
          <div class="feature-detail">
            基于 TDesign 组件库的主题配置能力，Starter
            提供在线切换主题色的能力，满足业务方样式定制需求。
          </div>
        </div>
        <div class="feature-right">
          <img
            class="feature-img-light"
            src="https://tdesign.gtimg.com/tdesign-pro/doc/feature-theme-light.png"
          />
          <img
            class="feature-img-dark"
            src="https://tdesign.gtimg.com/tdesign-pro/doc/feature-theme-dark.png"
          />
        </div>
      </div>
      <div class="feature">
        <div class="feature-left">
          <div class="feature-title">开箱即用</div>
          <div class="feature-detail">
            配套数据 Mock、项目构建打包和代码格式规范，支持通过 CLI
            工具拉取代码，直接上手开发，不再为琐粹的配置重复劳动。
          </div>
        </div>
        <div class="feature-right">
          <!-- <img src="https://tdesign.gtimg.com/starter/home-page/feature-startup.png" /> -->
          <img
            class="feature-img-light"
            src="https://tdesign.gtimg.com/tdesign-pro/doc/feature-startup-light.png"
          />
          <img
            class="feature-img-dark"
            src="https://tdesign.gtimg.com/tdesign-pro/doc/feature-startup-dark.png"
          />
        </div>
      </div>
      <div class="feature">
        <div class="feature-left">
          <div class="feature-title">灵活布局</div>
          <div class="feature-detail">
            支持在不同屏幕设备下，灵活调整各类型页面与模块的结构布局，快速营造极致的用户产品体验。
          </div>
        </div>
        <div class="feature-right">
          <img
            class="feature-img-light"
            src="https://tdesign.gtimg.com/tdesign-pro/doc/feature-layout-light.png"
          />
          <img
            class="feature-img-dark"
            src="https://tdesign.gtimg.com/tdesign-pro/doc/feature-layout-dark.png"
          />
        </div>
      </div>
    </div>
    <td-doc-footer
      style="
        --content-padding-right: 0;
        --content-max-width: 1440px;
        --content-padding-left-right: 48px;
        --footer-logo-position: unset;
      "
    ></td-doc-footer>
  </div>
</template>
<script>
import { Button as TButton, Tag as TTag } from "tdesign-vue";

/**
 * @TODO
2. 边距检查
 */
export default {
  components: {
    TButton,
    TTag,
  },
};
</script>
<style lang="less">
@font-face {
  font-family: "TencentSans-W7";
  src: url("../../assets/fonts/TencentSans-W7.ttf");
}

:root,
:root[theme-mode="light"] {
  --inner-padding-top-bottom: 32px;
  --feature-margin-top-bottom: 128px;
  --card-flex-direction-column: row;
  --feature-flex-direction-column: row;
  --feature-content-max-width: 1356px;
  --content-feature-left-max-width: 424px;
  --content-feature-right-max-width: 65%;
  --card-img-top: 32px;
  --feature-gap: 48px;
  --feature-title-font-size: 48px;
  --feature-title-line-height: 56px;
  --banner-title-font-size: 72px;
  --banner-subtitle-font-size: 36px;
  --banner-title-line-height: 84px;
  --banner-subtitle-line-height: 50px;
  --banner-title-margin-bottom: 162px;
  --banner-content-padding: 240px 48px 96px;
  --banner-subtitle-margin-top: 24px;
  --content-feature-padding-left-right: 80px;
  --homepage-banner-title-color: #000000;
  --homepage-banner-color: #fafafa;
  --homepage-banner-size: 876px;
  --homepage-banner-image: url("https://tdesign.gtimg.com/tdesign-pro/doc/homepage-banner-bg-light.png");
  .feature-img-light {
    display: block;
  }
  .feature-img-dark {
    display: none;
  }
}
:root[theme-mode="dark"] {
  --homepage-banner-title-color: #ffffff;
  --homepage-banner-color: #242424;
  --homepage-banner-image: url("https://tdesign.gtimg.com/tdesign-pro/doc/homepage-banner-bg-dark.png");
  .feature-img-light {
    display: none;
  }
  .feature-img-dark {
    display: block;
  }
}

@media screen and (max-width: 1200px) {
  .container {
    --card-flex-direction-column: row;
    --feature-flex-direction-column: column;
    --feature-content-max-width: 888px;
    --content-feature-left-max-width: 100%;
    --content-feature-right-max-width: 100%;
    --inner-padding-top-bottom: 24px;
    --feature-margin-top-bottom: 80px;
    --feature-gap: 32px;
    --feature-title-font-size: 36px;
    --feature-title-line-height: 42px;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    --card-flex-direction-column: column;
    --feature-flex-direction-column: column;
    --card-img-top: calc(50% - 36px);
    --banner-title-font-size: 64px;
    --banner-subtitle-font-size: 32px;
    --banner-title-margin-bottom: 72px;
    --content-feature-padding-left-right: 48px;
    --homepage-banner-size: 540px;
    --banner-content-padding: 301px 48px 80px;
    --banner-subtitle-margin-top: 16px;
    --banner-title-line-height: 75px;
    --banner-subtitle-line-height: 44px;
  }
}

@media screen and (max-width: 750px) {
  .container {
    --content-feature-padding-left-right: 24px;
    --feature-margin-top-bottom: 60px;
    --banner-title-font-size: 60px;
    --banner-subtitle-font-size: 28px;
    --banner-content-padding: 420px 24px 60px;
    --banner-title-line-height: 70px;
    --banner-subtitle-line-height: 39px;
  }
}

@media screen and (max-width: 548px) {
  .container {
    --banner-title-font-size: 48px;
    --banner-subtitle-font-size: 24px;
    --banner-title-line-height: 56px;
    --banner-subtitle-line-height: 33px;
  }
}

.container {
  background: var(--bg-color-card);
}
.banner {
  width: 100%;
  position: relative;
  background-color: var(--homepage-banner-color);
  background-image: var(--homepage-banner-image);
  background-size: auto var(--homepage-banner-size);
  background-position: top 0px right 0;
  background-repeat: no-repeat;

  &-content {
    max-width: 1440px;
    padding: var(--banner-content-padding);
    box-sizing: border-box;
    margin: 0 auto;
  }
  &-title {
    font-family: "TencentSans-W7";
    font-size: var(--banner-title-font-size);
    line-height: var(--banner-title-line-height);
    // FIXME: 没有找到token
    color: var(--homepage-banner-title-color);
  }
  &-subtitle {
    font-style: normal;
    font-weight: normal;
    font-size: var(--banner-subtitle-font-size);
    line-height: var(--banner-subtitle-line-height);
    margin-top: var(--banner-subtitle-margin-top);
    color: var(--text-secondary);
    margin-bottom: var(--banner-title-margin-bottom);
  }
}

.card-container {
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  flex-direction: var(--card-flex-direction-column);
  gap: 24px;
}
.card {
  position: relative;
  background: var(--bg-color-card);
  border-radius: 6px;
  padding: 32px;
  flex: 1;
  &-title {
    font-size: 14px;
    line-height: 22px;
    margin: 0px;
    color: var(--text-placeholder);
  }

  &-subtitle {
    font-weight: 500;
    font-size: 28px;
    line-height: 39px;
    margin: 0px;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    .t-tag {
      font-weight: normal;
      margin-left: 8px;
    }
  }

  &-btn {
    display: inline-block;
    margin: 23px 8px 8px 0;
    padding: 8px 24px;
    border: 1px solid var(--component-border);
    font-size: 16px;
    box-sizing: border-box;
    border-radius: 4px;
    background: none;
    height: 36px;
    color: var(--text-interactive);
  }
  img {
    position: absolute;
    top: var(--card-img-top);
    right: 32px;
    width: 72px;
    height: 72px;
  }

  a {
    color: var(--text-interactive);
    text-decoration: none;
  }

  .t-is-disabled {
    background: none;
  }
  .t-tag--default {
    color: var(--text-secondary);
    background: var(--bg-color-tag);
  }
}

.content {
  max-width: var(--feature-content-max-width);
  margin: 0 auto;
  padding: 0 var(--content-feature-padding-left-right);
  box-sizing: content-box;
}

.feature {
  margin: var(--feature-margin-top-bottom) 0;
  display: flex;
  justify-content: space-between;
  flex-direction: var(--feature-flex-direction-column);
  gap: var(--feature-gap);

  &-left {
    max-width: var(--content-feature-left-max-width);
  }
  &-right {
    width: var(--content-feature-right-max-width);
    box-sizing: border-box;
    box-shadow: 0px 50px 100px -12px rgba(0, 0, 0, 0.05),
      0px 30px 60px -30px rgba(0, 0, 0, 0.1);
    border-radius: 6px;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
  &-title {
    color: var(--brand-main);
    font-family: "TencentSans-W7";
    font-size: var(--feature-title-font-size);
    line-height: var(--feature-title-line-height);
    letter-spacing: -1px;
    margin-bottom: var(--inner-padding-top-bottom);
  }
  &-title::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    margin-top: var(--inner-padding-top-bottom);
    background: linear-gradient(
      89.59deg,
      #0052d9 0.36%,
      rgba(187, 211, 251, 0) 100%
    );
  }

  &-detail {
    font-size: 20px;
    line-height: 28px;
    color: var(--text-primary);
  }
}
</style>
