<template>
  <section class="DropperParent flex flex-col md:flex-row">
    <div class="DropperWrapper flex flex-col md:flex-row">
      <div class="Left w-full md:w-1/3">
        <PageTitle title="Dropper" :color="{ color: colors.hotPink }" />
      </div>
      <div class="Right w-full md:w-2/3">
        <Dropper
          v-for="d in dropperData"
          :key="d.id"
          :title="d.title"
          :iconName="faAngleDown"
          :isDarkMode="globalStore.isDarkMode"
        >
          {{ d.content }}
        </Dropper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useGlobalStore } from '@/stores/global';
import Dropper from '~/components/Dropper/Dropper.vue';
import { dropperData } from '~/assets/js/data';
import colors from '@/assets/js/colors';

const globalStore = useGlobalStore();
</script>

<style scoped>
.DropperParent {
  .DropperWrapper {
    border: var(--border);
    border-radius: 5px;
    padding: 15px;

    @media (min-width: 768px) {
      padding: 25px;
    }

    .Left {
      background: black;
      min-height: 200px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0 1rem;
      border-radius: 3px;

      @media (min-width: 540px) {
        margin: 0;
      }
    }

    .Right {
      padding: 0;

      @media (min-width: 540px) {
        padding: 0 0 0 1rem;
      }
    }
  }

  .ContainerLeft {
    width: auto;
    padding: 0 15px;
    background: #000;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-direction: column;

    @media (min-width: 768px) {
      width: 30%;
    }
  }

  .ContainerRight {
    width: 70%;
    padding: 0 0 0 15px;
  }
}
</style>
