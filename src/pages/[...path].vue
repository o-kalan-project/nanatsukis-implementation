<script setup lang="ts">
import PageTitle from "@/components/PageTitle.vue";
import { useHead } from "@unhead/vue";

useHead({
  title: "404 | 応歌ラン",
});
</script>
<template>
  <section class="relative flex h-full">
    <div class="p-4 w-full mx-auto">
      <PageTitle>404</PageTitle>
      <p class="text-xl">お探しのページが見つかりませんでした。</p>
    </div>
  </section>
</template>
