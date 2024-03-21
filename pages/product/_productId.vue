<template>
  <v-container>
    <template v-if="product">
      <h1 class="text-h2">{{ product.name }}</h1>
      <product-card :product="product"></product-card>
    </template>

    <template v-else>
      <h1 class="text-h2">Product Not Found</h1>
    </template>
  </v-container>
</template>

<script>
export default {
  name: 'ProductPage',
  components: {
    ProductCard: () => import('~/components/ProductCard.vue'),
  },
  computed: {
    product() {
      return this.$store.getters['shop/getProduct'](
        parseInt(this.$route.params.productId)
      )
    },
  },
}
</script>

<style></style>
