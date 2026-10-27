<template>
  <section class="dropper-parent flex flex-col md:flex-row">
    <div
      class="dropper-wrapper flex flex-col md:flex-row border border-neutral-200 rounded-lg p-4 md:p-6 gap-4"
    >
      <div
        class="left w-full lg:w-1/3 bg-black min-h-50 h-full flex justify-center items-center rounded-lg md:mb-0"
      >
        <PageTitle title="Dropper" :color="{ color: colors.hotPink }" />
      </div>
      <div class="right w-full lg:w-2/3">
        <Dropper
          v-for="d in dropperData"
          :key="d.id"
          :title="d.title"
          :iconName="faAngleDown"
        >
          {{ d.content }}
        </Dropper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Dropper from '~/components/Dropper/Dropper.vue';
import { dropperData } from '~/assets/js/data';
import colors from '@/assets/js/colors';
</script>
