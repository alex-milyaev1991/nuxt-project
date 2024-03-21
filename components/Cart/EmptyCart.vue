<template>
  <div class="empty-cart">
    <p class="empty-cart-text" :class="{ 'small-text': isSmallSize }">{{
      $t('emptyCartText')
    }}</p>
    <div class="d-flex flex-column mt-6">
      <NuxtLink
        to="/shop/best-sellers"
        class="empty-cart-link mb-6"
        :class="{ 'small-link': isSmallSize }"
        >{{ $t('emptyLink1') }}</NuxtLink
      >
      <NuxtLink
        to="/shop/packages"
        class="empty-cart-link"
        :class="{ 'small-link': isSmallSize }"
        >{{ $t('emptyLink2') }}</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyCart',
  props: {
    size: {
      type: String,
      default: '',
    },
  },
  computed: {
    isSmallSize() {
      return this.size === 'small'
    },
  },
}
</script>

<i18n>
  {
    "en": {
      "emptyCartText":"Your cart is currently empty. Begin shopping below!",
      "emptyLink1":"Shop Best Sellers",
      "emptyLink2":"Shop Packages"
    },
    "es": {
      "emptyCartText":"Tu carrito está vacío. ¡Comienza a comprar!",
      "emptyLink1":"Más Vendidos",
      "emptyLink2":"Paquetes"
    }
  }
</i18n>

<style lang="scss" scoped>
@import '/assets/scss/mixin.scss';

.empty-cart {
  font-size: 20px;
  @include atMedium {
    font-size: 36px;
  }

  .empty-cart-text {
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.4px;
    color: #828281;

    &.small-text {
      font-size: 16px;
    }
  }
  .empty-cart-link {
    color: #5fafbb;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.35px;

    &.small-link {
      font-size: 14px;
    }
  }
}
</style>
