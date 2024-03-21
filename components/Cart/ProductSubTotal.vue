<template>
  <span class="product-sub-total">${{ productSubtotal }}</span>
</template>

<script>
export default {
  name: 'ProductSubTotal',
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    product() {
      return this.$store.getters['cart/findProductInCart'](this.productId)
    },
    productSubtotal() {
      return (this.product.wholesale_price * this.product.quantity).toFixed(2)
    },
  },
}
</script>

<style lang="scss" scoped>
.product-sub-total {
  color: #2e2930;
  font-size: 20px;
  line-height: 16px;
}
</style>
