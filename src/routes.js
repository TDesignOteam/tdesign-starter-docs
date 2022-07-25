import {
  vueDocsConfig,
  reactDocsConfig,
  vue3DocsConfig,
} from "../site.config.js";
import HomePage from "./pages/HomePage.vue";
import Docs from "./pages/Docs.vue";

const docType = window.location.href.match(/\/docs\/([^<>]*)\//)?.[1] || "vue";

const docsMap = {
  vue: vueDocsConfig.docs,
  react: reactDocsConfig.docs,
  "vue-next": vue3DocsConfig.docs,
};
const docs = docsMap[docType];

function getDocsRoutes(docs, type) {
  let docsRoutes = [];
  let docRoute;

  docs.forEach((item) => {
    const docType = item.type || type;
    let { children } = item;
    if (item.type === "component") {
      children = item.children.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    }
    if (children) {
      docsRoutes = docsRoutes.concat(getDocsRoutes(children, docType));
    } else {
      docRoute = { ...item };
      docsRoutes.push(docRoute);
    }
  });
  return docsRoutes;
}

const routes = [
  {
    path: "/starter",
    component: HomePage,
  },
  {
    path: "/starter/docs",
    component: Docs,
    children: getDocsRoutes(docs),
  },
  {
    path: "*",
    redirect: "/starter",
  },
];
export default routes;
