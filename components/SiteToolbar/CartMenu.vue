<template>
  <div class="cart-menu">
    <v-list class="cart-menu__list min-height-auto-list-item">
      <v-list-item class="cart-menu__list__item has-icon">
        <v-btn
          icon
          class="language-menu__list__item__icon"
          @click="closeMenu()"
        >
          <div v-html="closeIcon"></div>
        </v-btn>
      </v-list-item>

      <v-list-item class="cart-menu__list__item">
        <div class="cart-menu__list__item__content">
          <div class="cart-menu__list__item__content__title">
            {{ $t('itemsCart') }}
          </div>

          <div
            v-if="cartProducts.length"
            class="cart-menu__list__item__content__cart"
          >
            <cart-menu-product
              v-for="product in cartProducts"
              :key="product.product_id"
              :product-id="product.product_id"
              :img="product.thumbnail_image"
              :name="product.name"
              :quantity="product.quantity"
              :price="Number(product.retail_price)"
            />
          </div>

          <empty-cart v-else class="my-7" size="small" />
        </div>
      </v-list-item>

      <v-list-item class="cart-menu__list__item">
        <div class="cart-menu__list__item__content">
          <div class="cart-menu__list__item__content__info">
            <div class="cart-menu__list__item__content__info__items">
              {{ $t('subtotal') }} ({{ cartTotalQuantity }} {{ $t('items') }})
            </div>
            <div class="cart-menu__list__item__content__info__price">
              {{ displayedCartSubTotal }}
            </div>
          </div>
        </div>
      </v-list-item>

      <v-list-item class="cart-menu__list__item">
        <div class="cart-menu__list__item__content">
          <div class="cart-menu__list__item__content__btns">
            <NuxtLink to="/cart" class="view-cart" @click.native="closeMenu()">
              {{ $t('viewCart') }}
            </NuxtLink>
            <share
              v-if="cartProducts.length"
              :cart-menu="true"
              :share-text="$t('shareCart')"
              :cart-menu-classes="'share-cart-menu d-flex justify-center align-center'"
            />
            <a class="continue-shopping" @click="closeMenu()">
              <span>{{ $t('continueShopping') }}</span>
            </a>
          </div>
        </div>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { representNumberInDollars } from '~/helpers'
import closeIcon from '@/assets/close.svg?@raw'
import EmptyCart from '@/components/Cart/EmptyCart'

export default {
  name: 'CartMenu',
  components: {
    CartMenuProduct: () => import('~/components/Cart/CartMenuProduct.vue'),
    Share: () => import('~/components/Share.vue'),
    EmptyCart,
  },
  data() {
    return {
      closeIcon,
    }
  },
  computed: {
    ...mapGetters({
      cartTotalQuantity: 'cart/cartTotalQuantity',
      cartSubtotal: 'cart/cartSubtotal',
      cartProducts: 'cart/cartProducts',
    }),
    displayedCartSubTotal() {
      return representNumberInDollars(this.cartSubtotal.toFixed(2))
    },
  },
  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    },
  },
}
</script>

<i18n> 
  {
    "en": {
      "items": "items",
      "itemsCart": "Items in your cart",
      "viewCart": "View cart",
      "shareCart": "Share Cart",
      "continueShopping": "Continue Shopping"
    },   
    "es": {
      "items": "artículos",
      "itemsCart": "Artículos en el carrito",
      "viewCart": "Ver carrito",
      "shareCart": "Compartir Carrito",
      "continueShopping": "Seguir Comprando"
    }
  } 
</i18n>

<style lang="scss">
@import '~/assets/scss/mixin.scss';

.cart-menu {
  padding: 30px 44px;
  width: 100%;
  border-radius: 0;
  position: relative;

  @include atMedium {
    width: 410px;
    padding: 16px 22px 22px 44px;
    border-radius: 8px;
  }

  &__list {
    padding: 0;
    &__item {
      padding: 0;
      &.has-icon {
        position: absolute;
        top: 14px;
        right: 24px;
        z-index: 1;

        button {
          width: 18px;
          height: 18px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      &__content {
        width: 100%;
        &__title {
          font-size: 16px;
          font-weight: 400;
          margin-bottom: 12px;
        }

        &__cart {
          overflow-y: scroll;
          max-height: 600px;
        }

        &__info {
          margin-top: 33px;
          margin-right: 15px;
          border-top: 1px solid #2e2930;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          padding-top: 15px;

          &__items {
            font-weight: 400;
          }
          &__price {
            font-weight: 600;
          }
        }

        &__btns {
          margin-top: 35px;
          margin-right: 15px;
          a,
          .share-cart {
            display: block;
            margin-bottom: 30px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            font-weight: 300;
            color: #2e2930;

            &:last-child {
              margin-bottom: 0;
            }

            &.view-cart {
              background: #c0df16;
              border-radius: 4px;
              color: #fff;
              font-size: 20px;
              font-weight: 400;
              padding: 12px;
              text-transform: uppercase;
            }
            &.continue-shopping {
              span {
                display: inline-block;
                border-bottom: 1px solid #2e2930;
                padding-bottom: 4px;
              }
            }
          }
        }
      }
    }
  }
}

::v-deep .v-menu__content {
  // position: fixed;
  // top: 98px;
  z-index: 100;
}
</style>
