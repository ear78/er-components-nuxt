<template>
  <div class="er-tabs-page">
    <PageTitle title="Er Tabs" gradient class="py-4" />
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
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            <div
              v-for="content in tab"
              class="p-6 border border-neutral-200 rounded-lg shadow-md grid grid-rows-subgrid row-span-5 lg:p-10 gap-6 dark:bg-neutral-900 dark:border-neutral-900"
            >
              <img
                :src="content.img"
                :alt="content.title.text"
                class="w-12 h-12 mb-2 transition duration-500 dark:invert"
              />
              <div class="headings-grp">
                <h3 class="text-4xl font-semibold">{{ content.title }}</h3>
                <p class="text-lg">{{ content.subTitle }}</p>
              </div>
              <div class="pricing-grp">
                <p class="font-semibold text-2xl">
                  {{ content.pricing.price }}
                </p>
                <p class="text-xs text-neutral-500">
                  {{ content.pricing.info }}
                </p>
              </div>
              <Button :href="content.button.href">{{
                content.button.text
              }}</Button>
              <ul
                v-if="content?.specs"
                class="mt-4 pt-9 border-t border-neutral-200"
              >
                <li
                  v-for="spec in content.specs"
                  class="flex gap-4 items-center"
                >
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
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              v-for="content in tab"
              class="border border-neutral-200 shadow-md rounded-lg p-0.5 text-neutral-500 grid grid-rows-1 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-900"
            >
              <div
                class="border border-neutral-200 rounded-lg p-5 lg:p-10 grid grid-rows-[11%_11%_10%_8%_12%_33%_minmax(15%, 40px)] dark:border-neutral-700"
              >
                <img
                  :src="content.img"
                  :alt="content.title"
                  class="w-6 h-6 mb-2 dark:invert"
                />
                <h2
                  class="font-bold text-2xl text-neutral-900 dark:text-neutral-500"
                >
                  {{ content.title }}
                </h2>
                <p class="mb-1">{{ content.subTitle }}</p>
                <p class="text-sm">- {{ content.miles }}</p>
                <p class="text-sm pb-2">- {{ content.speed }}</p>
                <p class="text-sm pb-2">{{ content.copy }}</p>
                <Button :href="content.button.href" target>
                  {{ content.button.text }}
                </Button>
              </div>
            </div>
          </div>
        </template>
        <template v-if="key === 'gear'">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">
            <div
              v-for="content in tab"
              class="flex flex-col gap-4 dark:bg-neutral-900 transition-all duration-500 ease-in-out p-0 dark:p-4 dark:rounded-lg"
            >
              <NuxtImg
                :src="content.img"
                :alt="content.title"
                class="rounded-lg aspect-video"
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
                <Button :href="content.button.href" target class="mt-6">{{
                  content.button.text
                }}</Button>
              </div>
            </div>
          </div>
        </template>
      </TabContent>
    </Tabs>
  </div>
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
    name: 'Profile',
  },
  { id: 2, name: 'Gear' },
];
</script>
