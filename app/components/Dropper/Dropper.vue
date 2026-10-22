<template>
  <section :class="`Dropper ${isDarkMode ? 'Dark' : ''}`">
    <header
      role="button"
      tabIndex="0"
      @click="handleToggle"
      :class="`DropperHeader ${active}`"
    >
      <p class="DropperTitle">{{ title }}</p>
      <FontAwesomeIcon :class="`DropperIcon ${active}`" :icon="iconName" />
    </header>
    <div :class="`DropperContent ${active}`"><slot /></div>
  </section>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps<{
  title: string;
  iconName: any;
  isDarkMode?: boolean;
}>();

const isToggled = ref(false);
const active = computed(() => (isToggled.value ? 'Active' : ''));

const handleToggle = () => (isToggled.value = !isToggled.value);
</script>

<style scoped>
.Dropper {
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }

  &.Dark {
    .DropperHeader {
      background: var(--color-neutral-900);
      color: var(--white);
      border: 1px solid transparent;

      &:hover {
        background: var(--gray-800);
      }
    }
  }
}

.DropperHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid var(--gray-200);
  border-radius: 3px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  cursor: pointer;
  background: var(--white);

  &:hover {
    background: var(--black);
    color: var(--white);
  }
}

.DropperHeader.Active {
  background: var(--black);
  color: var(--white);
}

.DropperIcon {
  transition: all 0.2s ease;
}

.DropperIcon.Active {
  transform: rotate(180deg);
}

.DropperContent {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  padding: 0 15px;
  transition:
    opacity 0.5s ease,
    max-height 0.25s ease,
    padding 0.25s ease;
}

.DropperContent.Active {
  padding: 15px;
  max-height: initial;
  opacity: 1;
}
</style>
