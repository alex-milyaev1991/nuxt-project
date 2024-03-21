<template>
  <div>
    <home />
  </div>
</template>

<script>
/* eslint-disable vue/require-name-property */
export default {
  name: 'ReplicateSiteHomePage',
  components: {
    Home: () => import('~/components/HomePage/Home'),
  },
}
</script>
