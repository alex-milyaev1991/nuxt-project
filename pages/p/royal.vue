<template>
  <v-sheet>
    <product-landing-preview
      :poster-src="
        require('~/assets/ProductLandingPages/video/royal/poster.png')
      "
      :video-src="
        require('~/assets/ProductLandingPages/video/royal/preview-small.mp4')
      "
      :mobile-video-src="
        require('~/assets/ProductLandingPages/video/royal/preview-mobile.mp4')
      "
    />
    <product-landing-royal-main />
    <div class="app__wrapper">
      <product-landing-royal-key />
      <product-landing-royal-chart />
      <product-landing-royal-results />
      <product-landing-royal-ingredients />
      <client-only>
        <product-landing-royal-comments />
      </client-only>
      <product-landing-royal-mixing />
      <product-landing-royal-seo />
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'RoyalLandingPage',
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
