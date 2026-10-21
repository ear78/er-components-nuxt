<!-- import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { handleForm } from '@/assets/js/util/helpers';
import { setComponentSettings, setIsDrawerOpen } from '@/lib/redux/modules/app';
import AppForm from '@/components/AppForm/AppForm';

// @ts-ignore
// const AppForm = lazy(() => import('@/components/AppForm/AppForm.tsx'));

type ComponentSettingsProps = {
  title?: string;
  formData?: Array<Record<string, any>> | null;
};

function ComponentSettings({
  title = 'Settings',
  formData,
}: ComponentSettingsProps) {
  const dispatch = useDispatch();
  const location = usePathname();
  const { components, isDarkMode } = useSelector((state: any) => state.app);
  const activeComponent = components.find(
    (item: any) => item.path === location,
  );
  const settings = activeComponent?.settings ?? {};

  const updateSettings = (event: any) => {
    const formObj = handleForm(event);

    dispatch(
      setComponentSettings({
        ...settings,
        ...formObj,
      }),
    );
  };

  const handleSettingsSave = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(setComponentSettings({ ...settings }));
    dispatch(setIsDrawerOpen(false));
  };

  const resolvedFormData = formData
    ? formData.map((field: any) => ({
        ...field,
        inputVal: settings[field.name] ?? field.inputVal ?? '',
        change: updateSettings,
      }))
    : null;

  return (
    <section aria-labelledby="component-settings-title">
      <h2
        id="component-settings-title"
        className="mb-4 pt-6 text-xl font-semibold dark:text-gray-800"
      >
        {title}
      </h2>
      <Suspense fallback={null}>
        <AppForm
          click={handleSettingsSave}
          formData={resolvedFormData ?? []}
          isDarkMode={isDarkMode}
        />
      </Suspense>
    </section>
  );
}

export default ComponentSettings; -->

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
      @change-event="updateSettings"
      @form-submit="handleSettingsSave"
      :formData="resolvedFormData ?? []"
      :isDarkMode="globalStore.isDarkMode"
    />
  </section>
</template>

<script setup lang="ts">
import AppForm from '@/components/AppForm/AppForm.vue';
import { useGlobalStore } from '@/stores/global';
import { handleForm } from '~/assets/js/util/helpers';

const props = withDefaults(
  defineProps<{
    title?: string;
    formData?: Array<Record<string, any>> | null;
  }>(),
  {
    title: 'Settings',
    formData: () => [],
  },
);

const globalStore = useGlobalStore();
const location = useRoute();

const activeComponent = globalStore.components.find(
  (item: any) => item.path === location.path,
);

const settings = activeComponent?.settings ?? {};

const resolvedFormData = computed(() =>
  props.formData
    ? props.formData.map((field: any) => ({
        ...field,
        inputVal: settings[field.name] ?? field.inputVal ?? '',
      }))
    : null,
);

const updateSettings = (event: any) => {
  const formObj = handleForm(event);

  globalStore.setComponentSettings({
    ...settings,
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
