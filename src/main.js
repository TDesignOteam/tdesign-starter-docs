/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import TDesign from "tdesign-vue";
import routes from "./routes";
import App from "./App.vue";

// import site webcomponents
import "tdesign-site-components";
import "tdesign-site-components/lib/styles/style.css";
import "tdesign-site-components/lib/styles/prism-theme.less";
import "tdesign-site-components/lib/styles/prism-theme-dark.less";

import "tdesign-vue/es/style/index.css";

Vue.use(TDesign);
Vue.use(VueRouter);

Vue.config.ignoredElements = [/^td-/];

const router = new VueRouter({
  mode: process.env.NODE_ENV === "preview" ? "hash" : "history",
  routes,
});

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
