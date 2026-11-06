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
const slots = defineSlots();
const props = defineProps<{
  /** Data can be used to setup your tab headers. Name will name your tab and content can be used to print out
   * simple text and informative data.
   */
  data: { id: number; name?: string; content?: string }[];
  defaultTab?: number;
  headerAlignment?: string;
}>();

const selectedTab = defineModel('selectedTab');
const tabsComponent = useTemplateRef('tabsComponent');
const contentRef = useTemplateRef('contentRef');
const slotContentRef = useTemplateRef('slotContentRef');

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
  const children = Array.from(slotContentRef.value?.children ?? []);
  // let highest = 0;
  // const calcContainerHeight = children.map((el: any) => {
  //   if (el.clientHeight > highest) {
  //     highest = el.clientHeight;
  //   }
  //   return highest;
  // });
  const calcContainerHeight = children[0]?.clientHeight;
  contentContainerHeight.value = calcContainerHeight ?? 0;

  if (!slots.default) {
    console.log('inside slot check');

    let highest = 0;
    const calcContainerHeight = contentRef.value?.map((el: HTMLElement) => {
      if (el.clientHeight > highest) {
        highest = el.clientHeight;
      }
      return highest;
    });
    contentContainerHeight.value = calcContainerHeight?.[0] ?? 0;
  }

  if (tabsComponent.value) {
    const resizeObserver = new ResizeObserver((entries) => {
      console.log('resizing');
    });
    resizeObserver.observe(tabsComponent.value);
  }
});

const isActiveTab = (id: number) => selectedTab.value === id;

const updateTabs = (id: number) => {
  selectedTab.value = id;
  const children = Array.from(slotContentRef.value?.children ?? []);
  const currentTab = children[id];
  contentContainerHeight.value = currentTab?.clientHeight ?? 0;
  console.log(contentContainerHeight.value);
};
</script>
