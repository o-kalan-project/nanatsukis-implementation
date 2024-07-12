<script setup lang="ts">
import portrait from "@/assets/portrait.webp";
</script>
<template>
  <section class="relative h-full box-border pt-4 flex mx-auto lg:justify-end">
    <div class="pl-4 lg:w-2/5 flex justify-center flex-col">
      <h1 class="text-theme">応歌ランとは</h1>
      <p class="text-xl">
        応歌ラン（おうか らん）とは、2024年6月8日のニコニコ動画サイバー攻撃事件を発端とし、ニコニコ動画を応援することを目的に有志が集まり制作したオリジナルキャラクターです。
      </p>
    </div>
    <div class="relative lg:w-1/3 contain-strict">
      <img
        :src="portrait"
        class="ml-auto h-full"
        alt="応歌ラン"
      />
    </div>
  </section>
</template>
