<script setup lang="ts">
import mainfile from "@/assets/mainfile.yml";
import Checkbox from "@/components/Checkbox.vue";
import PageTitle from "@/components/PageTitle.vue";
import Paragraph from "@/components/Paragraph.vue";
import { useHead } from "@unhead/vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";
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
console.log(mainfile);
const agreeHref = ((ist: Boolean) => {
  return agree.value && !ist ? true : undefined;
});
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
      <article class="card"  v-for="(contents,dist_name) in mainfile">
        <h2>{{ dist_name }}</h2>
        <img :srcset="base + 'distribution/' + contents['image'] + '.webp'" />
        <div class="flex-grow" />
        <Paragraph>
          <!-- UTAUで使える音源です。単独音・連続音を用意しています。 -->
           {{ contents["description"] }}
        </Paragraph>
        <div class="download-section">
          <a
            v-for="(button_attribute,button_text) in contents['button']"
            class="button download-button"
            :class="{ disabled: button_attribute['disabled'] || !agree}"
            :href="agreeHref(button_attribute['disabled']) && button_attribute['url']"
            target="_blank"
          >
            <budoux-ja>{{ button_text }}</budoux-ja>
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
