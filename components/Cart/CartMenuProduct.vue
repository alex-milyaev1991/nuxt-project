<template>
  <div class="cart-product">
    <div class="cart-product__img">
      <v-img :src="img" alt="product" :aspect-ratio="1"></v-img>
    </div>
    <div class="cart-product__info">
      <div class="cart-product__info__name">
        {{ name }}
      </div>
      <div class="cart-product__info__quantity">
        {{ $t('quantity') }}: <span>{{ quantity }}</span>
      </div>
      <div class="cart-product__info__price">
        {{ totalPrice }}
      </div>
      <div class="cart-product__info__btn" @click="deleteItem()">
        {{ $t('remove') }}
      </div>
    </div>
  </div>
</template>

<script>
import { representNumberInDollars } from '~/helpers'
export default {
  name: 'CartMenuProduct',
  props: {
    productId: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  computed: {
    totalPrice() {
      return representNumberInDollars(+this.price * this.quantity)
    },
  },
  methods: {
    deleteItem() {
      this.$store.dispatch('cart/setQuantity', {
        productId: this.productId,
        quantity: 0,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin.scss';

.cart-product {
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }

  &__img {
    width: 132px;
    height: 132px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__info {
    font-size: 14px;
    font-weight: 400;
    margin-left: 20px;

    @include atMedium {
      margin-left: 35px;
    }

    > div {
      margin-bottom: 4px;
      &:last-child {
        margin-bottom: 0;
      }
    }

    &__name,
    &__quantity {
      span {
        font-weight: 600;
      }
    }
    &__price {
      font-weight: 600;
    }

    &__btn {
      cursor: pointer;
    }
  }
}
</style>
