<template>
  <section ref="pageSection">
    <div :class="`HomeSections LazyLoad ${isIntersecting ? 'Active' : ''}`">
      <Heading variant="h2" :sx="{ textAlign: 'center', margin: '0 0 1rem' }">
        {{ data.title }}
      </Heading>
      <p>
        The&nbsp;
        <b>
          {{ data.component }}
          &nbsp; Component&nbsp;
        </b>
        {{ data.description }}
      </p>
      <Button
        :is-dark-mode="globalStore.isDarkMode"
        tertiary
        center
        :sx="{ margin: 'auto auto 35px' }"
        :href="data.page"
      >
        Go To Component
      </Button>
      <NuxtImg
        :src="data.img"
        :alt="data.title"
        width="2100"
        class="rounded-lg shadow-xl"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/Button/Button.vue';
import { useGlobalStore } from '@/stores/global';

interface Props {
  setThreshold?: number;
  setMarginOffset?: string;
  data: {
    id: number;
    title: string;
    component: string;
    description: string;
    img: string;
    page: string;
  };
}

const props = withDefaults(defineProps<Props>(), {
  setThreshold: 0.3,
  setMarginOffset: '0',
});

const globalStore = useGlobalStore();
const isIntersecting = ref(false);
const pageSectionRef = useTemplateRef('pageSection');

watch(pageSectionRef, () => {
  const options = {
    root: null,
    rootMargin: `${props.setMarginOffset}px`,
    threshold: props.setThreshold,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isIntersecting.value = true;
        obs.disconnect();
      }
    });
  }, options);

  observer.observe(pageSectionRef.value!);

  return () => {
    observer.disconnect();
  };
});
</script>

<style scoped>
.HomeSections {
  margin: 3.5rem 0 0;

  @media (min-width: 1024px) {
    margin: 6rem 0 0;
  }

  p {
    text-align: center;
    margin: 0 auto 25px;
    max-width: 800px;
  }

  img {
    width: 100%;
    height: auto;
  }
}

.LazyLoad {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  transition: all 1s ease-in-out;
  &.Active {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
  }
}
</style>
