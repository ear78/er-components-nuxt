<template>
  <div
    class='flex items-center gap-1 transition duration-150 ease-out justify-around group'>
    <template v-for="item in socialItems" :key="item.platform">
      <SocialIcon :path="item.path" :target="true">
        <FontAwesomeIcon class="w-6.5 text-2xl" :icon="item.icon" />
      </SocialIcon>
    </template>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGithubSquare,
  faInstagramSquare,
  faSquareLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
const socialItems = [
  {
    platform: 'linkedin',
    path: 'https://linkedin.com/in/elliot-richardson',
    icon: faSquareLinkedin,
  },
  {
    platform: 'twitter-square',
    path: 'https://twitter.com/mixermanelliot',
    icon: faTwitterSquare,
  },
  {
    platform: 'github-square',
    path: 'https://github.com/ear78',
    icon: faGithubSquare,
  },
  {
    platform: 'instagram',
    path: 'https://instagram.com/elliot.richardson',
    icon: faInstagramSquare,
  },
];
</script>

<style scoped>
.SocialComp {
  width: 130px;
  margin: 35px auto 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all .14s ease-out;
}

 /* .SocialComp:hover a { */
   /* color: grey; */
 /* } */

.SocialComp i {
  font-size: 1.65em;
}

</style>
