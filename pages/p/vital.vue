<template>
  <v-sheet>
    <product-landing-preview
      :poster-src="
        require('~/assets/ProductLandingPages/video/vital/poster.png')
      "
      :video-src="
        require('~/assets/ProductLandingPages/video/vital/preview-small.mp4')
      "
      :mobile-video-src="
        require('~/assets/ProductLandingPages/video/vital/preview-mobile.mp4')
      "
    />
    <product-landing-vital-main />
    <div class="app__wrapper">
      <product-landing-vital-key />
      <product-landing-vital-coaster />
      <product-landing-vital-minerals />
      <product-landing-vital-plants />
      <client-only>
        <product-landing-vital-comments />
      </client-only>
      <product-landing-vital-mixing />
      <product-landing-vital-seo />
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'SolleVitalLandingPage',
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
