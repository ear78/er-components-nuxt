<template>
  <div :class="`NavContainer ${globalStore.isDarkMode ? 'Dark' : ''} border-b border-gray-200 mb-10`">
    <NuxtLink
      class="ImgWrapper transition duration-500 ease-in-out"
      href="/"
      @click="resetPageLoad"
    >
      <img :src="logo" alt="ER Logo" />
    </NuxtLink>
    <Hamburger
      :isActive="isMenuActive"
      @hamburger-click="handleToggle"
      :isDarkMode="globalStore.isDarkMode"
    />
    <!-- Desktop Menu -->
    <div class="NavDesktop">
      <ul>
        <li
          v-for="(item, i) in navMenu"
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
          v-for="(item, i) in navMenu"
          key="{item.text}"
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

const navMenu = [
  {
    route: '/',
    text: 'Home',
  },
  {
    route: '/page-banner',
    text: 'Page Banner',
  },
  {
    route: '/hover-pods',
    text: 'Hover Pods',
  },
  {
    route: '/team-building',
    text: 'Team Building',
  },
  {
    route: '/happy-dots',
    text: 'Happy Dots',
  },
  {
    route: '/dropper',
    text: 'Dropper',
  },
  {
    route: '/e-slider',
    text: 'E-Slider',
  },
  {
    route: '/dashboard',
    text: 'Dashboard',
  },
];

const globalStore = useGlobalStore();
const isMenuActive = ref(false);
const pathname = useRoute();

const isActive = computed(() => (isMenuActive.value ? 'isActive' : ''));

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  position: relative;
  box-sizing: border-box;

  &.Dark {
    .ImgWrapper img {
      filter: invert(1);
    }
  }

  .ImgWrapper {
    display: flex;
    width: auto;
  }

  img {
    width: 50px;
  }

  .NavDesktop {
    display: none;

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
    visibility: visible;
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
    .NavDesktop {
      display: block;
    }

    .NavMobile {
      visibility: hidden;
    }
  }
}
</style>
