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
            <top-bar-slider />
            <site-toolbar v-if="$vuetify.breakpoint.mdAndUp" />
            <site-toolbar-mobile-view v-else />
          </div>
        </client-only>

        <nuxt />

        <v-spacer></v-spacer>
        <app-footer-mobile v-if="$vuetify.breakpoint.mobile" />
        <app-footer v-else />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
/* eslint-disable vue/require-name-property */
export default {
  components: {
    TopBarSlider: () => import('~/components/TopBarSlider'),
    SiteToolbar: () => import('~/components/SiteToolbar/SiteToolbar'),
    SiteToolbarMobileView: () =>
      import('~/components/SiteToolbar/SiteToolbarMobileView'),
    AppFooter: () => import('~/components/AppFooter/AppFooter'),
    AppFooterMobile: () => import('~/components/AppFooter/AppFooterMobile'),
  },
  middleware: [
    'getGeolocationData',
    'getShopProducts',
    'defaultRouteLogic',
    'setLocale',
    'isUser',
  ],
  head() {
    return {
      title: 'Official Site - Adaptogen fueled mind & body formulas',
    }
  },
  computed: {
    routeName() {
      return this.$nuxt.$route.name
    },
  },
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
