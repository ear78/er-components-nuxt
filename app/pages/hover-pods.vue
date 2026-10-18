<template>
  <section :class="`HoverPodsView ${globalStore.isDarkMode ? 'Dark' : ''}`">
    <PageTitle title="HoverPods" />
    <!-- hoverColor={pageSettings.settings.hoverColor}
      isSquared={pageSettings.settings.isSquared}
      openTab={pageSettings.settings.openTab} -->
    <HoverPods :delay="100" :podData="podData" />
  </section>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';
import { podData } from '~/assets/js/data';

const globalStore = useGlobalStore();
// const pageSettings = usePageSettings(forms, 1);
</script>

<style scoped>
.HoverPodsView {
  background: var(--gray-100);
  padding: 40px 0 75px;
  border-radius: var(--gray-200);
  position: relative;

  &.Dark {
    background: var(--gray-800);
  }
}
</style>
