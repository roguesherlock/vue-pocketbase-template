import { createRouter, createWebHistory } from "vue-router"
import BaseLayout from "@/layouts/BaseLayout.vue"
import HomeView from "@/pages/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/pages/About.vue"),
    },
  ],
})

router.beforeEach((to) => {
  if (!to.meta.layout) {
    to.meta.layout = BaseLayout
  }
})

export default router
