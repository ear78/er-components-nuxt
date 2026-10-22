<template>
  <div :class="`${globalStore.isDarkMode ? 'Dark' : ''}`">
    <section
      class="flex flex-col-reverse gap-4 HomeContainer md:grid grid-cols-2"
    >
      <div class="Left transition duration-500">
        <span>Welcome to ER Components! </span>
        {{ homeData.desc }}
        &nbsp;
        <span>{{ homeData.components }}</span>
      </div>
      <div class="Right">
        <div class="HomeTitle">ER</div>
        <PageTitle title="Components" />
      </div>
    </section>
    <!-- Scroll into view sections -->
    <PageSection
      v-for="section in pageSectionData"
      :key="section.id"
      :data="section"
      :set-threshold="0.2"
    />
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '#imports';
import { pageSectionData, homeData } from '~/assets/js/data';
import PageSection from '~/components/PageSection/PageSection.vue';
import PageTitle from '~/components/PageTitle/PageTitle.vue';

const globalStore = useGlobalStore();
</script>

<style scoped>
.HomeContainer {
  line-height: 1.5;
  box-sizing: border-box;

  .Left {
    margin: 0 0 1rem;
    background: var(--gray-100);
    padding: 20px;
    border-radius: 3px;
    border: var(--gray-200);

    span {
      font-weight: 600;
    }
  }

  .Right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 1rem;

    .HomeTitle {
      font-size: 8rem;
      line-height: 130px;

      @media (min-width: 768px) {
        font-size: 10rem;
      }
    }
  }
}

@media (min-width: 1024px) {
  .HomeContainer {
    .Left {
      min-height: 350px;
    }
  }
}

.HomeSections {
  p {
    text-align: center;
    margin: 0 auto 50px;
    max-width: 800px;
  }

  img {
    width: 100%;
  }
}

.LazyLoad {
  opacity: 0;
  transform: translate3d(0, -20px, 0);
  transition: all 1s ease-in-out;

  &.Active {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
  }
}

.Dark {
  .Left {
    background: var(--gray-800);
    border-color: transparent;
  }
}
</style>
