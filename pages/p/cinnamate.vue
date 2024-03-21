<template>
  <v-sheet>
    <product-landing-preview
      :poster-src="
        require('~/assets/ProductLandingPages/video/cinnamate/poster.png')
      "
      :video-src="
        require('~/assets/ProductLandingPages/video/vital/preview-small.mp4')
      "
      :mobile-video-src="
        require('~/assets/ProductLandingPages/video/vital/preview-mobile.mp4')
      "
    />
    <product-landing-cinnamate-main />
    <div class="app__wrapper">
      <product-landing-cinnamate-key />
      <product-landing-cinnamate-boost />
      <product-landing-cinnamate-yerba />
      <client-only>
        <product-landing-cinnamate-comments />
      </client-only>
      <product-landing-cinnamate-mixing />
      <product-landing-cinnamate-seo />
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'CinnamateLandingPage',
  layout: 'ProductLandingLayout',
}
</script>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.app {
  &__wrapper {
    position: relative;
    z-index: $zIndex_1;
    background-color: $white;
  }
}
</style>
