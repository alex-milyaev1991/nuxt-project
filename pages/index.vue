<template>
  <div class="home-page">
    <home />
  </div>
</template>

<script>
/* eslint-disable vue/require-name-property */
export default {
  name: 'HomePage',
  components: {
    Home: () => import('~/components/HomePage/Home'),
  },
}
</script>
