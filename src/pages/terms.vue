<script setup lang="ts">
import { useHead } from "@unhead/vue";
import Markdown from '@/components/Markdown.vue';
import terms from '@/contents/terms.md?raw';
import PageTitle from "@/components/PageTitle.vue";

useHead({
  title: "利用規約 | 応歌ラン",
});
</script>
<template>
  <section class="relative flex h-full">
    <main class="main-content">
      <PageTitle>利用規約</PageTitle>

      <Markdown :source="terms" />
    </main>
  </section>
</template>
