<script>
export default {
  name: 'ProductLandingVitalCoaster',
  computed: {
    isEnglish() {
      return this.$i18n.locale === 'en'
    },
  },
}
</script>

<i18n> 
  {
    "en": {
      "title": "Step off the stress roller coaster",
      "subtitle": "Stress is a daily and normal part of life, but if it begins to feel like a roller coaster that leaves you emotionally and physically exhausted on a daily basis, this may be a sign that your health is suffering negative consequences of stress and needs help. That’s where adaptogens come in. <strong> Adaptogens help stress feel less like a roller coaster and more like a bump in the road.</strong> They naturally <strong>promote a return to balance</strong> for both body and mind by helping the body modulate the neuroendocrine system responsible for stress hormones, increasing energy and stamina, and combating inflammation through their antioxidant properties."
    },   
    "es": {
      "title": "Bájate de la montaña rusa del estrés",
      "subtitle": "El estrés es parte diaria y normal de la vida, pero si comienza a sentirse como una montaña rusa que te deja agotado emocional y físicamente a diario, puede ser una señal de que tu salud está sufriendo las consecuencias negativas del estrés y necesita ayuda.  Es ahí donde los adaptógenos entran en acción. <strong>Los adaptógenos ayudan a que el estrés se sienta menos como una montaña rusa y más como un bache en el camino</strong>, porque <strong>promueven de forma natural el retorno al equilibrio</strong> para el cuerpo y la mente al ayudar a modular el sistema neuroendocrino que es responsable de las hormonas del estrés, aumentar la energía y la resistencia, y combatir la inflamación a través de sus propiedades antioxidantes."
    }
  } 
</i18n>

<template>
  <section class="coaster">
    <product-landing-container>
      <div class="coaster__content">
        <div class="coaster__header">
          <product-landing-animation :delay="200">
            <h2>{{ $t('title') }}</h2>
          </product-landing-animation>
          <product-landing-animation :delay="400">
            <p v-html="$t('subtitle')" />
          </product-landing-animation>
        </div>
        <product-landing-animation :delay="600" class="isNotMobile">
          <div class="coaster__image">
            <img
              :src="
                require('~/assets/ProductLandingPages/images/vital/coaster.png')
              "
              alt="coaster"
            />
          </div>
        </product-landing-animation>
        <product-landing-animation :delay="600" class="isMobile">
          <div class="coaster__image">
            <img
              :src="
                require('~/assets/ProductLandingPages/images/vital/coaster-mobile.png')
              "
              alt="coaster"
            />
          </div>
        </product-landing-animation>
      </div>
    </product-landing-container>
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.coaster {
  &__content {
    @include flexColumn();
    row-gap: toRem(73);
    max-width: toRem(1091);
    width: 100%;
    margin: 0 auto;
    text-align: center;

    @media (max-width: $mobile) {
      row-gap: toRem(38);
    }
  }

  &__header {
    @include flexColumn();
    row-gap: toRem(41);

    & p {
      line-height: 168.75%; /* 27/16 */
    }

    @media (max-width: $mobile) {
      row-gap: toRem(18);

      & p {
        font-size: toRem(12);
      }
    }
  }

  &__image {
    & img {
      width: 100%;
      aspect-ratio: 1091 / 376;

      @media (max-width: $mobile) {
        aspect-ratio: 359 / 400;
      }
    }
  }
}
</style>
