<template>
  <div class="stress-effect-section" style="position: relative; z-index: 1">
    <div class="stress-effect-section__title d-flex justify-center">
      <h2 class="ma-0 solleBlack--text sn-text-h2" v-html="$t('title')"></h2>
    </div>

    <div class="stress-effect-section__causes">
      <div class="stress-effect-section__stress__img mb-n4">
        <wave-top-svg class="hidden-sm-and-down" />
        <wave-top-mobile-svg class="hidden-md-and-up" />
      </div>

      <div class="stress-effect-section__stress__content">
        <div class="stress-effect-section__stress__content__item mb-9 mb-md-14">
          <h2 class="solleBlack--text text-center sn-text-h2">
            {{ $t('howStressAffectYou') }}
          </h2>
          <p class="solleBlack--text text-center">{{ $t('clickToShop') }}</p>
        </div>

        <div
          class="stress-effect-section__stress__content__items d-flex flex-wrap"
        >
          <NuxtLink
            v-for="effect in effects"
            :key="effect.title"
            class="icons-container d-flex justify-center align-center flex-column"
            :to="effect.path"
          >
            <div
              class="stress-effect-section__stress__content__items__img"
              v-html="effect.iconCmp"
            />
            <div class="icons-container__text solleBlack--text text-center">{{
              effect.title
            }}</div>
          </NuxtLink>
        </div>
      </div>

      <div class="stress-effect-section__stress__img d-none d-md-block">
        <wave-bottom-svg />
      </div>
    </div>
  </div>
</template>

<script>
import MentalHealthIcon from '@/assets/svg/presentation-icons/Mental_Health.svg?raw'
import GutHealthIcon from '@/assets/svg/presentation-icons/Gut_Health.svg?raw'
import SleepIcon from '@/assets/svg/presentation-icons/Sleep.svg?raw'
import ImmunityIcon from '@/assets/svg/presentation-icons/Immunity.svg?raw'
import HormonalHealthIcon from '@/assets/svg/presentation-icons/Hormonal_Health.svg?raw'
import AntiAgingIcon from '@/assets/svg/presentation-icons/Anti-Aging.svg?raw'
import EnergyIcon from '@/assets/svg/presentation-icons/Energy.svg?raw'
import WeightManagementIcon from '@/assets/svg/presentation-icons/Weight_Management.svg?raw'
import WaveTopSvg from '@/assets/svg/wave-top.svg?inline'
import WaveBottomSvg from '@/assets/svg/wave-bottom.svg?inline'
import WaveTopMobileSvg from '@/assets/svg/wave-top-mobile.svg?inline'

export default {
  name: 'StressEffectSection',
  components: {
    WaveTopSvg,
    WaveBottomSvg,
    WaveTopMobileSvg,
  },
  computed: {
    effects() {
      return [
        {
          iconCmp: MentalHealthIcon,
          title: this.$t('mentalHealth'),
          path: '/shop/mental-health',
        },
        {
          iconCmp: GutHealthIcon,
          title: this.$t('gutHealth'),
          path: '/shop/gut-health',
        },
        {
          iconCmp: SleepIcon,
          title: this.$t('sleep'),
          path: '/shop/sleep',
        },
        {
          iconCmp: ImmunityIcon,
          title: this.$t('immunity'),
          path: '/shop/immunity',
        },
        {
          iconCmp: HormonalHealthIcon,
          title: this.$t('hormonalHealth'),
          path: '/shop/hormonal-health',
        },
        {
          iconCmp: AntiAgingIcon,
          title: this.$t('antiAging'),
          path: '/shop/anti-aging',
        },
        {
          iconCmp: EnergyIcon,
          title: this.$t('energy'),
          path: '/shop/energy',
        },
        {
          iconCmp: WeightManagementIcon,
          title: this.$t('weightManagement'),
          path: '/shop/weight-management',
        },
      ]
    },
  },
  mounted() {
    window.addEventListener('scroll', this.iconsTransition)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.iconsTransition)
  },
  methods: {
    iconsTransition() {
      let iconsContainer = document.querySelector(
        '.stress-effect-section__stress__content__items'
      )

      let windowHeight = window.innerHeight
      let iconsTop = iconsContainer.getBoundingClientRect().top
      let visible = 300

      const valueToShowElement = windowHeight - visible

      if (iconsTop < valueToShowElement) {
        iconsContainer.classList.add('active')
        window.removeEventListener('scroll', this.iconsTransition)
      }
    },
  },
}
</script>

<i18n> 
  {
    "en": {
      "title": "High stress has become our norm,<br/> and it affects our health in many ways",
      "mentalHealth": "Mental Health",
      "gutHealth": "Gut Health",
      "howStressAffectYou": "How does stress affect YOU?",
      "clickToShop": "Click any icon to shop by purpose",
      "sleep": "Sleep",
      "immunity": "Immunity",
      "hormonalHealth": "Hormonal Health",
      "antiAging": "Anti-Aging",
      "energy": "Energy",
      "weightManagement": "Weight Management"
    },   
    "es": {
      "title": "Vivir muy estresado hoy en día es una <br/> normalidad que repercute en la salud",
      "mentalHealth": "Salud Mental",
      "gutHealth": "Salud Intestinal",
      "howStressAffectYou": "¿Cómo TE afecta el estrés?",
      "clickToShop": "Haz clic en los íconos para comprar por obejtivo",
      "sleep": "Dormir",
      "immunity": "Inmunidad",
      "hormonalHealth": "Salud Hormonal",
      "antiAging": "Anti-edad",
      "energy": "Energía",
      "weightManagement": "Control de Peso"
    }
  } 
</i18n>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';
.stress-effect-section {
  h2 {
    @include atSmallAndDown {
      font-size: 26px !important;
    }

    @include atXSmall {
      font-size: 14px !important;
    }
  }

  &__title {
    margin-bottom: 50px;
    @include atSmall {
      margin-bottom: 75px;
    }
    @include atMedium {
      margin-bottom: 100px;
    }
    h2 {
      font-weight: 300 !important;
      letter-spacing: 0.9px;
      text-align: center;
      max-width: 90%;
      line-height: 21.5px;

      @include atSmall {
        line-height: 36px;
      }
      @include atMedium {
        line-height: 54px;
        font-size: 42px;
      }
    }
  }

  &__stress {
    position: relative;

    &__img {
      width: 100%;
      display: flex;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &__content {
      background-color: #f1f0ea;
      padding-top: 30px;

      @include atMedium {
        background-color: #f6f5ef;
      }

      &__item {
        h2 {
          @include atXSmall {
            font-size: 16px !important;
          }
        }
        p {
          margin-bottom: 0;
          font-weight: 300;
          font-size: 11px;
          @include atSmall {
            font-size: 16px;
          }
          @include atMedium {
            font-size: 20px;
          }
        }
      }

      &__items {
        max-width: 80%;
        margin-left: auto;
        margin-right: auto;
        justify-content: space-between;
        padding-bottom: 15px;
        transition: transform 0.6s cubic-bezier(0, 0.7, 0.7, 1) 0s,
          opacity 0.5s linear 0s;
        transform: translateY(40px);
        opacity: 0;

        &.active {
          transform: translate(0);
          opacity: 1;
        }

        @include atSmall {
          max-width: 75%;
          justify-content: normal;
          padding-bottom: 0;
        }

        .icons-container {
          text-decoration: none;
          flex-basis: 40%;
          margin-bottom: 35px;
          transition: all 0.3s;

          &:hover {
            transform: scale(1.1);
          }

          @include atSmall {
            flex-basis: 33%;
            margin-bottom: 55px;
          }
          @include atMedium {
            flex-basis: 25%;
            margin-bottom: 72px;
          }

          &__text {
            font-weight: 400;
            font-size: 10px;
            margin-top: 12px;
            @include atSmall {
              font-size: 16px;
              margin-top: 18px;
            }
          }
        }

        &__img {
          width: 68px;
          height: 68px;
          @include atMedium {
            width: 100px;
            height: 100px;
          }
          @include atLarge {
            width: 120px;
            height: 120px;
          }
          ::v-deep svg {
            width: 100%;
            height: 100%;

            .cls-1 {
              fill: none;
            }
          }
        }
      }
    }
  }
}
</style>
