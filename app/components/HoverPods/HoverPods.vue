<template>
  <div
    class="hover-pods-container flex flex-col md:flex-row items-center justify-evenly pt-10"
  >
    <template v-if="podData.length">
      <div
        v-for="(pod, index) in podData"
        :key="pod.id"
        :style="{ transitionDelay: `${index * delay}ms` }"
        :class="`hover-pod ${!isLoading ? 'fade-in' : ''}`"
      >
        <div
          :style="{ backgroundImage: `url(${pod.podBgImage})` }"
          :class="`pod ${hoverPodSquared} relative bg-cover rounded-full mb-5 w-50 h-50 md:w-36 md:h-36 lg:w-50 lg:h-50 `"
        >
          <a
            :href="pod.podLink"
            rel="noreferrer"
            :target="`${openTab ? '_blank' : ''}`"
            class="group"
          >
            <div
              :style="{ backgroundColor: `${hoverColor}ad` }"
              :class="`hover-color ${hoverPodSquared} `"
            >
              <p class="hover-text">
                {{ pod.podText }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
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

const isLoading = ref(true);
const hoverPodSquared = computed(() => (props.isSquared ? 'squared' : ''));

onMounted(() => {
  /** Page loading delay using client only to keep hydration mismatches in sync. */
  setTimeout(() => {
    isLoading.value = false;
  }, 10);
});
</script>

<style scoped>
.hover-pods-container {
  a {
    @media (hover: hover) {
      &:hover .hover-color,
      &:hover .hover-text {
        top: 45%;
        cursor: pointer;
        opacity: 1;
      }

      .hover-color,
      .hover-text {
        opacity: 0;
        top: 40%;
      }
    }
  }

  .hover-color {
    width: 100%;
    height: 100%;
    background: #00000099;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: opacity 0.2s ease;
  }

  .hover-text {
    margin: 0;
    color: var(--white);
    position: absolute;
    width: 100%;
    top: 45%;
    text-align: center;
    opacity: 1;
    transition:
      opacity 0.2s ease 0.1s,
      top 0.2s ease 0.1s;
  }

  .pod,
  .hover-color {
    &.squared {
      border-radius: 0;
    }
  }

  /* Appear load animation */
  .hover-pod {
    opacity: 0;
    transition: opacity 1s ease;
    &.fade-in {
      opacity: 1;
    }
  }
}
</style>
