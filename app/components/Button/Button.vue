<template>
  <button
    v-if="type === 'button'"
    type="button"
    @click="$emit('btnClick')"
    :style="{ ...sx }"
    :class="`Button ${primaryClass} ${secondaryClass} ${tertiaryClass} ${centeredClass} w-fit ${isDarkMode ? 'Dark' : ''}`"
  >
    <a :href="href" :target="isTarget" rel="noreferrer">
      <slot />
      <FontAwesomeIcon class="Arrow" :icon="faArrowRight" width-auto />
    </a>
  </button>
  <a
    v-else-if="type === 'icon'"
    :href="href"
    :aria-label="iconLabel"
    class="bg-black h-10 w-10 text-white pl-3 flex items-center justify-start rounded-full cursor-pointer group transition-all duration-150 ease-in-out hover:w-16 relative"
    :target="isTarget"
  >
    <FontAwesomeIcon
      v-if="icon"
      :icon="icon"
      class="group-hover:absolute w-4"
      width-auto
    />
    <span
      class="w-0 transition duration-400 ease delay-10 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:w-full transform group-hover:translate-x-3/5 pt-0.5"
    >
      <FontAwesomeIcon :icon="faArrowRight" size="xs" width-auto />
    </span>
  </a>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight, faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps {
  /** Types: button, icon */
  type?: string;
  /** Dark mode - to be deprecated in favor of tailwind */
  isDarkMode?: boolean;
  /** Sets the href */
  href?: string;
  /** Primary styles */
  primary?: boolean;
  /** Secondary styles */
  secondary?: boolean;
  /** Tertiary styles */
  tertiary?: boolean;
  /** Sets the target for links */
  target?: boolean;
  /** Centers the button */
  center?: boolean;
  /** Custom styles that sets the style attribute */
  sx?: Object | null;
  /** Icon link button */
  icon?: object;
  /** aria label text */
  iconLabel?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
});

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
    background: var(--button-primary-bg-color, var(--black));

    &:hover {
      background: color-mix(
        in srgb,
        var(--button-primary-bg-color) 90%,
        white 10%
      );
    }
  }

  &.Secondary {
    background: var(--button-secondary-bg-color, var(--black));

    &:hover {
      background: color-mix(
        in srgb,
        var(--button-secondary-bg-color) 90%,
        white 10%
      );
    }
  }

  &.Tertiary {
    background: var(--button-tertiary-bg-color, var(--black));

    &:hover {
      background: color-mix(
        in srgb,
        var(--button-tertiary-bg-color) 90%,
        white 10%
      );
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
        background: color-mix(
          in srgb,
          var(--button-primary-bg-color) 90%,
          white 10%
        );
      }
    }

    &.Secondary {
      &:hover {
        background: color-mix(
          in srgb,
          var(--button-secondary-bg-color) 90%,
          white 10%
        );
      }
    }

    &.Tertiary {
      &:hover {
        background: color-mix(
          in srgb,
          var(--button-tertiary-bg-color) 90%,
          white 10%
        );
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
