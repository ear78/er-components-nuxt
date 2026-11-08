<template>
  <div
    ref="contentRef"
    :class="`${selectedTab === attrs['tab-id'] ? 'visible opacity-100 z-1' : 'invisible opacity-0'} invisible opacity-0 w-full absolute transition-all ease-in-out duration-500`"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const attrs = useAttrs();
const props = defineProps<{ selectedTab: number }>();
</script>
