<script setup lang="ts">
import Markdown from "@/components/Markdown.vue";
import PageTitle from "@/components/PageTitle.vue";
import profile from "@/contents/profile.md?raw";
import { useHead } from "@unhead/vue";

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
      <iframe
        src="https://embed.nicovideo.jp/watch/sm43887822"
        class="max-md:w-full lg:h-[40vh] mx-auto aspect-video"
      />
      <Markdown :source="profile" />
    </main>
  </section>
</template>
