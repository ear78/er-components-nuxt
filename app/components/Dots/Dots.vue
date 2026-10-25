<template>
  <ul
    :style="{
      height: `${height}px`,
      top: `${top}px`,
      zIndex: `${zLayer}`,
    }"
    class="HappyDots"
  >
    <template v-for="(d, i) in data" :key="d.id">
      <li
        @click="handleScrollTo(refs?.[i])"
        :style="{
          background: dotColor,
          color: textColor,
        }"
        class="HoverItem"
      >
        <div class="Line" />
        <span :style="{ width: `${textWidth}px` }" class="Text">{{
          d.text
        }}</span>
      </li>
    </template>
  </ul>
  <div class="HoverBackground" />
</template>

<script setup lang="ts">
const props = defineProps<{
  data: { id: number; text: string; lineColor: string; dotColor: string }[];
  dotColor?: string;
  textColor?: string;
  textWidth?: string;
  height?: string;
  top?: string;
  zLayer?: string;
  refs?: (HTMLElement | null | undefined)[] | null;
}>();

const dotColorRef = computed(() => props.dotColor);
const handleScrollTo = (v?: HTMLElement | null) => {
  if (!v) return;

  v.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });
};
</script>

<style scoped>
.HappyDots {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  position: fixed;
  z-index: 60;
  top: 40vh;
  padding-left: 2%;

  @media (hover: hover) {
    &:hover + .HoverBackground {
      background: rgba(0, 0, 0, 0.7);
      height: 100vh;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 50;
      opacity: 1;
      transition: var(--transition-medium);
    }
  }

  .HoverItem {
    position: relative;
    list-style-type: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--color-pink-500);
    transition: all 0.4s ease;

    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        background: var(--color-white);
        color: var(--color-white);
      }

      &:hover .Text {
        height: auto;
        opacity: 1;
        transform: translateX(70px);
      }

      &:hover .Line {
        width: 300%;
      }
    }

    .Text {
      opacity: 0;
      position: absolute;
      transform: translateX(80px);
      color: inherit;
      transition: all 0.3s ease 0.1s;
      width: 300px;
      line-height: 15px;
      text-transform: uppercase;
      letter-spacing: 8px;
      font-size: 13px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 0;
    }

    .Line {
      width: 0;
      height: 2px;
      background-color: inherit;
      position: absolute;
      left: 24px;
      top: 50%;
      transition: all 0.35s ease;
    }
  }

  li:first-child {
    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      height: 12px;
      width: 12px;
      background-color: var(--color-white);
      border: 1px solid v-bind('dotColorRef');
      border-radius: 50%;
      display: inline-block;
      z-index: -1;
      animation-name: blinker;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }
}

@keyframes blinker {
  0% {
    transform: scale(1);
    opacity: 0.9;
  }
  90% {
    transform: scale(3);
    opacity: 0;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
</style>
