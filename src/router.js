import Vue from "vue";
import Router from "vue-router";
import BlogPage from "./views/BlogPage.vue";
import PortfolioPage from "./views/PortfolioPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "/",
      component: PortfolioPage
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogPage
    }
  ]
});
