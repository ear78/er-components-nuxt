<template>
  <div
    ref="tabContentRef"
    :class="`${isTabShowing ? 'visible opacity-100 z-1' : 'invisible opacity-0'} ${displayProp} w-full absolute transition-all ease-in-out duration-500`"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ selectedTab: number }>();
const attrs = useAttrs();
const emit = defineEmits(['display-set']);
const tabContentRef = useTemplateRef('tabContentRef');
const isTabShowing = ref(false);
const displayProp = ref('block');

watch(
  [tabContentRef, () => props.selectedTab],
  () => {
    // Handles display prop animations
    if (props.selectedTab === attrs['tab-id']) {
      displayProp.value = 'block';
      setTimeout(() => {
        isTabShowing.value = true;
      }, 5);
    } else {
      isTabShowing.value = false;
      setTimeout(() => {
        displayProp.value = 'hidden';
      }, 500);
    }
  },
  { immediate: true },
);
</script>
