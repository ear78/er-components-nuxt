<template>
  <div
    :key="component.id"
    :class="`card flex flex-col justify-between rounded-xl p-5 border border-neutral-200 shadow-lg h-auto transition duration-500 dark:bg-neutral-900 dark:border-transparent`"
  >
    <p class="header flex items-center m-0 font-bold">
      <img :src="logo" alt="logo" className="w-5 mr-2 dark:invert" />
      {{ component.component }}
    </p>
    <p class="description mt-2 mb-4 text-sm">
      {{ component.description }}
      <template v-if="Object.keys(component.settings).length > 1">
        <template v-for="(value, key) in component.settings" :key="key">
          <span
            class="settings-pill inline-flex flex-wrap bg-neutral-200 rounded-2xl py-px px-2.5 mr-1.5 font-medium whitespace-pre mb-1 overflow-clip transition duration-500 dark:bg-neutral-700"
          >
            <b>{{ `${key}:` }}</b>
            &nbsp;
            <template v-if="typeof value === 'boolean' && value">
              True
            </template>
            <template v-else-if="typeof value === 'boolean' && !value">
              False
            </template>
            <template v-else>
              {{ truncate(value) }}
            </template>
          </span>
        </template>
      </template>
      <span
        v-else
        class="settings-pill inline-flex flex-wrap bg-neutral-200 rounded-2xl py-px px-2.5 mr-1.5 font-medium whitespace-pre mb-1 overflow-clip dark:bg-neutral-700"
      >
        Default Settings
      </span>
    </p>
    <p
      class="footer flex items-center mt-auto mr-0 mb-0 ml-0 uppercase text-xs font-medium text-neutral-500"
    >
      <span
        class="circle mr-2.5 h-3 w-3 inline-block bg-pink-500/40 border border-pink-400 rounded-full"
      />
      {{ component.component }}
      &nbsp; settings
      <button
        type="button"
        :disabled="!isButtonEnabled"
        :aria-label="`Edit settings for ${component.component}`"
        @click="$emit('editSettings', component.id)"
        :class="`edit-btn w-9 h-8 text-xs ml-auto bg-black text-white border border-black pb-0.5 rounded-md flex justify-center items-center hover:bg-neutral-800 ${!isButtonEnabled ? 'disabled:opacity-50 cursor-not-allowed' : 'cursor-pointer'}`"
      >
        <FontAwesomeIcon :icon="faEdit" width-auto class="w-3 h-3" />
      </button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import logo from '@/assets/img/er-logo.svg';

const emit = defineEmits(['editSettings']);
const props = defineProps<{
  component: {
    id: number;
    component: string;
    description: string;
    settings: {};
  };
  isDarkMode: boolean;
}>();

const isButtonEnabled = computed(() => {
  return Object?.keys(props.component.settings)?.length > 1;
});

const truncate = (str: any, maxLength = 30) => {
  const truncated =
    str.length > maxLength ? `${str.slice(0, maxLength - 1)}...` : str;
  return truncated;
};
</script>
