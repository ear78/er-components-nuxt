<template>
  <div
    :class="`transition duration-500 ease-in-out ${globalStore.isDarkMode ? 'dark' : ''} dark:bg-black dark:text-white`"
  >
    <Nav />
    <div
      class="font-avenir max-w-7xl mx-auto px-2 md:px-4 pt-30 md:pt-34 dark:bg-black transition duration-500 ease-in-out"
    >
      <main class="relative min-h-[calc(100dvh-272px)]">
        <button
          v-if="hasFormData"
          @click="handleModalToggle"
          class="cursor-pointer -top-8 absolute"
        >
          <FontAwesomeIcon :icon="faGrip" />
        </button>
        <NuxtPage />

        <h3 class="text-center text-5xl font-bold mt-24 mb-4">
          Er Tabs Component
        </h3>
        <p class="mx-auto mb-6 max-w-3xl text-center text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus itaque
          placeat, deleniti molestias porro expedita architecto voluptatibus
          eligendi, velit error laboriosam corporis suscipit pariatur quasi
          minima vel unde tempore! Modi!
        </p>
        <Tabs
          class="py-10"
          :data="tabData"
          header-alignment="center"
          :default-tab="1"
          v-model:selected-tab="selectedTab"
        >
          <TabContent
            v-for="(tab, index) in tabsData"
            :tab-id="index"
            :selected-tab="selectedTab"
            class="w-full"
          >
            <div
              class="p-10 border border-neutral-200 rounded-lg shadow-md"
            >
              <img
                :src="tab.img"
                :alt="tab.title.text"
                class="w-12 h-12 mb-6"
              />
              <h3 class="text-4xl font-semibold">{{ tab.title }}</h3>
              <p class="text-lg mb-4">{{ tab.subTitle }}</p>
              <p class="font-semibold text-2xl">{{ tab.pricing.price }}</p>
              <p class="text-xs text-neutral-500 mb-6">
                {{ tab.pricing.info }}
              </p>
              <Button>{{ tab.button.text }}</Button>
              <ul class="mt-10 pt-10 border-t border-neutral-200">
                <li v-for="spec in tab.specs" class="flex gap-4">
                  <FontAwesomeIcon :icon="faCheck" width-auto />
                  <span>
                    {{ spec }}
                  </span>
                </li>
              </ul>
            </div>
          </TabContent>
        </Tabs>
      </main>
    </div>
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
import { faCheck, faGrip } from '@fortawesome/free-solid-svg-icons';
import BackToTopButton from '@/components/BackToTopButton/BackToTopButton.vue';
import { useGlobalStore } from '@/stores/global';
import ComponentSettings from '@/components/ComponentSettings.vue';
import { formData as componentFormData } from '@/assets/js/formData';
import { PathName } from '~/assets/js/constants/routes';
import { tabsData } from '~/assets/js/data';

const location = useRoute();
const globalStore = useGlobalStore();
const selectedTab = ref(0);

// const setSelectedTab = (id: number) => {
//   selectedTab.value = id;
// };

const tabData = [
  {
    id: 0,
    name: 'Bikes',
  },
  { id: 1, name: 'Accessories' },
  { id: 2, name: 'Gear' },
  // { id: 3, name: 'Market Place' },
  // { id: 4, name: 'Collective' },
];

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
