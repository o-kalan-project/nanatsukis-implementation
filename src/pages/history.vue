<script setup lang="ts">
import PageTitle from "@/components/PageTitle.vue";
import { useHead } from "@unhead/vue";

const changelogs: { date: string; content: string }[] = [
  {
    date: "2024/07/12",
    content: "仮で作った",
  },
];

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

      <div class="flex flex-col gap-2">
        <div v-for="changelog in changelogs">
          <h2 class="section-title">{{ changelog.date }}</h2>
          <p class="text-md">{{ changelog.content }}</p>
        </div>
      </div>
    </main>
  </section>
</template>
