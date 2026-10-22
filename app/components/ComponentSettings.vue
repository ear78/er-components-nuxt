<template>
  <section aria-labelledby="component-settings-title">
    <h2
      id="component-settings-title"
      className="mb-4 pt-6 text-xl font-semibold dark:text-gray-800"
    >
      {{ title || 'Settings' }}
    </h2>
    <AppForm
      form-ref="componentSettingsForm"
      @change-event="updateSettings($event)"
      @form-submit="handleSettingsSave"
      :formData="resolvedFormData ?? []"
      :isDarkMode="globalStore.isDarkMode"
    />
  </section>
</template>

<script setup lang="ts">
import AppForm from '@/components/AppForm/AppForm.vue';
import { useGlobalStore } from '@/stores/global';
import type { ComponentSettings } from '@/stores/global';
import { handleForm } from '~/assets/js/util/helpers';
import type { FormField } from '@/assets/js/formData';

const props = withDefaults(
  defineProps<{
    title?: string;
    formData?: FormField[] | null;
  }>(),
  {
    title: 'Settings',
    formData: () => [],
  },
);

const globalStore = useGlobalStore();
const location = useRoute();

const activeComponent = computed(() => {
  return globalStore.components.find(
    (item: any) => item.path === location.path,
  );
});

const settings = computed<Partial<ComponentSettings>>(
  () => activeComponent.value?.settings ?? {},
);
// watch(
//   () => location.path,
//   () => {
//     console.log('logging', location.path, activeComponent.value, settings.value);
//   },
// );
// console.log('active settings', settings, location, activeComponent.value);
const resolvedFormData = computed(() =>
  props.formData
    ? props.formData.map((field) => {
        // console.log('field:', field, 'settings:', settings.value);
        // if (field.inputType === 'radio') {
        //   const selected = field.radioGroup?.find(
        //     (radio) => radio === settings.value.textAlign,
        //   );
        //   return {
        //     ...field,
        //   };
        // }
        return {
          ...field,
          inputVal: settings.value[field.name] ?? field.inputVal ?? '',
        };
      })
    : null,
);

const updateSettings = (event: any) => {
  // console.log(event);

  const formObj = handleForm(event);
  // console.log('update setting', formObj, 'active settings', settings.value);

  globalStore.setComponentSettings({
    ...settings.value,
    ...formObj,
  });
};

const handleSettingsSave = (event: Event) => {
  event.preventDefault();
  globalStore.setComponentSettings({ ...settings });
  globalStore.isDrawerOpen = false;
};
</script>

<style scoped></style>
