<script setup lang="ts">
import { useHead } from "@unhead/vue";

const downloadable = false;

useHead({
  title: "UTAU音源 | 応歌ラン",
  meta: [
    {
      name: "description",
      content: "UTAU音源を配布しています。",
    },
  ],
});
</script>
<template>
  <section class="relative flex h-full">
    <div class="p-4 w-full lg:w-2/3 flex-col mx-auto">
      <h1 class="page-title">UTAU音源</h1>
      配布してるよ～（してない）
      <br />
      <a
        target="_blank"
        :href="
          downloadable
            ? 'https://github.com/o-kalan-project/o-ka-utau/releases/latest/download/o-kalan.zip'
            : undefined
        "
      >
        <button :disabled="!downloadable">ダウンロード</button></a
      >
    </div>
  </section>
</template>
