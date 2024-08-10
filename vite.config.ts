import yaml from '@rollup/plugin-yaml';
import vue from "@vitejs/plugin-vue";
import vueRouter from "unplugin-vue-router/vite";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

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
    yaml(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },

  base: "/",
});
