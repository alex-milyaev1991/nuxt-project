<template>
  <div class="LanguageIcon">
    <v-menu
      offset-y
      open-on-hover
      close-on-content-click
      transition="slide-y-transition"
      content-class="elevation-0"
      close-delay="100"
      tile
      :light="light"
      :dark="dark"
      z-index="100"
    >
      <template v-slot:activator="{ on }">
        <!-- Text Button Version -->
        <v-btn v-if="btnType == 'text'" small plain text tile v-on="on">
          <img
            class="mr-2"
            width="18"
            height="10"
            :src="currentRegion.country_flag"
          />
          {{ currentLanguage.localName }}
        </v-btn>
        <!-- Flag/Code Icon Version -->
        <v-btn
          v-else
          class="pa-0 text-subtitle-1"
          depressed
          large
          icon
          v-on="on"
        >
          <div>
            <img width="22" height="13" :src="selectedRegion.country_flag" />
            <p class="mb-0">{{ lang }}</p>
          </div>
        </v-btn>
      </template>
      <v-list
        class="rounded-b-lg"
        :light="light"
        :dark="dark"
        :color="dark ? '#272727' : undefined"
        :outlined="outlined"
        :dense="dense"
      >
        <v-subheader class="mb-n3">{{ $t('languages') }}</v-subheader>
        <v-divider class="mb-2 mx-2"></v-divider>
        <v-list-item-group :value="lang" mandatory>
          <v-list-item
            v-for="(item, i) in availableLanguages"
            :key="i"
            :value="item.code"
            @click="changeLanguage(item.code)"
          >
            <v-list-item-title>
              <div class="d-flex flex-row align-center">
                {{ item.localName }}&nbsp;
                <p class="text-uppercase ma-0">({{ item.code }})</p>
              </div>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <v-subheader class="mb-n3">{{ $t('country') }}</v-subheader>
        <v-divider class="mb-2 mx-2"></v-divider>
        <v-list-item-group :value="selectedRegion.country_id" mandatory>
          <v-list-item
            v-for="region in availableRegions"
            :key="region.country_id"
            :value="region.country_id"
            @click="changeRegion(region.country_id)"
          >
            <v-list-item-title>
              <div class="d-flex flex-row align-center">
                <p class="mb-0">
                  {{ $t('locations.' + region.country_code.toLowerCase()) }}
                </p>
                <img
                  class="ml-2"
                  width="22"
                  height="13"
                  :src="region.country_flag"
                />
              </div>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LanguageIcon',
  props: {
    light: {
      type: Boolean,
      required: false,
      default: true,
    },
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
    btnType: {
      type: String,
      required: false,
      default: 'icon',
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false,
    },
    dense: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: () => ({}),
  computed: {
    ...mapState({
      availableRegions: (state) => state.geolocation.availableRegions,
      selectedRegion: (state) => state.geolocation.selectedRegion,
    }),
    lang() {
      return this.$i18n.locale
    },
    availableLanguages() {
      return this.$i18n.locales
    },
    currentCountryId() {
      return parseInt(this.$store.state.geolocation.selectedRegion.country_id)
    },
    currentRegion() {
      return this.availableRegions.find(
        (x) => x.country_id === `${this.currentCountryId}`
      )
    },
    currentLanguage() {
      return this.availableLanguages.find((x) => x.code === this.lang)
    },
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.setLocale(lang)
    },
    changeRegion(country_id) {
      this.$store.dispatch('geolocation/setSelectedRegionInfo', country_id)

      var type = '8'

      if (this.$auth.loggedIn && this.$auth.user.groups['10']) {
        type = '1'
      }

      try {
        this.$store.dispatch('shop/fetchSelectedRegionProducts', {
          countryId: this.currentCountryId,
          orderTypeId: type,
        })
      } catch (e) {
        console.error('Error fetching products: ', e)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
