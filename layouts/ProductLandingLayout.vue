<template>
  <v-app>
    <v-main>
      <v-container
        fluid
        class="py-0 px-0 d-flex flex-column"
        style="height: 100%"
      >
        <client-only>
          <div class="sticky-header">
            <!-- <top-bar-slider /> -->
            <product-landing-toolbar />
          </div>
        </client-only>
        <nuxt />
        <product-landing-footer />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import '~/assets/ProductLandingPages/styles/main.scss'
import 'swiper/swiper.min.css'

export default {
  name: 'ProductLandingLayout',
  components: {
    // TopBarSlider: () => import('~/components/TopBarSlider'),
    ProductLandingToolbar: () =>
      import('~/components/ProductLandingPage/ProductLandingToolbar'),
    ProductLandingFooter: () =>
      import('~/components/ProductLandingPage/ProductLandingFooter'),
  },
  middleware: [
    'getGeolocationData',
    'getShopProducts',
    'defaultRouteLogic',
    'setLocale',
  ],
}
</script>

<style lang="scss" scoped>
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 0px 4px 0px lightgrey;
}
</style>
