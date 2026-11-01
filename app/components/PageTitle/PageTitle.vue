<template>
  <h1
    :class="[
      'text-center rounded-lg font-normal text-sm md:text-base uppercase tracking-(--page-title-tracking-mobile) md:tracking-(--page-title-tracking) transition duration-500',
      alternateStyle,
      textColorClasses,
      gradientClasses,
    ]"
  >
    &lt;
    <template v-if="title">{{ title }}</template>
    <slot />
    /&gt;
  </h1>
</template>

<script setup lang="ts">
const props = defineProps<{
  /** Alternate style that adds a gray background style */
  alt?: boolean;
  /** String to name the title text */
  title: string;
  /** Color to be used with tailwind string classes. example: 'text-blue-500' */
  color?: string;
  /** Gradient adds a styled gradient styling of current theme */
  gradient?: boolean;
}>();

const textColorClasses = computed(() => {
  if (props.color) {
    return props.color;
  }
  return 'dark:text-pink-600';
});

const gradientClasses = computed(() => {
  return {
    'bg-linear-45 from-pink-600 to-violet-600 bg-clip-text text-transparent':
      props.gradient,
  };
});

const alternateStyle = computed(() => {
  return props.alt ? 'bg-neutral-800 text-white p-5 shadow-lg' : null;
});
</script>
