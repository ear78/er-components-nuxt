<template>
  <section
    :class="`Dropper ${isDarkMode ? 'Dark' : ''} flex flex-col gap-2 last:gap-0`"
  >
    <header
      role="button"
      tabIndex="0"
      @click="handleToggle"
      :class="[
        `DropperHeader flex justify-between items-center p-4 border border-neutral-200 rounded-lg shadow-md transition duration-200 ease-in-out cursor-pointer hover:bg-black hover:text-white dark:text-white dark:border-transparent dark:hover:bg-neutral-800`,
        headerActiveClasses,
      ]"
    >
      <p class="DropperTitle">{{ title }}</p>
      <FontAwesomeIcon
        :class="[
          'DropperIcon w-3 transition duration-200 ease-in-out',
          iconActiveClasses,
        ]"
        width-auto
        :icon="iconName"
      />
    </header>
    <div :class="[`DropperContent px-4`, contentActiveClasses]">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps<{
  title: string;
  iconName: any;
  isDarkMode?: boolean;
}>();

const isToggled = ref(false);
const isActive = computed(() => (isToggled.value ? 'Active' : ''));

const headerActiveClasses = computed(() => {
  return { 'bg-black text-white dark:bg-neutral-800': isActive.value, 'bg-white dark:bg-neutral-900': !isActive.value };
});

const iconActiveClasses = computed(() => {
  return { 'transform rotate-180': isActive.value };
});

const contentActiveClasses = computed(() => {
  return {
    'py-4 opacity-100 max-h-fit': isActive.value,
    'overflow-hidden max-h-0 opacity-0': !isActive.value,
  };
});

const handleToggle = () => (isToggled.value = !isToggled.value);
</script>

<style scoped>

.DropperContent {
  transition:
    opacity 0.5s ease,
    max-height 0.25s ease,
    padding 0.25s ease;
}
</style>
