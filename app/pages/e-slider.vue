<template>
  <section>
    <PageTitle title="EasySlider" class="mb-10" />
    <Eslider
      :data="esliderData"
      :has-navigation="pageSettings?.settings.hasNavigation"
      :overlay-btns="pageSettings?.settings.overlayBtns"
      class="pb-12"
    />
  </section>
</template>

<script setup lang="ts">
import { useGlobalStore } from '#imports';
import { esliderData } from '~/assets/js/data';

const globalStore = useGlobalStore();
const pageSettings = globalStore.components[5];
</script>
