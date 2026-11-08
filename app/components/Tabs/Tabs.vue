<template>
  <div ref="tabsComponent" class="tabs-component">
    <div :class="['tabs-wrapper mb-8', headerAlignment]">
      <header
        class="p-0.5 border border-transparent rounded-lg inline-flex items-center justify-center gap-3 bg-neutral-200"
      >
        <button
          v-for="(tab, index) in data"
          @click="updateTabs(index)"
          :class="[
            isActiveTab(index) ? 'bg-white text-neutral-900' : '',
            'py-1.5 px-2.5 border border-transparent rounded-lg cursor-pointer text-neutral-600 hover:bg-white hover:text-black transition-all ease-in-out duration-500',
          ]"
        >
          {{ tab.name }}
        </button>
      </header>
    </div>
    <div
      :style="{ height: `${contentContainerHeight}px` }"
      class="content-wrapper relative"
    >
      <template v-if="data[0]?.content">
        <div
          ref="contentRef"
          v-for="(tab, index) in data"
          :class="`${isActiveTab(index) ? 'visible opacity-100 z-1' : 'invisible opacity-0'} absolute transition-all duration-500`"
        >
          <!-- Plain Text data -->
          {{ tab.content }}
        </div>
      </template>

      <!-- Slot for custom mixed content -->
      <div ref="slotContentRef">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  /** Data can be used to setup your tab headers. Name will name your tab and content can be used to print out
   * simple text and informative data if you don't need a custom slot.
   */
  data: { id: number; name?: string; content?: string }[];
  defaultTab?: number;
  headerAlignment?: string;
  fixedHeight?: boolean;
}>();

const selectedTab = defineModel<number, string>('selectedTab');
const tabsComponent = useTemplateRef('tabsComponent');
const contentRef = useTemplateRef('contentRef');
const slotContentRef = useTemplateRef('slotContentRef');
const resizeObserver = ref<ResizeObserver | null>(null);

// Sets the container height for absolute positioned tabs
const contentContainerHeight = ref(0);

const headerAlignment = computed(() => {
  return {
    'text-left': !props.headerAlignment,
    'text-center': props.headerAlignment === 'center',
    'text-right': props.headerAlignment === 'right',
  };
});

onMounted(() => {
  // Set initial tab
  selectedTab.value = props?.defaultTab ?? 0;

  if (tabsComponent.value) {
    const delay = 1000;
    let containerWidth: number | undefined;
    resizeObserver.value = new ResizeObserver((entries) => {
      if (entries && containerWidth !== entries?.[0]?.contentRect.width) {
        containerWidth = entries?.[0]?.contentRect.width;

        setTimeout(() => {
          tabHeight();
        }, delay);
      }
    });
    resizeObserver.value.observe(tabsComponent.value);
  }
});

onUnmounted(() => {
  resizeObserver.value?.disconnect();
});

const isActiveTab = (id: number) => selectedTab.value === id;

// Calculate container height
const calculateContainerHeight = (refs: any) => {
  let highest = 0;
  refs?.map((el: any) => {
    if (el.clientHeight > highest) {
      highest = el.clientHeight;
    }
    return highest;
  });

  return highest;
};

/** Set tab height on tab click or a fixed height when needing a more slideshow type of viewer with no shift */
const tabHeight = () => {
  // Gets the internal slot tabs
  const children = Array.from(slotContentRef.value?.children ?? []);
  let calcContainerHeight: number | any;

  if (props.fixedHeight) {
    if (props.data[0]?.content) {
      calcContainerHeight = calculateContainerHeight(contentRef.value);
      contentContainerHeight.value = calcContainerHeight ?? 0;
      return;
    }

    calcContainerHeight = calculateContainerHeight(children);
    contentContainerHeight.value = calcContainerHeight ?? 0;
  } else {
    if (props.data[0]?.content) {
      calcContainerHeight =
        contentRef.value?.[selectedTab?.value ?? 0]?.clientHeight ?? 0;
      contentContainerHeight.value = calcContainerHeight ?? 0;
      return;
    }

    contentContainerHeight.value =
      children[selectedTab?.value ?? 0]?.clientHeight ?? 0;
  }
};

const updateTabs = (id: number) => {
  selectedTab.value = id;
};

watch(
  selectedTab,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      // Wait for selectedTab to be updated
      tabHeight();
    }
  },
  { immediate: true },
);
</script>
