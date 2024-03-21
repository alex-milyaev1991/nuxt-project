<template>
  <div class="error-page">
    <v-container class="pa-4">
      <template v-if="statusCode === 403">
        <v-row class="mt-16" justify="center" align="center">
          <h1 class="text-h4">
            <v-icon style="font-size: 1.5em" class="mr-4"
              >mdi-shield-alert</v-icon
            >
            {{ $t('unauthorized') }}
          </h1>
        </v-row>
        <v-row justify="center" align="center">
          <p class="ma-4 mt-12">
            <v-btn color="primary" outlined nuxt @click="goBack()"
              ><v-icon left>mdi-arrow-left-bold</v-icon>{{ $t('back') }}</v-btn
            >
          </p>
          <p class="ma-4 mt-12">
            <v-btn to="/" color="primary" outlined nuxt>{{
              $t('returnToHomepage')
            }}</v-btn>
          </p>
        </v-row>
      </template>

      <template v-else>
        <v-row class="mt-16 mb-3" justify="center" align="center">
          <h1 class="display-1">{{ $t('somethingWentWrong') }}!</h1>
        </v-row>
        <v-row justify="center" align="center">
          <h2 class="title">{{ $t('error') }}: {{ message }}</h2>
        </v-row>

        <v-row justify="center" align="center">
          <p class="ma-4 mt-12">
            <v-btn color="primary" outlined nuxt @click="goBack()"
              ><v-icon left>mdi-arrow-left-bold</v-icon>{{ $t('back') }}</v-btn
            >
          </p>
          <p v-if="statusCode === 404" class="ma-4 mt-12">
            <v-btn to="/" color="primary" outlined nuxt>{{
              $t('returnToHomepage')
            }}</v-btn>
          </p>
          <p v-else class="ma-4 mt-12">
            <v-btn color="primary" outlined nuxt @click="reload()"
              ><v-icon left>mdi-reload</v-icon>{{ $t('reloadPage') }}</v-btn
            >
          </p>
        </v-row>
      </template>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: this.message, // <--- Set the SEO title
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message
    },
  },
  methods: {
    goBack() {
      this.$router.go(-2)
    },
    reload() {
      this.$router.go(0)
    },
  },
}
</script>

<i18n> 
{
  "en": {
    "unauthorized": "You are not authorized to view this page",
    "returnToHomepage": "Return to Homepage",
    "somethingWentWrong": "Looks like something went wrong"
  },   
  "es": {     
    "unauthorized": "You are not authorized to view this page",
    "returnToHomepage": "Página de inicio",
    "somethingWentWrong": "¡Parece que esta página no está disponible por el momento!"
  }
} 
</i18n>
