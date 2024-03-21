<template>
  <div class="top-bar-slider" :class="cmpClass">
    <v-carousel>
      <v-carousel-item v-for="slider in sliders" :key="slider.pageComponentId">
        <a v-if="slider.href" :href="slider.href" class="top-bar-slider__link">
          <v-sheet height="100%" tile>
            <div class="top-bar-slider__text py-2">
              {{
                slider.textTranslationItem
                  ? getTranslation(slider.textTranslationItem)
                  : slider.text
              }}
            </div>
          </v-sheet>
        </a>

        <NuxtLink v-else :to="slider.route" class="top-bar-slider__link">
          <v-sheet height="100%" tile>
            <div class="top-bar-slider__text py-2">
              {{
                slider.textTranslationItem
                  ? getTranslation(slider.textTranslationItem)
                  : slider.text
              }}
            </div>
          </v-sheet>
        </NuxtLink>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import PageComponents from '@/services/PageComponents.js'
import TranslationService from '@/services/TranslationService.js'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'TopBarSlider',
  props: {
    color: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      sliders: [],
    }
  },
  computed: {
    ...mapGetters({
      onReplicateSite: 'replicateSite/onReplicateSite',
      referallAccountName: 'replicateSite/referallAccountName',
    }),
    ...mapState({
      productTheme: (state) => state.shop.productTheme,
    }),
    langCode() {
      return this.$i18n.locale
    },
    langId() {
      return (
        this.$i18n.locales.find(({ code }) => code === this.langCode)?.langId ||
        1
      )
    },
    cmpClass() {
      return `${this.productTheme?.bgClass || ''} ${this.color}`
    },
    countryId() {
      return this.$store.state.geolocation.selectedRegion.countryId
    },
  },
  watch: {
    langId() {
      this.loadSliders()
    },
    countryId() {
      this.loadSliders()
    },
  },
  async mounted() {
    this.loadSliders()
  },
  methods: {
    async loadSliders() {
      let sliders = await PageComponents.getPromoBanners(
        this.langId,
        this.countryId
      )
      if (this.onReplicateSite) {
        sliders.unshift({
          pageComponentId: 'replicateSite',
          route: `/${
            this.$route.params.replicateSite || this.$route.query.specialistSite
          }/contact-me`,
          text: this.$t('shoppingWith', {
            name: this.referallAccountName,
          }),
        })
      }
      this.sliders = sliders
    },
    getTranslation(tranlsationItem) {
      return TranslationService.getTranslationString(
        tranlsationItem,
        this.langCode
      )
    },
  },
}
</script>

<i18n> 
  {
    "en": {
      "shoppingWith": "You’re shopping with {name}"
    },   
    "es": {
      "shoppingWith": "estÁs comprando en {name}"
    }
  } 
</i18n>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';

.top-bar-slider {
  background: #eceade;

  &__text {
    color: #2e2930;
    text-align: center;
    text-transform: uppercase;
    font-size: 10px;
    @include atMedium {
      font-size: 13px;
    }
  }
  ::v-deep .v-carousel {
    height: auto !important;

    .v-sheet {
      box-shadow: none;
      background-color: transparent;
    }

    .v-carousel__item {
      height: auto !important;
    }

    .v-carousel__controls {
      display: none;
    }

    .v-window__prev {
      margin: 0 0 0 8px;
      @include atMedium {
        margin: 0 0 0 25px;
      }
    }
    .v-window__next {
      margin: 0 8px 0 0;
      @include atMedium {
        margin: 0 25px 0 0;
      }
    }
    .v-window__prev,
    .v-window__next {
      top: 50%;
      transform: translateY(-50%);
      background-color: transparent;

      .v-btn--icon.v-size--default {
        width: auto;
        height: auto;
        color: #2e2930;
        font-weight: 400;

        .v-icon {
          width: auto;
          height: auto;
          font-size: 26px !important;
        }
      }
    }
  }

  &__link {
    text-decoration: none;
  }
}
</style>
