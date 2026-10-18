<template>
  <section
    :key="data.id"
    :ref="`section-highlight-${data.id}`"
    :class="`flex flex-col ${alternatingSides} ${isStacked}`"
  >
    <div class="w-full md:w-1/2">
      <NuxtImg
        :class="`object-cover aspect-3/2 md:aspect-square lg:aspect-3/2 ${imageRadiused}`"
        :loading="`${index <= 1 ? 'eager' : 'lazy'}`"
        :src="data.img"
        format="webp"
        :alt="`${data?.title?.text ?? ''}`"
        width="800"
        height="600"
      />
    </div>
    <div
      :class="`flex flex-col justify-center w-full md:w-1/2 space-y-3 p-9 bg-neutral-100 dark:bg-neutral-900 transition duration-500 ease-in-out ${boxRadiused}`"
    >
      <Heading v-if="data?.title?.text" :variant="data?.title?.variant ?? ''">
        {{ data?.title?.text }}
      </Heading>
      <p v-if="data.text">{{ data.text }}</p>
      <Button
        v-if="data.button"
        :href="data.button.href"
        :target="data.button.target ? true : false"
      >
        {{ data.button.text }}
      </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: {
    id: number | string;
    img: string;
    title?: {
      variant?: string;
      text?: string;
    };
    text: string;
    button?: {
      text?: string;
      href: string;
      target: boolean;
    };
  };
  stacked?: boolean;
  index: number;
}>();

const alternatingSides = computed(() => {
  return props.index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row';
});

const isStacked = computed(() =>
  props.stacked ? 'mb-0' : 'mb-14 shadow-2xl rounded-lg',
);

const boxRadiused = computed(() => {
  if (props.stacked) {
    return '';
  }
  return props.index % 2 == 0 ? 'md:rounded-r-lg' : 'md:rounded-l-lg';
});

const imageRadiused = computed(() => {
  if (props.stacked) {
    return '';
  }
  return props.index % 2 !== 0
    ? 'rounded-t-lg md:rounded-t-none md:rounded-r-lg'
    : 'rounded-t-lg md:rounded-t-none md:rounded-l-lg';
});
</script>
