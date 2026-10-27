<template>
  <div class="dashboard">
    <PageTitle title="Dashboard" class="mb-12" />
    <div class="grid md:grid-cols-[25%_minmax(0,1fr)] gap-5">
      <div class="w-full relative">
        <User />
      </div>
      <div class="w-full">
        <div class="grid lg:grid-cols-2 gap-4">
          <template v-if="components.length">
            <DashboardCard
              v-for="component in components"
              :key="component.id"
              :component="component"
              :isDarkMode="globalStore.isDarkMode"
              @edit-settings="editSettings"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageTitle from '~/components/PageTitle/PageTitle.vue';
import User from '@/components/User/User.vue';
import { useGlobalStore } from '@/stores/global';

const globalStore = useGlobalStore();
const components = globalStore.components;

const editSettings = (id: number) => {
  globalStore.componentId = id;
  globalStore.isModalActive = true;
};
</script>
