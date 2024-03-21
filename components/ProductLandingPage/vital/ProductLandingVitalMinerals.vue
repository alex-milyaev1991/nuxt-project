<script>
export default {
  name: 'ProductLandingVitalMinerals',
}
</script>

<i18n> 
  {
    "en": {
      "title":"Why include trace minerals?",
      "subtitle": {
        "p1": " Trace minerals are the definition of small but mighty. <strong> Almost all bodily process require trace minerals in order to function, yet we cannot produce them on our own. </strong> If the body does not get enough of these critical nutrients, there is an increased risk of health issues including high blood pressure, pain, depression, poor digestion and more.",
        "p2": "So where do these minerals come from? The soil that our food is grown in! The problem with this is that most soil is not what it used to be, leading to significant mineral depletion in our food.",
        "p3": "<span class='!isNotTablet'>To the right you’ll find an example of this, </span> <span class='isTablet'>We've provided an example of this,</span> courtesy of a study conducted by the Kushi Institute that compares the mineral concentration in broccoli in 1975 and now.",
        "p4": "To help combat this, we included four herbs rich in trace minerals in the SolleVital formula - burdock, avena sativa, dandelion and nettle."
      },
      "broccoli": {
        "desc": "<strong>Broccoli</strong> has significantly fewer minerals, today, than it did 45 years ago.",
        "p1": "<span>28%</span> less zinc",
        "p2": "<span>18%</span> less iron",
        "p3": "<span>14%</span> less potassium",
        "p4": "<span>30%</span> less magnesium"
      }
    },   
    "es": {
      "title": "¿Por qué contiene minerales traza?",
      "subtitle": {
        "p1": "Los minerales traza se definene como pequeños pero poderosos. <strong>Casi todos los procesos corporales requiren trazas minerales para funcionar pero no podemos producirlos por nuestra cuenta.</strong> Si nuestro cuerpo no recibe suficiente de estos nutrientes críticos, existe un mayor riesgo de tener problemas de salud que incluyen presión arterial alta, dolor, depresión, mala digestión y más.",
        "p2": "Entonces, ¿de dónde vienen estos minerales? ¡De la tierra en la que se cultivan nuestros alimentos! El problema hoy en día es que la mayor parte de la tierra ya no es como era antes, lo cual lleva a una disminución significativa de minerales en nuestros alimentos.",
        "p3": "A la derecha encontrarás un ejemplo de esto como cortesía de un estudio realizado por el Instituto Kushi que comparó la concentración de minerales en el brócoli en 1975 y ahora.",
        "p4": "Para ayudar a combatir esto, incluimos cuatro hierbas ricas en oligoelementos en la fórmula del SolleVital: bardana, avena sativa, diente de león y ortiga."
      },
      "broccoli": {
        "desc": "El <strong>Brocoli</strong> tiene significativamente menos minerales hoy que hace 45 años atrás.  ",
        "p1": "<span>28%</span> menos zinc",
        "p2": "<span>18%</span> menos hierro",
        "p3": "<span>14%</span> menos potasio",
        "p4": "<span>30%</span> menos magnesio"
      }
    }
  } 
</i18n>

<template>
  <section class="minerals">
    <div class="minerals__image">
      <img
        :src="
          require('~/assets/ProductLandingPages/images/vital/minerals-wave.png')
        "
        alt="wave"
      />
    </div>
    <div class="minerals__wrapper">
      <product-landing-container>
        <div class="minerals__content">
          <div class="minerals__header">
            <product-landing-animation :delay="200">
              <h2>{{ $t('title') }}</h2>
            </product-landing-animation>
          </div>
          <div class="minerals__body">
            <div class="minerals__info">
              <product-landing-animation :delay="400">
                <p v-html="$t('subtitle.p1')" />
              </product-landing-animation>
              <product-landing-animation :delay="600">
                <p v-html="$t('subtitle.p2')" />
              </product-landing-animation>
              <product-landing-animation :delay="800">
                <p v-html="$t('subtitle.p3')" />
                <p></p>
              </product-landing-animation>
              <product-landing-animation :delay="1000">
                <p v-html="$t('subtitle.p4')" />
              </product-landing-animation>
            </div>
            <product-landing-animation variant="opacity" :delay="600">
              <div class="block">
                <p class="block__desc" v-html="$t('broccoli.desc')" />
                <ul class="block__list">
                  <li v-html="$t('broccoli.p1')" />
                  <li v-html="$t('broccoli.p2')" />
                  <li v-html="$t('broccoli.p3')" />
                  <li v-html="$t('broccoli.p4')" />
                </ul>
                <div class="block__img">
                  <img
                    :src="
                      require('~/assets/ProductLandingPages/images/vital/broccoli.png')
                    "
                    alt="Broccoli"
                  />
                </div>
              </div>
            </product-landing-animation>
          </div>
        </div>
      </product-landing-container>
    </div>
    <div class="minerals__wave">
      <img
        :src="
          require('~/assets/ProductLandingPages/images/vital/minerals-wave-bottom.png')
        "
        alt="wave"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.minerals {
  position: relative;
  overflow: hidden;

  &__image {
    & img {
      width: 100%;
      aspect-ratio: 1518 / 103;
      object-fit: cover;
      object-position: top center;
    }
  }

  &__wave {
    & img {
      width: 100%;
      aspect-ratio: 1124 / 124;
      object-fit: cover;
      object-position: bottom center;
    }
  }

  &__wrapper {
    position: relative;
    background-color: #eceade;
  }

  &__content {
    padding-top: toRem(58);
  }

  &__header {
    text-align: center;
  }

  &__body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: toRem(24);
    align-items: center;
    justify-content: space-between;
    margin-top: toRem(58);

    @media (max-width: $tablet) {
      grid-template-columns: 1fr;
      row-gap: toRem(38);
      margin-top: toRem(21);
    }
  }

  &__info {
    @include flexColumn();
    row-gap: toRem(20);

    @media (max-width: $mobile) {
      text-align: center;
      font-size: toRem(12);
    }
  }
}

.block {
  @include flexColumn();
  position: relative;
  row-gap: toRem(45);
  padding: toRem(30) toRem(32) toRem(62);
  background-color: $white;
  border-radius: toRem(13);
  background: #fafafa;
  max-width: toRem(515);
  margin-left: toRem(45);

  @media (max-width: $pc) {
    row-gap: toRem(24);
  }

  @media (max-width: $tablet) {
    margin: auto;
  }

  @media (max-width: $mobile) {
    padding: toRem(30) toRem(32) toRem(26);
  }

  &__desc {
    font-size: toRem(20);
    line-height: 150%; /* 30/20 */

    @media (max-width: $mobile) {
      font-size: toRem(14);
    }
  }

  &__list {
    @include flexColumn();
    row-gap: toRem(37);

    & li {
      font-size: toRem(24);
      font-weight: 600;

      & span {
        font-size: toRem(30);
      }
    }

    @media (max-width: $pc) {
      row-gap: toRem(29);

      & li {
        font-size: toRem(16);
        font-weight: 600;

        & span {
          font-size: toRem(24);
        }
      }
    }
  }

  &__img {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(30%, 10%);

    @media (max-width: $mobileSmall) {
      transform: translate(45%, 10%);
    }

    & img {
      @media (max-width: $pc) {
        width: toRem(309);
      }

      @media (max-width: $tablet) {
        width: toRem(274);
      }
    }
  }
}
</style>
