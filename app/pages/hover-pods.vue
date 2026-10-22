<template>
  <section :class="`HoverPodsView ${globalStore.isDarkMode ? 'Dark' : ''} min-h-dvh md:min-h-87 lg:min-h-100`">
    <PageTitle title="HoverPods" />
    <ClientOnly>
      <HoverPods
        :delay="100"
        :podData="podData"
        :is-squared="pageSettings?.settings.isSquared"
        :hover-color="pageSettings?.settings.hoverColor"
        :open-tab="pageSettings?.settings.openTab"
      />
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';
import { podData } from '~/assets/js/data';

const globalStore = useGlobalStore();
const pageSettings = globalStore.components[1];
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
