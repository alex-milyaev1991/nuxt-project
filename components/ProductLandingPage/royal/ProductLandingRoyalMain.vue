<script>
import { ref } from 'vue'

export default {
  name: 'ProductLandingRoyalMain',
  setup() {
    const count = ref(1)
    const incrementCount = () => (count.value += 1)
    const decrementCount = () => {
      count.value - 1 < 1 ? (count.value = 1) : (count.value -= 1)
    }

    return {
      count,
      incrementCount,
      decrementCount,
    }
  },
}
</script>

<i18n> 
  {
    "en": {
      "title": "Collagen couture",
      "subtitle": "Solle<b>Royal™</b> is a natural, plant-based approach to enhancing your body’s collagen production. It provides the nutritional building blocks your body requires to create collagen and delivers them in a form that is easy to absorb and utilize. It also contains various adaptogens to help balance stress levels, which is key to steady collagen production!",
      "qty": "<strong>Qty</strong> (sticks)",
      "add": "Add to cart",
      "discover": "Discover your custom product recommendations when you take our quiz!",
      "quiz": "Take the Quiz"
    },   
    "es": {
      "title": "Colágeno a tu medida",
      "subtitle": "Solle<b>Royal</b>™es un suplemento natural a base de plantas diseñado para mejorar la capacidad del cuerpo para producir colágeno. Provee los compuestos nutricionales que el cuerpo requiere para producir colágeno de forma fácil de absorber y de utilizar. Además, contiene varios adaptógenos para equilibrar los niveles de estrés, ¡lo cual es clave para la producción constante de colágeno!",
      "qty": "<strong>Cant.</strong> (sobres)",
      "add": "Agregar",
      "discover": "¡Descubre qué productos te recomendamos después de completar el",
      "quiz": "Cuestionario!"
    }
  } 
</i18n>

<template>
  <section class="main">
    <div class="main__wave">
      <img
        :src="require('~/assets/ProductLandingPages/images/main-wave.png')"
        alt="wave"
      />
    </div>
    <div class="main__wrapper">
      <product-landing-container>
        <div class="main__content">
          <div class="main__box">
            <product-landing-animation :delay="200">
              <h2>{{ $t('title') }}</h2>
            </product-landing-animation>
            <div class="main__subtitle">
              <product-landing-animation :delay="400">
                <p v-html="$t('subtitle')" />
              </product-landing-animation>
            </div>
            <product-landing-animation :delay="700" class="isTablet">
              <div class="main__img">
                <img
                  :src="
                    require('~/assets/ProductLandingPages/images/royal/royal-box.png')
                  "
                  alt="VitalBox"
                />
              </div>
            </product-landing-animation>
            <product-landing-animation :delay="800">
              <div class="qty">
                <div class="qty__wrap">
                  <p class="qty__title" v-html="$t('qty')" />
                  <div class="qty__price">
                    <div class="qty__switcher">
                      <button class="active" type="button">30</button>
                      <button type="button">100</button>
                    </div>
                    <p class="qty__value"><b>$47.25</b> USD</p>
                  </div>
                </div>
                <div class="qty__box">
                  <product-landing-button class="qty__button">
                    {{ $t('add') }}
                  </product-landing-button>
                  <div class="qty__counter">
                    <button type="button" @click="decrementCount()">-</button>
                    <span>{{ count }}</span>
                    <button type="button" @click="incrementCount()">+</button>
                  </div>
                </div>
                <div class="qty__discover">
                  <p>
                    {{ $t('discover') }}
                  </p>
                  <a href="https://www.sollenaturals.com/take-our-quiz">
                    {{ $t('quiz') }}
                  </a>
                </div>
              </div>
            </product-landing-animation>
          </div>
          <product-landing-animation
            variant="opacity"
            :delay="400"
            class="isNotTablet"
          >
            <div class="main__img">
              <img
                :src="
                  require('~/assets/ProductLandingPages/images/royal/royal-box.png')
                "
                alt="VitalBox"
              />
            </div>
          </product-landing-animation>
        </div>
      </product-landing-container>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';
.main {
  position: relative;
  padding-top: 0;

  @media (max-width: $mobile) {
    padding-top: 0;
  }

  &__wave {
    & img {
      width: 100%;
      aspect-ratio: 1604 / 164;
      object-fit: cover;
      object-position: top center;
    }
  }

  &__wrapper {
    position: relative;
    z-index: $zIndex_1;
    background-color: $white;
  }

  &__content {
    display: grid;
    grid-template-columns: minmax(toRem(524), 1fr) 1fr;
    align-items: center;
    justify-content: space-between;
    gap: toRem(35);

    @media (max-width: $tablet) {
      grid-template-columns: 1fr;
      justify-content: center;
      gap: toRem(12);
      max-width: toRem(610);
      margin: 0 auto;
      text-align: center;
    }
  }

  &__box {
    @include flexColumn();
    row-gap: toRem(24);

    & h2 {
      font-weight: 300;
    }

    @media (max-width: $mobile) {
      row-gap: toRem(12);
    }

    @media (max-width: $mobileSmall) {
      & h2 {
        text-align: left;
      }
    }
  }

  &__subtitle {
    @include flexColumn();
    row-gap: toRem(24);
    line-height: 168.75%; /* 27/16 */

    @media (max-width: $mobile) {
      row-gap: toRem(12);
    }
    @media (max-width: $mobileSmall) {
      text-align: left;
    }
  }

  &__img {
    text-align: center;

    @media (max-width: $tablet) {
      margin-top: toRem(24);
    }

    & img {
      max-width: toRem(610);
      width: 100%;
      height: auto;
      aspect-ratio: 610 / 530;
      object-fit: contain;
      object-position: center;
    }
  }
}

.qty {
  @include flexColumn();
  row-gap: toRem(32);
  text-align: left;

  @media (max-width: $mobile) {
    row-gap: toRem(26);
  }

  &__wrap {
    @include flexColumn();
    row-gap: toRem(12);
  }

  &__title {
    font-size: toRem(14);

    & strong {
      font-size: toRem(16);
      font-weight: 600;
    }

    @media (max-width: $mobileSmall) {
      font-size: toRem(10);

      & strong {
        font-size: toRem(12);
      }
    }
  }

  &__price {
    @include flexRow(center);
    column-gap: toRem(26);
  }

  &__switcher {
    @include flexRow(center);
    background-color: $parchment_cream;
    border-radius: toRem(30);
    width: fit-content;

    & button {
      @include flexRow(center, center);
      width: toRem(36);
      height: toRem(36);
      font-size: toRem(14);
      border-radius: 50%;
      color: #bcbab1;
      transition: color $transition;

      @media (any-hover: hover) {
        &:hover {
          color: $mainColor;
        }
      }

      &.active {
        color: $mainColor;
        background-color: #bcbab1;
      }

      @media (max-width: $mobile) {
        width: toRem(24);
        height: toRem(24);
        font-size: toRem(8);
      }
    }
  }

  &__value {
    font-size: toRem(24);
    font-weight: 300;

    & b {
      font-weight: 400;
    }

    @media (max-width: $mobile) {
      font-size: toRem(14);
    }
  }

  &__box {
    @include flexRow(center);
    column-gap: toRem(12);
  }

  .qty__button {
    font-size: toRem(14);
    letter-spacing: em(0.35);
    font-weight: 400;
    padding: toRem(7.5) toRem(30);
    color: $mainColor;

    @media (max-width: $mobile) {
      font-size: toRem(12);
      padding: toRem(8.5) toRem(15);
    }
  }

  &__counter {
    @include flexRow(center);
    column-gap: toRem(2);
    border: toRem(1) solid $accent;
    border-radius: toRem(30);
    padding: toRem(4) toRem(9);
    font-size: toRem(14);

    @media (max-width: $mobile) {
      font-size: toRem(12);
    }

    & > button {
      @include flexRow(center, center);
      width: toRem(19);
      height: toRem(25);
      transition: opacity $transition;

      @media (any-hover: hover) {
        &:hover {
          opacity: 0.8;
        }
      }
    }

    & > span {
      @include flexRow(center, center);
      text-align: center;
      width: toRem(14);
      height: toRem(25);
    }
  }

  &__discover {
    font-size: toRem(14);

    @media (max-width: $mobile) {
      font-size: toRem(10);
      line-height: 150%; /* 15/10 */
    }

    & > a {
      color: #5fafbb;
      text-decoration: underline;
      transition: opacity $transition;

      @media (any-hover: hover) {
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
