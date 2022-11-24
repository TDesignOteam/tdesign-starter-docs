<template>
  <div class="container">
    <td-header></td-header>
    <div class="banner">
      <div class="banner-content">
        <div class="banner-title">TDesign 页面模板</div>
        <div class="banner-subtitle">TDesign Starter</div>

        <div class="card-container">
          <p class="card-container-title">桌面端页面模板</p>
          <p class="card-container-context">
            桌面端页面模板基于 TDesign 桌面端基础组件，
            旨在提供拥有良好开发体验和设计感的桌面端产品。通用模板支持动态布局，
            具有完善的目录结构和代码规范配置，并且通过统一规范降低沟通成本，
            提高开发效率，降低开发成本。
          </p>
          <div class="row">
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
              <img class="feature-img-light" src="../../assets/icon/vue.png" />
              <img class="feature-img-dark" src="../../assets/icon/vue.png" />
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
              <img class="feature-img-light" src="../../assets/icon/vue.png" />
              <img class="feature-img-dark" src="../../assets/icon/vue.png" />
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
              <img
                class="feature-img-light"
                src="../../assets/icon/react.png"
              />
              <img class="feature-img-dark" src="../../assets/icon/react.png" />
            </div>
          </div>
        </div>
        <div class="card-container card-container--mobile">
          <p class="card-container-title">移动端页面模板</p>
          <p class="card-container-context">
            移动端页面模板案基于 TDesign 移动端基础组件，
            包含登录注册、个人中心、信息流、数据图表、通用设置等移动端较为通用的使用场景，
            开发者在新建项目时可以基于此模板进行快速开发。
          </p>
          <div class="row">
            <div class="card">
              <p class="card-title">Mobile 移动端</p>
              <div class="card-subtitle"><span>Miniprogram</span> <t-tag>待上线</t-tag></div>
              <t-button
                class="card-btn"
                variant="outline"
                theme="default"
                disabled
              >
                预览
              </t-button>
              <t-button
                class="card-btn"
                variant="outline"
                theme="default"
                disabled
              >
                使用文档
              </t-button>
              <img
                class="feature-img-light"
                src="../../assets/icon/mini-program.png"
              />
              <img
                class="feature-img-dark"
                src="../../assets/icon/mini-program.png"
              />
            </div>
            <div class="card">
              <p class="card-title">Mobile 移动端</p>
              <div class="card-subtitle"><span>Mobile Vue</span><t-tag>待上线</t-tag></div>
              <t-button
                class="card-btn"
                variant="outline"
                theme="default"
                disabled
              >
                预览
              </t-button>
              <t-button
                class="card-btn"
                variant="outline"
                theme="default"
                disabled
              >
                使用文档
              </t-button>
              <img class="feature-img-light" src="../../assets/icon/vue.png" />
              <img class="feature-img-dark" src="../../assets/icon/vue.png" />
            </div>
            <div class="card">
              <p class="card-title">Mobile 移动端</p>
              <div class="card-subtitle"><span>Mobile React</span><t-tag>待上线</t-tag></div>
              <t-button
                class="card-btn"
                variant="outline"
                theme="default"
                disabled
              >
                预览
              </t-button>
              <t-button
                class="card-btn"
                variant="outline"
                theme="default"
                disabled
              >
                使用文档
              </t-button>
              <img
                class="feature-img-light"
                src="../../assets/icon/react.png"
              />
              <img class="feature-img-dark" src="../../assets/icon/react.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="feature">
        <div class="feature-left">
          <div class="feature-title">开箱即用</div>
          <div class="feature-detail">
            配套数据 Mock、项目构建打包和代码格式规范，支持通过 CLI
            工具拉取代码，直接上手开发，不再为琐粹的配置重复劳动。
          </div>
        </div>
        <div class="feature-right">
          <img
            class="feature-img-light"
            src="https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-terminal.png"
          />
          <img
            class="feature-img-dark"
            src="https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-terminal.png"
          />
        </div>
      </div>
      <div class="feature">
        <div class="feature-left">
          <div class="feature-title">深耕垂直领域</div>
          <div class="feature-detail">
            与腾讯内部包括地图、安全、政务、智慧零售等多个业务团队合作， 基于
            TDesign 基础组件，提供建设丰富多样，具有业务属性的页面模版
          </div>
        </div>
        <div class="feature-right">
          <img
            class="feature-img-light"
            src="https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-industry-light.png"
          />
          <img
            class="feature-img-dark"
            src="https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-industry-dark.png"
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
  --card-padding: 28px;
  --card-flex-direction-column: row;
  --card-subtitle-flex-direction: row;
  --card-subtitle-flex-align: center;
  --container-title-size: 36px;
  --container-title-line-height: 44px;
  --feature-flex-direction-column: row;
  --feature-content-max-width: 1356px;
  --content-feature-left-max-width: 424px;
  --content-feature-right-max-width: 65%;
  --card-img-top: 32px;
  --card-img-right: 32px;
  --feature-gap: 48px;
  --feature-title-font-size: 48px;
  --feature-title-line-height: 56px;
  --container-context-font-size: 14px;
  --container-context-line-height: 22px;

  --banner-title-font-size: 72px;
  --banner-subtitle-font-size: 36px;
  --banner-title-line-height: 84px;
  --banner-subtitle-line-height: 50px;
  --banner-title-margin-bottom: 120px;
  --banner-content-padding: 180px 48px 96px;
  --banner-subtitle-margin-top: 24px;
  --content-feature-padding-left-right: 80px;
  --homepage-banner-title-color: #000000;
  --homepage-banner-color: #fafafa;
  --homepage-banner-size: 720px;
  --card-container-context-width: 800px;
  --card-container-margin-top: 96px;
  --card-width: 405.33px;
  --card-margin-left-right: 5px;
  --card-margin-top-down: 0px;
  --card-container-padding-left-right: 36px;
  --card-background-image: url("https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-web-light.png");
  --card-mobile-background-image: url("https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-mobile-light.png");
  --card-background-color: #f9f9fb;
  --homepage-banner-image: url("https://tdesign.gtimg.com/tdesign-pro/doc/homepage-banner-bg-light.png");
  --btn-padding-left-right: 24px;
  --card-background-position: right center;
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
  --card-background-image: url("https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-web-dark.png");
  --card-mobile-background-image: url("https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-mobile-dark.png");
  --card-background-color: #2c2c2c;
  --homepage-banner-image: url("https://tdesign.gtimg.com/tdesign-pro/doc/homepage-banner-bg-dark.png");

  .feature-img-light {
    display: none;
  }

  .feature-img-dark {
    display: block;
  }
}

@media screen and (max-width: 1300px) {
  .container {
    --card-subtitle-flex-align: flex-start;
    --card-subtitle-flex-direction: column;
  }
}
@media screen and (max-width: 1200px) {
  .container {
    --card-padding: 20px;
    --card-img-top: 24px;
    --card-img-right: 24px;
    --btn-padding-left-right: 16px;
    --card-flex-direction-column: row;
    --feature-flex-direction-column: column;
    --feature-content-max-width: 888px;
    --content-feature-left-max-width: 100%;
    --content-feature-right-max-width: 100%;
    --inner-padding-top-bottom: 24px;
    --feature-margin-top-bottom: 80px;
    --banner-content-padding: 180px 48px 96px;
    --homepage-banner-size: 640px;
    --feature-gap: 32px;
    --feature-title-font-size: 36px;
    --feature-title-line-height: 42px;
  }
}

@media screen and (max-width: 1100px) {
  .container {
    --card-padding: 16px;
    --card-img-top: 16px;
    --card-img-right: 16px;
    --feature-content-max-width: 888px;
    --content-feature-left-max-width: 100%;
    --content-feature-right-max-width: 100%;
    --inner-padding-top-bottom: 24px;
    --feature-margin-top-bottom: 80px;
    --feature-gap: 32px;
    --feature-title-font-size: 36px;
    --feature-title-line-height: 42px;
    --btn-padding-left-right: 12px;
  }
}

@media screen and (max-width: 1000px) {
  :root[theme-mode="dark"] {
    --card-background-image: url("https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-web-dark.png");
    --card-mobile-background-image: url("https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-mobile-dark.png");
  }
  :root[theme-mode="light"] {
    --card-background-image: url("https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-web-light.png");
    --card-mobile-background-image: url("https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-mobile-light.png");
  }
  .container {
    --card-flex-direction-column: column;
    --feature-flex-direction-column: column;
    --card-img-top: calc(50% - 36px);
    --container-title-size: 32px;
    --container-title-line-height: 40px;
    --banner-title-font-size: 64px;
    --banner-subtitle-font-size: 32px;
    --banner-title-margin-bottom: 48px;
    --content-feature-padding-left-right: 48px;
    --homepage-banner-size: 560px;
    --banner-content-padding: 180px 48px 80px;
    --banner-subtitle-margin-top: 16px;
    --banner-title-line-height: 75px;
    --banner-subtitle-line-height: 44px;
    --card-margin-left-right: 0px;
    --card-margin-top-down: 5px;
    --btn-padding-left-right: 16px;
    --card-background-position: center center;
    --card-container-margin-top: 48px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    --content-feature-padding-left-right: 24px;
    --feature-margin-top-bottom: 60px;
    --container-title-size: 24px;
    --container-title-line-height: 32px;
    --banner-title-font-size: 60px;
    --banner-subtitle-font-size: 28px;
    --banner-content-padding: 180px 24px 60px;
    --banner-title-line-height: 70px;
    --banner-subtitle-line-height: 39px;
    --card-container-context-width: 500px;
    --card-img-top: 30px;
    --btn-padding-left-right: 12px;
  }
}

@media screen and (max-width: 548px) {
  .container {
    --card-img-top: 16px;
    --card-img-right: 16px;
    --container-title-size: 20px;
    --container-title-line-height: 28px;
    --banner-title-font-size: 40px;
    --banner-subtitle-font-size: 24px;
    --banner-title-line-height: 56px;
    --banner-subtitle-line-height: 33px;
    --card-container-context-width: 300px;
    --card-container-padding-left-right: 20px;
    --homepage-banner-size: 480px;
    --banner-content-padding: 180px 24px 60px;
    --btn-padding-left-right: 12px;
  }
}

@media screen and (max-width: 330px) {
  .container {
    --card-container-padding-left-right: 12px;
    --banner-title-font-size: 30px;
    --banner-content-padding: 180px 24px 60px;
    --btn-padding-left-right: 8px;
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

    .card-container::nth-of-type(1) {
      margin-top: 0px;
    }
  }

  &-title {
    font-family: "TencentSans-W7";
    font-size: var(--banner-title-font-size);
    line-height: var(--banner-title-line-height);
    color: var(--homepage-banner-title-color);
  }

  &-subtitle {
    font-style: normal;
    font-weight: normal;
    font-family: "TencentSans-W7";
    font-size: var(--banner-subtitle-font-size);
    line-height: var(--banner-subtitle-line-height);
    margin-top: var(--banner-subtitle-margin-top);
    color: var(--text-secondary);
    margin-bottom: var(--banner-title-margin-bottom);
  }
}

.card-container {
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  border-radius: 9px;
  padding: 36px var(--card-container-padding-left-right);
  opacity: 1;
  border: 1px solid var(--component-border);
  box-shadow: 0 50px 100px -12px rgba(0, 0, 0, 0.1),
    0 30px 60px -30px rgba(0, 0, 0, 0.15);
  background: var(--card-background-image) no-repeat
    var(--card-background-color);
  background-size: auto 100%;
  background-position: var(--card-background-position);
  
  &:last-child {
    margin-top: var(--card-container-margin-top);
  }

  .card-container-title {
    opacity: 1;
    font-family: "TencentSans-W7";
    font-size: var(--container-title-size);
    line-height: var(--container-title-line-height);
    color: var(--homepage-banner-title-color);
    font-weight: 700;
    font-family: "PingFang SC";
    text-align: left;
  }

  .card-container-context {
    max-width: var(--card-container-context-width);
    font-size: var(--container-context-font-size);
    line-height: var(--container-context-line-height);
    margin-top: 16px;
    margin-bottom: 24px;
  }

  .row {
    display: flex;
    flex-direction: var(--card-flex-direction-column);
  }
}

.card-container--mobile {
  background: var(--card-mobile-background-image) no-repeat
    var(--card-background-color);
  background-size: auto 100%;
  background-position: var(--card-background-position);
}

.card {
  margin: var(--card-margin-top-down) var(--card-margin-left-right)
    var(--card-margin-top-down) var(--card-margin-left-right);
  position: relative;
  background: var(--bg-color-card);
  border-radius: 6px;
  padding: var(--card-padding);
  flex: 1;

  &-title {
    font-size: 14px;
    line-height: 22px;
    margin: 0px;
    color: var(--text-placeholder);
  }

  &-subtitle {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
    margin: 0px;
    font-weight: 600;
    color: var(--text-primary);
    display: flex;
    align-items: var(--card-subtitle-flex-align);
    flex-direction: var(--card-subtitle-flex-direction);
    > span:first-child {
      margin-right: 8px;
    }
    .t-tag {
      font-weight: normal;
      
    }
  }

  &-btn {
    display: inline-block;
    margin: 23px 8px 8px 0;
    padding: 8px var(--btn-padding-left-right);
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
    right: var(--card-img-right);
    width: 48px;
    height: 48px;
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
    // box-shadow: 0px 50px 100px -12px rgba(0, 0, 0, 0.05),
    //   0px 30px 60px -30px rgba(0, 0, 0, 0.1);
    // border-radius: 6px;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
      border-radius: 9px;
      border: 1px solid var(--component-border);
      box-shadow: 0 50px 100px -12px rgba(0, 0, 0, 0.1),
        0 30px 60px -30px rgba(0, 0, 0, 0.15);
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
