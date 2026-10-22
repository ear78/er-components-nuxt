<!-- 'use client';
import { useSelector } from 'react-redux';
import Banner from '@/components/Banner/Banner';
import { bannerImgWebp, bannerImgWebpSm } from '../../assets/js/data';

export default function BannerView() {
  const { components, appLoading } = useSelector((state: any) => state.app);
  const { settings } = components[0];

  return (
    <Banner
      preTitle={settings.preTitle}
      title={settings.title}
      subTitle={settings.subTitle}
      btnText={settings.btnText}
      ctaUrl={settings.ctaUrl}
      btnColor={settings.btnColor}
      overlay={settings.overlay}
      overlayDark={settings.overlayDark}
      overlayFull={settings.overlayFull}
      textAlign={settings.textAlign}
      showBtn={settings.showBtn}
      target
      webpSizes={{ lgWebp: bannerImgWebp.src, smWebp: bannerImgWebpSm.src }}
      isLoading={appLoading}
    />
  );
} -->
<template>
  <Banner
    :preTitle="settings?.preTitle"
    :title="settings?.title ?? ''"
    :subTitle="settings?.subTitle"
    :btnText="settings?.btnText ?? ''"
    :ctaUrl="settings?.ctaUrl ?? ''"
    :btnColor="settings?.btnColor"
    :overlay="settings?.overlay"
    :overlayDark="settings?.overlayDark"
    :overlayFull="settings?.overlayFull"
    :textAlign="settings?.textAlign"
    :showBtn="settings?.showBtn"
    target
    :webpSizes="{ lgWebp: bannerImgWebp, smWebp: bannerImgWebpSm }"
    :isLoading="globalStore.isAppLoading"
  />
</template>

<script setup lang="ts">
import Banner from '~/components/Banner/Banner.vue';
import { bannerImgWebp, bannerImgWebpSm } from '@/assets/js/data';
import { useGlobalStore } from '@/stores/global';
const globalStore = useGlobalStore();
const settings = globalStore.components[0]?.settings;
</script>

<style scoped></style>
