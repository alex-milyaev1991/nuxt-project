<template>
  <div>
    <h2 class="text-h3">{{ categoryName }}</h2>

    <v-sheet class="d-flex flex-wrap justify-space-around" fluid>
      <transition-group class="products" name="products">
        <product-card
          v-for="item in categoryProducts"
          :key="item.name"
          class="product ma-3"
          :product="item"
        />
      </transition-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: 'ShopCategoryPage',
  components: {
    ProductCard: () => import('~/components/ProductCard.vue'),
  },
  computed: {
    categorySlug() {
      return this.$route.params.category
    },

    categoryProducts() {
      return this.$store.getters['shop/getProductsByCategory'](
        this.categorySlug
      )
    },

    categoryName() {
      let currentCategory = this.$store.state.shop.categories.find(
        (category) => category.param == this.categorySlug
      )
      return this.$t(currentCategory?.i18Text) || this.capitalizedCategory
    },

    capitalizedCategory() {
      return this.categorySlug
        .split(/(?=[A-Z])/)
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(' ')
    },
  },
}
</script>

<style lang="scss" scoped>
.filter {
  transition: all 0.35s;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.products-enter {
  transform: scale(0.5) translatey(-80px);
  opacity: 0;
}

.products-leave-to {
  transform: translatey(30px);
  opacity: 0;
}

.products-leave-active {
  position: absolute;
  z-index: -1;
}

.product {
  transition: all 0.35s ease-in-out;
}
</style>
