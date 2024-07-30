import vue from "@vitejs/plugin-vue";
import vueRouter from "unplugin-vue-router/vite";
import { imagetools } from "vite-imagetools";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueRouter(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("budoux-"),
        },
      },
    }),
    imagetools(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },

  base: "/nanatsukis-implementation/",
});
