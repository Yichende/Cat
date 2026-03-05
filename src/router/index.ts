import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: () => import("@/pages/Gallery.vue"),
    },
  ],
});

export default router;