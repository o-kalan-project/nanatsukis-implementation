<script setup lang="ts">
import {
  ComponentPublicInstance,
  ref,
  watch,
  onMounted,
  onUnmounted,
} from "vue";
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

const portraitRef = ref<HTMLImageElement | null>(null);

const onScroll = () => {
  if (!portraitRef.value) return;
  const html = document.documentElement;
  const currentPosition = html.scrollTop;
  const maxScroll = html.scrollHeight - html.clientHeight;
  const scrollProgress = maxScroll === 0 ? 0 : currentPosition / maxScroll;
  console.log(currentPosition, maxScroll, scrollProgress)

  portraitRef.value.style.transform = `translateY(${-64 * scrollProgress}px)`;
};
onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
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
    <Header class="z-10" />
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
  <div class="fixed inset-0 top-24 contain-strict">
    <img
      ref="portraitRef"
      :src="portrait"
      class="z-0 blur-md absolute pointer-events-none left-[-8rem] top-[-4rem] w-1/2 opacity-25 will-change-transform"
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
