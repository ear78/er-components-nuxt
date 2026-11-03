<template>
  <div v-if="$slots['skeleton-bordered']" :class="skeletonBorderedClasses">
    <slot name="skeleton-bordered" />
  </div>
  <div v-else :class="['skeleton', skeletonClasses, custom]"></div>
</template>

<script setup lang="ts">
interface SkeletonProps {
  /** Allows for a custom shape and size using tailwind classes. Example: 'w-1/2 h-4 bg-neutral-800 rounded-sm' */
  custom?: string;
  /** Allows for a custom background using tailwind classes. Example: 'border border-neutral-700 bg-neutral-600 p-6' */
  customBorderBg?: string;
}

const props = defineProps<SkeletonProps>();

const skeletonBorderedClasses = computed(() => {
  return {
    'border border-neutral-200 bg-neutral-800 rounded-lg p-3':
      !props.customBorderBg,
    [`${props.customBorderBg}`]: props.customBorderBg,
  };
});

const skeletonClasses = computed(() => {
  return {
    'w-full h-6 bg-neutral-200 rounded-lg': !props.custom,
    [`${props.custom}`]: props.custom,
  };
});
</script>

<style scoped>
.skeleton {
  animation: pulse 1.5s ease-in-out infinite forwards;
}

@keyframes pulse {
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}
</style>
