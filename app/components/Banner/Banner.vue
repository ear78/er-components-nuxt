<template>
  <section :class="`BackgroundImg ${bannerTextAlign}`">
    <picture>
      <template v-if="webpSizes">
        <source
          :srcSet="`${webpSizes.lgWebp}`"
          type="image/webp"
          media="(width >= 800px)"
        />
        <source
          :srcSet="`${webpSizes.smWebp}`"
          type="image/webp"
          media="(width < 800px)"
        />
      </template>
      <img
        :class="`Image ${isImageLoaded && !isLoading ? 'ImageLoaded' : ''}`"
        :src="bannerImg"
        :alt="bannerTitle"
        @load="() => isImageLoaded = true"
        loading="lazy"
        decoding="async"
        :width="2000"
      />
    </picture>
    <div
      :class="`Overlay ${bannerOverlayFull} ${bannerOverlayDark} ${bannerOverlay}`"
    >
      <p :class="`PreTitle ${bannerTextColor} font-avenir transition`">
        {{ bannerPreTitle }}
      </p>
      <Heading variant="h1">{{ bannerTitle }}</Heading>
      <p :class="`SubTitle ${bannerTextColor}`">
        {{ bannerSubTitle }}
      </p>
      <Button
        v-if="showBtn"
        :href="ctaUrl"
        :target="target"
        secondary
        :sx="{ background: `${bannerBtnColor}` }"
      >
        {{ bannerBtnText }}
      </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  /** URL of the background image */
  bgImage?: string | undefined;
  /** Custom color of the button */
  btnColor?: string;
  /** Text displayed on the button */
  btnText: string;
  /** URL for the call to action */
  ctaUrl: string;
  /** Pre title text */
  preTitle?: string;
  /** Whether to show overlay */
  overlay?: boolean;
  /** Whether the overlay is dark */
  overlayDark?: boolean;
  /** Whether the overlay covers full height */
  overlayFull?: boolean;
  /** Whether to show the button */
  showBtn?: boolean;
  /** Subtitle text */
  subTitle?: string;
  /** Whether the link opens in a new tab */
  target?: boolean;
  /** Text alignment: 'left', 'center', 'right' */
  textAlign?: string;
  /** Text color: 'dark' or default */
  textColor?: string;
  /** Main title text */
  title: string;
  /** Optional WebP image sources for responsive images. { lgWebp: string; smWebp: string } */
  webpSizes?: { lgWebp: string; smWebp: string };
  /** Optional loading state for listening on a page load */
  isLoading?: boolean;
}>();
const isImageLoaded = ref(false);

const bannerBtnColor = props.btnColor || '';
const bannerOverlay = computed(() => (props.overlay ? '' : 'OverlayNone'));
const bannerOverlayDark = computed(() => (props.overlayDark ? 'Dark' : ''));
const bannerOverlayFull = computed(() => (props.overlayFull ? 'Full' : ''));
const bannerTextAlign = computed(() => {
  if (props.textAlign === 'center') {
    return 'Center';
  }
  if (props.textAlign === 'right') {
    return 'Right';
  }
  return '';
});

const bannerTextColor = computed(() =>
  props.textColor === 'dark' ? 'DarkText' : '',
);
const bannerImg = props.bgImage?.length ? props.bgImage : undefined;
const bannerPreTitle = !props.preTitle
  ? 'Welcome to Page Banner'
  : props.preTitle;
const bannerTitle = !props.title ? 'Page Banner' : props.title;
const bannerSubTitle = !props.subTitle
  ? 'Banners to help your site look great!'
  : props.subTitle;
const bannerBtnText = !props.btnText ? 'Kontakt' : props.btnText;
</script>

<style scoped>
/* @use '../../assets/scss/_variables.scss'; */

.BackgroundImg {
  position: relative;
  background: var(--banner-bg-color, var(--gray-500));
  width: 100%;
  color: var(--white);
  background-repeat: no-repeat;
}

.Image {
  display: block;
  width: 100%;
  height: auto;
  min-height: 350px;
  object-fit: cover;
  filter: var(--image-blur);
  transition: filter 1s ease;
  aspect-ratio: auto 16/9;

  @media (min-width: 1024px) {
    min-height: 500px;
  }

  &.ImageLoaded {
    filter: blur(0);
  }
}

.BackgroundImg.Center {
  text-align: center;
}

.BackgroundImg.Right {
  text-align: right;
}

.Overlay {
  position: absolute;
  width: 95%;
  height: 95%;
  background: rgba(255, 255, 255, 0.15);
  bottom: 0;
  left: 2.5%;
  box-sizing: border-box;
  padding: 30px 10px 0;
  transition: all 0.14s ease;

  @media (min-width: 1024px) {
    padding: 100px 15px 0;
  }
}

.Overlay.Full {
  left: 0;
  width: 100%;
  height: 100%;
  padding: 135px 46px 0;
}

.Overlay.Dark {
  background: rgba(0, 0, 0, 0.4);
}

.Overlay.OverlayNone {
  background: transparent;
}

.PreTitle,
.SubTitle,
.Title {
  color: var(--white);
}

.PreTitle {
  margin-bottom: 0;
}

.Title {
  font-size: 2.5rem;
  margin: 0;
  transition: all 0.14s ease;

  @media (min-width: 540px) {
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }
}

.SubTitle {
  margin-top: 0;
  font-size: 1rem;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 1.15rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
}

.PreTitle.DarkText,
.SubTitle.DarkText,
.Title.DarkText {
  color: var(--primary-color);
}

.Button {
  /* @include variables.button; */
  background: var(--seconday-color);
  color: var(--white);
  border: none;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0;
  font-size: 0.7rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    background: rgba(0, 0, 0, 0.9) !important;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }

  a {
    display: flex;
    padding: 14px 34px;
    line-height: 1;
    text-decoration: none;
    color: var(--white);
    width: auto;
    margin: 0;
    transform: translateX(6px);
    transition: all 0.4s ease;
  }

  &:hover a {
    transform: translateX(0px);
  }

  .Arrow {
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s ease;
  }

  &:hover .Arrow {
    visibility: visible;
    opacity: 1;
    transform: translateX(8px);
  }
}
</style>
