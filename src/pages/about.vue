<script setup lang="ts">
import { useHead } from "@unhead/vue";
import Markdown from "@/components/Markdown.vue";
import profile from "@/contents/profile.md?raw";

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
    <div class="p-4 w-full lg:w-2/3 flex-col mx-auto">
      <h1 class="page-title">このキャラクターについて</h1>
      <Markdown :source="profile" />
    </div>
  </section>
</template>
