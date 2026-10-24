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
import { PathName } from '~/assets/js/constants';

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
  if (location.path === PathName.DASHBOARD) {
    /** Lookup component by Id for the dashboard.
     * Other components use the router since they are dynamically route based in the app.
     */
    return globalStore.components.find(
      (item) => item.id === globalStore.componentId,
    );
  }
  return globalStore.components.find(
    (item: any) => item.path === location.path,
  );
});

const settings = computed<Partial<ComponentSettings>>(
  () => activeComponent.value?.settings ?? {},
);

const resolvedFormData = computed(() =>
  props.formData
    ? props.formData.map((field) => {
        return {
          ...field,
          inputVal: settings.value[field.name] ?? field.inputVal ?? '',
        };
      })
    : null,
);

const updateSettings = (event: any) => {
  const formObj = handleForm(event);

  globalStore.setComponentSettings({
    ...settings.value,
    ...formObj,
  });
};
</script>
