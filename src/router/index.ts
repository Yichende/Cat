import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: () => import("@/pages/Gallery.vue"),
    },
  ],
});

export default router;