<!-- "use client";
import React, { lazy, useRef } from 'react';
import { useSelector } from 'react-redux';
import usePageSettings from '@/lib/redux/hooks/usePageSettings';
import PageTitle from '@/components/PageTitle/PageTitle';
import TeamCard from '@/components/TeamCard/TeamCard';
import styles from './TeamBuilding.module.scss';
import { forms } from '@/assets/js/data';

function TeamBuilding() {
  const { isDarkMode } = useSelector((state: any) => state.app);
  const pageSettings = usePageSettings(forms, 2);

  // Local State
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className={`${styles.TeamBuilding} ${isDarkMode ? styles.Dark : ''}`}>
      <PageTitle title="TeamBuilding" />
      <TeamCard delay={100} altLayout={pageSettings.settings.altLayout} isDarkMode={isDarkMode} />
    </div>
  );
} -->

<!-- export default TeamBuilding; -->

<template>
  <div :class="`TeamBuilding ${globalStore.isDarkMode ? 'Dark' : ''}`">
    <PageTitle title="TeamBuilding" />
    <!-- altLayout="{pageSettings.settings.altLayout}" -->
    <TeamCard
      :delay="100"
      :isDarkMode="globalStore.isDarkMode"
      :alt-layout="pageSettings?.settings.altLayout"
    />
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';

const globalStore = useGlobalStore();
const pageSettings = globalStore.components[2];

</script>

<style scoped></style>
