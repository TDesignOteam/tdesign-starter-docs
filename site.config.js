/* eslint-disable */
export const vueDocsConfig = {
  docs: [
    {
      title: "上手",
      type: "quick-start", // 普通文档
      children: [
        {
          title: "快速开始",
          name: "get-started",
          path: "/starter/docs/vue/get-started",
          component: () => import("@docs/vue/get-started.md"),
        },
      ],
    },
    {
      title: "开发",
      name: "develop",
      children: [
        {
          title: "进入开发",
          name: "develop",
          path: "/starter/docs/vue/develop",
          component: () => import("@docs/vue/develop.md"),
        },
        {
          title: "开发规范",
          name: "develop-rules",
          path: "/starter/docs/vue/develop-rules",
          component: () => import("@docs/vue/develop-rules.md"),
        },
        {
          title: "请求与数据",
          name: "develop-request",
          path: "/starter/docs/vue/request-data",
          component: () => import("@docs/vue/request-data.md"),
        },
        {
          title: "路由与菜单",
          name: "router-menu",
          path: "/starter/docs/vue/router-menu",
          component: () => import("@docs/vue/router-menu.md"),
        },
        {
          title: "个性化配置",
          name: "custom-config",
          path: "/starter/docs/vue/custom-config",
          component: () => import("@docs/custom-config.md"),
        },
        {
          title: "使用 Design Token",
          name: "design-token",
          path: "/starter/docs/vue/design-token",
          component: () => import("@docs/design-token.md"),
        },
        {
          title: "样式与静态资源",
          name: "develop-style",
          path: "/starter/docs/vue/style",
          component: () => import("@docs/vue/styles-and-resources.md"),
        },
      ],
    },
    {
      title: "构建",
      name: "build",
      children: [
        {
          title: "项目构建",
          name: "config",
          path: "/starter/docs/vue/build",
          component: () => import("@docs/build.md"),
        },
      ],
    },
    {
      title: "部署",
      name: "deploy",
      children: [
        {
          title: "项目部署",
          name: "deploy-docker",
          path: "/starter/docs/vue/deploy",
          component: () => import("@docs/vue/deploy.md"),
        },
      ],
    },
    {
      title: "支持",
      name: "support",
      children: [
        {
          title: "问题排查与反馈",
          name: "support-feedback",
          path: "/starter/docs/vue/feedback",
          component: () => import("@docs/feedback.md"),
        },
        {
          title: "社区链接",
          name: "community-link",
          path: "/starter/docs/vue/community-link",
          component: () => import("@docs/community.md"),
        },
        {
          title: "共建Starter",
          name: "join-us",
          path: "/starter/docs/vue/join-us",
          component: () => import("@docs/join-us.md"),
        },
      ],
    },
  ],
};

export const reactDocsConfig = {
  docs: [
    {
      title: "上手",
      type: "quick-start", // 普通文档
      children: [
        {
          title: "快速开始",
          name: "get-started",
          path: "/starter/docs/react/get-started",
          component: () => import("@docs/react/get-started.md"),
        },
      ],
    },
    {
      title: "开发",
      name: "develop",
      children: [
        {
          title: "进入开发",
          name: "develop",
          path: "/starter/docs/react/develop",
          component: () => import("@docs/react/develop.md"),
        },
        {
          title: "开发规范",
          name: "develop-rules",
          path: "/starter/docs/react/develop-rules",
          component: () => import("@docs/react/develop-rules.md"),
        },
        {
          title: "请求与数据",
          name: "develop-request",
          path: "/starter/docs/react/request-data",
          component: () => import("@docs/react/request-data.md"),
        },
        {
          title: "路由与菜单",
          name: "router-menu",
          path: "/starter/docs/react/router-menu",
          component: () => import("@docs/react/router-menu.md"),
        },
        {
          title: "个性化配置",
          name: "custom-config",
          path: "/starter/docs/react/custom-config",
          component: () => import("@docs/custom-config.md"),
        },
        {
          title: "使用 Design Token",
          name: "design-token",
          path: "/starter/docs/react/design-token",
          component: () => import("@docs/design-token.md"),
        },
        {
          title: "样式与静态资源",
          name: "develop-style",
          path: "/starter/docs/react/style",
          component: () => import("@docs/react/styles-and-resources.md"),
        },
      ],
    },
    {
      title: "构建",
      name: "build",
      children: [
        {
          title: "项目构建",
          name: "config",
          path: "/starter/docs/react/build",
          component: () => import("@docs/build.md"),
        },
      ],
    },
    {
      title: "部署",
      name: "deploy",
      children: [
        {
          title: "项目部署",
          name: "deploy-docker",
          path: "/starter/docs/react/deploy",
          component: () => import("@docs/react/deploy.md"),
        },
      ],
    },
    {
      title: "支持",
      name: "support",
      children: [
        {
          title: "问题排查与反馈",
          name: "support-feedback",
          path: "/starter/docs/react/feedback",
          component: () => import("@docs/feedback.md"),
        },
        {
          title: "社区链接",
          name: "community-link",
          path: "/starter/docs/react/community-link",
          component: () => import("@docs/community.md"),
        },
        {
          title: "共建Starter",
          name: "join-us",
          path: "/starter/docs/react/join-us",
          component: () => import("@docs/join-us.md"),
        },
      ],
    },
  ],
};

export const vue3DocsConfig = {
  docs: [
    {
      title: "上手",
      type: "quick-start", // 普通文档
      children: [
        {
          title: "快速开始",
          name: "get-started",
          path: "/starter/docs/vue-next/get-started",
          component: () => import("@docs/vue-next/get-started.md"),
        },
      ],
    },
    {
      title: "开发",
      name: "develop",
      children: [
        {
          title: "进入开发",
          name: "develop",
          path: "/starter/docs/vue-next/develop",
          component: () => import("@docs/vue-next/develop.md"),
        },
        {
          title: "开发规范",
          name: "develop-rules",
          path: "/starter/docs/vue-next/develop-rules",
          component: () => import("@docs/vue-next/develop-rules.md"),
        },
        {
          title: "路由与菜单",
          name: "router-menu",
          path: "/starter/docs/vue-next/router-menu",
          component: () => import("@docs/vue-next/router-menu.md"),
        },
        {
          title: "权限控制",
          name: "permission-control",
          path: "/starter/docs/vue-next/permission-control",
          component: () => import("@docs/vue-next/permission-control.md"),
        },
        {
          title: "请求与数据",
          name: "develop-request",
          path: "/starter/docs/vue-next/request-data",
          component: () => import("@docs/vue-next/request-data.md"),
        },
        {
          title: "个性化配置",
          name: "custom-config",
          path: "/starter/docs/vue-next/custom-config",
          component: () => import("@docs/custom-config.md"),
        },
        {
          title: "使用 Design Token",
          name: "design-token",
          path: "/starter/docs/vue-next/design-token",
          component: () => import("@docs/design-token.md"),
        },
        {
          title: "样式与静态资源",
          name: "develop-style",
          path: "/starter/docs/vue-next/style",
          component: () => import("@docs/vue-next/styles-and-resources.md"),
        },
      ],
    },
    {
      title: "构建",
      name: "build",
      children: [
        {
          title: "项目构建",
          name: "config",
          path: "/starter/docs/vue-next/build",
          component: () => import("@docs/build.md"),
        },
      ],
    },
    {
      title: "部署",
      name: "deploy",
      children: [
        {
          title: "项目部署",
          name: "deploy-docker",
          path: "/starter/docs/vue-next/deploy",
          component: () => import("@docs/vue-next/deploy.md"),
        },
      ],
    },
    {
      title: "支持",
      name: "support",
      children: [
        {
          title: "问题排查与反馈",
          name: "support-feedback",
          path: "/starter/docs/vue-next/feedback",
          component: () => import("@docs/feedback.md"),
        },
        {
          title: "社区链接",
          name: "community-link",
          path: "/starter/docs/vue-next/community-link",
          component: () => import("@docs/community.md"),
        },
        {
          title: "共建Starter",
          name: "join-us",
          path: "/starter/docs/vue-next/join-us",
          component: () => import("@docs/join-us.md"),
        },
      ],
    },
  ],
};
