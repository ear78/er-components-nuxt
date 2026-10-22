<!-- 'use client';
import React, { lazy, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '@/app/dashboard/Dashboard.module.scss';
import { handleForm } from '@/assets/js/util/helpers';
import {
  setComponentSettings,
  setIsModalActive,
} from '@/lib/redux/modules/app';
import { formData as componentFormData } from '@/assets/js/formData';
import PageTitle from '@/components/PageTitle/PageTitle';
import DashboardCard from '@/components/DashboardCard/DashboardCard';
import Modal from '@/components/Modal/Modal';
import User from '@/components/User/User';

// @ts-ignore
const AppForm = lazy(() => import('@/components/AppForm/AppForm.tsx'));

export default function DashboardViews() {
  // Redux
  const dispatch = useDispatch();
  const { components, isModalActive, isDarkMode } = useSelector(
    (state: any) => state.app,
  );

  // Local State
  const [componentId, setComponentId] = useState<number>(0);
  const [formData, setFormData] = useState<{}[]>([]);
  const dashboardFormData = componentFormData['/dashboard'];

  useEffect(() => {
    if (!dashboardFormData || Array.isArray(dashboardFormData)) return;

    const selectedFields = dashboardFormData[componentId] ?? [];
    const selectedSettings = components[componentId]?.settings ?? {};
    setFormData(
      selectedFields.map((field) => ({
        ...field,
        inputVal: selectedSettings[field.name] ?? field.inputVal ?? '',
        change: updateSettings,
      })),
    );
  }, [components, componentId, dashboardFormData]);

  const updateSettings = (event: any) => {
    const formObj = handleForm(event);

    dispatch(
      setComponentSettings({
        ...components[componentId].settings,
        ...formObj,
      }),
    );
  };

  const toggleModal = () => {
    dispatch(setIsModalActive(!isModalActive));
  };

  const editSettings = (id: number) => {
    setComponentId(id);
    dispatch(setIsModalActive(true));
  };

  const handleSettingsSave = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(
      setComponentSettings({
        ...components[componentId].settings,
      }),
    );

    dispatch(setIsModalActive(false));
  };

  let cards;
  if (components) {
    cards = components.map((component: any) => (
      <DashboardCard
        key={component.id}
        component={component}
        editSettings={editSettings}
        isDarkMode={isDarkMode}
      />
    ));
  } else {
    cards = null;
  }

  return (
    <div className={`${styles.Dashboard} ${isDarkMode ? styles.Dark : ''}`}>
      <Modal
        isModalActive={isModalActive}
        click={toggleModal}
        isDarkMode={isDarkMode}
      >
        <AppForm
          click={handleSettingsSave}
          formData={formData}
          isDarkMode={isDarkMode}
        />
      </Modal>
      <div className="mb-12">
        <PageTitle title="Dashboard" />
      </div>
      <div className="grid md:grid-cols-[25%_minmax(0,1fr)] gap-5">
        <div className="w-full relative">
          <User />
        </div>
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-4">{cards}</div>
        </div>
      </div>
    </div>
  );
} -->

<template>
  <div :class="`Dashboard ${globalStore.isDarkMode ? 'Dark' : ''}`">
    <!-- <ClientOnly>
      <Modal
        :isModalActive="globalStore.isModalActive"
        @modal-click="toggleModal"
        :isDarkMode="globalStore.isDarkMode"
      >
        <AppForm
          form-ref="formRef"
          @form-submit="handleSettingsSave"
          @change-event="updateSettings"
          :formData="formData"
          :isDarkMode="globalStore.isDarkMode"
        />
      </Modal>
    </ClientOnly> -->
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
