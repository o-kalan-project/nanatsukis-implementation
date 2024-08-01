<script setup lang="ts">
import { ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";
import logo from "@/assets/logo.webp?w=150;300;450;600&as=srcset&imagetools";

const isMenuOpen = ref(false);
const loadingPage = ref<string | undefined>(undefined);

const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false;
    loadingPage.value = undefined;
  },
  { immediate: true },
);

const isCurrentPage = (path: string) => {
  if (loadingPage.value) {
    return loadingPage.value === path;
  }
  return route.fullPath === path;
};

const onClickLink = (path: string) => {
  loadingPage.value = path;
};
</script>

<template>
  <header
    :class="[
      'header bg-white drop-shadow-sm flex items-center sticky top-0',
      'max-md:px-6 max-md:h-16',
      'md:px-12 md:h-24',
    ]"
  >
    <Teleport to="body">
      <div
        class="fixed inset-0 bg-white transition-opacity duration-300 z-50"
        :style="{
          opacity: loadingPage ? 0.5 : 0,
          pointerEvents: loadingPage ? 'auto' : 'none',
        }"
      />
    </Teleport>
    <RouterLink
      to="/"
      :class="[isCurrentPage('/') && 'current-page']"
      @click="onClickLink('/')"
    >
      <img
        class="logo max-md:h-12 md:h-16 aspect-[150/64]"
        height="64"
        :srcset="logo"
        alt="応歌ラン"
      />
    </RouterLink>
    <div class="flex-grow" />
    <Component
      :is="isMenuOpen ? XMarkIcon : Bars3Icon"
      @click="isMenuOpen = !isMenuOpen"
      class="hidden max-md:block h-12 w-12 cursor-pointer"
    />

    <nav
      :class="[
        'menu gap-4',
        'flex md:items-center',
        'max-md:flex-col max-md:fixed max-md:top-16 max-md:h-[calc(100lvh_-_4rem)] max-md:right-0 max-md:bg-white max-md:p-4',
        isMenuOpen ? 'menu-open' : 'menu-closed',
      ]"
    >
      <RouterLink
        @click="onClickLink('/about')"
        :class="[isCurrentPage('/about') && 'current-page']"
        to="/about"
        >このキャラクターについて</RouterLink
      >
      <RouterLink
        @click="onClickLink('/terms')"
        :class="[isCurrentPage('/terms') && 'current-page']"
        to="/terms"
        >利用規約</RouterLink
      >
      <RouterLink
        :class="[isCurrentPage('/distribution') && 'current-page']"
        @click="onClickLink('/distribution')"
        to="/distribution"
        >素材配布</RouterLink
      >
      <RouterLink
        :class="[isCurrentPage('/history') && 'current-page']"
        @click="onClickLink('/history')"
        to="/history"
        >年表</RouterLink
      >
    </nav>
  </header>
</template>

<style lang="scss">
@use "@/style.scss";

.header {
  position: sticky;
}
.current-page {
  @apply text-theme-base;
}
@media (screen(md)) {
  .logo {
    transition: filter 0.2s;
    filter: drop-shadow(0 0 0.5rem transparent);

    &:hover {
      filter: drop-shadow(0 0 0.5rem #{theme("colors.theme.base")}80);
    }
  }
  .menu {
    & > a {
      transition: color 0.2s;
      &:hover {
        @apply text-theme-base;
      }
    }
  }
}
@media not (screen(md)) {
  .menu {
    transition:
      transform 0.3s,
      opacity 0.3s;
  }
  .menu-open {
    transform: none;
    opacity: 1;
  }
  .menu-closed {
    transform: translateX(1rem);
    opacity: 0;
    pointer-events: none;
  }
}
</style>
