<script setup lang="ts">
import { ComponentPublicInstance, ref, watch } from "vue";
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import portrait from "@/assets/portrait.webp";

const view = ref<ComponentPublicInstance<typeof RouterView> | null>(null);
watch(view, (newView) => {
  if (newView) {
    const newViewData = newView as {
      title?: string;
    };
    document.title = newViewData.title
      ? `${newViewData.title} | 応歌ラン`
      : "応歌ラン";
  }
});

const disableScaling = () => {
  document.body.style.overflow = "hidden";
};
const enableScaling = () => {
  document.body.style.overflow = "auto";
};
</script>

<template>
  <div class="min-h-screen relative grid grid-rows-[auto_1fr] z-10">
    <Header />
    <main class="relative">
      <RouterView v-slot="{ Component }">
        <Transition
          name="page"
          mode="out-in"
          @leave="disableScaling"
          @afterEnter="enableScaling"
        >
          <Component ref="view" :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
  <div class="absolute top-0 left-0 w-full h-full contain-strict">
    <img
      :src="portrait"
      class="z-0 blur-md absolute pointer-events-none left-[-8rem] bottom-[-8rem] w-1/2 opacity-25"
      alt="応歌ラン"
    />
  </div>
</template>

<style scoped lang="scss">
.page-enter-active,
.page-leave-active {
  transition:
    transform 0.3s,
    opacity 0.3s;
}

.page-enter-from,
.page-leave-to {
  transform: translateY(1rem);
  opacity: 0;
}
</style>
