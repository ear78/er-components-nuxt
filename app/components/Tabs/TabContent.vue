<template>
  <div
    ref="contentRef"
    :class="`${selectedTab === attrs['tab-id'] ? 'visible opacity-100 z-1' : 'invisible opacity-0'} invisible opacity-0 absolute transition-all ease-in-out duration-500`"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const attrs = useAttrs();
const props = defineProps<{ selectedTab: number }>();
// const contentRef = useTemplateRef('contentRef');
// const selectedTab = ref(0);

// Sets the container height for absolute positioned tabs
// const contentContainerHeight = ref(0);
// onMounted(() => {
//   console.log(attrs['tab-id'], props.selectedTab);
// });
// ${selectedTab === attrs['tab-id'] ? 'visible opacity-100 z-1' : 'invisible opacity-0'}
</script>

<style scoped></style>
