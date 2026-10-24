<template>
  <h1
    :style="{ ...color }"
    :class="`text-center rounded-lg font-normal text-sm md:text-base
    uppercase tracking-(--page-title-tracking) ${alternateStyle}
    dark:text-pink-600 transition duration-500`"
  >
    &lt;
    <template v-if="title">{{ title }}</template>
    <slot />
    /&gt;
  </h1>
</template>

<script setup lang="ts">
const props = defineProps<{
  alt?: boolean;
  color?: object;
  title: string;
}>();

const alternateStyle = computed(() => {
  return props.alt ? 'bg-neutral-800 text-white p-5 shadow-lg' : null;
});
</script>
