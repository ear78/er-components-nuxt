<template>
  <section>
    <PageTitle title="EasySlider" class="mb-10" />
    <Eslider :data="esliderData" class="pb-12" />
  </section>
</template>

<script setup lang="ts">
import { esliderData } from '~/assets/js/data';
</script>
