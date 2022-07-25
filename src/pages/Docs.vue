<template>
  <td-doc-layout>
    <td-header ref="tdHeader" slot="header"></td-header>
    <td-doc-aside ref="tdDocAside" title="TDesign Starter"> </td-doc-aside>

    <router-view :style="contentStyle" @loaded="contentLoaded" />
  </td-doc-layout>
</template>

<script>
import {
  vueDocsConfig,
  reactDocsConfig,
  vue3DocsConfig,
} from "../../site.config.js";
const docType = window.location.href.match(/\/docs\/([^<>]*)\//)?.[1] || "vue";

const docsMap = {
  vue: vueDocsConfig,
  react: reactDocsConfig,
  "vue-next": vue3DocsConfig,
};

const { docs: routerList } = JSON.parse(
  JSON.stringify(docsMap[docType]).replace(/component:.+/g, "")
);

export default {
  data() {
    return {
      loaded: false,
    };
  },

  computed: {
    contentStyle() {
      const { loaded } = this;
      return { visibility: loaded ? "visible" : "hidden" };
    },
  },

  mounted() {
    this.$refs.tdHeader.framework = "vue";
    this.$refs.tdDocAside.routerList = routerList;
    this.$refs.tdDocAside.onchange = ({ detail }) => {
      if (this.$route.path === detail) return;
      this.loaded = false;
      this.$router.push(detail);
      window.scrollTo(0, 0);
    };
  },

  methods: {
    contentLoaded(callback) {
      requestAnimationFrame(() => {
        this.loaded = true;
        callback();
      });
    },
  },
};
</script>
