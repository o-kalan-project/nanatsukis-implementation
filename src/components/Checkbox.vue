<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot } from "radix-vue";
import { Transition } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();
</script>

<template>
  <label class="inline-flex gap-2 items-center cursor-pointer">
    <CheckboxRoot
      :modelValue="props.modelValue"
      @update:checked="($event) => emit('update:modelValue', $event)"
      class="aspect-square h-5 w-5 bg-white outline outline-[1px] hover:outline-2 outline-theme-base rounded-sm inline-block relative"
    >
      <Transition name="fade">
        <CheckboxIndicator>
          <i
            class="pi pi-check absolute text-theme-base text-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ></i>
        </CheckboxIndicator>
      </Transition>
    </CheckboxRoot>
    <span><slot /></span>
  </label>
</template>

<style scoped lang="scss">
@use "@/style.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
