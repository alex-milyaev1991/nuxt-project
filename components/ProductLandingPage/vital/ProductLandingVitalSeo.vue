<script>
export default {
  name: 'ProductLandingVitalSeo',
}
</script>

<i18n> 
  {
     "en": {
       "text":"Solle<b>Vital</b> is the first of Solle’s four signature drinks, and for good reason is at the center of our philosophy of daily nourishment to both body and mind. Its unique blend of concentrated adaptogens, key plant minerals, and select chlorophylls provide therapeutic balance and enable greater results for all nutrition programs.",
       "founder": "Founder/CEO"
     },   
     "es": {
       "text": "Solle<b>Vital</b> es la primera de las cuatro bebidas exclusivas Solle, y por una buena razón es el centro de nuestra filosofía de nutrición diaria para el cuerpo y la mente. Su combinación única de adaptógenos concentrados, minerales clave provenientes de plantas y clorofilas seleccionadas, proporciona un equilibrio terapéutico y brinda mejores resultados para todos los programas de nutrición",
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
          :src="require('~/assets/ProductLandingPages/images/vital/border.png')"
          alt="Border"
        />
        <div class="seo__dots">
          <img
            :src="require('~/assets/ProductLandingPages/images/vital/dots.png')"
            alt="Dots"
          />
        </div>
        <div class="seo__product">
          <img
            :src="
              require('~/assets/ProductLandingPages/images/vital/product.png')
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
    padding-top: 0;
  }

  &__wrap {
    position: relative;
    max-width: toRem(943);
    width: 100%;
    text-align: center;
    margin-left: auto;

    @include adaptiveValue('height', 526, 496, 1300, 991, 1);

    @media (max-width: $tablet) {
      @include flexColumn(center, center);
      height: auto;
      margin: auto;
    }
  }

  &__product {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-65%, -50%);

    & img {
      @include adaptiveValue('width', 510, 490, 1300, 991, 1);
    }

    @media (max-width: $tablet) {
      position: relative;
      top: auto;
      transform: translate(0);
      padding-right: 3%;

      & img {
        width: toRem(300);
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

    @media (max-width: $tablet) {
      display: none;
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
      display: none;
    }
  }

  &__text {
    font-size: toRem(18);
    line-height: 150%; /* 33/22 */

    @media (max-width: $mobile) {
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
