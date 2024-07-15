<script setup lang="ts">
import Markdown from '@/components/Markdown.vue';
import utau from '@/contents/utau.md?raw';
defineExpose({
  title: "UTAU音源",
});
</script>
<template>
  <section class="relative flex h-full">
    <div class="p-4 w-full lg:w-2/3 flex-col mx-auto">
      <h1 class="page-title">UTAU音源</h1>
      <Markdown :source="utau" />
    </div>
  </section>
</template>
