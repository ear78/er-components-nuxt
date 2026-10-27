<template>
  <a
    class="Links flex text-neutral-800 group-hover:text-neutral-700 hover:text-black dark:hover:text-pink-500 transition"
    :href="path"
    :target="`${target ? '_blank' : ''}`"
    rel="noreferrer"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  path: string;
  target?: boolean;
}>();
</script>

<style scoped>
.Links {
  svg {
    width: 26px;
    font-size: 26px;
    transition: all 0.14s ease-out;
  }

  &.Dark {
    &:hover svg {
      color: var(--secondary-color);
    }
  }
}
</style>
