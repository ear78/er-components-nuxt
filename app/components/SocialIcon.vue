<!-- import styles from './SocialIcon.module.scss';

type SocialIconProps = {
  path: string;
  target?: boolean;
  children: React.ReactNode;
};

function SocialIcon({
  path,
  target = false,
  children,
}: SocialIconProps) {
  return (
    <a
      className={`${styles.Links} flex text-neutral-800 group-hover:text-neutral-500 hover:text-black dark:hover:text-pink-500`}
      href={path}
      target={target ? '_blank' : ''}
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default SocialIcon; -->
<template>
  <a class="Links flex text-neutral-800
    group-hover:text-neutral-500 hover:text-black dark:hover:text-pink-500"
    :href="path" :target="`${target ? '_blank' : ''}`" rel="noreferrer">
    <slot />
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  path: string,
  target?: boolean,
}>()
</script>

<style scoped>
.Links {
  /* color: #454545; */

  svg {
    width: 26px;
    font-size: 26px;
    transition: all 0.14s ease-out;
  }


  /* &:hover svg {
    color: #000;
  } */

  &.Dark {
    &:hover svg {
      color: var(--secondary-color);
    }
  }
}
</style>