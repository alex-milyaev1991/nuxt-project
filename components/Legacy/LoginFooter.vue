<template>
  <v-row justify="center">
    <v-card light width="90%" max-width="400" flat>
      <v-row justify="center" no-gutters>
        <language-icon class="mr-auto" btn-type="text" outlined dense />
        <v-btn to="/terms" small plain text>{{ $t('terms') }}</v-btn>
        <v-btn to="/privacy" small plain text>{{ $t('privacy') }}</v-btn>
        <!-- <v-btn to="/refunds" small plain text>{{ $t('refund') }}</v-btn>
        <v-btn to="/disclaimer" small plain text>{{ $t('legal') }}</v-btn> -->
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'LoginFooter',
  components: {
    LanguageIcon: () => import('~/components/Legacy/LanguageIcon.vue'),
  },
}
</script>

<i18n>
{
    "en": {
        "terms": "Terms",
        "privacy": "Privacy",
        "refund": "Refund",
        "legal": "Legal"
    },
    "es": {
        "terms": "Términos",
        "privacy": "Privacidad",
        "refund": "Reembolso",
        "legal": "Legal"
    }
}
</i18n>

<style></style>
