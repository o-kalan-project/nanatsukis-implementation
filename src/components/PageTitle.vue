<template>
  <h1 class="page-title">
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
@use "@/style.scss";

.page-title {
  @apply text-theme-base border-theme-base heading-border theme-shadow;
}
</style>
