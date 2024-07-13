<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";
import logo from "@/assets/logo.webp";

const isMenuOpen = ref(false);
</script>

<template>
  <header
    class="header bg-white px-6 md:px-12 h-24 drop-shadow-sm flex items-center sticky top-0"
  >
    <RouterLink to="/">
      <img class="h-16" :src="logo" alt="応歌ラン" />
    </RouterLink>
    <div class="flex-grow" />
    <Component
      :is="isMenuOpen ? XMarkIcon : Bars3Icon"
      @click="isMenuOpen = !isMenuOpen"
      class="hidden max-md:block h-12 w-12 cursor-pointer"
    />

    <Transition name="menu">
      <nav
        :class="[
          'menu gap-4',
          'flex md:items-center',
          'max-md:flex-col max-md:fixed max-md:top-24 max-md:h-[calc(100vh_-_6rem)] max-md:right-0 max-md:bg-white max-md:p-4',
          isMenuOpen ? 'menu-open' : 'menu-closed',
        ]"
      >
        <RouterLink to="/about">このキャラクターについて</RouterLink>
        <RouterLink to="/terms">利用規約</RouterLink>
        <RouterLink to="/utau">UTAU音源</RouterLink>
        <RouterLink to="/changelog">更新履歴</RouterLink>
      </nav>
    </Transition>
  </header>
</template>

<style lang="scss">
.header {
  position: -webkit-sticky;
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
