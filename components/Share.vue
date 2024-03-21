<template>
  <div>
    <v-menu
      v-if="showShareButton"
      :close-on-content-click="false"
      attach
      top
      offset-y
      :content-class="
        cartMenu
          ? 'cart-menu-container'
          : isProductPage
          ? 'product-container'
          : 'cart-page-container'
      "
    >
      <template v-slot:activator="{ on, attrs }">
        <button v-if="isProductPage" v-bind="attrs" v-on="on">
          {{ shareText }}
          <i
            aria-hidden="true"
            class="v-icon mdi mdi-share-variant-outline"
          ></i>
        </button>

        <button
          v-else
          v-bind="attrs"
          :class="cartMenu ? cartMenuClasses : cartPageClasses"
          v-on="on"
        >
          <i
            v-if="!cartMenu"
            aria-hidden="true"
            class="v-icon mdi mdi-share-variant"
          ></i>
          <span class="solleBlack--text">{{ shareText }}</span>
        </button>
      </template>

      <v-card class="pa-3" light>
        <v-row class="pa-2" justify="center" align="center">
          <v-text-field
            v-model="shareUrl"
            outlined
            readonly
            hide-details
            dense
            type="text"
          >
          </v-text-field>
          <v-btn class="ml-2" @click="copyUrl()"> Copy </v-btn>
        </v-row>
        <v-checkbox
          v-if="!isProductPage"
          class="specialist-signup mb-4"
          :label="$t('specialist')"
          @click="isSpecialistSignUp = !isSpecialistSignUp"
        ></v-checkbox>
        <v-item-group v-model="selectedKitIndex" mandatory>
          <v-scale-transition>
            <v-row v-if="isSpecialistSignUp">
              <v-col
                v-for="kit in successKits"
                :key="kit.product_id"
                cols="12"
                md="6"
              >
                <v-item v-slot="{ active, toggle }">
                  <v-card
                    :elevation="active ? '12' : '0'"
                    outlined
                    @click="toggle()"
                  >
                    <v-img :src="kit.image" max-height="100" contain />
                    <v-card-title class="py-0 d-flex justify-center wrap-word">
                      {{ kit.name }}
                    </v-card-title>

                    <v-card-text class="d-flex justify-center title">
                      {{ $t('price') }}: ${{ kit.retail_price }}
                    </v-card-text>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-scale-transition>
        </v-item-group>
      </v-card>
    </v-menu>

    <v-snackbar v-model="showSnackbar" vertical :timeout="2500">
      URL copied to clipboard

      <template v-slot:action="{ attrs }">
        <v-btn
          color="#c0df16"
          text
          v-bind="attrs"
          @click="showSnackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Share',
  props: {
    cartProducts: {
      type: Array,
      default: () => [],
    },
    shareText: {
      type: String,
      default: '',
    },
    cartMenu: {
      type: Boolean,
      default: false,
    },
    cartMenuClasses: {
      type: String,
      default: '',
    },
    cartPageClasses: {
      type: String,
      default: '',
    },
    isProductPage: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    showSnackbar: false,
    isSpecialistSignUp: false,
    selectedKitIndex: null,
  }),
  computed: {
    ...mapState({
      successKits: (state) => state.shop.successKits,
    }),
    ...mapGetters({
      getShareLink: 'app/getShareLink',
      getShareCartLink: 'cart/getShareCartLink',
      showShareButton: 'app/showShareButton',
    }),
    selectedKit() {
      if (!this.isSpecialistSignUp) return null
      try {
        return this.successKits[this.selectedKitIndex]
      } catch (error) {
        return null
      }
    },
    shareUrl() {
      if (this.isProductPage) {
        return this.getShareLink(this.$route.path)
      }
      return this.getShareCartLink(this.isSpecialistSignUp, this.selectedKit)
    },
  },
  methods: {
    copyUrl() {
      navigator.clipboard.writeText(this.shareUrl)
      this.showSnackbar = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';

.share-container {
  @include atSmallAndDown {
    margin-top: 75px;
  }

  span {
    padding-left: 10px;
    font-weight: 300;
    font-size: 16px;
  }
}

.share-cart-menu {
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 300;

  span {
    padding-left: 10px;
  }
}

.specialist-signup {
  ::v-deep .v-input__slot {
    margin: 0;
  }
  ::v-deep .v-messages {
    display: none;
  }
}

.cart-menu-container {
  width: 300px;
  left: 50% !important;
  transform: translateX(-50%);
}
.cart-page-container {
  width: 300px;
  right: 0;
  left: auto !important;
  @include atMedium {
    width: 400px;
  }
}
.product-container {
  width: 300px;
  @include atXSmall {
    left: 35px !important;
  }
}
</style>

<i18n>
  {
    "en": {
      "specialist": "Specialist Signup"
    },
    "es": {
      "specialist": "Registro de especialista"
    }
  }
</i18n>
