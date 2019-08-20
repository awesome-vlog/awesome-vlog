import Vue from "vue";
import Router from "vue-router";
import BlogPage from "./views/BlogPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/blog/:sectionSlug",
      name: "blog",
      component: BlogPage
    }
  ]
});
