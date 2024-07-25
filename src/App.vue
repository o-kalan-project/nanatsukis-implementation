<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import { RouterView } from "vue-router";
import portrait from "@/assets/portrait.webp";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const view = ref<{ title?: string } | null>(null);
watch(view, (newView) => {
  if (newView) {
    document.title = newView.title ? `${newView.title} | 応歌ラン` : "応歌ラン";
  }
});

const portraitRef = ref<HTMLImageElement | null>(null);

const onScroll = () => {
  if (!portraitRef.value) return;
  const html = document.documentElement;
  const currentPosition = html.scrollTop;

  portraitRef.value.style.transform = `translateY(${currentPosition / -8}px)`;
};
onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <div class="min-h-screen relative grid grid-rows-[auto_1fr] z-10">
    <Header class="z-10" />
    <main class="relative">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <Component ref="view" :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
  <Footer />
  <div
    class="fixed left-0 max-md:top-16 md:top-24 w-full h-lvh contain-strict pointer-events-none"
  >
    <img
      ref="portraitRef"
      :src="portrait"
      class="z-0 blur-md absolute left-0 md:left-[-8rem] top-0 w-full md:w-1/2 opacity-25 will-change-transform"
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

  @media (prefers-reduced-motion) {
    transform: none;
  }
}
</style>
