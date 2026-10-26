<template>
  <div class="">
    <PageTitle title="HappyDots" class="mb-10" />

    <div class="">
      <Dots
        :refs="elementRefs"
        :data="happyData"
        :textColor="pageSettings?.settings.textColor"
        :dotColor="pageSettings?.settings.dotColor"
      />
      <div v-for="(item, i) in sectionData" ref="items">
        <SectionHighlight :data="item" :index="i" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';
import PageTitle from '~/components/PageTitle/PageTitle.vue';
import { sectionData, happyData } from '~/assets/js/data';

const elementRefs = useTemplateRef<HTMLElement[]>('items');
const globalStore = useGlobalStore();
const pageSettings = globalStore.components[3];
</script>
