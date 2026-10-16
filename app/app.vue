<template>
  <main
    :class="`transition duration-500 ease-in-out font-avenir max-w-7xl mx-auto px-2 md:px-4 ${globalStore.isDarkMode ? 'dark' : ''} dark:bg-black dark:text-white`">
    <Nav />
    <NuxtPage />
    <Footer />
  </main>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/stores/global';

const globalStore = useGlobalStore()
</script>