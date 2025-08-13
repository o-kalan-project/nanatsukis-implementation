<script setup lang="ts">
import Checkbox from "@/components/Checkbox.vue";
import PageTitle from "@/components/PageTitle.vue";
import Paragraph from "@/components/Paragraph.vue";
import distributionIndexRaw from "@/contents/distributionIndex.yml";
import { useHead } from "@unhead/vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const distributionIndex = distributionIndexRaw as {
  name: string;
  official?: boolean;
  image: string;
  description: string;
  button: { name: string; url: string; disabled?: boolean }[];
}[];

useHead({
  title: "素材配布 | 応歌ラン",
  meta: [
    {
      name: "description",
      content: "二次創作素材の配布を行っています。",
    },
  ],
});
const base = import.meta.env.BASE_URL;
const agree = ref(false);
</script>
<template>
  <main class="main-content">
    <PageTitle>素材配布</PageTitle>
    <Paragraph> 応歌ランの二次創作素材を配布しています。 </Paragraph>
    <div class="mt-2">
      <Checkbox v-model="agree">
        <RouterLink class="link" to="/terms">利用規約</RouterLink>に同意する
      </Checkbox>
    </div>
    <div class="flex flex-wrap gap-2 mt-2">
      <article class="card" v-for="content in distributionIndex">
        <h2 className="flex">
          <div
            v-if="content.official"
            class="bg-theme-base text-white rounded px-2 grid place-items-center mr-2 text-sm"
            >公式</div
          >
          <budoux-ja>{{ content.name }}</budoux-ja>
        </h2>
        <img :src="`${base}distribution/${content.image}.webp`" />
        <div class="flex-grow" />
        <Paragraph>
          {{ content.description }}
        </Paragraph>
        <div class="download-section">
          <a
            v-for="buttonAttribute in content.button"
            class="button download-button"
            :class="{ disabled: buttonAttribute.disabled || !agree }"
            :href="
              (agree && !buttonAttribute.disabled ? true : undefined) &&
              buttonAttribute.url
            "
            target="_blank"
          >
            <budoux-ja>{{ buttonAttribute.name }}</budoux-ja>
          </a>
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
    @apply w-full drop-shadow-md;
    @apply lg:aspect-video lg:object-contain;
  }

  .download-section {
    @apply flex flex-wrap pt-2 border-theme-200 border-t-[1px] gap-2;
  }

  .download-button {
    @apply whitespace-pre-wrap break-keep;
  }
}
</style>
