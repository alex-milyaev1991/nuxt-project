<script>
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from '~/components/ProductLandingPage/ui/icons'

export default {
  name: 'ProductLandingFooter',
  data() {
    return {
      components: {
        FacebookIcon,
        InstagramIcon,
        YoutubeIcon,
      },
      socials: [
        { icon: FacebookIcon, href: 'https://www.facebook.com/SolleNaturals' },
        {
          icon: InstagramIcon,
          href: 'https://www.instagram.com/sollenaturals/',
        },
        {
          icon: YoutubeIcon,
          href: 'https://www.youtube.com/channel/UCtIL0YOEjTuYNYTDO8SpVrg',
        },
      ],
    }
  },
}
</script>

<i18n> 
  {
    "en": {
      "copyright": "©Copyright 2024 Solle Naturals LLC. All rights reserved.",
      "info": "*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."
    },   
    "es": {
      "copyright": "©Copyright 2024 Solle Naturals LLC. All rights reserved.",
      "info": "*Estas declaraciones no han sido evaluadas por la Administración de Alimentos y Medicamentos. Este producto no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad."
    }
  } 
</i18n>

<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <product-landing-container>
        <div class="footer__content">
          <div class="footer__main">
            <product-landing-logo class="footer__logo" variant="white" />
            <p class="footer__copy isNotTablet">{{ $t('copyright') }}</p>
          </div>
          <div class="footer__box">
            <v-list class="footer__socials">
              <v-list-item
                v-for="(social, index) in socials"
                :key="index"
                class="social"
              >
                <a class="social__link" :href="social.href" target="_blank">
                  <component :is="social.icon" />
                </a>
              </v-list-item>
            </v-list>
            <div>
              <a href="tel:8018230430">(801) 823-0430</a>
              <a href="mailto:customersupport@sollenaturals.com">
                customersupport@sollenaturals.com
              </a>
            </div>
          </div>
          <div class="footer__info">
            <p>{{ $t('info') }}</p>
          </div>
        </div>
        <p class="footer__copy isTablet">{{ $t('copyright') }}</p>
      </product-landing-container>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.footer {
  position: relative;
  background-color: $white;
  color: $white;
  padding: toRem(124) toRem(18) toRem(18);
  font-size: toRem(14);
  line-height: 171.428571%; /* 24/14 */

  @media (max-width: $mobile) {
    padding: toRem(74) toRem(8) toRem(8);
  }

  &__wrapper {
    background-color: $mainColor;
    padding: toRem(42) 0;
    border-radius: toRem(20);

    @media (max-width: $tablet) {
      padding: toRem(16) 0;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: toRem(24);
    @media (max-width: $tablet) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: toRem(18);

    @media (max-width: $tablet) {
      gap: toRem(4);
    }
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: toRem(18);

    @media (max-width: $tablet) {
      flex-direction: column-reverse;
      gap: toRem(4);
    }

    & a {
      display: block;
      width: fit-content;
      color: $white;
      transition: opacity $transition;

      @media (any-hover: hover) {
        &:hover {
          opacity: 0.8;
        }
      }

      @media (max-width: $mobile) {
        font-size: toRem(8);
        line-height: 150%; /* 12/8 */
      }
    }
  }

  & &__logo {
    width: toRem(221);
    height: toRem(77);

    @media (max-width: $mobile) {
      width: toRem(126);
      height: toRem(41);
    }
  }

  &__copy {
    font-size: toRem(12);

    @media (max-width: $tablet) {
      text-align: center;
      margin-top: toRem(12);
    }

    @media (max-width: $mobile) {
      font-size: toRem(8);
      line-height: 150%; /* 12/8 */
    }
  }

  &__socials {
    @include flexRow(center);
    column-gap: toRem(20);
    margin: 0;
    padding: 0;
    background-color: transparent;

    @media (max-width: $mobile) {
      column-gap: toRem(12);
    }
  }

  &__info {
    border: toRem(1) solid $white;
    border-radius: toRem(12);
    padding: toRem(26) toRem(20);

    @media (max-width: $tablet) {
      grid-column: span 2;
    }

    @media (max-width: $mobile) {
      font-size: toRem(8);
      line-height: 150%; /* 12/8 */
      padding: toRem(12) toRem(20);
    }
  }
}

.social {
  padding: 0;
  margin: 0;
  flex: 0;
  min-height: auto;

  &__link {
    color: $white;
    @include flexColumn(center, center);
    & svg {
      width: toRem(36);
      height: toRem(36);

      @media (max-width: $mobile) {
        width: toRem(22);
        height: toRem(22);
      }
    }
  }
}
</style>
