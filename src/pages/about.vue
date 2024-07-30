<script setup lang="ts">
import { useHead } from "@unhead/vue";
import Markdown from "@/components/Markdown.vue";
import profile from "@/contents/profile.md?raw";
import PageTitle from "@/components/PageTitle.vue";

useHead({
  title: "このキャラクターについて | 応歌ラン",
  meta: [
    {
      name: "description",
      content: "応歌ランについての情報を掲載しています。",
    },
  ],
});
</script>
<template>
  <section class="relative flex h-full">
    <main class="main-content">
      <PageTitle>このキャラクターについて</PageTitle>
      <Markdown :source="profile" />
    </main>
  </section>
</template>
