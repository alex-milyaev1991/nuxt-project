<script>
export default {
  name: 'ProductLandingLogo',
  props: {
    variant: {
      type: String,
      default: 'base',
      validator: (value) => ['base', 'white'].includes(value),
    },
  },
}
</script>

<template>
  <nuxt-link to="/" class="logo">
    <img
      v-if="variant === 'base'"
      :src="require('@/assets/SolleLogo.svg')"
      class="logo__image"
      alt="logo"
    />
    <img
      v-if="variant === 'white'"
      :src="require('@/assets/ProductLandingPages/images/logo-white.png')"
      class="logo__image"
      alt="logo"
    />
  </nuxt-link>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.logo {
  position: relative;
  display: inline-block;
  width: toRem(131);
  height: toRem(50);
  transition: opacity $transition;

  @media (any-hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: $mobile) {
    width: toRem(107);
    height: toRem(41);
  }

  &__image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
