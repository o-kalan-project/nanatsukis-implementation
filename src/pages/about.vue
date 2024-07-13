<script setup lang="ts">
import Markdown from "@/components/Markdown.vue";
import profile from "@/contents/profile.md?raw";

defineExpose({
  title: "このキャラクターについて",
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
