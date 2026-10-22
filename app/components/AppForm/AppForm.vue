<template>
  <form
    :ref="formRef"
    @submit="$emit('formSubmit')"
    :class="`AppForm ${isDarkMode ? 'Dark' : ''}`"
  >
    <div class="FormInputs pt-2">
      <template v-for="d in formData" :key="`text-${d.name}`">
        <div v-if="d.inputType === 'checkbox'">
          <label class="container">
            <input
              type="checkbox"
              :id="d.name"
              :name="d.name"
              :check="d.inputVal"
              :value="d.inputVal"
              v-model="d.inputVal"
              @change="$emit('changeEvent', $event)"
            />
            {{ d.labelText }}
            <span class="checkmark"></span>
          </label>
        </div>
        <div
          v-else-if="d.inputType === 'radio'"
          class="radio-group flex flex-wrap gap-1 py-2"
        >
          <legend class="w-full">{{ d.labelText }}</legend>
          <label
            v-for="item in d.radioGroup"
            class="flex items-center gap-2 pr-4 first-of-type:pl-1"
            :for="item"
            :key="item"
          >
            <input
              type="radio"
              :id="item"
              :name="d.name"
              v-model="d.inputVal"
              :value="item"
              class="appearance-none w-4 h-4 bg-neutral-300 outline-2 outline-neutral-300 border-2 border-white rounded-full checked:bg-pink-500 checked:outline-pink-500 focus-visible:bg-pink-500 focus-visible:outline-blue-700"
              @change="$emit('changeEvent', $event)"
            />
            {{ item }}
          </label>
        </div>
        <div v-else-if="d.inputType === 'color'" class="relative">
          <label
            class="absolute -top-1.75 bg-white px-0.5 text-gray-500 left-2 text-xs"
            :for="`outlined-${d.name}`"
          >
            {{ d.labelText }}
          </label>
          <input
            type="color"
            :id="`outlined-${d.name}`"
            :value="d.inputVal"
            @change="$emit('changeEvent', $event)"
            :name="d.name"
            class="border border-gray-300 rounded-md p-2 text-sm w-full h-10 mb-4 hover:border-gray-900"
          />
        </div>
        <div v-else-if="d.inputType === 'text'" class="relative">
          <label
            class="absolute -top-1.75 bg-white px-0.5 text-gray-500 left-2 text-xs"
            :for="`outlined-${d.name}`"
          >
            {{ d.labelText }}
          </label>
          <input
            type="text"
            :id="`outlined-${d.name}`"
            :value="stripHtmlTags(d.inputVal)"
            @change="$emit('changeEvent', $event)"
            :name="d.name"
            class="border border-gray-300 rounded-md p-2 text-sm w-full mb-4 hover:border-gray-900"
          />
        </div>
      </template>
    </div>
    <Button v-if="hasSubmitBtn" type="button" center> Save </Button>
  </form>
</template>

<script setup lang="ts">
import Button from '@/components/Button/Button.vue';
import type { FormField } from '@/assets/js/formData';

interface AppFormProps {
  formRef?: string;
  formData: FormField[];
  isDarkMode?: boolean;
  hasSubmitBtn?: boolean;
}

const props = withDefaults(defineProps<AppFormProps>(), {
  formRef: 'appForm',
  hasSubmitBtn: false,
});
const emit = defineEmits(['formSubmit', 'changeEvent']);
const radioModel = defineModel('radioModel');

const stripHtmlTags = (str: string | boolean | undefined) =>
  String(str ?? '').replace(/<\/?[^>]+(>|$)/g, '');
</script>

<style scoped>
.AppForm {
  display: grid;
  grid-template-rows: auto 115px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100%;
  min-height: 20vh;

  &.Dark {
    color: var(--gray-700);
  }

  .FormInputs {
    display: grid;
  }
}

/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: var(--font-size-sm);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 2px;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 4px;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  input:checked ~ .checkmark {
    background-color: var(--secondary-color);
    outline: 1px solid var(--gray-300);
    border: 1px solid white;
  }

  input:focus-visible ~ .checkmark,
  input:focus ~ .checkmark {
    outline: 2px solid var(--color-blue-800);
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>
