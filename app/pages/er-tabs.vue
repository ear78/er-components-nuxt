<template>
  <PageTitle title="Er Tabs Component" gradient class="py-4" />
  <Tabs
    class="py-10"
    :data="tabHeaderData"
    header-alignment="center"
    v-model:selected-tab="selectedTab"
  >
    <TabContent
      v-for="(tab, key, index) in tabsData"
      :tab-id="index"
      :selected-tab="selectedTab"
    >
      <template v-if="key === 'columns'">
        <div class="grid grid-cols-3 gap-6">
          <div
            v-for="content in tab"
            class="p-10 border border-neutral-200 rounded-lg shadow-md grid grid-rows-[76px_40px_80px_32px_64px_40px_auto]"
          >
            <img
              :src="content.img"
              :alt="content.title.text"
              class="w-12 h-12 mb-6"
            />
            <h3 class="text-4xl font-semibold">{{ content.title }}</h3>
            <p class="text-lg mb-4">{{ content.subTitle }}</p>
            <p v-if="content?.pricing" class="font-semibold text-2xl">
              {{ content.pricing.price }}
            </p>
            <p v-if="content?.pricing" class="text-xs text-neutral-500 mb-6">
              {{ content.pricing.info }}
            </p>
            <Button v-if="content?.button">{{ content.button.text }}</Button>
            <ul
              v-if="content?.specs"
              class="mt-10 pt-10 border-t border-neutral-200"
            >
              <li v-for="spec in content.specs" class="flex gap-4 items-center">
                <FontAwesomeIcon
                  :icon="faCheck"
                  size="xs"
                  width-auto
                  class="h-3"
                />
                <span>
                  {{ spec }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </template>
      <template v-if="key === 'profile'">
        <div class="grid grid-cols-2 gap-2 w-screen">
          <div
            v-for="content in tab"
            class="border border-neutral-200 shadow-md rounded-lg p-0.5 text-neutral-500"
          >
            <div class="border border-neutral-200 rounded-lg p-10">
              <img
                :src="content.img"
                :alt="content.title"
                class="w-6 h-6 mb-2"
              />
              <h2 class="font-bold text-2xl text-neutral-900">
                {{ content.title }}
              </h2>
              <p class="mb-1">{{ content.subTitle }}</p>
              <p class="text-sm">- {{ content.miles }}</p>
              <p class="text-sm">- {{ content.speed }}</p>
            </div>
          </div>
        </div>
      </template>
      <template v-if="key === 'gear'">
        <div class="grid grid-cols-2 gap-4">
          <div v-for="content in tab" class="flex flex-col gap-4">
            <NuxtImg
              :src="content.img"
              :alt="content.title"
              class="rounded-lg"
            />
            <div class="flex flex-col">
              <h2 class="text-2xl font-bold">{{ content.title }}</h2>
              <p class="text-sm text-neutral-500 mb-3">
                {{ content.subTitle }}
              </p>
              <ul>
                <li
                  v-for="spec in content.specs"
                  class="flex items-center gap-2 text-sm text-neutral-500"
                >
                  <FontAwesomeIcon :icon="faCheck" width-auto size="xs" />
                  {{ spec }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </template>
    </TabContent>
  </Tabs>
</template>

<script setup lang="ts">
import Tabs from '~/components/Tabs/Tabs.vue';
import TabContent from '~/components/Tabs/TabContent.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { tabsData } from '~/assets/js/data';

const selectedTab = ref(0);

const tabHeaderData = [
  {
    id: 0,
    name: 'Bikes',
  },
  {
    id: 1,
    name: 'Accessories',
  },
  { id: 2, name: 'Gear' },
];
</script>
