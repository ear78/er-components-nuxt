<template>
  <button type="button" aria-label="Toggle dark mode" class="DarkModeToggle"
    @click="$emit('darkModeClick')">
    <FontAwesomeIcon :icon="faMoon" :class="`Moon ${!isDarkMode ?
      'active' : ''}`" />
    <FontAwesomeIcon :icon="faSun" :class="`Sun ${isDarkMode ?
      'active' : ''}`" />
  </button>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const emits = defineEmits(['darkModeClick'])
const props = defineProps<{
  isDarkMode: boolean
}>()
</script>

<style scoped>
.DarkModeToggle {
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  width: 18px;
  height: 18px;
  padding: 0;

  .Moon,
  .Sun {
    color: var(--primary-color);
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.2s linear;
  }

  .Sun {
    color: white;
  }

  .Moon.active,
  .Sun.active {
    opacity: 1;
  }
}
</style>