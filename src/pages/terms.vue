<script setup lang="ts">
import { useHead } from "@unhead/vue";
import Markdown from '@/components/Markdown.vue';
import terms from '@/contents/terms.md?raw';

useHead({
  title: "利用規約 | 応歌ラン",
});
</script>
<template>
  <section class="relative flex h-full">
    <div class="p-4 w-full lg:w-2/3 flex-col mx-auto">
      <h1 class="page-title">利用規約</h1>

      <Markdown :source="terms" />
    </div>
  </section>
</template>
