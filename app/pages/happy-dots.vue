<template>
  <div class="">
    <PageTitle title="HappyDots" class="mb-10" />
    <!-- <Spacer height="{50}" /> -->

    <div class="">
      <!-- :textColor="pageSettings.settings.textColor"
      :dotColor="pageSettings.settings.dotColor" -->
      <ClientOnly>
        <Dots :refs="elementRefs" :data="happyData" />
      </ClientOnly>
      <div v-for="(item, i) in sectionData" ref="items">
        <SectionHighlight :data="item" :index="i" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageTitle from '~/components/PageTitle/PageTitle.vue';
import { sectionData, happyData } from '~/assets/js/data';

const elementRefs = useTemplateRef<HTMLElement[]>('items');
// const pageSettings = usePageSettings(forms, 3);
</script>

<style scoped></style>
