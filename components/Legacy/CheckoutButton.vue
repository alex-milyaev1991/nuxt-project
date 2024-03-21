<template>
  <div class="checkout-button">
    <v-btn
      v-if="needsProductToEnroll || needsToCompleteSignUpForm"
      color="primary"
      outlined
      block
      :class="classes"
      class="mt-11"
      :disabled="
        onJoinPage && (needsToCompleteSignUpForm || !needsProductToEnroll)
      "
      @click="continueEnrollment()"
    >
      <v-icon left>mdi-cart-plus</v-icon>
      Complete<br />Enrollment
    </v-btn>

    <v-btn
      v-else
      color="primary"
      :disabled="cartTotalQuantity === 0"
      depressed
      block
      :class="classes"
      class="mt-11"
      @click="$auth.loggedIn ? checkoutCart() : checkoutNoLogin()"
    >
      {{ $t('checkout') }}
      <v-icon right>mdi-open-in-new</v-icon>
    </v-btn>
  </div>
</template>

<script>
import qs from 'qs'
import { mapState, mapGetters } from 'vuex'
import AuthorizationService from '@/services/AuthorizationService.js'
import OrderService from '@/services/OrderService.js'
import UserService from '@/services/UserService'

export default {
  name: 'CheckoutButton',
  props: {
    classes: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    loading: false,
    checkoutUrl: `${process.env.checkoutUrl}`,

    needsEnrollOrder: false,
    referrer: null,
  }),
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      loggedIn: (state) => state.auth.loggedIn,
      enrollingAsSpecialist: (state) => state.signUp.enrollingAsSpecialist,
      referralCode: (state) => state.referralCode.referralCode,
      specialistSite: (state) =>
        state.replicateSite.replicate_site_data.site_name,
    }),
    ...mapGetters({
      cartProducts: 'cart/cartProducts',
      cartTotalQuantity: 'cart/cartTotalQuantity',
      hasSuccessKit: 'cart/hasSuccessKit',
      signUpFormValid: 'signUp/signUpFormValid',
    }),

    currentCountry() {
      return this.$store.state.geolocation.selectedRegion.country_id
    },
    currentLang() {
      return this.$i18n.locale
    },

    needsProductToEnroll() {
      return (
        this.enrollingAsSpecialist &&
        this.hasSuccessKit &&
        this.cartTotalQuantity < 2
      )
    },
    needsToCompleteSignUpForm() {
      return this.enrollingAsSpecialist && !this.signUpFormValid
    },
    onJoinPage() {
      return this.$route.path === '/opportunity/specialist-signup'
    },
  },
  mounted() {
    this.checkIfNeedsEnrollOrder()
  },
  methods: {
    checkoutCart() {
      try {
        const params = this.createParams()
        this.$store.dispatch('cart/clearInvalidItems')

        AuthorizationService.ssoKeyNeeded(
          this.$store,
          this.$router,
          this.checkoutUrl,
          false,
          true,
          true,
          params
        )
        // window.open(this.checkoutURL, '_blank')
      } catch (e) {
        console.error('Error checking out: ', e)
      }
    },
    checkoutNoLogin() {
      let params = ''
      params = this.createParams()
      window.open(`${process.env.checkoutUrl}/?${params}`, '_self')
    },
    createParams() {
      const specialistStandardOrderType = 1
      const memberStandardOrderType = 8
      const specialistEnrollOrderType = 4
      const memberEnrollOrderType = 9

      let params = {
        lang: this.currentLang,
        country_id: this.currentCountry,
      }

      if (this.loggedIn) {
        if (Object.values(this.user.groups).includes('Specialist')) {
          params.order_type_id = specialistStandardOrderType
        } else if (this.needsEnrollOrder) {
          params.order_type_id = memberEnrollOrderType
          params.referralCode = this.referrer?.referralCode
        } else {
          params.order_type_id = memberStandardOrderType
        }
      } else {
        if (this.enrollingAsSpecialist) {
          params.order_type_id = specialistEnrollOrderType
        } else {
          params.order_type_id = memberEnrollOrderType
        }

        params.specialistSite = this.specialistSite || undefined
        params.referralCode = this.referralCode || undefined
      }

      params.products = this.cartProducts.reduce((productsObj, product) => {
        productsObj[product.product_id] = product.quantity
        return productsObj
      }, {})

      return qs.stringify(params)
    },

    continueEnrollment() {
      if (this.needsToCompleteSignUpForm) {
        this.$router.push('/opportunity/specialist-signup')
      } else if (this.needsProductToEnroll) {
        this.$router.push('/shop')
      } else {
        this.checkoutNoLogin()
      }
    },

    async checkIfNeedsEnrollOrder() {
      // Check if trial pack user
      if (Object.values(this.user.groups).includes('Trial Pack')) {
        try {
          const { onlyTrialPack, referrer } =
            await OrderService.getOnlyTrialPack(this.user?.username)

          if (onlyTrialPack) {
            this.needsEnrollOrder = true
            this.referrer = referrer
          }
        } catch (error) {
          console.error(error)
        }
      }

      // Check if stress quiz user
      if (Object.values(this.user.groups).includes('Stress Quiz')) {
        try {
          const orderCount = await OrderService.getOrderCountByUsername(
            this.user?.username
          )

          if (orderCount === 0) {
            const referrer = await UserService.getReferrer(this.user?.username)
            this.needsEnrollOrder = true
            this.referrer = referrer
          }
        } catch (error) {
          console.error(error)
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

::v-deep .cart {
  letter-spacing: normal;
  font-weight: 500;
  height: 54px !important;
  line-height: 16px;
  letter-spacing: 0.35px;
  font-size: 20px;

  @include atSmallAndDown {
    font-weight: 400;
  }
  .v-icon {
    display: none;
  }
}
</style>
