<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useHead } from "@unhead/vue";
import { ref } from "vue";
import PageTitle from "@/components/PageTitle.vue";
import Paragraph from "@/components/Paragraph.vue";
import Checkbox from "@/components/Checkbox.vue";
import utauImage from "@/assets/utau.webp?w=250;500;750;1000&as=srcset&imagetools";
import coeiroinkImage from "@/assets/coeiroink.webp?w=250;500;750;1000&as=srcset&imagetools";

useHead({
  title: "素材配布 | 応歌ラン",
  meta: [
    {
      name: "description",
      content: "二次創作素材の配布を行っています。",
    },
  ],
});

const agree = ref(false);

const download = (url: string) => {
  if (!agree.value) return;

  window.open(url, "_blank");
};
</script>
<template>
  <main class="main-content">
    <PageTitle>素材配布</PageTitle>
    <Paragraph> 応歌ランの二次創作素材を配布しています。 </Paragraph>
    <Checkbox v-model="agree">
      <RouterLink to="/terms">利用規約</RouterLink>に同意する
    </Checkbox>

    <div class="flex flex-wrap gap-2 mt-2">
      <article class="card">
        <h2>UTAU音源</h2>
        <img :srcset="utauImage" />
        <div class="flex-grow" />
        <Paragraph>
          UTAUで使える音源です。単独音・連続音を用意しています。
        </Paragraph>
        <div class="download-section">
          <button
            class="button download-button"
            :disabled="!agree"
            @click="download('https://example.com')"
          >
            <budoux-ja>単独音音源をダウンロード</budoux-ja>
          </button>
          <button
            class="button download-button"
            :disabled="!agree"
            @click="download('https://example.com')"
          >
            <budoux-ja>連続音音源をダウンロード</budoux-ja>
          </button>
        </div>
      </article>
      <article class="card">
        <h2>MyCoe</h2>
        <img :srcset="coeiroinkImage" />
        <div class="flex-grow" />
        <Paragraph> Coeiroinkで使える音源です。 </Paragraph>
        <div class="download-section">
          <button
            class="button download-button"
            :disabled="!agree"
            @click="download('https://example.com')"
          >
            ダウンロード
          </button>
        </div>
      </article>
      <article class="card">
        <h2>立ち絵素材</h2>
        <img :srcset="coeiroinkImage" />
        <div class="flex-grow" />
        <Paragraph
          >実況などに使える立ち絵素材です。（TODO：ちゃんとした画像を用意する、YMMとか？）</Paragraph
        >
        <div class="download-section">
          <button
            class="button download-button"
            :disabled="!agree"
            @click="download('https://example.com')"
          >
            ダウンロード
          </button>
        </div>
      </article>
    </div>
  </main>
</template>

<style scoped lang="scss">
.card {
  @apply p-4 bg-white rounded-lg border-2 border-theme-200 w-full lg:w-[calc(50%_-_0.25rem)] flex flex-col gap-2;

  h2 {
    @apply text-theme-base;
  }

  img {
    @apply w-full  drop-shadow-md;
    @apply lg:aspect-video lg:object-contain;
  }

  .download-section {
    @apply flex pt-2 border-theme-200 border-t-[1px] gap-2;
  }

  .download-button {
    @apply whitespace-pre-wrap break-keep;
  }
}
</style>
