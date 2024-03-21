<script>
import { ref } from 'vue'
import {
  MoodIc,
  BodyIc,
  CoreIc,
  EsMoodIc,
  EsBodyIc,
  EsCoreIc,
  TriangleIcon,
} from '@/components/ProductLandingPage/ui/icons'

import Wave from '@/assets/ProductLandingPages/images/vital/cream-wave.png'
import Hand from '@/assets/ProductLandingPages/images/vital/hand.png'
import MoodIcon from '@/assets/ProductLandingPages/images/vital/mood-icon.png'
import StaminaIcon from '@/assets/ProductLandingPages/images/vital/stamina-icon.png'
import DetoxIcon from '@/assets/ProductLandingPages/images/vital/detox-icon.png'
import RecoveryIcon from '@/assets/ProductLandingPages/images/vital/recovery-icon.png'
import AlkalizingIcon from '@/assets/ProductLandingPages/images/vital/alkalizing-icon.png'

const benefits = [
  {
    title: 'mood',
    icon: MoodIcon,
    text: 'moodText',
  },
  {
    title: 'stamina',
    icon: StaminaIcon,
    text: 'staminaText',
  },
  {
    title: 'detoxing',
    icon: DetoxIcon,
    text: 'detoxingText',
  },
  {
    title: 'recovery',
    icon: RecoveryIcon,
    text: 'recoveryText',
  },
  {
    title: 'alkalizing',
    icon: AlkalizingIcon,
    text: 'alkalizingText',
  },
]

export default {
  name: 'ProductLandingVitalKey',
  components: {
    TriangleIcon,
  },
  setup() {
    const activeBenefit = ref(benefits[0])
    const setActiveBenefit = (benefit) => (activeBenefit.value = benefit)

    return {
      Wave,
      Hand,
      cards: [
        { img: CoreIc, esImg: EsCoreIc },
        { img: BodyIc, withTransform: true, esImg: EsBodyIc },
        { img: MoodIc, esImg: EsMoodIc },
      ],
      benefits,
      activeBenefit,
      setActiveBenefit,
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale
    },
  },
}
</script>

<i18n> 
  {
    "en": {
      "title": "Key benefits",
      "mood": "Mood",
      "moodText": "Helps the body to balance and elevate your mood while promoting a healthy stress response",
      "stamina": "Stamina",
      "staminaText": "Adaptogens help the body maintain energy levels throughout the day for fewer crashes",
      "detoxing": "Detoxing",
      "detoxingText": "Chlorophyll naturally aids the body in eliminating toxins that build up over time",
      "recovery": "Recovery",
      "recoveryText": "Trace minerals restore necessary minerals and help to oxygenate the blood",
      "alkalizing": "Alkalizing",
      "alkalizingText": "Chlorophyll helps balance pH levels in the body, which reduces acidity and promotes a feeling of overall wellness"
    },   
    "es": {
      "title": "Beneficios claves",
      "mood": "Ánimo",
      "moodText": "Ayuda al cuerpo a equilibrar y a mejorar el estado de ánimo mientras promueve una respuesta saludable ante el estrés.",
      "stamina": "Resistencia",
      "staminaText": "Los adaptógenos ayudan a mantener los niveles de energía en el cuerpo durante el día con menos altibajos inesperados",
      "detoxing": "Desintoxica",
      "detoxingText": "La clorofila ayuda  naturalmente al cuerpo a eliminar toxinas acumuladas con el tiempo",
      "recovery": "Recupera",
      "recoveryText": "Los minerales traza restauran los minerales neesarios en el cuerpo, y ayudan a oxigenar la sangre",
      "alkalizing": "Alcaliniza",
      "alkalizingText": "La clorofila equilibra el pH del cuerpo reduciendo la acidez y brinda un sentimiento de bienestar general"
    }
  } 
</i18n>

<template>
  <section class="preview">
    <div class="preview__image">
      <img :src="Wave" alt="wave" />
    </div>
    <div class="preview__wrapper">
      <product-landing-container>
        <div class="preview__content">
          <v-row class="preview__cards">
            <v-col
              v-for="(card, index) in cards"
              :key="index"
              class="preview__card"
              :class="card.withTransform && 'transform'"
            >
              <component :is="lang === 'es' ? card.esImg : card.img" />
            </v-col>
          </v-row>
          <div class="display">
            <div class="display__wrapper">
              <div class="display__header">
                <h2>{{ $t('title') }}</h2>
              </div>
              <div class="display__hand">
                <img :src="Hand" alt="hand" />
              </div>
              <div class="display__content">
                <div class="display__list">
                  <div
                    v-for="(benefit, index) in benefits"
                    :key="index"
                    class="display__item"
                  >
                    <button
                      :class="benefit.title === activeBenefit.title && 'active'"
                      type="button"
                      @click="() => setActiveBenefit(benefit)"
                    >
                      {{ $t(benefit.title) }}
                    </button>
                    <triangle-icon
                      v-if="benefit.title === activeBenefit.title"
                      class="display__triangle"
                    />
                  </div>
                </div>
                <div class="display__card">
                  <img :src="activeBenefit.icon" alt="icon" />
                  <p>{{ $t(activeBenefit.text) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </product-landing-container>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';
.preview {
  position: relative;

  &__image {
    & img {
      width: 100%;
      aspect-ratio: 1532 / 84;
      object-fit: cover;
      object-position: top center;
    }
  }

  &__wrapper {
    position: relative;
    padding-top: toRem(44);

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 60%;
      background-color: $parchment_cream;
      z-index: $zIndex_1;
    }
  }

  &__content {
    position: relative;
    z-index: $zIndex_1;

    @media (max-width: $pc) {
      padding-top: toRem(32);
    }

    @media (max-width: $mobile) {
      padding-top: toRem(20);
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: toRem(24);
    max-width: toRem(1100);
    margin: 0 auto;
    padding: 0 toRem(88);

    @media (max-width: em(600)) {
      padding: 0;
      max-width: toRem(331);
    }
  }

  &__card {
    text-align: center;

    &.transform {
      transform: translateY(toRem(-30));
    }

    & svg {
      @media (max-width: $tablet) {
        width: toRem(100);
        height: auto;
      }
      @media (max-width: $mobile) {
        width: toRem(65);
      }
    }
  }
}
.display {
  position: relative;
  max-width: toRem(1100);
  margin: 0 auto;
  border-radius: toRem(30);
  margin-top: toRem(80);
  background: linear-gradient(
    359.49deg,
    #c0df16 0.37%,
    rgba(192, 223, 22, 0.546875) 21.54%,
    #dfeda6 56.13%
  );

  @media (max-width: $tablet) {
    margin-bottom: toRem(240);
  }

  @media (max-width: em(600)) {
    margin-bottom: toRem(120);
  }

  @media (max-width: $mobile) {
    margin-top: toRem(50);
  }

  &__wrapper {
    margin: 0 auto;

    @media (max-width: $tablet) {
      max-width: toRem(431);
      padding-left: toRem(36);
    }

    @media (max-width: em(600)) {
      max-width: toRem(331);
    }
  }

  &__header {
    position: relative;
    text-align: center;
    padding: toRem(60) 0 toRem(15);
    z-index: $zIndex_1;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      max-width: toRem(314);
      width: 100%;
      height: toRem(3);
      background-color: $white;
      border-radius: toRem(8);
    }

    @media (max-width: em(600)) {
      padding-top: toRem(32);
      padding-bottom: toRem(8);
      text-align: left;
      width: fit-content;
    }
  }

  &__hand {
    position: absolute;
    left: toRem(20);
    bottom: 0;

    & img {
      @include adaptiveValue('width', 450, 300, 1200, 991, 1);
    }

    @media (max-width: $tablet) {
      bottom: 0;
      left: 50%;
      transform: translate(-15%, -25%);

      & img {
        width: toRem(342);
      }
    }

    @media (max-width: em(600)) {
      transform: translate(-20%, -18%);

      & img {
        width: toRem(222);
      }
    }

    @media (max-width: em(360)) {
      transform: translate(-25%, -25%);

      & img {
        width: toRem(180);
      }
    }
  }

  &__content {
    @include flexRow(center, space-between);
    column-gap: toRem(38);
    padding: toRem(60) toRem(72) toRem(82) toRem(450);

    @include adaptiveValue('padding-left', 450, 300, 1200, 991, 1);

    @media (max-width: $tablet) {
      padding: toRem(60) 0 toRem(260);
    }

    @media (max-width: em(600)) {
      padding-top: toRem(36);
      padding-bottom: toRem(130);
    }
  }

  &__list {
    position: relative;
    @include flexColumn(flex-start);
    row-gap: toRem(28);
    background-color: transparent;
    padding: 0;

    @media (max-width: $tablet) {
      row-gap: toRem(20);
    }
  }

  &__item {
    position: relative;
    @include flexRow(center);
    width: 100%;
    min-width: toRem(188);
    padding: 0;

    @media (max-width: $tablet) {
      display: contents;
      position: static;
    }

    & button {
      font-size: toRem(32);
      line-height: 106.25%; /* 34/32 */
      font-weight: 300;
      transition: opacity $transition;

      @media (any-hover: hover) {
        &:hover:not(.active) {
          opacity: 0.8;
        }
      }

      &.active {
        font-weight: 600;
      }

      @media (max-width: $mobile) {
        font-size: toRem(28);
      }

      @media (max-width: em(600)) {
        font-size: toRem(16);
      }
    }
  }

  &__triangle {
    position: absolute;
    left: 100%;
    transform: translateX(40%);
    color: #bdd631;

    @media (max-width: $tablet) {
      bottom: toRem(-145);
      left: toRem(23);
      transform: rotate(90deg);
      z-index: $zIndex_5;
    }

    @media (max-width: em(600)) {
      width: toRem(26);
      height: toRem(24);
      bottom: toRem(-78);
      left: toRem(43);
    }
  }

  &__card {
    max-width: toRem(377);
    flex: 0 0 toRem(377);
    min-height: toRem(373);
    width: 100%;
    @include flexColumn(center);
    row-gap: toRem(12);
    text-align: center;
    background-color: $white;
    border-radius: toRem(10);
    padding: toRem(26) toRem(32) toRem(26);
    box-shadow: toRem(2) toRem(4) toRem(4) 0 #bcbab180;

    & p {
      font-size: toRem(24);
      line-height: 133.333333%; /* 32/24 */
    }

    @media (max-width: $tablet) {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 65%);
      border-radius: toRem(20);
      z-index: $zIndex_1;
    }

    @media (max-width: em(600)) {
      padding: toRem(16) toRem(8);
      row-gap: toRem(8);
      max-width: toRem(209);
      min-height: toRem(176);

      & img {
        width: toRem(63);
      }
      & p {
        font-size: toRem(12);
      }
    }
  }
}
</style>
