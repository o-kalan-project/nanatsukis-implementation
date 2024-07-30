<script setup lang="ts">
import PageTitle from "@/components/PageTitle.vue";
import { useHead } from "@unhead/vue";
import history from "@/contents/history.md?raw";
import Markdown from "@/components/Markdown.vue";

useHead({
  title: "年表 | 応歌ラン",
  meta: [
    {
      name: "description",
      content: "応歌ランの歴史を振り返ります。",
    },
  ],
});
</script>
<template>
  <section class="relative flex h-full">
    <main class="main-content">
      <PageTitle>年表</PageTitle>

      <Markdown :source="history" />
    </main>
  </section>
</template>
