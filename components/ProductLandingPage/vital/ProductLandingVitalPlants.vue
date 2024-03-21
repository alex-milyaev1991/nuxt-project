<script>
export default {
  name: 'ProductLandingVitalPlants',
}
</script>

<i18n> 
  {
    "en": {
      "title":"Chlorophyll",
      "subtitle": "it’s not just for plants",
      "chlorophyll": {
        "p1": "Accelerates wound healing",
        "p2": "Eliminates bad breath",
        "p3": "Promotes digestion",
        "p4": "Balances pH levels",
        "p5": "Detoxifies the body",
        "p6": "Helps restore red blood cells",
        "desc": "Chlorophyll may be famous for giving plants their green color, but its purposes do not end there. It's also packed with hundreds of nutrients essential for human health and has dozens of positive effects on overall well-being. For example chlorophyll helps calm the nerves, allowing you to remain focused during stressful times. It also helps oxygen travel through the bloodstream, giving you more energy and increased brain function."
      },
      "greens": {
        "title": "4 sources of chlorophyll",
        "p1": "<strong>Mulberry</strong> Fruit Extract",
        "p2": "<strong>Alfalfa</strong> Extract",
        "p3": "<strong>Spinach</strong> Leaf Powder",
        "p4": "<strong>Nettle</strong> Whole Herb Powder"
      }
    },   
    "es": {
      "title": "¿Por qué contiene minerales traza?",
      "subtitle": "no es solo para las plantas",
      "chlorophyll": {
        "p1": "Acelera la cicatrización",
        "p2": "Elimina el mal aliento",
        "p3": "Promueve la digestión",
        "p4": "Equilibra el pH",
        "p5": "Desintoxica el cuerpo",
        "p6": "Restauración de glóbulos rojos.",
        "desc": "La clorofila es famosa por darle a las plantas su color verde, pero sus propiedades no terminan ahí. Está llena de cientos de nutrientes esenciales para la salud humana y tiene docenas de efectos positivos sobre el bienestar en general. Por ejemplo, la clorofila calma los nervios, menteniéndote enfocado en momentos de estrés. Además, ayuda a que el oxígeno viaje por el torrente sanguíneo brindando más energía y mejorando la función cerebral."
      },
      "greens": {
        "title": "4 fuentes de clorofila",
        "p1": "<strong>Morera</strong> Extracto de la Fruta",
        "p2": "<strong>Alfalfa</strong> Extracto",
        "p3": "<strong>Espinaca</strong> Hoja en Polvo",
        "p4": "<strong>Ortiga</strong> Hierba Entera en Polvo"
      }
    }
  } 
</i18n>

<template>
  <section class="chlorophyll">
    <product-landing-container>
      <div class="chlorophyll__content">
        <div class="chlorophyll__header">
          <product-landing-animation :delay="200">
            <h2>{{ $t('title') }}</h2>
          </product-landing-animation>
          <product-landing-animation :delay="400">
            <p>{{ $t('subtitle') }}</p>
          </product-landing-animation>
        </div>
        <div class="chlorophyll__sp">
          <product-landing-animation :delay="600">
            <div class="chlorophyll__body">
              <div class="phyll">
                <div class="phyll__wrap">
                  <div class="phyll__image">
                    <img
                      :src="
                        require('~/assets/ProductLandingPages/images/vital/chlorophyll.png')
                      "
                      alt="chlorophyll"
                    />
                  </div>
                  <ul class="phyll__list">
                    <li v-html="$t('chlorophyll.p1')" />
                    <li v-html="$t('chlorophyll.p2')" />
                    <li v-html="$t('chlorophyll.p3')" />
                    <li v-html="$t('chlorophyll.p4')" />
                    <li v-html="$t('chlorophyll.p5')" />
                    <li v-html="$t('chlorophyll.p6')" />
                  </ul>
                </div>
                <p class="phyll__text">
                  {{ $t('chlorophyll.desc') }}
                </p>
              </div>
              <div class="greens">
                <div class="greens__block">
                  <p class="greens__title">{{ $t('title') }}</p>
                  <ul class="greens__list">
                    <li v-html="$t('greens.p1')" />
                    <li v-html="$t('greens.p2')" />
                    <li v-html="$t('greens.p3')" />
                    <li v-html="$t('greens.p4')" />
                  </ul>
                </div>
                <div class="greens__img">
                  <img
                    :src="
                      require('~/assets/ProductLandingPages/images/vital/greens.png')
                    "
                    alt="Greens"
                  />
                </div>
              </div>
            </div>
          </product-landing-animation>
        </div>
      </div>
    </product-landing-container>
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.chlorophyll {
  overflow-x: hidden;
  padding-top: toRem(74);

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media (max-width: $mobile) {
    overflow: hidden;
    padding-bottom: toRem(160);
  }

  &__content {
    @include flexColumn();
    row-gap: toRem(90);

    @media (max-width: $mobileSmall) {
      row-gap: toRem(60);
    }
  }

  &__header {
    position: relative;
    @include flexColumn();
    row-gap: toRem(5);
    text-align: center;
    z-index: $zIndex_1;

    & p {
      @include adaptiveValue('font-size', 36, 16, 991, 375, 1);
      font-weight: 300;
    }
  }

  &__sp {
    min-height: toRem(640);

    @media (max-width: $mobile) {
      min-height: auto;
    }
  }

  &__body {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    height: 100%;

    @media (max-width: $mobile) {
      grid-template-columns: 1fr;
      row-gap: toRem(38);
      max-width: toRem(472);
      margin: 0 auto;
    }
  }
}

.phyll {
  @include flexColumn();
  row-gap: toRem(36);
  padding-right: toRem(40);
  margin-right: toRem(40);
  border-right: toRem(1) solid $mainColor;

  @media (max-width: $tablet) {
    padding-right: toRem(20);
    margin-right: toRem(20);
  }

  @media (max-width: $mobile) {
    padding-right: 0;
    margin-right: 0;
    border-right: none;
    row-gap: toRem(21);
  }

  &__wrap {
    position: relative;
  }

  &__image {
    position: absolute;
    top: -23%;

    @include adaptiveValue('left', -70, -384, 1444, 767, 1);

    @media (max-width: $mobile) {
      @include adaptiveValue('left', -50, -180, 500, 375, 1);

      & img {
        width: toRem(449);
      }
    }
  }

  &__list {
    position: relative;
    @include flexColumn(flex-end);
    row-gap: toRem(36);
    text-align: right;
    // padding-left: toRem(350);
    z-index: $zIndex_1;

    @media (max-width: $mobile) {
      row-gap: toRem(21);
    }

    & li {
      font-weight: 500;
      font-size: toRem(20);

      &:nth-child(1) {
        padding-right: toRem(12);
      }
      &:nth-child(2) {
        padding-right: toRem(6);
      }
      &:nth-child(6) {
        padding-right: toRem(12);
      }
      &:nth-child(5) {
        padding-right: toRem(6);
      }

      @media (max-width: $mobile) {
        font-size: toRem(14);
      }
    }
  }

  &__text {
    max-width: toRem(512);
    margin-left: auto;

    @media (max-width: $mobile) {
      font-size: toRem(12);
    }
  }
}

.greens {
  position: relative;

  &__block {
    @include flexColumn();
    row-gap: toRem(46);
    max-width: toRem(206);
    position: relative;
    z-index: $zIndex_1;

    @media (max-width: $mobile) {
      row-gap: toRem(34);
    }
  }

  &__title {
    font-size: toRem(30);
    font-weight: 600;
    line-height: 150%; /* 45/30 */

    @media (max-width: $mobile) {
      font-size: toRem(20);
    }
  }

  &__list {
    @include flexColumn();
    row-gap: toRem(35);

    @media (max-width: $mobile) {
      row-gap: toRem(57);
    }

    & li {
      line-height: 150%;
    }

    @media (max-width: $mobile) {
      & li {
        font-size: toRem(12);
      }
    }
  }

  &__img {
    position: absolute;
    top: -20%;

    @include adaptiveValue('right', -100, -224, 1444, 991, 1);

    @media (max-width: $tablet) {
      top: -15%;

      & img {
        width: toRem(558);
      }
    }

    @media (max-width: $mobile) {
      top: 0;
      @include adaptiveValue('right', -150, -200, 500, 375, 1);

      & img {
        width: toRem(472);
      }
    }
  }
}
</style>

<style lang="scss">
@import 'assets/ProductLandingPages/styles/variables.scss';

.greens {
  &__list {
    & strong {
      display: block;
      font-size: toRem(24);

      @media (max-width: $mobile) {
        font-size: toRem(16);
      }
    }
  }
}
</style>
