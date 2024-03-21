<script>
import Card_1 from '@/assets/ProductLandingPages/images/vital/recipe1.png'
import Card_2 from '@/assets/ProductLandingPages/images/vital/recipe2.png'
import Card_3 from '@/assets/ProductLandingPages/images/vital/recipe3.png'

export default {
  name: 'ProductLandingVitalMixing',
  data() {
    return {
      cards: [
        {
          img: Card_1,
          title: 'card1.title',
          subtitle: 'card1.subtitle',
          ingredients: [
            'card1.ingridient1',
            'card1.ingridient2',
            'card1.ingridient3',
            'card1.ingridient4',
          ],
          directions: 'card1.directions',
          variation: 'card1.variation',
        },
        {
          img: Card_3,
          title: 'card2.title',
          subtitle: 'card2.subtitle',
          ingredients: [
            'card2.ingridient1',
            'card2.ingridient2',
            'card2.ingridient3',
            'card2.ingridient4',
          ],
          directions: 'card2.directions',
        },
        {
          img: Card_2,
          title: 'card3.title',
          subtitle: 'card3.subtitle',
          ingredients: [
            'card3.ingridient1',
            'card3.ingridient2',
            'card3.ingridient3',
            'card3.ingridient4',
            'card3.ingridient5',
            'card3.ingridient6',
            'card3.ingridient7',
          ],
          directions: 'card3.directions',
        },
      ],
    }
  },
}
</script>

<i18n> 
 {
    "en": {
      "title":"Mixing up your Solle<b>Vital</b>",
      "hed": {
        "title": "General use directions:",
        "subtitle": "Add the contents of one packet to 16-18 oz. of cool water. Use once daily, usually in the morning or afternoon, for best results. Solle<b>Vital</b> tastes the best if served ice cold!"
      },
      "ingredients": "Ingredients:",
      "directions": "Directions:",
      "variation": "Variation",
      "card1": {
        "title": "Hot citrus sweet tea",
        "subtitle": "A satisfying hot drink with a citrus kick. Combines both Solle<b>Vital</b> and Solle<b>Excell</b>!",
        "ingridient1": "1 packet Solle<b>Vital</b>",
        "ingridient2": "1 packet Solle<b>Excell</b>",
        "ingridient3": "Juice of half a large lemon",
        "ingridient4": "12-16 oz hot water",
        "directions": "Heat water to a safe temperature and pour over powder. Squeeze lemon and stir well.",
        "variation": "If you’re not feeling a hot drink, this blend is also delicious mixed cold with ice! It’s wonderful for stamina, hydration, and improved sinus and circulatory clarity on active days."
      },
      "card2": {
        "title": "Vital refresher",
        "subtitle": "A Solle twist on a mojito, this refreshing drink will both quench your thirst & leave you energized!",
        "ingridient1": "1 pkt Solle<b>Vital</b>",
        "ingridient2": "Juice of half a fresh lime (or lemon)",
        "ingridient3": "1 mint leaf",
        "ingridient4": "Ice",
        "directions": "Stir until mixed well. Make sure to add plenty of ice. Enjoy."
      },
      "card3": {
        "title": "Green banana berry smoothie",
        "subtitle": "A delicious, nutrition-packed green smoothie with the power of adaptogens. ",
        "ingridient1": "1 pkt Solle<b>Vital</b>",
        "ingridient2": "1 c spinach",
        "ingridient3": "1/2 c Greek yogurt (vanilla, plain, or honey is best)",
        "ingridient4": "1 handful mixed frozen berries",
        "ingridient5": "1/2 banana frozen",
        "ingridient6": "6 oz almond milk (or your milk of choice",
        "ingridient7": "2-4 ice cubes ",
        "directions": "Place all ingredients in a blender. Blend until creamy and frothy, about 30 seconds. Serve immediately."
      }
    },   
    "es": {
      "title": "Mezclando el Solle<b>Vital</b>",
      "hed": {
        "title": "Instrucciones de uso general:",
        "subtitle": "Agregar el contenido de un sobre en 16-20 oz. de agua una vez al día por la mañana o por la tarde para obtener mejores resultados. El Solle<b>Vital</b> sabe mejor si se toma frío."
      },
      "ingredients": "Ingredientes:",
      "directions": "Instrucciones:",
      "variation": "Variación",
      "card1": {
        "title": "Té cítrico dulce",
        "subtitle": "Bebida caliente con un toque cítrico. Combina el Solle<b>Vital</b> y el Solle<b>Excell</b>!",
        "ingridient1": "1 Solle<b>Vital</b>",
        "ingridient2": "1 Solle<b>Excell</b>",
        "ingridient3": "Jugo de medio limón",
        "ingridient4": "12-16 oz. de agua caliente",
        "directions": "Calentar agua a una temperatura segura y verterla sobre el polvo. Agregar jugo de limón y mézclarlo bien",
        "variation": "Si no deseas tomarlo caliente, ¡también es delicioso frío y con hielo!. Es excelente para la resistencia, la hidratación, y para mejorar la claridad circulatoria y nasal en días activos."
      },
      "card2": {
        "title": "Vital refrescante",
        "subtitle": "¡Una mojito versión Solle. Esta refrescante bebida saciará tu sed y te dejará con energía!",
        "ingridient1": "1 Solle<b>Vital</b>",
        "ingridient2": "Jugo de medio limón fresca (o lima )",
        "ingridient3": "1 hoja de menta",
        "ingridient4": "Hielo",
        "directions": "Mezclarlo bien y agregarle mucho hielo para disfrutarlo"
      },
      "card3": {
        "title": "Batido verde de banana y bayas",
        "subtitle": "Batido verde delicioso, lleno de nutrientes y con el poder de los adaptógenos.",
        "ingridient1": "1 Solle<b>Vital</b>",
        "ingridient2": "1 tz de espinaca",
        "ingridient3": "1/2 tz de yogurt griego (vainilla, natural o miel es mejor)",
        "ingridient4": "1 puñado de bayas congeladas",
        "ingridient5": "1/2 banana congelada",
        "ingridient6": "6 oz. de leche de almedras (o leche de tu preferencia)",
        "ingridient7": "2-4 cubos de hielo",
        "directions": "Licuar todos los ingredientes juntos por aproximadamente 30 segundos hasta obtener una consistencia cremosa y espumosa. Servirlo inmediatamente."
      }
    }
  } 
</i18n>

<template>
  <section class="video">
    <div class="video__wrap">
      <product-landing-container>
        <div class="video__content">
          <div class="video__header">
            <h1 v-html="$t('title')" />
            <div>
              <div class="player">
                <vue-plyr>
                  <div
                    data-plyr-provider="youtube"
                    data-plyr-embed-id="ptwi3cNsm58"
                  />
                </vue-plyr>
              </div>
              <div class="directions">
                <div class="directions__header">
                  <product-landing-animation :delay="100">
                    <p class="directions__title">{{ $t('hed.title') }}</p>
                  </product-landing-animation>
                  <div class="directions__subtitle">
                    <product-landing-animation :delay="200">
                      <p v-html="$t('hed.subtitle')" />
                    </product-landing-animation>
                  </div>
                </div>
                <div class="directions__list">
                  <div v-for="(card, indx) in cards" :key="indx" class="card">
                    <div class="card__wrapper">
                      <div class="card__image">
                        <product-landing-animation
                          variant="opacity"
                          :delay="200"
                        >
                          <img :src="card.img" :alt="card.title" />
                        </product-landing-animation>
                      </div>
                      <div class="card__content">
                        <product-landing-animation :delay="100">
                          <p class="card__title">{{ $t(card.title) }}</p>
                        </product-landing-animation>
                        <product-landing-animation :delay="200">
                          <p
                            class="card__subtitle"
                            v-html="$t(card.subtitle)"
                          />
                        </product-landing-animation>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </product-landing-container>
      <div class="video__bg">
        <img
          :src="
            require('~/assets/ProductLandingPages/images/vital/mixing-wave.png')
          "
          alt="wave"
        />
        <div></div>
      </div>
    </div>
    <div class="video__wave">
      <img
        :src="
          require('~/assets/ProductLandingPages/images/vital/mixing-wave-bottom.png')
        "
        alt="wave"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';
.video {
  overflow: hidden;
  &__header {
    text-align: center;
  }

  &__wrap {
    position: relative;

    min-height: 1000px;
  }

  &__content {
    position: relative;
    z-index: $zIndex_1;
  }

  &__bg {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 85%;
    width: 100%;

    & > img {
      width: 100%;
      aspect-ratio: 1518 / 103;
    }

    & > div {
      background-color: #eceade;
      width: 100%;
      height: 100%;
    }

    @media (max-width: $mobileSmall) {
      height: 93%;
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
}

.player {
  position: relative;
  max-width: toRem(1034);
  margin: 0 auto;
  border-radius: toRem(8);
  overflow: hidden;
  margin-top: toRem(80);
  aspect-ratio: 1034 / 539;

  @media (max-width: $mobile) {
    margin-top: toRem(30);
  }

  @media (max-width: $mobileSmall) {
    aspect-ratio: 359 / 187;
  }
}

.directions {
  margin: toRem(25) auto 0;
  max-width: toRem(1007);
  width: 100%;

  &__header {
    @include flexColumn();
    row-gap: toRem(8);
    text-align: left;
    max-width: toRem(887);

    @media (max-width: $mobile) {
      row-gap: toRem(4);
    }
  }

  &__title {
    font-size: toRem(24);
    font-weight: 500;

    @media (max-width: $mobile) {
      font-size: toRem(12);
    }
  }

  &__subtitle {
    @include flexColumn();
    row-gap: toRem(8);

    @media (max-width: $mobile) {
      & p {
        font-size: toRem(10);
        line-height: 150%;
      }
    }
  }

  &__list {
    @include flexColumn();
    row-gap: toRem(124);
    width: 100%;
    margin-top: toRem(80);

    @media (max-width: $tablet) {
      row-gap: toRem(66);
      margin-top: toRem(63);
    }

    @media (max-width: $mobile) {
      row-gap: toRem(36);
      margin-top: toRem(33);
    }
  }
}

.card {
  width: 100%;
  position: relative;
  padding-right: toRem(112);
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: $pc) {
    padding-right: toRem(80);
  }

  @media (max-width: $mobile) {
    padding-right: toRem(40);
  }

  &__wrapper {
    position: relative;
    border-radius: toRem(20);
    background-color: #f6f5ef;
    padding: toRem(50) toRem(80);
    box-shadow: 0px 3px 4px 2px #bcbab185;
    width: 100%;
    text-align: left;
    max-width: toRem(853);

    @media (max-width: $pc) {
      padding: toRem(38) toRem(32);
    }

    @media (max-width: $mobile) {
      padding: toRem(28) toRem(22);
    }
  }

  &__content {
    position: relative;
    z-index: $zIndex_1;
    @include flexColumn();
    row-gap: toRem(20);

    & p {
      line-height: 150%;
    }

    @media (max-width: $mobile) {
      row-gap: toRem(10);
    }
  }

  &__title {
    font-size: toRem(36);
    max-width: toRem(420);
    line-height: 125%; /* 45/36 */
    font-weight: 600;

    @media (max-width: $mobile) {
      font-size: toRem(16);
      max-width: toRem(200);
    }

    @media (max-width: $mobileSmall) {
      max-width: toRem(154);
    }
  }

  &__subtitle {
    max-width: toRem(420);

    @media (max-width: $mobile) {
      font-size: toRem(10);
      max-width: toRem(200);
    }
    @media (max-width: $mobileSmall) {
      max-width: toRem(154);
    }
  }

  &__block {
    max-width: toRem(476);

    @media (max-width: $mobile) {
      font-size: toRem(10);
    }
  }

  &__image {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(30%, -20%);
    z-index: $zIndex_1;

    @media (max-width: $pc) {
      & img {
        width: toRem(384);
      }
    }

    @media (max-width: $tablet) {
      & img {
        width: toRem(284);
      }
    }

    @media (max-width: $mobile) {
      & img {
        width: toRem(184);
      }
    }

    @media (max-width: em(365)) {
      & img {
        width: toRem(124);
      }
    }
  }
}
</style>

<style lang="scss">
.plyr__video-embed iframe,
.plyr__poster {
  transform: translateY(-5px);
}
</style>
