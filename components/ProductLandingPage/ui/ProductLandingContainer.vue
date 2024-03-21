<template>
  <div class="landing-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ProductLandingContainer',
}
</script>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.landing-container {
  width: 100%;
  max-width: toRem($maxWidthContainer);
  padding: 0 $paddingContainer;
  margin: 0 auto;
}
</style>
