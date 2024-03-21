<template>
  <div class="product-dropdown-quantity">
    <v-select
      v-model="quantity"
      auto-select-first="false"
      :items="Array.from(Array(100), (_, i) => i + 1)"
      :label="$t('quantity')"
      outlined
      dense
      type="number"
      min="1"
      light
      menu-props="light"
      class="quantity-input"
      :disabled="onePerCustomer"
      :append-icon="onePerCustomer ? null : '$dropdown'"
    ></v-select>

    <div class="mb-2 mb-md-3 product-info-wrapper">
      <span class="product-QV mr-3"> QV: {{ product.QV }} </span>

      <span class="product-CV"> CV: {{ product.CV }} </span>
    </div>

    <button
      v-if="!product.isSuccessKit"
      class="remove mt-2 mt-md-0"
      @click="deleteItem()"
    >
      {{ $t('remove') }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DropdownQuantity',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      cartProducts: 'cart/cartProducts',
    }),
    onePerCustomer() {
      return this.product?.one_per_customer
    },
    quantity: {
      get() {
        return this.product.quantity
      },
      set(val) {
        this.setQuantity(val)
      },
    },
  },
  methods: {
    async setQuantity(val) {
      let quantity = val
      if (this.onePerCustomer && this.product.quantity > 1) {
        quantity = 1
      }

      this.$store.dispatch('cart/setQuantity', {
        productId: this.product.productId,
        quantity,
      })
    },
    deleteItem() {
      this.$store.dispatch('cart/setQuantity', {
        productId: this.product.productId,
        quantity: 0,
      })
    },
  },
}
</script>

<i18n>
  {
    "en": {
      "remove": "Remove"
    },
    "es": {
      "remove": "Eliminar"
    }
  }
</i18n>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

.product-dropdown-quantity {
  @include atSmall {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .quantity-input {
    width: 150px;

    @include atSmallAndDown {
      width: 100px;
      order: 2;
    }

    ::v-deep .v-text-field__details {
      display: none;
    }

    ::v-deep fieldset {
      border-color: #c0df16 !important;
    }
  }
}

.product-CV,
.product-QV,
.remove {
  color: #2e2930;
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;

  @include atSmallAndDown {
    font-size: 10px;
  }
}

.product-CV,
.product-QV {
  display: inline-block;
}

.remove {
  text-decoration: none;
  @include atSmallAndDown {
    order: 3;
  }
}

.product-info-wrapper {
  @include atSmallAndDown {
    order: 1;
  }
}
</style>
