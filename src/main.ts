import "@fontsource/zen-kaku-gothic-new/400.css";
import "@fontsource/zen-kaku-gothic-new/500.css";
import "@fontsource/zen-kaku-gothic-new/700.css";
import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import router from "./router.ts";

createApp(App).use(router).mount("#app");
