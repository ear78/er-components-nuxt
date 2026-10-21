<template>
  <div
    :class="`transition duration-500 ease-in-out font-avenir max-w-7xl mx-auto px-2 md:px-4 ${globalStore.isDarkMode ? 'dark' : ''} dark:bg-black dark:text-white`"
  >
    <Nav />
    <main class="relative">
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
    <Drawer
      :is-open="globalStore.isModalActive"
      @close-event="handleModalToggle"
    >
      <ComponentSettings :form-data="drawerFormData" />
    </Drawer>
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGrip } from '@fortawesome/free-solid-svg-icons';
import BackToTopButton from '@/components/BackToTopButton/BackToTopButton.vue';
import { useGlobalStore } from '@/stores/global';
import ComponentSettings from '@/components/ComponentSettings.vue';
import { formData as componentFormData } from '@/assets/js/formData';

const location = useRoute();
const globalStore = useGlobalStore();

// watchEffect(() => {
//   if (!dashboardFormData || Array.isArray(dashboardFormData)) return;

//   const selectedFields = dashboardFormData[componentId.value] ?? [];
//   selectedSettings.value = components[componentId.value]?.settings ?? {};

//   formData.value = selectedFields.map((field) => {
//     const setting = selectedSettings.value[field.name];

//     return {
//       ...field,
//       inputVal:
//         typeof setting === 'string' || typeof setting === 'boolean'
//           ? setting
//           : (field.inputVal ?? ''),
//     };
//   });
// });

const selectedFormData = computed(() => {
  if (
    !componentFormData ||
    (Array.isArray(componentFormData) && !globalStore.componentId)
  )
    return;
  const path = location.path;
  if (path === '/dashboard') {
    return componentFormData['/dashboard']?.[globalStore.componentId];
  }
  return componentFormData[path] ?? null;
});

const hasFormData = computed(() => Array.isArray(selectedFormData.value));

const drawerFormData = computed(() => {
  return Array.isArray(selectedFormData.value) ? selectedFormData.value : null;
});

// console.log('drawerFormDta:', selectedFormData.value);

const handleModalToggle = () => {
  globalStore.isModalActive = !globalStore.isModalActive;
};
</script>
