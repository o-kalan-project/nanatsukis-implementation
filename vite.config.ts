import vue from "@vitejs/plugin-vue";
import fonts from "unplugin-fonts/vite";
import vueRouter from "unplugin-vue-router/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueRouter(),
    vue(),
    fonts({
      google: {
        families: [
          {
            name: "Zen Kaku Gothic New",
            styles: "wght@400;700",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  base: "/nanatsukis-implementation/",
});
