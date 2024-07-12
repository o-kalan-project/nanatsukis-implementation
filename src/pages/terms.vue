<script setup lang="ts">
import terms from "@/assets/terms.md?raw";
import { marked } from "marked";

const html = (marked.parse(terms) as string).replaceAll("h1>", "h2>");

defineExpose({
  title: "利用規約",
});
</script>
<template>
  <section class="relative flex h-full">
    <div class="p-4 w-full lg:w-2/3 flex-col mx-auto">
      <h1 class="page-title">利用規約</h1>

      <div v-html="html" class="markdown" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/style.scss";

.markdown {
  :deep(h2) {
    @apply section-title mt-2;
  }
  :deep(li) {
    list-style-type: "-";
    @apply ml-2 pl-2;
  }
  :deep(blockquote) {
    @apply py-1 my-1 pl-2 border-l-2 border-slate-500 text-slate-700;
  }
}
</style>
