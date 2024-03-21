<script>
import { DiamondIcon } from '@/components/ProductLandingPage/ui/icons'

import Skin from '@/assets/ProductLandingPages/images/royal/skin.png'
import Taste from '@/assets/ProductLandingPages/images/royal/taste.png'
import Mood from '@/assets/ProductLandingPages/images/royal/mood.png'
import Hair from '@/assets/ProductLandingPages/images/royal/hair.png'
import Protein from '@/assets/ProductLandingPages/images/royal/protein.png'
import Catalysts from '@/assets/ProductLandingPages/images/royal/catalysts.png'

export default {
  name: 'ProductLandingRoyalKey',
  components: {
    DiamondIcon,
  },
  setup() {
    return {
      cards: [
        {
          title: 'card1.title',
          icon: Skin,
          text: 'card1.text',
        },
        {
          title: 'card2.title',
          icon: Taste,
          text: 'card2.text',
        },
        {
          title: 'card3.title',
          icon: Mood,
          text: 'card3.text',
        },
        {
          title: 'card4.title',
          icon: Hair,
          text: 'card4.text',
        },
        {
          title: 'card5.title',
          icon: Protein,
          text: 'card5.text',
        },
        {
          title: 'card6.title',
          icon: Catalysts,
          text: 'card6.text',
        },
      ],
      list: [
        'block.item1',
        'block.item2',
        'block.item3',
        'block.item4',
        'block.item5',
        'block.item6',
        'block.item7',
        'block.item8',
        'block.item9',
        'block.item10',
        'block.item11',
        'block.item12',
      ],
    }
  },
}
</script>

<i18n> 
  {
    "en": {
      "title": "Key benefits",
      "card1": {
        "title": "Radiant skin",
        "text": "Experience a healthy glow that will have everyone asking you for your secret"
      },
      "card2": {
        "title": "Regal taste",
        "text": "Mixed super fruit flavor that is fit for a king or queen"
      },
      "card3": {
        "title": "Improved mood",
        "text": "With mood-lifting herbs like moringa and butterfly pea, you can't help but smile"
      },
      "card4": {
        "title": "Youthful hair",
        "text": "Thicker, fuller, longer hair. Every day is a good hair day!"
      },
      "card5": {
        "title": "Protein",
        "text": "Amino acids necessary for collagen production from easily assimilated plant sources"
      },
      "card6": {
        "title": "Key Catalysts",
        "text": "Nutrients like hyaluronic acid, biotin and vitamins A, C, D & E, to enhance collagen production"
      },
      "block": {
        "title": "Collagen - it’s not just a skin thing",
        "p1": "When it comes to collagen, we often hear messages like, “drink collagen to fix your wrinkly skin; don’t you dare let those wrinkles show!”",
        "p2": "Okay fine, we’re being a little dramatic, but you get the gist. ",
        "p3": "And while it’s true that <b>collagen can help you repair and prevent wrinkles, that’s far from all it does</b>. A holistic perspective of collagen reveals its large and small roles in maintaining the health and strength of all of the following:",
        "item1": "skin",
        "item2": "bones + ligaments",
        "item3": "arteries",
        "item4": "hair",
        "item5": "tendons",
        "item6": "intestinal lining",
        "item7": "nails",
        "item8": "muscles",
        "item9": "eyes",
        "item10": "joints",
        "item11": "organs",
        "item12": "cartilage"
      }
    },   
    "es": {
      "title": "Beneficios Claves",
      "card1": {
        "title": "Piel Radiante",
        "text": "Experimenta un brillo saludable que hará que todos te pregunten cuál es tu secreto"
      },
      "card2": {
        "title": "Sabor Superior",
        "text": "Sabor de varias súper frutas digno de un rey o una reina"
      },
      "card3": {
        "title": "Ánimo mejorado",
        "text": "Con hierbas que mejoran el estado de ánimo como la moringa y la campanita, no podrás evitar sonreír"
      },
      "card4": {
        "title": "Cabello Juvenil",
        "text": "Cabello más grueso, abundante y largo. ¡Cada día es un buen día para lucirlo!"
      },
      "card5": {
        "title": "Proteína",
        "text": "Aminoácidos necesarios para la producción de colágeno a base de plantas, y de fácil asimilación"
      },
      "card6": {
        "title": "Catalizadores Claves",
        "text": "Nutrientes como el ácido hialurónico, biotina y vitaminas A, C, D & E, para mejorar la producción de colágeno"
      },
      "block": {
        "title": "Colágeno - no es solo para la piel",
        "p1": "Cuando se habla de colágeno, escuchamos cosas como: “toma colágeno para la piel; así no se notarán las arrugas!”",
        "p2": "Sí, suena un poco dramático, pero entiendes el punto, ¿verdad?...",
        "p3": "Efectivamente <b>el colágeno AYUDA a reparar y a prevenir las arrugas, pero hace mucho más que eso</b>. Una perspectiva holística sobre el colágeno revela sus pequeñas y grandes funciones al mantener la salud y el fortalecimiento de lo siguiente:",
        "item1": "piel",
        "item2": "huesos & ligamentos",
        "item3": "arterias",
        "item4": "cabello",
        "item5": "tendones",
        "item6": "revestimiento intestina",
        "item7": "uñas",
        "item8": "músculos",
        "item9": "ojos",
        "item10": "articulaciones",
        "item11": "órganos",
        "item12": "cartílagos"
      }
    }
  } 
</i18n>

<template>
  <section class="key">
    <div class="key__image">
      <img
        :src="require('@/assets/ProductLandingPages/images/royal/key-wave.png')"
        alt="wave"
      />
    </div>
    <div class="key__wrapper">
      <product-landing-container>
        <div class="key__header">
          <h2>{{ $t('title') }}</h2>
        </div>
        <div class="key__content">
          <ul class="key__cards">
            <li v-for="(card, index) in cards" :key="index" class="card">
              <product-landing-animation :delay="index * 300">
                <div class="card__content">
                  <div class="card__icon">
                    <img :src="card.icon" :alt="card.title" />
                  </div>
                  <span class="card__title">{{ $t(card.title) }}</span>
                  <p class="card__subtitle">{{ $t(card.text) }}</p>
                </div>
              </product-landing-animation>
            </li>
          </ul>
          <div class="block">
            <div class="block__content">
              <product-landing-animation :delay="200">
                <h2 class="block__title">{{ $t('block.title') }}</h2>
              </product-landing-animation>
              <div class="block__text">
                <product-landing-animation :delay="400">
                  <p>
                    {{ $t('block.p1') }}
                  </p>
                </product-landing-animation>
                <product-landing-animation :delay="600">
                  <p>{{ $t('block.p2') }}</p>
                </product-landing-animation>
                <product-landing-animation :delay="800">
                  <p v-html="$t('block.p3')" />
                </product-landing-animation>
              </div>
              <div class="block__wrap">
                <product-landing-animation :delay="1000">
                  <ul class="block__list">
                    <li
                      v-for="(item, index) in list"
                      :key="index"
                      class="block__item"
                    >
                      <diamond-icon />
                      <span>{{ $t(item) }}</span>
                    </li>
                  </ul>
                </product-landing-animation>
              </div>
            </div>
          </div>
        </div> </product-landing-container
      >>
      <div class="key__bg">
        <img
          :src="require('@/assets/ProductLandingPages/images/royal/key-bg.png')"
          alt="background"
          class="isNotMobile"
        />
        <img
          :src="
            require('@/assets/ProductLandingPages/images/royal/key-bg-mobile.png')
          "
          alt="background"
          class="isMobile"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.key {
  position: relative;
  overflow: hidden;

  &__image {
    & img {
      width: 100%;
      aspect-ratio: 1532 / 84;
      object-fit: cover;
      object-position: top center;
    }
  }

  &__wrapper {
    position: relative;
    padding-top: toRem(44);
    background-color: $parchment_cream;
  }

  &__bg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    & img {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      max-height: toRem(502);
      object-fit: cover;
      object-position: center;

      @media (max-width: $pc) {
      }

      @media (max-width: $mobile) {
        // max-height: toRem(584);
      }

      @media (max-width: $mobileSmall) {
        max-height: toRem(584);
      }
    }
  }

  &__header {
    text-align: center;
  }

  &__content {
    position: relative;
    z-index: $zIndex_1;
    margin-top: toRem(65);

    @media (max-width: $mobile) {
      margin-top: toRem(32);
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: toRem(60);
    column-gap: toRem(24);

    @media (max-width: $mobile) {
      gap: toRem(24);
    }

    @media (max-width: $mobileSmall) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
.card {
  &__content {
    max-width: toRem(322);
    text-align: center;
    margin: 0 auto;
  }

  &__icon {
    @include flexColumn(center, flex-end);
    min-height: toRem(135);

    @media (max-width: $mobile) {
      min-height: toRem(54);

      & img {
        max-width: toRem(75);
        max-height: toRem(54);
      }
    }
  }

  &__title {
    display: block;
    font-size: toRem(20);
    font-weight: 500;
    margin-top: toRem(16);

    @media (max-width: $mobile) {
      font-size: toRem(12);
      margin-top: toRem(10);
    }
  }

  &__subtitle {
    font-size: toRem(14);
    margin-top: toRem(10);
    line-height: 100%;

    @media (max-width: $mobile) {
      font-size: toRem(8);
      max-width: toRem(137);
      margin: toRem(5) auto 0;
    }
  }
}

.block {
  padding: toRem(128) 0 toRem(137);

  @media (max-width: $mobile) {
    padding: toRem(44) 0 toRem(65);
  }

  &__content {
    margin: 0 auto;
    max-width: toRem(1111);
    box-shadow: toRem(1) toRem(4) toRem(5.5) 0 #2e293040;
    background-color: $white;
    border-radius: toRem(20);
    padding: toRem(67) toRem(82);

    @media (max-width: $mobile) {
      padding: toRem(26);
      text-align: center;
    }
  }

  &__text {
    margin-top: toRem(32);
    @include flexColumn();
    row-gap: toRem(24);

    @media (max-width: $mobile) {
      margin-top: toRem(24);
      row-gap: toRem(16);
      font-size: toRem(12);
    }
  }

  &__wrap {
    margin-top: toRem(28);

    @media (max-width: $mobile) {
      margin-top: toRem(20);
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: toRem(12);

    @media (max-width: $mobile) {
      font-size: toRem(12);
      text-align: left;
    }

    @media (max-width: $mobileSmall) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__item {
    @include flexRow(center);
    column-gap: toRem(4);
    font-weight: 300;

    & svg {
      color: $pink;
    }
  }
}
</style>
