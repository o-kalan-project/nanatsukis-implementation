<script setup lang="ts">
import { marked } from "marked";

const props = defineProps<{
  source: string;
}>();

// headingを一段階下げる
const html = (
  marked.parse(props.source, {
    breaks: true,
  }) as string
).replaceAll(/<(\/?)h(\d)>/g, (_, p1, p2) => {
  return `<${p1}h${parseInt(p2) + 1}>`;
});
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
    list-style-type: "-";
    @apply ml-2 pl-2;
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
}
</style>
