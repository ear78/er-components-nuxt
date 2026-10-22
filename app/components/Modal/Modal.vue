<template>
  <div
    :class="`Modal ${isDarkMode ? 'Dark' : ''} ${isModalActive ? 'ModalActive' : ''}`"
  >
    <div class="Content over">
      <FontAwesomeIcon
        :icon="faClose"
        role="button"
        tabIndex="0"
        @click="$emit('modalClick')"
        class="CloseBtn w-3"
      />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const emit = defineEmits(['modalClick']);
const props = defineProps<{
  isModalActive?: boolean;
  isDarkMode?: boolean;
}>();

watchEffect(() => {
  if (props.isModalActive) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});

onBeforeUnmount(() => {
  document.body.classList.remove('overflow-hidden');
});
</script>

<style scoped>
.Modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.2s ease;
  opacity: 0;

  &.Dark {
    color: var(--gray-900);
  }

  &.ModalActive {
    opacity: 1;
    z-index: 100;
  }

  .Content {
    position: relative;
    background: var(--white);
    padding: 2.5rem 2.5% 2.5%;
    border-radius: 8px;
    max-height: 80%;
    max-width: 95%;
    min-width: 90%;
    box-sizing: border-box;

    @media (min-width: 1024px) {
      min-width: 50%;
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 45px;
      position: relative;
      bottom: 45px;
      background: linear-gradient(0deg, var(--white), rgba(255, 255, 255, 0));
    }
  }

  .CloseBtn {
    position: absolute;
    right: 1.125rem;
    top: 1.125rem;

    @media (hover: hover) {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
