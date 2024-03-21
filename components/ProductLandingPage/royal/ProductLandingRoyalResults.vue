<script>
import Hydration from '@/assets/ProductLandingPages/images/royal/hydration.png'
import Exercise from '@/assets/ProductLandingPages/images/royal/exercise.png'
import Sleep from '@/assets/ProductLandingPages/images/royal/sleep.png'
import Alcohol from '@/assets/ProductLandingPages/images/royal/alcohol.png'
import Diet from '@/assets/ProductLandingPages/images/royal/diet.png'
import Sun from '@/assets/ProductLandingPages/images/royal/sun.png'

export default {
  name: 'ProductLandingRoyalResults',
  data() {
    return {
      cards: [
        {
          title: 'card1',
          img: Hydration,
        },
        {
          title: 'card2',
          img: Exercise,
        },
        {
          title: 'card3',
          img: Sleep,
        },
        {
          title: 'card4',
          img: Alcohol,
        },
        {
          title: 'card5',
          img: Diet,
        },
        {
          title: 'card6',
          img: Sun,
        },
      ],
    }
  },
}
</script>

<i18n> 
  {
    "en": {
      "title": "Making the most of your results",
      "p1": "While an eventual decrease in collagen production is inevitable, that doesn’t mean that nothing you do will make a difference. In fact, it’s quite the opposite. Taking Solle<b>Royal</b> regularly is a great place to start!",
      "p2": "That being said, supplements are not magic; they’re science. And science shows that combining therapeutic nutrition WITH healthy lifestyle habits is the best way to amplify your results. In addition to taking Solle<b>Royal</b>, we recommend integrating as many of the following behaviors into your wellness routine.",
      "card1": "Stay hydrated",
      "card2": "Regular exercise (esp. strength training)",
      "card3": "Get 7+ hours of sleep",
      "card4": "Avoid excessive smoking/alcohol",
      "card5": "Eat varied, whole foods",
      "card6": "Avoid excessive sun exposure"
    },   
    "es": {
      "title": "Aprovecha al máximo tus resultados",
      "p1": "Aunque la eventual disminución de colágeno sea inevitable, eso no significa que lo que hagas no marcará una diferencia, de hecho es todo lo contrario. ¡Tomar Solle<b>Royal</b> regularmente es un excelente comienzo! ",
      "p2": "Dicho esto, los suplementos no son mágicos. Son ciencia; y la ciencia muestra que la combinación de una nutrición terapéutica CON hábitos saludables de vida es la mejor forma de maximizar tus resultados. Además de tomar Solle<b>Royal</b>, te recomendamos integrar lo más posible los siguientes consejos en tu rutina de salud:",
      "card1": "Mantenerse Hidratado",
      "card2": "Ejercicio regular (esp. Entrenamiento de fuerza)",
      "card3": "Dormir 7 horas o más ",
      "card4": "Evitar fumar/alcohol en exceso",
      "card5": "Consumir variedad de alimentos integrales ",
      "card6": "Evitar exposición excesiva al sol"
    }
  } 
</i18n>

<template>
  <section class="results">
    <product-landing-container>
      <div class="results__content">
        <div class="results__header">
          <product-landing-animation :delay="200">
            <h2>{{ $t('title') }}</h2>
          </product-landing-animation>
        </div>
        <div class="results__info">
          <product-landing-animation :delay="400">
            <p v-html="$t('p1')" />
          </product-landing-animation>
          <product-landing-animation :delay="600">
            <p v-html="$t('p2')" />
          </product-landing-animation>
        </div>
        <product-landing-animation :delay="800">
          <ul class="results__cards">
            <li v-for="(card, index) in cards" :key="index" class="card">
              <div class="card__image">
                <img :src="card.img" :alt="card.title" />
              </div>
              <p class="card__title">{{ $t(card.title) }}</p>
            </li>
          </ul>
        </product-landing-animation>
      </div>
    </product-landing-container>
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.results {
  &__content {
    @include flexColumn();
    row-gap: toRem(46);
    padding: toRem(74) toRem(68) toRem(87);
    text-align: center;
    background-color: $parchment_cream;
    border-radius: toRem(20);
    box-shadow: 0 toRem(4) toRem(4) 0 #00000040;

    @media (max-width: $mobile) {
      row-gap: toRem(16);
    }

    @media (max-width: $mobile) {
      padding: toRem(27) toRem(14);
    }
  }

  &__info {
    @include flexColumn();
    row-gap: toRem(46);

    @media (max-width: $mobile) {
      font-size: toRem(10);
      row-gap: toRem(16);
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: toRem(8);

    @media (max-width: $tablet) {
      grid-template-columns: repeat(3, 1fr);
      row-gap: toRem(28);
    }
  }
}

.card {
  @include flexColumn(center, center);
  row-gap: toRem(8);

  @media (max-width: $mobile) {
    max-width: toRem(97);
    margin: 0 auto;
  }

  &__image {
    @include flexColumn(flex-end, center);
    min-height: toRem(160);

    & img {
      object-fit: contain;
      object-position: center;
    }

    @media (max-width: $pc) {
      min-height: toRem(115);

      & img {
        max-height: toRem(115);
      }
    }

    @media (max-width: $mobile) {
      min-height: toRem(76);

      & img {
        max-height: toRem(76);
      }
    }
  }

  &__title {
    line-height: 100%;
    max-width: toRem(202);
    margin: 0 auto;

    @media (max-width: $pc) {
      font-size: toRem(14);
    }

    @media (max-width: $mobile) {
      font-size: toRem(8);
    }
  }
}
</style>
