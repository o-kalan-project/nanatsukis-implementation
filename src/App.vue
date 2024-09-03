<script setup lang="ts">
import portrait from "@/assets/portrait.webp?h=40&imagetools";
import { useHead } from "@unhead/vue";
import { onMounted, onUnmounted, ref } from "vue";
import { RouterView } from "vue-router";
import { fromByteArray as toBase64 } from "base64-js";
import secret from "./assets/secret.webp?uint8array&base64";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

useHead({
  meta: [
    {
      name: "theme-color",
      content: "#f6baca",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
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

  const loading = document.querySelector("#loading");
  if (!loading) throw new Error("Loading element not found");
  loading.classList.add("done");
  loading.addEventListener("transitionend", () => {
    loading.remove();
  });
  console.log("やっほ～！応歌ランだよ！");
  console.log("こんなところを覗くなんて、さては変態さんだったりする？");
  console.log(
    "せっかく来てくれたんだし、この素敵なサイトを作ってくれたみんなを紹介するよ～！",
  );
  if (window.navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
    console.log("...あれ？あなたFirefoxを使ってるんだ！");
    console.log(
      "Firefoxだと画像が上手く表示できないみたいだから、文字で伝えるね！",
    );
    console.log(
      "このサイトを作ってくれたのは、メインプログラマーの「名無し。」さんと「のいたみな」さんって人、",
    );
    console.log("あとは細かい作業を「稲凪咲」さんって人がしてくれたよ～");
    console.log("どこかで会ったらよろしく伝えてね！");
  } else {
    const url = `data:image/webp;base64,${toBase64(secret)}`;
    console.log(
      "%c ",
      `background-image: url("${
        url
      }"); background-size: 100% 100%; padding: 180px 140px`,
    );
  }
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
      class="z-0 blur-md absolute left-0 lg:left-[-8rem] top-0 w-full lg:w-1/2 opacity-25 will-change-transform aspect-[1852/2682]"
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
