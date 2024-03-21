<script>
export default {
  name: 'ProductLandingRoyalChart',
  computed: {
    chartSrc() {
      return this.$i18n.locale === 'en'
        ? require('~/assets/ProductLandingPages/images/royal/chart.png')
        : require('~/assets/ProductLandingPages/images/royal/es-chart.png')
    },
  },
}
</script>

<i18n> 
  {
    "en": {
      "title": "As we age, production slows",
      "p1": "Around the age of thirty, collagen production begins to dip. With time, production continues to slow, quality lowers, and the collagen break-down process accelerates.",
      "p2": "Women, in particular, experience a significant decrease in production following menopause. By the age of 50, it’s estimated that you may have lost about 50% of your collagen levels.",
      "p3": "Why does this matter? Revisit the previous section!",
      "link": "Learn more"
    },   
    "es": {
      "title": "Con la edad, disminuye su producción ",
      "p1": "Alrededor de los 30 años, la producción de colágeno comienza a disminuir, y con el tiempo continua cuesta abajo; su calidad disminuye y el proceso de descomposición del colágeno se acelera. ",
      "p2": "Las mujeres en particular, experimentan una disminuición significativa de esa producción después de la menopausia. Se estima que para la edad de los 50 años se puede perder hasta un 50% de los niveles de colágeno. ",
      "p3": "¿Por qué es esto tan importante? ¡Revisa la sección anterior!",
      "link": "Aprende más"
    }
  } 
</i18n>

<template>
  <section class="chart">
    <product-landing-container>
      <div class="chart__content">
        <div class="chart__header">
          <product-landing-animation :delay="200">
            <h2>{{ $t('title') }}</h2>
          </product-landing-animation>
        </div>
        <product-landing-animation :delay="400">
          <div class="chart__block">
            <div class="chart__image isNotTablet">
              <img :src="chartSrc" alt="Chart" />
            </div>
            <div class="chart__info">
              <p>{{ $t('p1') }}</p>
              <p>{{ $t('p2') }}</p>
              <p>{{ $t('p3') }}</p>
              <div class="chart__image isTablet">
                <img :src="chartSrc" alt="Chart" />
              </div>
              <nuxt-link class="chart__link" to="/blog-post/94">
                {{ $t('link') }}
              </nuxt-link>
            </div>
          </div>
        </product-landing-animation>
      </div>
    </product-landing-container>
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.chart {
  &__content {
    @include flexColumn();
    row-gap: toRem(60);

    @media (max-width: $tablet) {
      row-gap: toRem(30);
    }

    @media (max-width: $mobile) {
      row-gap: toRem(18);
    }
  }

  &__header {
    text-align: center;
  }

  &__block {
    display: grid;
    grid-template-columns: 1fr minmax(toRem(524), 1.12fr);
    align-items: center;
    justify-content: space-between;
    gap: toRem(35);

    @media (max-width: $tablet) {
      grid-template-columns: 1fr;
      justify-content: center;
      text-align: center;
    }
  }

  &__image {
    text-align: center;

    & img {
      max-width: toRem(455);
      width: 100%;
      height: auto;
      aspect-ratio: 455 / 274;
      object-fit: contain;
      object-position: center;

      @media (max-width: $mobile) {
        aspect-ratio: 289 / 137;
      }
    }
  }

  &__info {
    @include flexColumn();
    row-gap: toRem(26);

    @media (max-width: $mobile) {
      font-size: toRem(12);
      row-gap: toRem(20);
    }
  }

  &__link {
    @include flexRow(center, center);
    text-align: center;
    color: $pink;
    border: toRem(1) solid $pink;
    border-radius: toRem(4);
    padding: toRem(12.5) toRem(38);
    font-size: toRem(20);
    width: fit-content;
    transition: background-color $transition, color $transition;

    @media (any-hover: hover) {
      &:hover {
        background-color: $pink;
        color: $white;
      }
    }

    @media (max-width: $tablet) {
      margin: 0 auto;
    }

    @media (max-width: $mobile) {
      font-size: toRem(14);
      padding: toRem(9) toRem(29.5);
    }
  }
}
</style>
