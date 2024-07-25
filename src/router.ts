import { createRouter, createWebHistory } from "vue-router/auto";
import { handleHotUpdate, routes } from "vue-router/auto-routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});
if (import.meta.hot) {
  handleHotUpdate(router);
}

export default router;
