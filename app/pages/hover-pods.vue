<template>
  <section
    class="hover-pods-view transition duration-500 ease-in-out bg-neutral-100 pt-10 pb-19 relative min-h-dvh md:min-h-87 lg:min-h-100 rounded-lg dark:bg-neutral-800"
  >
    <PageTitle title="HoverPods" />
    <HoverPods
      :delay="100"
      :podData="podData"
      :is-squared="pageSettings?.settings.isSquared"
      :hover-color="pageSettings?.settings.hoverColor"
      :open-tab="pageSettings?.settings.openTab"
    />
  </section>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';
import { podData } from '~/assets/js/data';

const globalStore = useGlobalStore();
const pageSettings = globalStore.components[1];
</script>
