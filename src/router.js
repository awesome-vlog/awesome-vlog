import Vue from "vue";
import Router from "vue-router";
import BlogPage from "./views/BlogPage.vue";
import HomePage from "./views/HomePage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogPage
    }
  ]
});
