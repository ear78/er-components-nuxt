<template>
  <div class="TeamBuildingContainer">
    <template v-if="altLayout">
      <div
        v-for="(member, i) in teamMembers"
        :key="member.id"
        :style="{ transitionDelay: `${delay * i}ms` }"
        :class="`Member TC ${!isLoading ? 'fadeIn' : ''}`"
      >
        <div
          :class="`MemberHoverTrigger AltLayout ${isDarkMode ? 'Dark' : ''}`"
        >
          <div class="AltLayoutLeft">
            <img class="Image" :src="member.image" :alt="member.name" />
            <div class="icons">
              <a :href="member.facebook">
                <FontAwesomeIcon :icon="faFacebookSquare" />
              </a>
              <a :href="member.twitter">
                <FontAwesomeIcon :icon="faTwitter" />
              </a>
              <a :href="member.linkedin">
                <FontAwesomeIcon :icon="faLinkedinIn" />
              </a>
            </div>
          </div>
          <div class="AltLayoutRight">
            <h3 :class="`Name ${isDarkMode ? 'Dark' : ''}`">
              {{ member.name }}
            </h3>
            <p class="JobTitle">{{ member.jobTitle }}</p>
          </div>
          <img class="CompanyLogo" :src="logo" alt="Logo" />
        </div>
      </div>
    </template>
    <template v-else>
      <div
        v-for="(member, i) in teamMembers"
        :key="member.id"
        :style="{ transitionDelay: `${delay * i}ms` }"
        :class="`Member TC ${!isLoading ? 'fadeIn' : ''}`"
      >
        <div :class="`MemberHoverTrigger ${isDarkMode ? 'Dark' : ''}`">
          <img class="Image" :src="member.image" :alt="member.name" />
          <h3 :class="`Name ${isDarkMode ? 'Dark' : ''}`">
            {{ member.name }}
          </h3>
          <p class="JobTitle">{{ member.jobTitle }}</p>
          <img class="CompanyLogo" :src="logo" alt="Logo" />
          <div class="icons">
            <a :href="member.facebook">
              <FontAwesomeIcon :icon="faFacebookSquare" />
            </a>
            <a :href="member.twitter">
              <FontAwesomeIcon :icon="faTwitter" />
            </a>
            <a :href="member.linkedin">
              <FontAwesomeIcon :icon="faLinkedinIn" />
            </a>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faFacebookSquare,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import logo from '@/assets/img/er-logo.svg';
import { teamMembers } from '~/assets/js/data';
import { useLoadingIndicator } from '#app';

interface TeamCardProps {
  delay?: number;
  altLayout?: boolean;
  isDarkMode?: boolean;
}

const props = withDefaults(defineProps<TeamCardProps>(), {
  delay: 0,
  altLayout: false,
  isDarkMode: false,
});

const { isLoading, start } = useLoadingIndicator();
start({ force: true });
</script>

<style scoped>
.TeamBuildingContainer {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding-top: 40px;

  .Member {
    display: inline-block;
    margin: 1%;
    box-sizing: border-box;
    width: 98%;

    @media (hover: hover) {
      &:hover .MemberHoverTrigger,
      &:hover .MemberHoverTrigger.Dark {
        border-color: var(--secondary-color);
        cursor: pointer;
        transform: scale(1.03);
      }
    }

    .MemberHoverTrigger {
      position: relative;
      transition:
        transform 0.2s ease 0ms,
        border-color 0.2s ease 0ms;
      border: var(--border);
      padding: 20px;
      border-radius: 8px;
      box-sizing: border-box;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.03);
      background: #fff;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.03);

      &.Dark {
        border: 1px solid transparent;
        background: var(--gray-900);

        .CompanyLogo {
          filter: invert(1);
        }
      }

      &.AltLayout {
        display: flex;
        justify-content: space-between;

        .AltLayoutLeft {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 140px;
          margin-right: 10px;
        }

        .Image {
          max-width: 95px;
        }

        .icons {
          margin-top: 10px;
        }
      }

      .CompanyLogo {
        position: absolute;
        width: 25px;
        right: 18px;
        bottom: 20px;
      }
    }
  }

  .Image {
    width: 100%;
    display: flex;
    margin: 0 auto;
    max-width: 275px;
    filter: grayscale(90%);
  }

  .Name {
    margin-bottom: 0px;
    margin-top: 10px;

    &.Dark {
      color: var(--secondary-color);
    }
  }

  .JobTitle {
    margin: 0;
    color: #757575;
    margin-bottom: 20px;
    font-size: 0.9rem;
  }

  .icons {
    margin: 0;
    display: flex;

    a {
      display: inline-block;
      width: inherit;
      height: inherit;
      line-height: inherit;
      color: var(--primary-color);
    }

    svg {
      padding-right: 4px;
      width: 0.8rem;
      transition: all 0.2s ease;

      &:hover {
        cursor: pointer;
        color: var(--secondary-color);
      }
    }
  }

  .TC {
    opacity: 0;
    transition: opacity 1s ease;

    &.fadeIn {
      opacity: 1;
    }
  }
}

@media (min-width: 480px) {
  .TeamBuildingContainer {
    .Member {
      width: 48%;
    }
  }
}

@media (min-width: 768px) {
  .TeamBuildingContainer {
    .Member {
      width: 31.33%;
    }
  }
}

@media (min-width: 1024px) {
  .TeamBuildingContainer {
    .Member {
      width: 23%;
    }
  }
}
</style>
