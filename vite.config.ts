import fs from "fs/promises";
import vue from "@vitejs/plugin-vue";
import fonts from "unplugin-fonts/vite";
import vueRouter from "unplugin-vue-router/vite";
import { imagetools } from "vite-imagetools";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueRouter(),
    vue(),
    imagetools(),
    fonts({
      google: {
        families: [
          {
            name: "Zen Kaku Gothic New",
            styles: "wght@400;500;700",
          },
        ],
      },
    }),
    {
      name: "vite-plugin-copy-index-html",
      apply: "build",
      enforce: "post",
      // GitHub Pagesはhtmlファイルがページ毎に必要なので、index.htmlをコピーしてページ毎に生成する。
      async generateBundle(_, bundle) {
        const indexHtml = bundle["index.html"];
        if (!indexHtml || indexHtml.type !== "asset") {
          throw new Error("index.html not found");
        }
        const routesFile = await fs.readFile(
          `${import.meta.dirname}/typed-router.d.ts`,
          "utf-8",
        );
        const routeLines =
          routesFile.match(/RouteNamedMap \{(.+)  \}/ms)?.[1] ??
          (() => {
            throw new Error("RouteNamedMap not found");
          })();
        const routes = routeLines
          .split(",\n")
          .map((line) => {
            const path = line.match(/'(.+)': RouteRecordInfo</)?.[1];
            if (!path) {
              return undefined;
            }
            return path;
          })
          .filter((route) => route != undefined);
        if (
          routes.some((route) => route.includes("[") && route !== "/[...path]")
        ) {
          throw new Error("Dynamic route not supported");
        }
        for (const route of routes) {
          if (route === "/") {
            continue;
          }
          this.emitFile({
            fileName: `${route === "/[...path]" ? "404" : route.slice(1)}.html`,
            type: "asset",
            source: indexHtml.source,
          });
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  base: "/nanatsukis-implementation/",
});
