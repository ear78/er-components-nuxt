<template>
  <div>
    <template v-for="(item,i) in sectionData">
      <SectionHighlight :data="item" :index="i"/>
    </template>
  </div>
</template>

<script setup lang="ts">
import { sectionData } from '~/assets/js/data';


</script>

<style lang="scss" scoped>

</style>