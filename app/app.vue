<template>
  <div
    :class="`transition duration-500 ease-in-out font-avenir max-w-7xl mx-auto px-2 md:px-4 ${globalStore.isDarkMode ? 'dark' : ''} dark:bg-black dark:text-white`"
  >
    <Nav />
    <main>
      <NuxtPage />
    </main>
    <Footer />
    <BackToTopButton />
  </div>
</template>

<script lang="ts" setup>
import BackToTopButton from '@/components/BackToTopButton/BackToTopButton.vue';
import { useGlobalStore } from '@/stores/global';

const globalStore = useGlobalStore();
</script>
