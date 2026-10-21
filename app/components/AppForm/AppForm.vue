<!-- import React, { lazy } from 'react';
// import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import styles from './AppForm.module.scss';

// @ts-ignore
const AlertBanner = lazy(() => import('@/components/AlertBanner/AlertBanner'));

type AppFormProps = {
  formData: {}[];
  formRef?: React.Ref<HTMLFormElement> | undefined;
  isDarkMode?: boolean;
  click?: (event: React.SyntheticEvent) => void;
};
function AppForm({ formData, click, formRef, isDarkMode }: AppFormProps) {
  /* strip HTML tags from input values */
  const stripHtmlTags = (str: string) => str?.replace(/<\/?[^>]+(>|$)/g, '');

  let input;
  if (formData) {
    input = formData.map((d: any) => {
      if (d.inputType === 'checkbox') {
        return (
          <FormControlLabel
            key={`label-${d.name}`}
            control={
              <Checkbox
                name={d.name}
                size="medium"
                checked={d.inputVal}
                onChange={d.change}
              />
            }
            labelPlacement="start"
            label={d.labelText}
          />
        );
      }
      if (d.inputType === 'radio') {
        return (
          <RadioGroup
            key={`radios-${d.name}`}
            row
            aria-labelledby={`radios-${d.name}-group`}
            name={d.name}
            value={d.inputVal}
            onChange={d.change}
            sx={{ margin: '.5rem 0' }}
          >
            <FormControlLabel
              labelPlacement="start"
              value="left"
              control={<Radio />}
              label="Left"
            />
            <FormControlLabel
              labelPlacement="start"
              value="center"
              control={<Radio />}
              label="Center"
            />
            <FormControlLabel
              labelPlacement="start"
              value="right"
              control={<Radio />}
              label="Right"
            />
          </RadioGroup>
        );
      }
      if (d.inputType === 'color') {
        return (
          <div key={`color-${d.name}`} className="relative">
            <label
              className="absolute -top-1.75 bg-white px-0.5 text-gray-500 left-2 text-xs"
              htmlFor={`outlined-${d.name}`}
            >
              {d.labelText}
            </label>
            <input
              type="color"
              key={`textinput-${d.name}`}
              id={`outlined-${d.name}`}
              value={d.inputVal}
              onChange={d.change}
              name={d.name}
              className="border border-gray-300 rounded-md p-2 text-sm w-full h-10 mb-4 hover:border-gray-900"
            />
          </div>
        );
      }
      return (
        <div key={`text-${d.name}`} className="relative">
          <label
            className="absolute -top-1.75 bg-white px-0.5 text-gray-500 left-2 text-xs"
            htmlFor={`outlined-${d.name}`}
          >
            {d.labelText}
          </label>
          <input
            type="text"
            key={`textinput-${d.name}`}
            id={`outlined-${d.name}`}
            value={stripHtmlTags(d.inputVal)}
            onChange={d.change}
            name={d.name}
            className="border border-gray-300 rounded-md p-2 text-sm w-full mb-4 hover:border-gray-900"
          />
        </div>
      );
    });
  }

  return formData ? (
    <form
      ref={formRef}
      onSubmit={click}
      className={`${styles.AppForm} ${isDarkMode ? styles.Dark : ''}`}
    >
      <div className={`${styles.FormInputs} pt-2`}>{input}</div>
      <Button
        sx={{ borderRadius: '25px', mt: 'auto', mb: '2.5rem' }}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Save
      </Button>
    </form>
  ) : (
    <AlertBanner>
      Please add&nbsp;
      <b>form setup </b>
      data...
    </AlertBanner>
  );
}

export default AppForm; -->

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
            />
            {{ d.labelText }}
            <span class="checkmark"></span>
          </label>
        </div>
        <div v-else-if="d.inputType === 'radio'">
          <label class="container">
            <input
              type="radio"
              :id="d.name"
              :name="d.name"
              :check="d.inputVal"
              :value="d.inputVal"
            />
            {{ d.labelText }}
            <span class="checkmark"></span>
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
            @change="emit('changeEvent')"
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
            @change="$emit('changeEvent')"
            :name="d.name"
            class="border border-gray-300 rounded-md p-2 text-sm w-full mb-4 hover:border-gray-900"
          />
        </div>
      </template>
    </div>
    <Button type="submit" center> Save </Button>
  </form>
</template>

<script setup lang="ts">
import Button from '@/components/Button/Button.vue';
import type { FormField } from '@/assets/js/formData';

const props = defineProps<{
  formRef: string;
  formData: FormField[];
  isDarkMode: boolean;
}>();
const emit = defineEmits(['formSubmit', 'changeEvent']);

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
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
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

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: var(--secondary-color);
  outline: 1px solid var(--gray-300);
  border: 1px solid white;
}

.container input:focus-visible ~ .checkmark,
.container input:focus ~ .checkmark {
  outline: 2px solid var(--color-blue-800);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
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
</style>
