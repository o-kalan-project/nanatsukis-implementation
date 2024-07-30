<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot } from "radix-vue";

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
  <label class="flex gap-2 items-center cursor-pointer">
    <CheckboxRoot
      :modelValue="props.modelValue"
      @update:checked="($event) => emit('update:modelValue', $event)"
      class="aspect-square h-5 w-5 bg-white outline outline-[1px] hover:outline-2 outline-theme-base rounded-sm inline-block relative"
    >
      <CheckboxIndicator>
        <i
          class="pi pi-check absolute text-theme-base text-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></i>
      </CheckboxIndicator>
    </CheckboxRoot>
    <span><slot /></span>
  </label>
</template>
