<script>
export default {
  name: 'ProductLandingRoyalIngredients',
  computed: {
    ingredientsSrc() {
      return this.$i18n.locale === 'en'
        ? require('~/assets/ProductLandingPages/images/royal/ingredients.png')
        : require('~/assets/ProductLandingPages/images/royal/es-ingredients.png')
    },
    mobileIngredientsSrc() {
      return this.$i18n.locale === 'en'
        ? require('~/assets/ProductLandingPages/images/royal/ingredients-mobile.png')
        : require('~/assets/ProductLandingPages/images/royal/es-ingredients-mobile.png')
    },
  },
}
</script>

<i18n> 
  {
    "en": {
      "title": "Ingredients you can love",
      "p1": "With generic supplements, the nitty gritty details of what collagen is and where it comes from tends to be a topic one doesn’t prefer to ponder for too long. However, with Solle<b>Royal</b>, we say ponder away!",
      "p2": "One of the unique aspects of the Solle<b>Royal</b> formula is that it is a <i>plant-based approach</i> at enhancing collagen production. Instead of providing animal-sourced prebuilt collagen peptides, which the body is required to break down and recreate, it works by providing the nutritional building blocks and co-factors required for the production process, from sources we know you’ll love."
    },   
    "es": {
      "title": "Ingredientes que te encantarán ",
      "p1": "Con suplementos genéricos, los detalles de lo que es el colágeno y de dónde proviene, tienden a ser un tema sobre el que no se reflexiona  mucho. ¡Sin embargo, con el Solle<b>Royal</b>, te decimos que reflexiones!",
      "p2": "Uno de los aspectos únicos de la fórmula del SolleRoyal es que es hecho a <i>base de plantas</i>, y su propósito es mejorar la producción de colágeno. En lugar de proporcionar péptidos prefabricados de fuente animal, que el cuerpo debe descomponer y recrear, el SolleRoyal funciona al proporcionar los elementos básicos nutricionales y los cofactores necesarios para el proceso de producción del colágeno, y proviene de fuentes que sabemos te encantarán."
    }
  } 
</i18n>

<template>
  <section class="ingredients">
    <product-landing-container>
      <div class="ingredients__content">
        <div class="ingredients__header">
          <product-landing-animation :delay="200">
            <h2>{{ $t('title') }}</h2>
          </product-landing-animation>
        </div>
        <div class="ingredients__info">
          <product-landing-animation :delay="400">
            <p v-html="$t('p1')" />
          </product-landing-animation>
          <product-landing-animation :delay="600">
            <p v-html="$t('p2')" />
          </product-landing-animation>
        </div>
        <product-landing-animation :delay="800">
          <div class="ingredients__image">
            <img :src="ingredientsSrc" alt="ingredients" class="isNotMobile" />
            <img
              :src="mobileIngredientsSrc"
              alt="ingredients"
              class="isMobile"
            />
          </div>
        </product-landing-animation>
      </div>
    </product-landing-container>
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.ingredients {
  &__content {
    @include flexColumn();
    row-gap: toRem(46);
    text-align: center;

    @media (max-width: $mobile) {
      row-gap: toRem(24);
    }
  }

  &__header {
    h2 {
      font-style: italic;
    }
  }

  &__info {
    @include flexColumn();
    row-gap: toRem(24);
    max-width: toRem(1158);
    margin: 0 auto;

    @media (max-width: $mobile) {
      row-gap: toRem(16);
      font-size: toRem(12);
    }
  }

  &__image {
    & img {
      width: 100%;
      aspect-ratio: 1328 / 931;

      @media (max-width: $mobile) {
        aspect-ratio: 342 / 256;
      }
    }
  }
}
</style>
