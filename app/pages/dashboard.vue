<template>
  <div :class="`Dashboard ${globalStore.isDarkMode ? 'Dark' : ''}`">
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
// import { handleForm } from '~/assets/js/util/helpers';
import {
  formData as componentFormData,
  type FormField,
} from '@/assets/js/formData';

const globalStore = useGlobalStore();
const components = globalStore.components;

// Local State
// const componentId = ref(0);
const formData = ref<FormField[]>([]);
const selectedSettings = ref({} as Record<string, unknown>);
const dashboardFormData = componentFormData['/dashboard'];

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

const toggleModal = () => {
  globalStore.isModalActive = !globalStore.isModalActive;
};

const editSettings = (id: number) => {
  globalStore.componentId = id;
  globalStore.isModalActive = true;
};

// const updateSettings = (event: any) => {
//   const formObj = handleForm(event);

//   globalStore.setComponentSettings({
//     ...components[globalStore.componentId]?.settings,
//     ...formObj,
//   });
// };

// const handleSettingsSave = (event: Event) => {
//   event.preventDefault();
//   const component = components[componentId.value];

//   if (component) {
//     globalStore.setComponentSettings({
//       ...component.settings,
//       id: component.id,
//     });
//   }
//   globalStore.isModalActive = false;
// };
</script>

<style scoped>
.Dashboard {
  .User {
    margin-bottom: 1rem;

    img {
      max-width: 100px;
      filter: grayscale(0.5);
      background: var(--gray-200);
      border-radius: 50%;
      padding: 15px;
      box-sizing: border-box;

      @media (min-width: 768px) {
        max-width: 175px;
      }
    }

    .Name {
      margin-bottom: 5px;
    }

    .Username {
      margin: 0;
      color: var(--gray-500);
      font-size: 1.125rem;
      font-weight: 500;
    }
  }
}
</style>
