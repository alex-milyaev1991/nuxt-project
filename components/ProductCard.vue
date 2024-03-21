<template>
  <v-card class="d-flex flex-column align-center product-card" elevation="0">
    <NuxtLink
      :to="`/product/${product.product_id}`"
      class="product-image-holder"
    >
      <v-badge overlap :value="showBadge" offset-x="50px" offset-y="50px">
        <template v-slot:badge>
          <span class="badge-content d-flex justify-center align-center">
            {{ cartQuantity }}
          </span>
        </template>
        <v-img class="mb-6 product-image" :src="product.image" />
      </v-badge>
    </NuxtLink>

    <v-card-title class="pa-0 product-text-holder" :class="extraClass">
      <div class="product-details d-md-flex flex-column solleBlack--text">
        <div class="product-name" v-html="productNameHtml"> </div>

        <span
          v-if="getTranslation(product.product_tagline)"
          class="product-description mb-md-3"
        >
          {{ getTranslation(product.product_tagline) }}
        </span>

        <span class="product-description-price-btn ma-md-0">
          <span class="wholesale-price solleBlack--text"
            >${{ product.wholesale_price }}</span
          >

          <template v-if="showQuantityControls">
            <v-btn
              v-if="showAddToCart"
              elevation="0"
              text
              class="quick-add solleBlack--text"
              height="auto"
              @click="addProductToCart(product)"
            >
              {{ $t('addToCart') }}
            </v-btn>
            <div v-else class="quick-remove solleBlack--text">
              <span class="subtract" @click="removeProductFromCart(product)">
                -
              </span>
              <input
                type="number"
                :value="cartQuantity"
                min="0"
                class="quick-add-input"
              />
              <span class="add" @click="addProductToCart(product)">+</span>
            </div>
          </template>
        </span>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import TranslationService from '@/services/TranslationService'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
    extraClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showAddToCart: true,
    }
  },
  computed: {
    ...mapGetters({
      // getProduct: 'shop/getProduct',
      findProductInCart: 'cart/findProductInCart',
      productAvaiableInUserRegion: 'shop/productAvaiableInUserRegion',
      hasBeenPurchased: 'shop/hasBeenPurchased',
    }),

    availableInUserRegion() {
      return this.productAvaiableInUserRegion(this.product.product_id)
    },

    cartProduct() {
      return this.findProductInCart(this.product.product_id)
    },

    cartQuantity() {
      return this.cartProduct?.quantity || 0
    },

    showBadge() {
      return !!this.cartProduct && this.cartProduct?.quantity > 0
    },

    purchased() {
      return this.hasBeenPurchased(this.product.product_id)
    },

    onePerCustomer() {
      return this.product?.one_per_customer
    },

    currentLang() {
      return this.$i18n.locale
    },

    productNameHtml() {
      return (
        `${this.getTranslation(
          this.product?.foramatedNameTranslation
        )}`.trim() || this.product.name
      )
    },

    showQuantityControls() {
      return (
        this.availableInUserRegion &&
        !this.product?.isSuccessKit &&
        !(this.purchased && this.onePerCustomer)
      )
    },
  },
  methods: {
    addProductToCart(product) {
      if (
        !this.onePerCustomer ||
        (this.onePerCustomer && this.cartQuantity === 0)
      ) {
        if (this.showAddToCart) {
          this.$store.dispatch('app/setCartDrawer', true)
          this.showAddToCart = false
        }

        this.$store.dispatch('cart/setQuantity', {
          productId: product.product_id,
          quantity: this.cartQuantity + 1,
        })

        this.$emit('addProductToCart', product)
      }
    },
    removeProductFromCart(product) {
      if (this.cartQuantity === 1) {
        this.showAddToCart = true
      }

      if (this.cartQuantity === 0) {
        return
      }

      this.$store.dispatch('cart/setQuantity', {
        productId: product.product_id,
        quantity: this.cartQuantity - 1,
      })

      this.$emit('removeProductFromCart', product)
    },
    getTranslation(tranlsationItem) {
      return TranslationService.getTranslationString(
        tranlsationItem,
        this.currentLang
      )
    },
  },
}
</script>

<i18n> 
  {
    "en": {
      "addToCart": "Add to cart"
    },   
    "es": {
      "addToCart": "Agregar"
    }
  } 
</i18n>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';

.product-image-holder {
  @include atXSmall {
    width: 100%;
  }

  @include atSmall {
    width: 100%;
  }
}

.product-text-holder {
  width: 100%;
  &.one-column-mobile {
    @include atSmallAndDown {
      justify-content: center;
    }
  }
}

.product-image {
  max-width: 140px;
  max-height: 140px;
  width: auto;
  height: auto;

  @include atSmall {
    max-width: 200px;
    max-height: 200px;
  }

  @include atMedium {
    max-width: 220px;
    max-height: 220px;
  }

  @include atLarge {
    max-width: 300px;
    max-height: 300px;
  }
}
.badge-content {
  height: 100%;
  width: 100;
  font-weight: 600;
}

.product-details {
  font-weight: 400;
  width: 150px;
  @include atSmall {
    width: 200px;
  }
  @include atLarge {
    width: 280px;
  }

  .product-name {
    letter-spacing: 0.4px;
    margin-bottom: 8px;
    font-size: 16px;
    word-break: normal;
    line-height: 24px;

    @include atXSmall {
      font-size: 12px;
      line-height: 1;
    }
    @include atSmallAndDown {
      display: block;
      margin-bottom: 4px;
    }

    @include atMedium {
      font-size: 18px;
    }
  }

  .product-description {
    line-height: 1;
    word-break: break-word;

    @include atXSmall {
      font-size: 10px;
      line-height: 16px;
    }

    @include atSmallAndDown {
      display: block;
    }

    @include atSmall {
      font-size: 12px;
    }

    @include atMedium {
      font-size: 14px;
    }

    &-price-btn {
      display: flex;
      align-items: center;
      @include atSmallAndDown {
        margin-top: 5px;
      }

      .wholesale-price {
        font-size: 10px;
        font-weight: 500;
        @include atSmall {
          font-size: 12px;
        }
        @include atMedium {
          font-size: 14px;
        }
        @include atSmallAndDown {
          display: block;
          line-height: 16px;
        }
      }
    }
  }

  .quick-add {
    text-transform: none;
    font-weight: 400;
    line-height: 1;
    padding: 4px;
    border: 1px solid #828281;
    display: inline-flex;
    margin-left: 8px;
    height: 18px !important;

    @include atXSmall {
      font-size: 10px;
      line-height: 16px;
    }

    @include atSmall {
      font-size: 12px;
    }

    @include atMedium {
      font-size: 14px;
      padding: 6px 10px;
      height: 25px !important;
    }
    @include atLarge {
      margin-left: 18px;
      display: inline-flex;
      margin-top: 0;
    }
  }

  .quick-remove {
    font-weight: 400;
    font-size: 10px;
    padding: 0 4px;
    border: 1px solid #828281;
    width: auto;
    border-radius: 4px;
    cursor: default;
    display: flex;
    align-items: center;
    margin-left: 8px;
    position: relative;
    line-height: 16px;
    height: 18px;

    @include atSmall {
      font-size: 12px;
    }
    @include atMedium {
      font-size: 14px;
      padding: 0 10px;
      height: 25px;
    }

    @include atLarge {
      margin-left: 18px;
      display: inline-flex;
      margin-top: 0;
    }
  }

  .subtract,
  .add {
    position: absolute;
    top: 0;
    width: 14px;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .subtract {
    justify-content: end;
    left: 4px;
    @include atMedium {
      left: 10px;
    }
  }
  .add {
    right: 4px;
    @include atMedium {
      right: 10px;
    }
  }
  input {
    width: 58px;
    height: 100%;
    text-align: center;
    pointer-events: none;
    font-size: 10px;

    @include atSmall {
      font-size: 12px;
    }

    @include atMedium {
      font-size: 14px;
      width: 80px;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    appearance: textfield;
    -moz-appearance: textfield;

    &:focus {
      border: none;
      outline: none;
    }
  }
}
</style>
