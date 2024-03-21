<template>
  <li class="cart-page-product-container">
    <img :src="product.thumbnail_image" />

    <div class="product-details-container d-flex align-center">
      <div class="product-details-wrapper">
        <div class="mb-2 mb-md-4 product-details">
          <span class="product-name">{{ product.name }}</span>

          <product-sub-total
            class="mobile-product-sub-total"
            :product-id="product.product_id"
          />
          <span v-if="product.product_tagline" class="product-short">
            {{ getTranslation(product.product_tagline) }}
          </span>
        </div>

        <dropdown-quantity :product="product" />
      </div>
      <product-sub-total
        class="desktop-product-sub-total"
        :product-id="product.product_id"
      />
    </div>
  </li>
</template>

<script>
import TranslationService from '@/services/TranslationService'

export default {
  name: 'CartPageProduct',
  components: {
    DropdownQuantity: () => import('~/components/Cart/DropdownQuantity.vue'),
    ProductSubTotal: () => import('~/components/Cart/ProductSubTotal.vue'),
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getTranslation(tranlsationItem) {
      return TranslationService.getTranslationString(
        tranlsationItem,
        this.currentLang
      )
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin.scss';

.cart-page-product-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  width: 100% !important;
  flex-direction: row;

  @include atSmallAndDown {
    flex-direction: column;
  }

  img {
    width: 150px;
    height: 140px;
    margin-right: 30px;
  }

  .product-details-container {
    justify-content: space-between;
    flex: 1;
    width: 100%;
    flex-wrap: wrap;

    .product-details-wrapper {
      @include atSmallAndDown {
        width: 100%;
      }

      .product-details {
        @include atSmallAndDown {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: center;
        }

        .product-name {
          font-weight: 400;
          color: #2e2930;
          font-size: 20px;
          line-height: 18px;
          display: block;

          @include atSmallAndDown {
            font-size: 18px;
            line-height: 18px;
            width: 70%;
            margin-bottom: 0 !important;
          }
        }

        .product-short {
          font-weight: 300;
          color: #2e2930;
          font-size: 12px;
          line-height: 16px;

          @include atSmallAndDown {
            margin-top: 8px;
          }
        }
      }
    }

    .desktop-product-sub-total {
      margin-left: 20px;
      @include atSmallAndDown {
        display: none;
      }
    }

    .mobile-product-sub-total {
      display: none;
      @include atSmallAndDown {
        display: block;
        width: 30%;
        text-align: right;
      }
    }
  }
}
</style>
