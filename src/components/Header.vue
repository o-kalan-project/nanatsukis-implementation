<script setup lang="ts">
import logo from "@/assets/logo.webp";
import { useRouter } from "vue-router";
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="bg-white px-12 py-6 drop-shadow-sm flex items-center">
    <RouterLink to="/">
      <img class="h-16" :src="logo" alt="応歌ラン" />
    </RouterLink>
    <div class="flex-grow" />
    <nav class="flex items-center gap-4">
      <RouterLink to="/about">このキャラクターについて</RouterLink>
      <RouterLink to="/terms">利用規約</RouterLink>
      <RouterLink to="/utau">UTAU</RouterLink>
      <RouterLink to="/changelog">更新履歴</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss"></style>
