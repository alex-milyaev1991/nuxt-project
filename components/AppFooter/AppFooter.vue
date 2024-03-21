<template>
  <v-footer elevation="0" color="#fafaf8">
    <div class="app-footer d-flex flex-column align-start flex-wrap">
      <div v-if="showUserDetails">
        <app-footer-user-details />
      </div>
      <v-divider v-if="showUserDetails" class="divider mt-12 mb-15" />

      <div class="footer-items d-flex flex-row justify-space-between">
        <div class="footer-items-column d-flex flex-column">
          <nuxt-link to="/account">
            {{ $t('nav.account.title') }}
          </nuxt-link>
          <nuxt-link to="/refunds">
            {{ $t('return') }}
          </nuxt-link>
          <nuxt-link class="d-none" to="/review">{{ $t('review') }} </nuxt-link>
          <nuxt-link class="d-none" to="/faq">{{ $t('faq') }} </nuxt-link>
        </div>

        <div class="footer-items-column d-flex flex-column">
          <nuxt-link to="/discover/our-story">
            {{ $t('nav.aboutUs.title') }}
          </nuxt-link>
          <nuxt-link to="/discover/our-guarantee">
            {{ $t('testing') }}
          </nuxt-link>
          <nuxt-link to="/discover/our-philosophy">{{
            $t('nav.aboutUs.ourPhilosophy')
          }}</nuxt-link>
        </div>

        <div class="footer-items-column d-flex flex-column">
          <nuxt-link to="/referral-program">
            {{ $t('giveGet') }}
          </nuxt-link>
          <nuxt-link to="/contact-us">{{ $t('contactUs') }}</nuxt-link>
          <nuxt-link to="/opportunity">
            {{ $t('becomeBrandSpecialist') }}
          </nuxt-link>
        </div>

        <div class="d-flex flex-column">
          <div class="mb-2 footer-items-column">
            <nuxt-link to="/terms">
              {{ $t('termsAndConditions') }} |
            </nuxt-link>

            <nuxt-link to="/privacy">
              {{ $t('privacyAndSecurity') }}
            </nuxt-link>
          </div>

          <p class="text-section mb-2">
            {{ $t('textSection') }}
          </p>
          <span>{{ $t('rights') }}</span>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<script>
import AppFooterUserDetails from './AppFooterUserDetails'
import { mapGetters } from 'vuex'

export default {
  name: 'AppFooter',
  components: {
    AppFooterUserDetails,
  },
  computed: {
    ...mapGetters({
      onReplicateSite: 'replicateSite/onReplicateSite',
    }),
    showUserDetails() {
      let path = this.$route.path.split('/')
      if (path.length >= 3) {
        if (path[2] === 'contact-me') return false
      }

      return this.onReplicateSite
    },
  },
}
</script>

<i18n> 
{
  "en": {
    "return": "Returns/Refunds",
    "review": "Reviews",
    "faq": "FAQs",
    "testing": "Testing/Quality",
    "giveGet": "Give $10, Get $10",
    "contactUs": "Contact Us",
    "becomeBrandSpecialist": "Become a Brand Specialist",
    "termsAndConditions": "Terms & Conditions",
    "privacyAndSecurity":"Privacy & Security",
    "textSection": "*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.",
    "rights": "©2023 Solle Naturals. All Rights Reserved."
  },
  "es":{
    "return": "Reembolsos/Devoluciones",
    "review": "Reseñas",
    "faq": "Preguntas Frecuentes",
    "testing": "Pruebas/Calidad",
    "giveGet": "Da $10, Recibe $10",
    "contactUs": "Contacta a Solle",
    "becomeBrandSpecialist": "Conviértete en Especilaista de Marca",
    "termsAndConditions": "Términos & Condiciones",
    "privacyAndSecurity":"Privacidad & Seguridad",
    "textSection": "*Estas declaraciones no han sido evaluadas por la Administración de Alimentos y Medicamentos. Estos productos no intentan diagnosticar, tratar, curar o prevenir ninguna enfermedad.",
    "rights": "©2023 Solle Naturals. Derechos Reservados."
  }
}
</i18n>

<style lang="scss" scoped>
.app-footer {
  width: 100%;
  max-width: 70%;
  margin: auto;
  padding: 100px 0;
}

.divider {
  width: 100%;
  border-color: #c0df16; // solleGreen
}

.footer-items {
  font-weight: 300;
  font-size: 12px;
  line-height: 22px;
  color: #2e2930;
  width: 100%;

  .footer-items-column a {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.footer-items-column a {
  text-decoration: none;
  color: #2e2930;
}

.text-section {
  box-sizing: border-box;
  border: 1px solid #2e2930;
  border-radius: 8px;
  font-size: 9px;
  line-height: 17px;
  padding: 10px 18px;
  width: 300px;
}
</style>
