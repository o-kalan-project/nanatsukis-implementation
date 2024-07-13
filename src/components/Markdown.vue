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
  useNewRenderer: true,
  renderer: {
    heading({ text, depth }) {
      console.log(text, depth);
      return `<h${depth + 1}>${text}</h${depth + 1}>`;
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

// headingを一段階下げる
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
    list-style-type: "\2022";
    @apply ml-2 pl-2;
    &::marker {
      color: theme("colors.theme.base");
      font-weight: bold;
      @apply theme-shadow;
    }
  }
  blockquote {
    @apply my-1 pl-2 border-l-2 border-slate-500 text-slate-700;
  }
  p {
    @apply my-2;
  }
  a {
    @apply text-theme-500 hover:text-theme-700 underline;
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
