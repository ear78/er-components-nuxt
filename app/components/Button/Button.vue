<template>
  <button
    type="button"
    @click="$emit('btnClick')"
    :style="{ ...sx }"
    :class="`Button ${primaryClass} ${secondaryClass} ${tertiaryClass} ${centeredClass} w-fit ${isDarkMode ? 'Dark' : ''}`"
  >
    <a :href="href" :target="isTarget" rel="noreferrer">
      <slot />
      <FontAwesomeIcon class="Arrow" :icon="faArrowRight" />
    </a>
  </button>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const props = defineProps<{
  isDarkMode?: boolean;
  href?: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  target?: boolean;
  center?: boolean;
  sx?: Object | null;
}>();

defineEmits(['btnClick']);

const primaryClass = computed(() => (props.primary ? 'Primary' : ''));
const secondaryClass = computed(() => (props.secondary ? 'Secondary' : ''));
const tertiaryClass = computed(() => (props.tertiary ? 'Tertiary' : ''));
const centeredClass = computed(() => (props.center ? 'ButtonCenter' : ''));
const isTarget = computed(() => (props.target ? '_blank' : ''));
</script>

<style scoped>
.Button {
  background: var(--button-default-bg-color, black);
  color: var(--button-default-text-color, white);
  border: none;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0;
  font-size: 0.7rem;
  border-radius: var(--button-border-radius);
  transition: all 0.3s ease;
  display: inline-block;

  a {
    display: flex;
    padding: var(--button-padding);
    line-height: 1;
    text-decoration: none;
    color: white;
    width: auto;
    margin: 0;
    transform: translateX(6px);
    transition: all 0.4s ease;
  }

  .Arrow {
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s ease;
  }

  &.ButtonCenter {
    display: block;
    margin: auto;
  }

  /* Button Variants */
  &.Primary {
    background: var(--primary-color, var(--black));

    &:hover {
      background: color-mix(in srgb, var(--primary-color) 90%, white 10%);
    }
  }

  &.Secondary {
    background: var(--secondary-color, var(--black));

    &:hover {
      background: color-mix(in srgb, var(--secondary-color) 90%, white 10%);
    }
  }

  &.Tertiary {
    background: var(--tertiary-color, var(--black));

    &:hover {
      background: color-mix(in srgb, var(--tertiary-color) 90%, white 10%);
    }
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    &:hover a {
      transform: translateX(0px);
    }

    &:hover .Arrow {
      visibility: visible;
      opacity: 1;
      transform: translateX(8px);
    }

    &.Primary {
      &:hover {
        background: color-mix(in srgb, var(--primary-color) 90%, white 10%);
      }
    }

    &.Secondary {
      &:hover {
        background: color-mix(in srgb, var(--secondary-color) 90%, white 10%);
      }
    }

    &.Tertiary {
      &:hover {
        background: color-mix(in srgb, var(--tertiary-color) 90%, white 10%);
      }
    }
  }

  &.Primary.Dark {
    background: var(--color-neutral-900, var(--black));
  }

  &.Tertiary.Dark {
    background: var(--color-neutral-900, var(--black));
  }
}
</style>
