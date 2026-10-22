<!-- import React from 'react';
import { useSelector } from 'react-redux';
import styles from './HoverPods.module.scss';

interface HoverPodsProps {
  isSquared?: boolean;
  hoverColor?: string;
  openTab?: boolean;
  podData: {}[];
  delay?: number;
}

function HoverPods({
  delay = 0, podData, isSquared = false, hoverColor = '', openTab = true,
}: HoverPodsProps) {
  const hoverPodSquared = isSquared ? styles.Squared : '';
  const isLoading = useSelector((state: any) => state.app.appLoading);

  let hoverPod;
  if (podData.length) {
    hoverPod = podData.map((pod: any, index) => (
      <div key={pod.id} style={{ transitionDelay: `${index * delay}ms` }} className={`${styles.HP} ${isLoading ? styles.FadeIn : ''}`}>
        <div style={{ backgroundImage: `url(${pod.podBgImage})` }} className={`${styles.Pod} ${hoverPodSquared}`}>
          <a href={pod.podLink} rel="noreferrer" target={openTab ? '_blank' : ''}>
            <div style={{ backgroundColor: `${hoverColor}ad` }} className={`${styles.HoverColor} ${hoverPodSquared}`}>
              <p className={styles.HoverText}>{pod.podText}</p>
            </div>
          </a>
        </div>
      </div>
    ));
  } else {
    hoverPod = null;
  }

  return (
    <div className={`${styles.HoverPodsContainer}`}>
      {hoverPod}
    </div>
  );
}
export default HoverPods; -->

<template>
  <div class="HoverPodsContainer">
    <template v-if="podData.length">
      <div
        v-for="(pod, index) in podData"
        :key="pod.id"
        :style="{ transitionDelay: `${index * delay}ms` }"
        :class="`HP ${!isLoading ? 'FadeIn' : ''}`"
      >
        <div
          :style="{ backgroundImage: `url(${pod.podBgImage})` }"
          :class="`Pod ${hoverPodSquared}`"
        >
          <a
            :href="pod.podLink"
            rel="noreferrer"
            :target="`${openTab ? '_blank' : ''}`"
          >
            <div
              :style="{ backgroundColor: `${hoverColor}ad` }"
              :class="`HoverColor ${hoverPodSquared}`"
            >
              <p class="HoverText">{{ pod.podText }}</p>
            </div>
          </a>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useLoadingIndicator } from '#app';
import { podData } from '~/assets/js/data';

interface Props {
  isSquared?: boolean;
  hoverColor?: string;
  openTab?: boolean;
  podData: {}[];
  delay?: number;
}
const props = withDefaults(defineProps<Props>(), {
  isSquared: false,
  hoverColor: '',
  openTab: false,
  podData: () => [],
  delay: 0,
});

const { isLoading, start } = useLoadingIndicator();
start({ force: true });
const hoverPodSquared = computed(() => (props.isSquared ? 'Squared' : ''));
</script>

<style scoped>
.HoverPodsContainer {
  display: flex;
  justify-content: space-evenly;
  padding-top: 40px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .Pod {
    position: relative;
    background-size: cover;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 20px;

    @media (min-width: 768px) and (max-width: 1000px) {
      width: 150px;
      height: 150px;
    }

    @media (hover: hover) {
      &:hover .HoverColor,
      &:hover .HoverText {
        top: 45%;
        cursor: pointer;
        opacity: 1;
      }

      .HoverColor,
      .HoverText {
        opacity: 0;
        top: 40%;
      }
    }

    a {
      line-height: 1.4;
    }
  }

  .HoverColor {
    width: 100%;
    height: 100%;
    background: #00000099;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: opacity 0.2s ease;
  }

  .HoverText {
    margin: 0;
    color: var(--white);
    position: absolute;
    top: 45%;
    width: 100%;
    text-align: center;
    opacity: 1;
    transition:
      opacity 0.2s ease 0.1s,
      top 0.2s ease 0.1s;
  }

  .Pod,
  .HoverColor {
    &.Squared {
      border-radius: 0;
    }
  }

  /* Appear animation */
  .HP {
    opacity: 0;
    transition: opacity 1s ease;
    &.FadeIn {
      opacity: 1;
    }
  }
}
</style>
