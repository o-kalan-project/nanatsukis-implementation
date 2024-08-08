<script setup lang="ts">
const links = [
  { text: "Twitter (X)", href: "https://x.com/o_kalan_man" },
  { text: "Niconico", href: "https://www.nicovideo.jp/user/134000410" },
];
</script>

<template>
  <footer
    class="w-[calc(100%_-_2rem)] box-border mx-4 py-4 mt-4 border-t-[1px] border-slate-500/50 grid place-content-center"
  >
    <small>
      &copy; 2024 桜花爛漫<template v-for="link in links" :key="link.text">
        <span class="px-2">|</span>
        <a
          class="link"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          >{{ link.text }}</a
        >
      </template>
    </small>
  </footer>
</template>

<style lang="scss"></style>
