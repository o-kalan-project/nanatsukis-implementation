<script setup lang="ts">
import favicon from "@/assets/favicon.webp";
import portrait from "@/assets/portrait.webp?h=480;960;1080&as=srcset&imagetools";
import PageTitle from "@/components/PageTitle.vue";
import Paragraph from "@/components/Paragraph.vue";
import { useHead } from "@unhead/vue";
import { onMounted, ref } from "vue";

const videoId = ref<string | undefined>();
onMounted(() => {
  // 動画ガチャ
  const videoIds = ["sm43887822"];
  const randomIndex = Math.floor(Math.random() * videoIds.length);
  videoId.value = videoIds[randomIndex];
});

useHead({
  title: "応歌ラン",
  meta: [
    {
      name: "description",
      content:
        "応歌ラン（おうか らん）とは、2024年6月8日のニコニコ動画サイバー攻撃事件を発端とし、ニコニコ動画を応援することを目的に有志が集まり制作したオリジナルキャラクターです。",
    },
    {
      property: "og:image",
      content: favicon,
    },
    {
      name: "twitter:card",
      content: "summary",
    },
  ],
});
</script>
<template>
  <section
    class="relative h-[calc(100vh_-_6rem)] box-border pt-4 flex mx-auto lg:justify-end"
  >
    <div
      :class="[
        'flex justify-center flex-col',
        'lg:pl-4 lg:w-2/5',
        'max-lg:w-full max-lg:px-4',
        'max-md:-mt-20',
        'md:-mt-28',
      ]"
    >
      <PageTitle>応歌ランとは</PageTitle>
      <Paragraph class="text-xl">
        応歌ラン（おうか
        らん）とは、2024年6月8日のニコニコ動画サイバー攻撃事件を発端とし、ニコニコ動画を応援することを目的に有志が集まり制作したオリジナルキャラクターです。
      </Paragraph>
      <iframe
        :key="videoId"
        :src="videoId && `https://embed.nicovideo.jp/watch/${videoId}`"
        class="mt-2 w-full aspect-video"
      />
    </div>
    <div class="max-lg:hidden lg:w-1/3">
      <img
        :srcset="portrait"
        class="relative w-full h-full object-contain"
        alt="応歌ラン"
      />
    </div>
  </section>
</template>
