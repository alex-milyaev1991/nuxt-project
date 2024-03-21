<template>
  <v-list class="language-menu min-height-auto-list-item">
    <v-btn icon absolute right top @click="$emit('closeMenu')">
      <img :src="require('@/assets/close.svg')" width="20" height="18" />
    </v-btn>
    <v-list-item class="mb-9 pa-0">
      <div>
        <h6 class="language-menu__title pl-0 mb-3">
          {{ $t('language') }}
        </h6>

        <ul class="language-menu__options pa-0">
          <li
            v-for="item in availableLanguages"
            :key="item.code"
            :value="item.code"
            class="mb-3"
            @click="changeLanguage(item.code)"
          >
            <p class="ma-0" :class="{ selected: item.code === lang }">
              {{ item.localName }}&nbsp;
              <span class="text-uppercase ma-0 pa-0">({{ item.code }})</span>
            </p>
          </li>
        </ul>
      </div>
    </v-list-item>
    <v-list-item class="pa-0">
      <div>
        <h6 class="language-menu__title pl-0 mb-3">
          {{ $t('country') }}
        </h6>
        <ul class="language-menu__options pa-0">
          <li
            v-for="region in availableRegions"
            :key="region.country_id"
            :value="region.country_id"
            class="mb-3"
            @click="changeRegion(region.country_id)"
          >
            <p
              class="ma-0"
              :class="{
                selected: region.country_id === `${currentCountryId}`,
              }"
            >
              <!-- eslint-disable-next-line @intlify/vue-i18n/no-dynamic-keys -->
              {{ $t('locations.' + region.country_code.toLowerCase()) }}
            </p>
          </li>
        </ul>
      </div>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LanguageMenu',
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

      try {
        this.$store.dispatch('shop/fetchSelectedRegionProducts', {
          countryId: this.currentCountryId,
          orderTypeId:
            this.$auth.loggedIn && this.$auth.user.groups['10'] ? '1' : '8',
        })
      } catch (e) {
        console.error('Error fetching products: ', e)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.language-menu {
  width: 320px;
  padding: 50px 20px 50px 40px;
  margin-top: 10px;

  &__title {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2;
    color: #000;
  }

  &__options {
    li {
      list-style: none;
      cursor: pointer;
      &:last-child {
        margin-bottom: 0;
      }

      p,
      span {
        display: inline-block;
        font-weight: 200;
        font-size: 16px;
        padding: 4px 12px;
        color: #2e2930;
        line-height: 28px;
        border-radius: 30px;
        transition: all 0.3s;

        &:hover,
        &.selected {
          background: #eceade;
        }
      }
    }
  }
}
</style>

<i18n> 
  {
    "en": {
      "language": "Language"
    },   
    "es": {
      "language": "Idioma"
    }
  } 
</i18n>
