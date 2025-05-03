import "@fontsource/zen-kaku-gothic-new/400.css";
import "@fontsource/zen-kaku-gothic-new/500.css";
import "@fontsource/zen-kaku-gothic-new/700.css";
import "budoux"
import "./style.scss";
import "primeicons/primeicons.css";
import { handleHotUpdate, routes } from "vue-router/auto-routes";
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";

export const createApp = ViteSSG(
  App,
  {
    base: import.meta.env.BASE_URL,
    routes: [
      ...routes,
      // [...path] を404として認識させるハック
      {
        ...routes.find((route) => route.name === "/[...path]")!,
        path: "/404",
        name: "/404",
      },
    ],
    scrollBehavior() {
      return {
        top: 0,
        behavior: "smooth",
      };
    },
  },
  ({ router }) => {
    handleHotUpdate(router);
  },
);
