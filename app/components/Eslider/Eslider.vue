<template>
  <div :id="carouselId">
    <!-- Scroll Slide Container -->
    <div class="slide-wrapper relative">
      <!-- Overlay button left -->
      <template v-if="overlayBtns">
        <button
          type="button"
          aria-label="left"
          @click="goToPrev($event)"
          @keyUp="goToPrev($event)"
          class="hidden md:flex left-[1%] bg-white/60 absolute h-10 w-10 items-center justify-center rounded-full top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:bg-white/80 hover:shadow-md transform hover:scale-105 disabled:cursor-not-allowed disabled:scale-100 disabled:bg-white/60 transition"
          :disabled="isPrevBtnDisabled"
        >
          <FontAwesomeIcon width-auto class="w-2.5 h-4" :icon="faChevronLeft" />
        </button>
      </template>

      <div ref="scrollContainerRef" @scroll="handleScroll" class="Eslider">
        <div
          v-for="(slide, i) in data"
          :key="slide.id"
          ref="scrollRefs"
          :style="{
            backgroundImage: `url(${slide.image})`,
            marginRight: isLastSlide(data, i),
          }"
          :class="`Slide ${globalStore.isAppLoading ? 'isBlurred' : ''} rounded-lg`"
        >
          <div class="OverlayText">{{ slide.text }}</div>
          <div class="Overlay rounded-lg" />
        </div>
      </div>

      <!-- Overlay button right -->
      <template v-if="overlayBtns">
        <button
          type="button"
          aria-label="right"
          @click="goToNext($event)"
          @keyUp="goToNext($event)"
          class="hidden md:flex right-[1%] bg-white/60 absolute h-10 w-10 items-center justify-center rounded-full top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:bg-white/80 hover:shadow-md transform hover:scale-105 disabled:cursor-not-allowed disabled:scale-100 disabled:bg-white/60 transition"
          :disabled="isNextBtnDisabled"
        >
          <FontAwesomeIcon
            width-auto
            class="w-2.5 h-4"
            :icon="faChevronRight"
          />
        </button>
      </template>
    </div>

    <template v-if="hasNavigation && !hasDots">
      <div class="SlideBtns">
        <button
          type="button"
          aria-label="left"
          @click="goToPrev($event)"
          @keyUp="goToPrev($event)"
          :disabled="isPrevBtnDisabled"
        >
          <FontAwesomeIcon width-auto class="w-2.5 h-4" :icon="faChevronLeft" />
        </button>
        <button
          type="button"
          aria-label="right"
          @click="goToNext($event)"
          @keyUp="goToNext($event)"
          :disabled="isNextBtnDisabled"
        >
          <FontAwesomeIcon
            width-auto
            class="w-2.5 h-4"
            :icon="faChevronRight"
          />
        </button>
      </div>
    </template>

    <!-- Dots Indicator [WIP] -->
    <template v-if="hasDots && !hasNavigation">
      <div class="Dots">
        <button
          v-for="(item, index) in data"
          :key="item.id"
          type="button"
          :class="`Dot ${currentSlide === index ? 'ActiveDot' : ''}`"
          @click="goToSlide(index)"
        >
          <span class="Sr"> item {index + 1} </span>
        </button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useGlobalStore } from '@/stores/global';

interface EsliderProps {
  data: {
    id: number;
    image: string;
    text: string;
  }[];
  carouselId?: string;
  hasNavigation?: boolean;
  hasDots?: boolean;
  overlayBtns?: boolean;
}

const props = withDefaults(defineProps<EsliderProps>(), {
  hasNavigation: false,
  overlayBtns: true,
  hasDots: false,
});

const globalStore = useGlobalStore();
const scrollContainerRef = useTemplateRef<HTMLElement>('scrollContainerRef');
const scrollRefs = useTemplateRef<HTMLElement[]>('scrollRefs');
const isPrevBtnDisabled = ref(false);
const isNextBtnDisabled = ref(false);
const currentSlide = ref(0);

const isLastSlide = (data: typeof props.data, index: number) => {
  return data?.length - 1 === index ? '0' : '2%';
};

onMounted(() => {
  resetSlider();
});

/**
 * Function to go to current slide
 */
const scrollToSlide = (slide: number) => {
  if (scrollContainerRef) {
    const item =
      ((scrollContainerRef.value?.children?.[slide] as HTMLElement | undefined)
        ?.clientWidth ?? 0) * slide;
    scrollContainerRef.value?.scrollTo({
      left: item,
      behavior: 'smooth',
    });
  }
};

/**
 * Progress backwards to next step
 */
const goToPrev = (e?: any) => {
  if (e.type === 'click' || e?.key === 'space' || e?.key === 'ArrowLeft') {
    const currentRef = currentSlide.value - 1;
    nextTick();
    scrollToSlide(currentRef);
    if (scrollContainerRef.value?.scrollLeft === 0) {
      isPrevBtnDisabled.value = true;
    } else {
      isPrevBtnDisabled.value = false;
    }
  }
};

/**
 * Progress forward to next step
 */
const goToNext = (e?: any) => {
  if (e.type === 'click' || e?.key === 'space' || e?.key === 'ArrowRight') {
    const currentRef = currentSlide.value + 1;
    nextTick();
    scrollToSlide(currentRef);
    if (
      scrollContainerRef.value &&
      scrollContainerRef.value?.scrollLeft +
        scrollContainerRef.value?.offsetWidth >=
        scrollContainerRef.value?.scrollWidth
    ) {
      isNextBtnDisabled.value = true;
    } else {
      isNextBtnDisabled.value = false;
    }
  }
};

/**
 * Go to slide on demand using dot navigation
 * @param slide
 */
const goToSlide = (slide: number): any => {
  currentSlide.value = slide;
  scrollToSlide(slide);
};

/**
 * Sets active slides and buttons
 */
const setActiveSlides = () => {
  if (scrollContainerRef.value) {
    const slideCalc =
      scrollContainerRef.value.scrollWidth /
      scrollContainerRef.value.childElementCount;
    const currentPage =
      Math.ceil(scrollContainerRef.value.scrollLeft / slideCalc) === 0
        ? 0
        : Math.round(scrollContainerRef.value.scrollLeft / slideCalc);
    // Logging for button/pagination work [WIP]
    // console.log({
    //   // currentSlide,
    //   left: Math.ceil(scrollContainerRef.value.scrollLeft),
    //   slideWidth: slideCalc,
    //   slides: Math.round(scrollContainerRef.value.scrollWidth / slideCalc),
    //   pages: Math.ceil(
    //     (scrollContainerRef.value.scrollWidth - scrollContainerRef.value.clientWidth)
    //     / slideCalc,
    //   ),
    //   currentPage,
    //   scrollWidth: scrollContainerRef.value.scrollWidth,
    //   slidesPerScreen: scrollContainerRef.value.offsetWidth / slideCalc,
    //   offsetWidth: scrollContainerRef.value.offsetWidth,
    // });
    currentSlide.value = currentPage;
    isPrevBtnDisabled.value = scrollContainerRef.value?.scrollLeft === 0;
    isNextBtnDisabled.value =
      Math.ceil(scrollContainerRef.value?.scrollLeft) +
        scrollContainerRef.value?.offsetWidth >=
      scrollContainerRef.value?.scrollWidth;
  }
};

/**
 * Handles scrolling events to enable/disable navigation buttons with polyfill for iOS
 */
const handleScroll = () => {
  if (scrollContainerRef && 'onscrollend' in scrollContainerRef) {
    scrollContainerRef.onscrollend = setActiveSlides;
    return;
  }
  let scrollTimeout;
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(setActiveSlides, 300);
};

/**
 * Handle resizing of slider
 */
watchEffect(() => {
  if (scrollContainerRef.value) {
    const resizeObserver = new ResizeObserver(() => {
      const left = scrollContainerRef.value?.scrollLeft ?? 0;
      if (left > 0) {
        resetSlider();
      }
    });

    resizeObserver.observe(scrollContainerRef.value);
  }
});

/**
 * Resets the slider
 */
const resetSlider = () => {
  goToSlide(0);
  isPrevBtnDisabled.value = true;
};
</script>

<style scoped>
/* @use '../../assets/scss/variables'; */

.Eslider {
  display: flex;
  overflow-x: auto;
  margin: 0 auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  .Slide {
    min-width: 250px;
    min-height: 250px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: flex-end;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    transition: all 2s ease;

    &.isBlurred {
      animation: blurred;
      animation-duration: 1s;
      animation-iteration-count: 1;
    }

    @media (min-width: 540px) {
      scroll-snap-align: start;
    }

    @media (min-width: 1024px) {
      min-width: 350px;
      min-height: 350px;
    }

    .Overlay {
      transition: opacity 0.5s ease;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
    }

    .OverlayText {
      opacity: 0;
      width: 100%;
      padding: 10px;
      border-top: 1px solid white;
      color: white;
      z-index: 1;
      font-size: 0.75rem;
      transform: translateX(-5px);
      transition:
        opacity 0.5s ease,
        transform 0.5s ease;
    }

    &:hover .Overlay {
      cursor: pointer;
      opacity: 1;
      height: 100%;
      width: 100%;
      background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      );
    }

    &:hover .OverlayText {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

.SlideBtns {
  display: flex;
  padding: 10px 0;
  position: absolute;
  width: 75px;
  justify-content: space-between;
  z-index: 1;

  button {
    color: black;
    border: 2px solid transparent;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #efefef;
    transition: all 0.2s ease;

    @media (hover: hover) {
      &:hover:not(:disabled) {
        cursor: pointer;
        background: color-mix(in srgb, #efefef 60%, #ffffff 40%);
        border: 2px solid var(--primary-color);
        transform: scale(1.125);
      }
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
      transform: scale(1);
    }
  }
}

.Dots {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1.25rem 0;
}

.Dot {
  background: gray;
  border: none;
  border-radius: 100%;
  height: 8px;
  width: 8px;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }

  .Sr:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  &:active,
  &.ActiveDot {
    background: var(--secondary-color);
  }
}

@keyframes blurred {
  from {
    filter: blur(8px);
  }

  to {
    filter: blur(0);
  }
}
</style>
