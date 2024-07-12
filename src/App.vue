<script setup lang="ts">
import Header from "./components/Header.vue";
import { RouterView } from "vue-router";

import portrait from "@/assets/portrait.webp";
</script>

<template>
  <div class="min-h-screen relative grid grid-rows-[auto_1fr] z-10">
    <Header />
    <main class="relative">
      <RouterView />
    </main>
  </div>
  <div
    class="absolute top-0 left-0 w-full h-full contain-strict"
  >
    <img
      :src="portrait"
      class="z-0 blur-md absolute pointer-events-none left-[-8rem] bottom-[-8rem] w-1/2 opacity-25"
      alt="応歌ラン"
    />
  </div>
</template>

<style scoped></style>
