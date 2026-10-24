<template>
  <div
    ref="navRef"
    :class="[
      'NavContainer fixed transform transition duration-300 ease-in-out w-full left-0 z-50 flex items-center justify-between box-border shadow-[0_5px_15px_-5px_rgba(0,0,0,.06)] py-4 md:py-6 border-b border-gray-200 mb-10 px-2 md:px-4 bg-white dark:bg-black',
      dynamicNavClasses,
    ]"
  >
    <NuxtLink class="flex w-auto" href="/" @click="resetPageLoad">
      <img
        :src="logo"
        alt="ER Logo"
        class="transition duration-500 dark:invert w-12"
      />
    </NuxtLink>
    <Hamburger
      :isActive="isMenuActive"
      @hamburger-click="handleToggle"
      :isDarkMode="globalStore.isDarkMode"
    />
    <!-- Desktop Menu -->
    <div class="NavDesktop hidden lg:flex">
      <ul>
        <li
          v-for="(item, i) in Routes"
          :key="item.text"
          :style="{
            transitionDelay: `${0 * i}ms`,
          }"
        >
          <NuxtLink
            :to="item.route"
            :class="`Link
            ${pathname.path === item.route ? 'selected' : ''}`"
            @click="resetPageLoad"
          >
            {{ item.text }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu -->
    <div :class="`NavMobile ${isActive}`">
      <ul>
        <li
          v-for="(item, i) in Routes"
          :key="item.text"
          :class="`${isActive}`"
          :style="{ transitionDelay: `${40 * i}ms` }"
        >
          <NuxtLink
            :href="item.route"
            :class="`Link transition
            duration-100 ease-in-out ${
              pathname.path === item.route ? 'selected' : ''
            }`"
            @click="resetPageLoad"
          >
            {{ item.text }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <DarkModeButton
      :isDarkMode="globalStore.isDarkMode"
      @dark-mode-click="handleDarkMode"
    />
  </div>
</template>

<script setup lang="ts">
import Hamburger from '~/components/Hamburger/Hamburger.vue';
import DarkModeButton from '~/components/DarkModeButton/DarkModeButton.vue';
import { useGlobalStore } from '~/stores/global';
import logo from '@/assets/img/er-logo.svg?url';
import { Routes } from '~/assets/js/constants';

const globalStore = useGlobalStore();
const isMenuActive = ref(false);
const pathname = useRoute();
const isActive = computed(() => (isMenuActive.value ? 'isActive' : ''));

const navRef = useTemplateRef('navRef');
const showNav = ref(true);
const dynamicNavClasses = computed(() => {
  return {
    '-translate-y-28': !showNav.value,
    'translate-0': showNav.value,
  };
});

watch(navRef, () => {
  /** Sets up event for Nav scroll animations */
  window?.addEventListener('scroll', navScrollWatch);
});

onBeforeUnmount(() => {
  /** Clean up */
  window?.removeEventListener('scroll', navScrollWatch);
});

let lastScrollPosition = 0;
const navScrollWatch = () => {
  return setTimeout(() => {
    const currentPosition = window.scrollY;
    if (currentPosition > 101 && currentPosition > lastScrollPosition) {
      // Hide scrolling down the page
      showNav.value = false;
    } else if (
      currentPosition > 101 &&
      currentPosition < lastScrollPosition - 1
    ) {
      setTimeout(() => {
        // Show when scrolling back up
        showNav.value = true;
      }, 100);
    }
    lastScrollPosition = currentPosition;
  }, 10);
};

const handleToggle = () => {
  isMenuActive.value = !isMenuActive.value;
};

const handleDarkMode = () => {
  globalStore.isDarkMode = !globalStore.isDarkMode;
};

const resetPageLoad = () => {
  // resetAppLoading();
  isMenuActive.value = false;
};
</script>

<style scoped>
.NavContainer {
  .NavDesktop {
    ul {
      display: flex;
      column-gap: 1rem;
      list-style-type: none;
      padding-left: 0;
      margin: 0;
    }

    li {
      list-style-type: none;
    }

    a {
      color: var(--primary-color);
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.8rem;
      transition: all 0.2s ease;
      text-decoration: none;

      &:hover {
        color: var(--secondary-color);
      }
    }

    a.selected {
      color: var(--secondary-color);
    }
  }

  /*-----------------------------------------
   * Mobile Nav Menu
   -----------------------------------------*/
  .NavMobile {
    display: block;
    visibility: hidden;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: var(--color-black);
    top: 0;
    right: 0;
    z-index: -1;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
    opacity: 0;

    ul {
      display: flex;
      list-style-type: none;
      padding-left: 0;
      margin: 0;
      flex-direction: column;
      align-items: center;
      padding-top: 35%;
    }

    li {
      margin: 0 15px 12px 0;
      list-style-type: none;
      transform: translateY(-40%);
      opacity: 0;
      transition: all 0.3s ease-in-out;

      &.isActive {
        opacity: 1;
        transform: translateX(0);
      }
    }

    a {
      color: var(--primary-color);
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.8rem;
      text-decoration: none;
      transition: all 0.2s ease;

      &:hover {
        color: var(--secondary-color);
      }
    }

    a.selected {
      color: var(--secondary-color);
    }
  }

  .NavMobile.isActive {
    visibility: visible;
    opacity: 1;
    z-index: 10;
    transition: opacity 0.3s ease;
  }

  @media (orientation: landscape) {
    .NavMobile ul {
      padding-top: 20%;
      padding-bottom: 20%;
    }
  }

  @media (min-width: 1024px) {

    .NavMobile {
      visibility: hidden;
    }
  }
}
</style>
