<script setup lang="ts">
import { Marked, Parser, Renderer } from "marked";

const props = defineProps<{
  source: string;
}>();

const marked = new Marked();
const originalRenderer = new Renderer();
originalRenderer.parser = new Parser();

marked.use({
  breaks: true,
  renderer: {
    // headingを一段階下げる
    heading({ text, depth }) {
      return `<h${depth + 1}>${text}</h${depth + 1}>`;
    },
    // budouxを適用する
    text(token) {
      const html = originalRenderer.text(token);
      return `<budoux-ja>${html}</budoux-ja>`;
    },
    table(table) {
      // /kvtable の実装
      if (!(table.header[0].text === "/kvtable" && table.header.length === 2)) {
        return originalRenderer.table(table);
      }
      let result = "<table class='kvtable'>";
      for (const row of table.rows) {
        result += "<tr>";
        result += `<td class="key">${row[0].text}</td>`;
        result += `<td class="value">${row[1].text}</td>`;
        result += "</tr>";
      }
      result += "</table>";
      return result;
    },
  },
});

const html = marked.parse(props.source) as string;
</script>
<template>
  <div v-html="html" class="markdown" />
</template>
<style lang="scss">
@use "@/style.scss";

.markdown {
  h2 {
    @apply section-title mt-4 !border-theme-base !text-theme-base;
  }
  h3 {
    @apply sub-section-title mt-4;
  }
  li {
    list-style-type: disc;
    @apply ml-4;
    &::marker {
      color: theme("colors.theme.base");
    }
  }
  blockquote {
    @apply my-1 pl-2 border-l-2 border-slate-500 text-slate-700;
  }
  p {
    @apply my-2;
  }
  a {
    @apply link;
  }
  strong {
    @apply text-theme-base theme-shadow;
  }

  .kvtable {
    .key {
      @apply font-medium text-theme-base text-right min-w-40;

      &:after {
        content: "：";
      }
    }
  }
}
</style>
