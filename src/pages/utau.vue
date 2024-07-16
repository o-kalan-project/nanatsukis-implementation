<script setup lang="ts">
defineExpose({
  title: "UTAU音源",
});
const utauDL = () => {
  location.href = "https://github.com/o-kalan-project/o-ka-utau/releases/latest/download/o-kalan.zip"
} 
</script>
<template>
  <section class="relative flex h-full">
    <div class="p-4 w-full lg:w-2/3 flex-col mx-auto">
      <h1 class="page-title">UTAU音源</h1>
      配布してるよ～（してない）
      <br>
      <button disabled @click="utauDL">ダウンロード</button>
    </div>
  </section>
</template>
