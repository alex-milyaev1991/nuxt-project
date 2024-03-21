<template>
  <div>
    <breadcrumb
      :items="items"
      breadcrumb-classes="cart-breadcrumbs mt-8 mb-8 mb-md-9 ml-auto"
    />
    <div
      class="cart-container d-flex flex-column justify-center mb-10 mb-md-16"
      :class="!cartProducts.length ? 'mt-0 empty-cart-container' : ''"
    >
      <div>
        <div
          class="cart-title-container d-flex justify-space-between align-center mb-6"
        >
          <h3 class="cart-title solleBlack--text">{{ $t('yourCart') }}</h3>

          <share
            v-if="cartProducts.length"
            :cart-products="cartProducts"
            :share-text="$t('shareCart')"
            :cart-page-classes="'share-container d-flex flex-row flex-wrap justify-start align-center mt-md-0'"
          />
        </div>

        <div class="product-container">
          <ul v-if="cartProducts.length">
            <cart-page-product
              v-for="product in cartProducts"
              :key="product.product_id"
              :product="product"
              class="cart-page-product"
            />
          </ul>
          <empty-cart v-else />
        </div>

        <div
          v-if="cartProducts.length"
          class="checkout-container d-flex justify-md-end justify-center"
        >
          <div>
            <div class="subtotal-price d-flex justify-space-between mb-6">
              {{ $t('subtotal') }} ({{ cartTotalQuantity }} {{ $t('items') }}):
              <strong> ${{ cartSubtotal.toFixed(2) }}</strong>
            </div>
            <checkout-button classes="cart" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import CartPageProduct from '@/components/Cart/CartPageProduct'
import EmptyCart from '@/components/Cart/EmptyCart'
import qs from 'qs'

export default {
  name: 'Cart',
  components: {
    CheckoutButton: () => import('~/components/Legacy/CheckoutButton.vue'),
    Breadcrumb: () => import('~/components/Breadcrumb'),
    Share: () => import('~/components/Share'),
    CartPageProduct,
    EmptyCart,
  },
  computed: {
    ...mapState({
      specialistSite: (state) => state.replicateSite.replicate_site_data,
    }),
    ...mapGetters({
      cartTotalQuantity: 'cart/cartTotalQuantity',
      cartSubtotal: 'cart/cartSubtotal',
      cartProducts: 'cart/cartProducts',
    }),
    items() {
      return [
        {
          text: this.$t('shopping'),
          disabled: false,
          routePath: '/shop/all',
        },
        {
          text: this.$t('yourCart'),
          disabled: true,
          routePath: '',
        },
      ]
    },
  },
  mounted() {
    this.loadProductsFromURL()
    this.setSpecialistSignup()
    this.setReferralCode()
  },
  methods: {
    loadProductsFromURL() {
      // Load the products object from the query parameters
      const { products } = qs.parse(this.$route.query, {
        ignoreQueryPrefix: true,
        arrayLimit: -1,
      })
      if (!products) return

      // Loop through each product
      Object.entries(products).forEach(async ([productId, quantity]) => {
        this.$store.dispatch('cart/setQuantity', {
          productId: parseInt(productId),
          quantity: parseInt(quantity),
        })
      })
    },
    setSpecialistSignup() {
      if (this.$route.query.specialistSignup === 'true' && !this.loggedIn) {
        this.$store.dispatch('signUp/setEnrollingAsSpecialist', true)
      }
    },
    setReferralCode() {
      const referralCode = this.$route.query.referralCode
      if (referralCode)
        this.$store.dispatch('referralCode/setReferralCode', referralCode)
    },
  },
}
</script>

<i18n>
  {
    "en": {
      "shareCart": "Share Cart",
      "yourCart": "Your Cart",
      "subtotal": "Subtotal",
      "items": "items",
      "shopping": "Shopping"
    },
    "es": {
      "shareCart": "Compartir Carrito",
      "yourCart": "Tu Carrito",
      "subtotal": "Subtotal",
      "items": "Artículos",
      "shopping": "Comprar"
    }
  }
</i18n>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';

.cart-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 65%;

  @include atSmallAndDown {
    max-width: 85%;
  }

  .cart-title-container {
    position: relative;
    @include atSmallAndDown {
      flex-direction: column;
      justify-content: center;
    }

    .cart-title {
      font-size: 36px;
      line-height: 37px;
      font-weight: 300;
    }
  }

  .product-container {
    border: 2px solid #c0df16;
    border-radius: 20px;
    overflow: hidden;
    overflow-y: scroll;
    padding: 60px;

    &::-webkit-scrollbar {
      display: none;
    }

    @include atSmallAndDown {
      padding: 45px;
    }

    @include atXSmall {
      padding: 20px;
    }

    ul {
      list-style: none;
      padding: 0;

      .cart-page-product {
        margin-bottom: 50px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  .checkout-container {
    display: flex;
    margin-top: 80px;
    flex-direction: column;
    font-size: 14px;
    line-height: 10px;
    align-items: center;

    @include atSmall {
      display: flex;
      flex-direction: row;
      margin-top: 40px;
    }

    @include atMedium {
      margin-top: 40px;
      height: 200px;
    }

    .subtotal-price {
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.35px;
      text-transform: capitalize;
      font-size: 16px;
      color: #2e2930;

      @include atSmall {
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
      }

      strong {
        font-weight: 600;
      }
    }
  }

  // .estimatedTax {
  //   font-style: italic;
  //   font-weight: 300;
  //   color: #000000;
  //   font-size: 16px;
  //   line-height: 12px;

  //   @include atSmall {
  //     font-size: 18px;
  //     line-height: 16px;
  //   }
  // }

  // .shippingSupercharge {
  //   font-weight: 300;
  //   letter-spacing: 0.35px;
  //   font-size: 16px;
  //   line-height: 10px;

  //   @include atSmall {
  //     font-size: 18px;
  //     line-height: 16px;
  //   }
  // }
}

.empty-cart-container {
  padding-bottom: 140px;

  @include atSmallAndDown {
    padding-bottom: 100px;
  }
}
</style>
