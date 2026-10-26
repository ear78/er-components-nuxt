
<template>
  <div :class="`TeamBuilding ${globalStore.isDarkMode ? 'Dark' : ''}`">
    <PageTitle title="TeamBuilding" />
    <ClientOnly>
      <TeamCard
        :delay="100"
        :isDarkMode="globalStore.isDarkMode"
        :alt-layout="pageSettings?.settings.altLayout"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';

const globalStore = useGlobalStore();
const pageSettings = globalStore.components[2];
</script>

<style scoped></style>
