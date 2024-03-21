<script>
export default {
  name: 'ProductLandingCinnamateSeo',
}
</script>

<i18n> 
  {
     "en": {
       "text":"Cinna<b>Mate</b> allows us to answer a resounding YES to the following question: Does a product exist that can help me with focus, alertness, and energy, that will also lift and stabilize my mood over time, instead of taking it on a roller-coaster ride like stimulant products? Due to its sugar-balancing properties and its highly nutritious ingredients, Cinna<b>Mate</b> is the product you didn’t think existed for supporting your need for energy and focus without damaging long-term effects.",
       "founder": "Founder/CEO"
     },   
     "es": {
       "text": "Cinna<b>Mate</b> nos permite contestar un resonante SÍ a la siguiente pregunta:   ¿Existe algún producto que me ayude con la concentración, el estar alerta, con la energía, y que también me ayude a estabilizar mi estado de ánimo con el tiempo sin provocar los efectos de los productos estimulantes?...  Debido a sus propiedades para equilibrar el azúcar, y a sus ingredientes altamente nutritivos, Cinna<b>Mate</b> es el producto que no se creía que existiera para satisfacer las necesidades de energía y concentración sin efectos dañinos a largo plazo.",
       "founder": "Fundador/CEO"
   } 
  }
 </i18n>

<template>
  <section class="seo">
    <product-landing-container>
      <div class="seo__wrap">
        <img
          class="seo__border"
          :src="
            require('~/assets/ProductLandingPages/images/cinnamate/border.png')
          "
          alt="Border"
        />
        <img
          class="seo__border mobile"
          :src="
            require('~/assets/ProductLandingPages/images/cinnamate/border-mobile.png')
          "
          alt="Border"
        />
        <div class="seo__dots">
          <img
            :src="
              require('~/assets/ProductLandingPages/images/cinnamate/dots.png')
            "
            alt="Dots"
          />
        </div>
        <div class="seo__product">
          <img
            :src="
              require('~/assets/ProductLandingPages/images/cinnamate/product.png')
            "
            alt="Product"
          />
          <img
            class="mobile"
            :src="
              require('~/assets/ProductLandingPages/images/cinnamate/product-mobile.png')
            "
            alt="Product"
          />
        </div>
        <div class="seo__content">
          <p class="seo__text" v-html="$t('text')" />
          <div class="seo__info">
            <img
              :src="require('~/assets/ProductLandingPages/images/avatar.png')"
              alt="Greg Halliday"
            />
            <p><strong>Greg Halliday</strong> {{ $t('founder') }}</p>
          </div>
        </div>
      </div>
    </product-landing-container>
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.seo {
  @media (max-width: $tablet) {
    padding-top: toRem(30);
  }

  &__wrap {
    position: relative;
    max-width: toRem(943);
    width: 100%;
    text-align: center;
    margin: 0 auto;

    @include adaptiveValue('height', 600, 496, 1300, 991, 1);

    @media (max-width: $tablet) {
      @include flexColumn(center, center);
      height: auto;
      margin: auto;
    }
  }

  &__product {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(27%, 35%);

    & img {
      display: block;
      @include adaptiveValue('width', 510, 490, 1300, 991, 1);
    }

    & img.mobile {
      display: none;
    }

    @media (max-width: $tablet) {
      padding: 0;
      left: 50%;
      right: auto;
      transform: translateX(-50%);
      bottom: -56px;

      & img {
        display: none;
        width: toRem(300);
      }
      & img.mobile {
        display: block;
      }
    }
  }

  &__content {
    position: relative;
    @include flexColumn(center, center);
    row-gap: toRem(32);
    height: 100%;
    padding: toRem(102) toRem(83) toRem(38);
    z-index: $zIndex_1;
    max-width: toRem(724);
    margin: 0 auto;

    @media (max-width: $pc) {
      row-gap: toRem(24);
    }

    @media (max-width: $tablet) {
      padding: 0;
      max-width: toRem(360);
      padding: toRem(50) toRem(30);
    }

    @media (max-width: $mobile) {
      row-gap: toRem(18);
    }
  }

  &__border {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;

    &.mobile {
      display: none;
    }

    @media (max-width: $tablet) {
      display: none;
    }
    &.mobile {
      @media (max-width: $tablet) {
        display: block;
      }
    }
  }

  &__dots {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $white;
    width: toRem(276);

    @media (max-width: $tablet) {
      width: toRem(124);
    }

    img {
      @media (max-width: $tablet) {
        max-width: toRem(64);
      }
    }
  }

  &__text {
    font-size: toRem(16);
    line-height: 150%; /* 33/22 */

    @media (max-width: $tablet) {
      font-size: toRem(14);
    }
  }

  &__info {
    & p {
      & strong {
        display: block;
        font-size: toRem(20);
      }
    }

    @media (max-width: $pc) {
      & img {
        width: toRem(142);
      }
    }

    @media (max-width: $mobile) {
      & img {
        width: toRem(92);
      }

      & p {
        font-size: toRem(10);

        & strong {
          font-size: toRem(12);
        }
      }
    }
  }
}
</style>
