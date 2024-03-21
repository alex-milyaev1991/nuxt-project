<template>
  <v-footer
    elevation="0"
    color="#fafaf8"
    class="px-0"
    style="max-width: 100vw; overflow-x: auto"
  >
    <div class="app-footer d-flex flex-column align-start flex-wrap">
      <div class="footer-items d-flex flex-column">
        <app-footer-user-details v-if="showUserDetails" class="pt-8" />

        <v-list color="#fafaf8">
          <v-list-group class="mb-5 dropdown-container" :ripple="false">
            <template v-slot:activator>
              <v-list-item-title color="#fafaf8" class="item-title">
                {{ $t('nav.account.title') }}
              </v-list-item-title>
            </template>
            <div class="mb-3">
              <NuxtLink to="/refunds">
                {{ $t('return') }}
              </NuxtLink>
            </div>
          </v-list-group>

          <v-list-group class="mb-5 dropdown-container" :ripple="false">
            <template v-slot:activator>
              <v-list-item-title color="#fafaf8" class="item-title">
                {{ $t('contactUs') }}
              </v-list-item-title>
            </template>
            <v-row class="mb-3">
              <v-col cols="auto" class="mr-8">
                <p>(888)&nbsp;787-0665</p>
                <p>(801)&nbsp;823-0430</p>
              </v-col>

              <v-col cols="auto">
                <p> customersupport@sollenaturals.com </p>
              </v-col>

              <v-col cols="12">
                <v-btn
                  color="solleGreen"
                  elevation="0"
                  large
                  block
                  class="white--text"
                  to="/contact-us"
                  style="width: unset; font-size: 16px; margin: 0"
                  xstyle="padding: 0; margin: 0; width: unset; font-size: 14px;"
                  >{{ $t('sendUsAMessage') }}</v-btn
                >
              </v-col>
            </v-row>
          </v-list-group>

          <v-list-group class="mb-5 dropdown-container" :ripple="false">
            <template v-slot:activator>
              <v-list-item-title color="#fafaf8" class="item-title">
                {{ $t('resources') }}
              </v-list-item-title>
            </template>
            <div class="mb-3 d-flex flex-column">
              <div class="d-flex flex-row">
                <NuxtLink to="/referral-program">
                  {{ $t('giveGet') }}
                </NuxtLink>
                <NuxtLink to="/product-selector">
                  {{ $t('quiz') }}
                </NuxtLink>
                <NuxtLink to="/review" class="d-none">
                  {{ $t('review') }}
                </NuxtLink>
              </div>
              <div class="d-flex flex-row">
                <NuxtLink to="/faq" class="d-none"> {{ $t('faq') }} </NuxtLink>
              </div>
            </div>
          </v-list-group>

          <v-list-group class="mb-5 dropdown-container" :ripple="false">
            <template v-slot:activator>
              <v-list-item-title color="#fafaf8" class="item-title">
                {{ $t('discover') }}
              </v-list-item-title>
            </template>
            <div class="mb-3 d-flex flex-column">
              <div class="d-flex flex-row mb-3">
                <NuxtLink to="/discover/our-story" class="text-left">
                  {{ $t('story') }}
                </NuxtLink>
                <NuxtLink to="/discover/our-guarantee">
                  {{ $t('guarantee') }}
                </NuxtLink>
              </div>
              <div class="d-flex flex-row">
                <NuxtLink to="/discover/our-philosophy">
                  {{ $t('nav.aboutUs.ourPhilosophy') }}
                </NuxtLink>
                <NuxtLink to="/opportunity">
                  {{ $t('becomeBrandSpecialist') }}
                </NuxtLink>
              </div>
            </div>
          </v-list-group>
        </v-list>

        <div
          class="d-flex flex-column align-center"
          style="max-width: 100vw; overflow-x: auto"
        >
          <span class="mb-3 terms-and-conditions">
            <nuxt-link to="/terms" class="mr-0">
              {{ $t('termsAndConditions') }}
            </nuxt-link>
            |
            <nuxt-link to="/privacy">
              {{ $t('privacyAndSecurity') }}
            </nuxt-link>
          </span>
          <p class="text-section mb-3">
            {{ $t('textSection') }}
          </p>
          <span class="font-weight-light mb-6">{{ $t('rights') }}</span>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<script>
import AppFooterUserDetails from './AppFooterUserDetails'
import { mapGetters } from 'vuex'

export default {
  name: 'AppFooterMobile',
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
      "sendUsAMessage": "Send Us A Message",
      "return": "Returns/Refunds",
      "review": "Reviews",
      "story": "Our Story",
      "resources": "Resources",
      "discover":"Discover",
      "guarantee": "Our Guarantee",
      "faq": "FAQs",
      "quiz": "Take our quiz",
      "giveGet": "Give $10, Get $10",
      "contactUs": "Contact Us",
      "becomeBrandSpecialist": "Become a Brand Specialist",
      "termsAndConditions": "Terms & Conditions",
      "privacyAndSecurity":"Privacy & Security",
      "textSection": "*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.",
      "rights": "©2023 Solle Naturals. All Rights Reserved."
    },
    "es": {
      "sendUsAMessage": "Mandanos un mensaje",
      "return": "Reembolsos/Devoluciones",
      "review": "Reseñas",
      "story": "Nuestra Historia",
      "resources": "Recursos",
      "discover":"Descubre",
      "guarantee": "Nuestra Garantía",
      "faq": "Preguntas Frecuentes",
      "quiz": "Cuestionario",
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
  width: 90%;
  max-width: 100%;
  margin: auto;
  padding-top: 20px;
}

.dropdown-container {
  border-bottom: 1px solid #828281;

  ::v-deep &.v-list-group {
    .v-list-item {
      padding: 0 !important;
      margin-bottom: 8px;
      min-height: auto;

      .v-icon {
        line-height: 16px;
        font-size: 18px;
        &:before {
          content: '+';
          position: relative;
          top: -3px;
        }
      }
    }

    &--active {
      .v-list-item {
        .v-icon {
          transform: rotate(0);
          &:before {
            content: '-';
            position: relative;
            top: -3px;
          }
        }
      }
    }
  }

  p {
    font-weight: 400 !important;
    font-size: 10px;
    line-height: 22px;
    color: #2e2930;
  }
  .contact-us-email {
    margin-left: 50px;
  }
}

.footer-items {
  font-size: 12px;
  line-height: 14px;
  color: #2e2930;
  width: 100%;

  a {
    font-weight: 400 !important;
    font-size: 10px;
    line-height: 16px;
    text-decoration: none;
    color: #2e2930;
    &:first-child {
      width: 90px;
      margin-right: 50px;
    }
  }

  .item-title {
    font-size: 10px;
    line-height: 16px;
    font-weight: 300;
    color: #828281;
  }
}

.terms-and-conditions {
  a {
    font-size: 12px !important;
  }
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

.v-application .primary--text {
  color: #2e2930 !important;
  font-weight: 500 !important;
}

::v-deep .v-list-group__header {
  &::before {
    background: transparent;
  }
}
</style>
