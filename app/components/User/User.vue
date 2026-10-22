<template>
  <div :class="`UserSkeleton ${!userDataReady ? 'FadeIn' : 'UserTransition'}`">
    <p class="Image" />
    <p class="Name" />
    <p class="Username" />
    <p class="Description" />
  </div>
  <section :class="`User UserTransition ${userDataReady ? 'FadeIn' : ''}`">
    <img :src="gitData.avatar_url" :alt="`${gitData.type} ${gitData.login}`" />
    <h3 class="Name">{{ gitData.name }}</h3>
    <p class="Username">{{ gitData.login }}</p>
    <p class="UserDescription">{{ gitData.bio }}</p>
  </section>
</template>

<script setup lang="ts">
interface UserProps {
  profileId?: string;
  delay?: number;
}

const props = withDefaults(defineProps<UserProps>(), {
  profileId: 'ear78',
  delay: 500,
});

interface GitData {
  avatar_url: string;
  bio: string;
  login: string;
  name: string;
  type: string;
}

const userDataReady = ref(false);
const gitData = ref({} as GitData);

onMounted(() => {
  try {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/users/${props.profileId}`,
        {
          headers: {
            accept: 'application/vnd.github.v3+json',
          },
        },
      );

      const data = await response.json();
      if (data) {
        // delayed to improved UX loading
        setTimeout(() => {
          gitData.value = data;
          userDataReady.value = true;
        }, props.delay);
      }
    };
    fetchData();
    return undefined;
  } catch (err) {
    return console.error(`Something went wrong with fetching the data ${err}`);
  }
});
</script>

<style scoped>
.UserSkeleton {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .Image {
    height: 100px;
    width: 100px;
    margin: 0.5rem 0;
    background-color: var(--gray-200);
    border-radius: 50%;
    position: relative;

    &::before {
      position: absolute;
      background: var(--gray-500);
      content: '';
      border-radius: 50%;
      height: 100px;
      width: 100px;
      filter: blur(0px);
      top: 0;
      left: 0;
      background-size: 100%;
      animation: pulse 2s ease infinite;
    }

    @media (min-width: 768px) {
      height: 175px;
      width: 175px;

      &::before {
        width: 175px;
        height: 175px;
      }
    }
  }

  .Name {
    width: 50%;
    height: 2rem;
  }

  .Username {
    width: 35%;
    height: 2rem;
  }

  .Description {
    height: 5rem;
  }

  .Name,
  .Username,
  .Description {
    position: relative;
    background: var(--gray-200);
    border-radius: 8px;

    &::before {
      position: absolute;
      background: var(--gray-500);
      content: '';
      border-radius: 8px;
      height: 100%;
      width: 100%;
      filter: blur(0px);
      top: 0;
      left: 0;
      background-size: 100%;
      animation: pulse 2s ease infinite;
    }
  }
}

@keyframes pulse {
  0% {
    opacity: 0.5;
  }

  50% {
    opacity: 0.2;
  }

  100% {
    opacity: 0.5;
  }
}

.User {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  img {
    margin: 0.5rem 0;
    min-height: 100px;
    max-width: 100px;
    filter: grayscale(0.5);
    border-radius: 50%;
    box-sizing: border-box;

    @media (min-width: 768px) {
      min-height: 100px;
      max-width: 175px;
    }
  }

  .Username {
    margin: 0;
    color: var(--gray);
    font-size: 1.125rem;
    font-weight: 500;
  }
}

.UserTransition {
  content-visibility: hidden;
  opacity: 0;
  width: 100%;
  transition: all 1s ease-out;

  &.FadeIn {
    content-visibility: visible;
    opacity: 1;
    transition: all 1s ease-in;
  }
}
</style>
