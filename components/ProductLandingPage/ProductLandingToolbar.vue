<template>
  <nav>
    <v-toolbar class="site-header landing-header">
      <div class="site-header__content">
        <product-landing-logo />
      </div>

      <v-spacer></v-spacer>

      <div class="site-header__content">
        <v-menu
          v-if="$auth.loggedIn"
          v-model="showAccountMenu"
          offset-y
          open-on-click
          class="px-8"
          close-on-content-click
          content-class="background"
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="site-header__content__btn site-header__content__btn--icon"
              text
              v-bind="attrs"
              v-on="on"
            >
              <span class="text-truncate" style="max-width: 300px">
                {{ $t('hi') }}, {{ user.first_name }}!
              </span>
              <img
                :src="
                  user.profile_image
                    ? user.profile_image
                    : require('@/assets/account.svg')
                "
                width="30"
                height="30"
                class="ml-4 rounded-circle"
            /></v-btn>
          </template>

          <account-menu />
        </v-menu>

        <v-btn
          v-else
          class="background flat site-header__content__btn"
          text
          to="/login"
          ><span class="account-text isNotMobile">{{ $t('login') }}</span>
          <img :src="require('@/assets/account.svg')" width="30" height="30"
        /></v-btn>

        <v-menu
          v-model="showLangMenu"
          offset-y
          open-on-hover
          class="px-8"
          close-on-content-click
          content-class="background center-lg"
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="site-header__content__btn site-header__content__btn--icon"
              text
              v-bind="attrs"
              v-on="on"
              ><img
                :src="require('@/assets/language.svg')"
                width="30"
                height="30"
            /></v-btn>
          </template>

          <language-menu @closeMenu="showLangMenu = false" />
        </v-menu>

        <v-menu
          v-model="cartMenuValue"
          offset-y
          open-on-hover
          class="px-8"
          :close-on-content-click="false"
          content-class="background"
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="site-header__content__btn site-header__content__btn--icon"
              to="/cart"
              text
              v-bind="attrs"
              v-on="on"
              ><img
                :src="require('@/assets/shopping_cart.svg')"
                width="30"
                height="30"
              />
              <div
                v-show="cartTotalQuantity"
                class="site-header__content__btn__count align-center justify-center"
                :class="{ 'd-flex': !!cartTotalQuantity }"
              >
                {{ cartTotalQuantity }}
              </div>
            </v-btn>
          </template>

          <cart-menu @closeMenu="toggleCartMenu(false)" />
        </v-menu>
      </div>
    </v-toolbar>
  </nav>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import LanguageMenu from '@/components/SiteToolbar/LanguageMenu.vue'
import CartMenu from '@/components/SiteToolbar/CartMenu'
import AccountMenu from '@/components/SiteToolbar/AccountMenu'

export default {
  name: 'ProductLandingToolbar',
  components: {
    LanguageMenu,
    CartMenu,
    AccountMenu,
  },
  data() {
    return {
      showShopMenu: false,
      showDiscoveryMenu: false,
      showCommunityMenu: false,
      showLangMenu: false,
      showAccountMenu: false,
      searchMenu: false,
      showRewardsMenu: false,
    }
  },
  computed: {
    ...mapState({
      showCartMenu: (state) => state.app.cartDrawer,
      user: (state) => state.auth.user,
      loggedIn: (state) => state.auth.loggedIn,
      referralCode: (state) => state.referralCode.referralCode,
      cartItems: (state) => state.cart.cartItems,
    }),
    ...mapGetters({
      onReplicateSite: 'replicateSite/onReplicateSite',
      cartTotalQuantity: 'cart/cartTotalQuantity',
    }),

    cartMenuValue: {
      get() {
        return this.showCartMenu
      },
      set(val) {
        this.toggleCartMenu(val)
      },
    },

    showTakeQuizButton() {
      return this.loggedIn || this.onReplicateSite || this.referralCode
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      return this.$store.dispatch('app/setCartDrawer', false)
    })

    if (!this.$store.state.app.cartDrawer) {
      return window.removeEventListener('scroll', () => {})
    }
  },
  destroyed() {
    return window.removeEventListener('scroll', () => {})
  },
  methods: {
    toggleCartMenu(val) {
      this.$store.dispatch('app/setCartDrawer', val)
    },
  },
}
</script>

<i18n> 
  {
    "en": {
      "rewards": "Rewards",
      "hi": "Hi",
      "blog": "Blog"
    },   
    "es": {
      "rewards": "Recompensas",
      "hi": "¡Hola",
      "blog": "Blogs"
    }
  } 
</i18n>

<style lang="scss" scoped>
@import '../../assets/scss/mixin.scss';
@import 'assets/ProductLandingPages/styles/variables.scss';

.site-menu {
  &--container {
    background-color: #fff;
    &.v-menu__content {
      left: 0 !important;
      max-width: 100% !important;
      width: 100% !important;
      padding-top: 35px;
      padding-bottom: 60px;
    }
  }
}

.site-header {
  box-shadow: none !important;
  height: auto !important;
  overflow: hidden;

  &__content {
    display: flex;
    align-items: center;
    &__btn {
      font-size: 18px !important;
      color: #2e2930 !important;
      font-weight: 400 !important;
      border: 0 !important;
      border-radius: 0 !important;
      height: auto !important;
      min-width: auto !important;
      transition-duration: 0.28s;
      transition-property: background-color;

      &:hover {
        background-color: #efefef !important;
      }

      &--logo {
        height: auto !important;
        min-width: auto !important;
        padding: 0 !important;
        margin-right: 14px !important;

        @include atMedium {
          img {
            width: 110px !important;
          }
        }
        @include atLarge {
          img {
            width: 132px !important;
          }
        }
      }

      & img {
        width: 30px;
        height: 30px;

        @media (max-width: $mobile) {
          width: 24px;
          height: 24px;
        }
      }

      &:not(.site-header__content__btn--icon) {
        padding: 16px 14px !important;
        text-transform: none;

        @media (max-width: $mobile) {
          padding: 16px 10px !important;
        }
      }

      &--icon {
        padding: 16px 14px !important;
        text-transform: none;

        @media (max-width: $mobile) {
          padding: 16px 10px !important;
        }
      }

      &__count {
        position: absolute;
        top: -8px;
        left: -10px;
        font-size: 10px;
        background-color: #c0df16;
        border-radius: 50%;
        width: 21px;
        height: 21px;
        font-weight: 300;
      }
    }
    &__update {
      font-size: 18px !important;
      color: #2e2930 !important;
      font-weight: 400 !important;
      border: 0 !important;
      border-radius: 0 !important;
      height: auto !important;
      min-width: auto !important;
      font-weight: 400;
      transition-duration: 0.28s;
      transition-property: background-color;
      text-transform: capitalize;
      letter-spacing: 0.65px;
      line-height: 361%;

      padding: 13px 16px !important;

      @include atMedium {
        font-size: 16px !important;
        padding: 13px 14px !important;
      }
      @include atLarge {
        font-size: 18px !important;
        padding: 13px 16px !important;
      }

      &:hover {
        font-weight: 600 !important;
        cursor: pointer;
      }
      &:nth-child(3) {
        width: 100px;
        @include atMedium {
          width: 70px;
        }
        @include atLarge {
          width: 100px;
        }
      }
      &:nth-child(4) {
        width: 125px;
        @include atMedium {
          width: 120px;
        }
        @include atLarge {
          width: 125px;
        }
      }
      &:nth-child(5) {
        width: 100px;

        @include atMedium {
          width: 98px;
        }
        @include atLarge {
          width: 110px;
        }
      }
      &:nth-child(6) {
        width: 80px;
      }
      &:nth-child(7) {
        width: 150px;

        @include atMedium {
          width: 123px;
        }
        @include atLarge {
          width: 130px;
        }
      }
      &:nth-child(8) {
        width: 150px;

        @include atMedium {
          width: 130px;
        }
        @include atLarge {
          width: 150px;
        }
      }
      &:nth-child(9) {
        width: fit-content;
      }
    }
  }
}

.account-text {
  margin-right: 15px;
}

.searchBtn {
  min-width: 50px !important;
  .searchIcon {
    width: 30px;
    height: 30px;
    color: #2e2930;
  }
}

.bold {
  font-weight: 600 !important;
  background-color: #c0df16;
}
</style>

<style lang="scss">
@import 'assets/ProductLandingPages/styles/variables.scss';

.landing-header {
  & .v-toolbar__content {
    padding: 0 $paddingContainer !important;
  }
}
</style>
