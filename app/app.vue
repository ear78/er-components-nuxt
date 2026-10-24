<template>
  <div
    :class="`transition duration-500 ease-in-out ${globalStore.isDarkMode ? 'dark' : ''} dark:bg-black dark:text-white`"
  >
    <Nav />
    <div class="font-avenir max-w-7xl mx-auto px-2 md:px-4 relative top-34">
      <main class="relative min-h-[calc(100dvh-277px)]">
        <button
          v-if="hasFormData"
          @click="handleModalToggle"
          class="cursor-pointer -top-8 absolute"
        >
          <FontAwesomeIcon :icon="faGrip" />
        </button>
        <NuxtPage />
      </main>
      <Footer />
      <BackToTopButton />
      <ClientOnly>
        <Drawer
          :is-open="globalStore.isModalActive"
          @close-event="handleModalToggle"
        >
          <ComponentSettings :form-data="drawerFormData" />
        </Drawer>
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGrip } from '@fortawesome/free-solid-svg-icons';
import BackToTopButton from '@/components/BackToTopButton/BackToTopButton.vue';
import { useGlobalStore } from '@/stores/global';
import ComponentSettings from '@/components/ComponentSettings.vue';
import { formData as componentFormData } from '@/assets/js/formData';
import { PathName } from '@/assets/js/constants';

const location = useRoute();
const globalStore = useGlobalStore();

const selectedFormData = computed(() => {
  if (
    !componentFormData ||
    (Array.isArray(componentFormData) && !globalStore.componentId)
  )
    return;
  const path = location.path;
  if (path === PathName.DASHBOARD) {
    return componentFormData[PathName.DASHBOARD]?.[globalStore.componentId];
  }
  return componentFormData[path] ?? null;
});

const hasFormData = computed(
  () =>
    Array.isArray(selectedFormData.value) &&
    location.path !== PathName.DASHBOARD,
);

const drawerFormData = computed(() => {
  return Array.isArray(selectedFormData.value) ? selectedFormData.value : null;
});

const handleModalToggle = () => {
  globalStore.isModalActive = !globalStore.isModalActive;
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
