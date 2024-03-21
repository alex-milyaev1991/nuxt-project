<template><p>Redrecting...</p></template>

<script>
export default {
  name: 'RedirectPage',
  layout: 'blank',
  beforeCreate() {
    if (process.client) {
      let ssoCheckRedirectInfo = this.$store.state.app.ssoCheckRedirectInfo
      let route = ssoCheckRedirectInfo.route

      if (route != null) {
        let href = ssoCheckRedirectInfo.href
        if (href) {
          var params = ssoCheckRedirectInfo.params
            ? ssoCheckRedirectInfo.params
            : ''
          let addQm = ssoCheckRedirectInfo.addQm
          let addAnd = ssoCheckRedirectInfo.addAnd
          var blank = ssoCheckRedirectInfo.blank

          if (params != '') {
            params = params.substring(1, params.length - 1)
          }

          var qm = '?'
          var and = '&'

          if (addQm != true) {
            qm = ''
          }

          if (addAnd != true) {
            and = ''
          }

          this.$store.dispatch('app/clearSsoCheckRedirectInfo')
          let finalRoute =
            route +
            qm +
            params +
            and +
            'username=' +
            this.$store.state.auth.user.username +
            '&key=' +
            this.$store.state.auth.user.ssoKey

          if (blank) {
            window.open(finalRoute, '_blank')
            this.$router.push('/')
          } else {
            window.location.href = finalRoute
          }
        } else {
          this.$store.dispatch('app/clearSsoCheckRedirectInfo')
          this.$router.push(route)
        }
      } else {
        if (this.$store.state.auth.loggedIn) {
          this.$router.push('/')
        } else {
          this.$router.push('login')
        }
      }
    } else {
      this.$router.push('/')
    }
  },
}
</script>

<style lang="scss" scoped></style>
