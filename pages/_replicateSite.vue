<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script>
/* eslint-disable vue/require-name-property */
export default {
  name: 'ReplicateSitePageWrapper',
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    replicateSite() {
      return this.$route.params.replicateSite
    },
  },
  mounted() {
    this.loadReplicateSiteData()
  },
  methods: {
    async loadReplicateSiteData() {
      this.loading = true
      if (this.replicateSite === 'main') return this.checkLegacySiteRedirects()

      try {
        await this.$store.dispatch('replicateSite/fetchSiteData', {
          site_name: this.replicateSite,
        })
        this.checkLegacySiteRedirects()
      } catch (error) {
        console.error(error)
        this.$router.push('/')
      } finally {
        this.loading = false
      }
    },
    checkLegacySiteRedirects() {
      let path = this.$route.path.split('/')
      if (path.length >= 3) {
        if (path[2] === 'shop') this.$router.push('/shop')
        if (path[2] === 'products') this.$router.push(`/shop`)
        if (path[2] === 'opportunity') this.$router.push(`/opportunity`)
        if (path[2] === 'about-us') this.$router.push(`/about`)
        if (path[2] === 'happenings') this.$router.push(`/happenings`)
        if (path[2] === 'register')
          this.$router.push(`/become-a-brand-specialist#sign-up`)
        if (path[2] === 'product_selector')
          this.$router.push(`/product-selector`)
      }
    },
  },
}
</script>

<style></style>
