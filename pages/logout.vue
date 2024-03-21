<template>
  <br />
</template>

<script>
export default {
  name: 'LogoutPage',
  layout: 'blank',
  head() {
    return { title: `Logout` }
  },
  async beforeCreate() {
    this.$store.dispatch('app/setAppDrawer', false)
    this.$store.dispatch('app/setCartDrawer', false)
    this.$store.dispatch('cart/clearCart')
    this.$store.dispatch('geolocation/fetchUserRegionInfo')
    this.$store.dispatch('shop/clearPurchasedProducts')
    this.$store.dispatch('masquerade/clearTarget')
    this.$auth.$storage.removeCookie('expire')

    let authStrategy = this.$auth.$storage.getCookie('strategy')
    this.$auth.$storage.setCookie('strategy', authStrategy)

    await this.$auth.logout()
    this.$router.push('/login')
  },
}
</script>

<style></style>
