<script>
import Card_1 from '@/assets/ProductLandingPages/images/cinnamate/recipe1.png'
import Card_2 from '@/assets/ProductLandingPages/images/cinnamate/recipe2.png'
import Card_3 from '@/assets/ProductLandingPages/images/cinnamate/recipe3.png'

export default {
  name: 'ProductLandingCinnamateMixing',
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
          ],
          directions: 'card1.directions',
          variation: 'card1.variation',
        },
        {
          img: Card_2,
          title: 'card2.title',
          subtitle: 'card2.subtitle',
          ingredients: [
            'card2.ingridient1',
            'card2.ingridient2',
            'card2.ingridient3',
            'card2.ingridient4',
            'card2.ingridient5',
          ],
          directions: 'card2.directions',
        },
        {
          img: Card_3,
          title: 'card3.title',
          subtitle: 'card3.subtitle',
          ingredients: [
            'card3.ingridient1',
            'card3.ingridient2',
            'card3.ingridient3',
            'card3.ingridient4',
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
      "title":"Mixing up your Cinna<b>Mate</b>",
      "hed": {
        "title": "General use directions:",
        "subtitle": {
          "p1": "May be taken hot or cold. Most prefer it hot in 8-10 oz of water. If drinking cold, we recommend 16-18 oz of water for best taste. Use once or twice daily for best results.",
          "p2": "<strong>Tip</strong>: If drinking hot, you can add a splash of cream or your preferred milk/milk alternative for a richer taste."
        }
      },
      "ingredients": "Ingredients:",
      "directions": "Directions:",
      "variation": "Variation",
      "card1": {
        "title": "CinnaMate latte",
        "subtitle": "The perfect drink for those mornings and early afternoons when you need a sweet, satisfying pick-me-up, that helps curb cravings and doesn’t come with an energy crash later. ",
        "ingridient1": "1 packet Cinna<b>Mate</b>",
        "ingridient2": "4-6 oz almond milk",
        "ingridient3": "4 oz water",
        "directions": "Heat the water and add in the packet of Cinna<b>Mate</b>. Stir well. In a separate cup, heat the almond milk and froth. (Frothing is optional.) Pour the frothed milk on top and enjoy!"
      },
      "card2": {
        "title": "CinnaMate - sweet and fresh",
        "subtitle": "A refreshing, unique way to enjoy CinnaMate on hot days. This recipe is also a kid-favorite and a great way to give them a nutritional boost!",
        "ingridient1": "1 packet CinnaMate",
        "ingridient2": "1/2 c red seedless grapes",
        "ingridient3": "1/2 c green seedless grapes",
        "ingridient4": "6 oz water",
        "ingridient5": "4-6 large ice cubes",
        "directions": "Add the grapes and 2 oz of water to blender and blend well. Then add the ice, 4 oz of water and the packet of Cinna<b>Mate</b>. Blend until you achieve a slushie-like consistency."
      },
      "card3": {
        "title": "CinnaMachata",
        "subtitle": "A Solle twist on the classic drink, horchata.",
        "ingridient1": "1 packet CinnaMate",
        "ingridient2": "2-4 oz of your creamer of choice",
        "ingridient3": "16 oz water",
        "ingridient4": "Ice to preference",
        "directions": "Pour the Cinna<b>Mate</b> packet into the water and stir well. In a separate cup, froth the creamer. Add ice to the mixture and stir. Pour the frothed creamer on top and enjoy!"
      }
    },   
    "es": {
      "title": "Mezclando el Cinna<b>Mate</b>",
      "hed": {
        "title": "Instrucciones de uso general:",
        "subtitle": {
          "p1": "Puede beberse caliente o frío. De preferencia caliente en 8-10 oz. de agua, y si es frío, en 16-18 oz. de agua para un mejor sabor. Consumirlo una o dos veces al día para mejores resultados. ",
          "p2": "<b>Consejo</b>: Si se bebe caliente, se le puede agregar un toque de crema, leche, o leche alternativa de tu preferencia para obtener un sabor más fuerte."
        }
      },
      "ingredients": "Ingredientes:",
      "directions": "Instrucciones:",
      "variation": "Variación",
      "card1": {
        "title": "Cinna<b>Mate</b> latte",
        "subtitle": "Bebida perfecta para esas mañanas y primeras horas de la tarde cuando necesitas algo dulce y satisfactorio que te ayude a controlar los antojos sin  ocasionarte un bajón de energía más tarde. ",
        "ingridient1": "1  Cinna<b>Mate</b>",
        "ingridient2": "4-6 oz. de leche de almendras",
        "ingridient3": "4 oz de agua",
        "directions": "Calentar el agua y mezclarla bien con el Cinna<b>Mate</b>. Por separado, calentar la leche de almendras, espumarla (opcional), y luego servirla sobre el Cinna<b>Mate</b>, y ¡a disfrutarlo!"
      },
      "card2": {
        "title": "Cinna<b>Mate</b> - dulce y fresco",
        "subtitle": "Una forma refrescante y única de disfrutar el Cinna<b>Mate</b> en días calurosos. Receta favorita de los niños, y excelente para darles fuerza nutricional!",
        "ingridient1": "1  Cinna<b>Mate</b>",
        "ingridient2": "1/2 tz. de uvas rojas sin semillas ",
        "ingridient3": "1/2 tz. de uvas verdes sin semillas ",
        "ingridient4": "6 oz. de agua",
        "ingridient5": "4-6 cubos de hielo",
        "directions": "Licuar bien todas las uvas en 2 oz. de agua. Agregar el hielo, las 4 oz. restantes de agua y el Cinna<b>Mate</b>, y mezclar hasta obtener una consistencia similar a un granizado."
      },
      "card3": {
        "title": "CinnaMachata",
        "subtitle": "Versión Solle de la cásica horchata.",
        "ingridient1": "1  Cinna<b>Mate</b>",
        "ingridient2": "2-4 oz. de la crema de tu elección",
        "ingridient3": "16 oz. de agua",
        "ingridient4": "Hielo al gusto",
        "directions": "Mezclar bien el Cinna<b>Mate</b> en el agua. Por separado,  espumar la crema. Agregar el hielo y revolver, verter la crema encima y ¡a disfrutarlo!"
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
                    data-plyr-embed-id="xq-okpV7EO4"
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
                      <p v-html="$t('hed.subtitle.p1')" />
                    </product-landing-animation>
                    <product-landing-animation :delay="200">
                      <p v-html="$t('hed.subtitle.p2')" />
                    </product-landing-animation>
                  </div>
                </div>
                <div class="directions__list">
                  <div
                    v-for="(card, cardIndex) in cards"
                    :key="cardIndex"
                    class="card"
                  >
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
                          <p class="card__title" v-html="$t(card.title)"></p>
                        </product-landing-animation>
                        <product-landing-animation :delay="200">
                          <p
                            class="card__subtitle"
                            v-html="$t(card.subtitle)"
                          />
                        </product-landing-animation>
                        <div class="card__block">
                          <product-landing-animation :delay="300"
                            ><strong>{{
                              $t('ingredients')
                            }}</strong></product-landing-animation
                          >
                          <product-landing-animation :delay="400">
                            <ul>
                              <li
                                v-for="(item, index) in card.ingredients"
                                :key="index"
                                v-html="$t(item)"
                              />
                            </ul>
                          </product-landing-animation>
                        </div>
                        <div v-if="card.toppings" class="card__block">
                          <product-landing-animation :delay="500">
                            <p v-html="$t(card.toppings)" />
                          </product-landing-animation>
                        </div>
                        <div class="card__block">
                          <product-landing-animation :delay="500">
                            <strong>{{ $t('directions') }}</strong>
                          </product-landing-animation>
                          <product-landing-animation :delay="600">
                            <p v-html="$t(card.directions)"></p>
                          </product-landing-animation>
                        </div>
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
            require('~/assets/ProductLandingPages/images/royal/mixing-wave.png')
          "
          alt="wave"
        />
        <div></div>
      </div>
    </div>
    <div class="video__wave">
      <img
        :src="
          require('~/assets/ProductLandingPages/images/royal/mixing-wave-bottom.png')
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
