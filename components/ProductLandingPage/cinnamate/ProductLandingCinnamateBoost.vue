<script>
import Card_1 from '@/assets/ProductLandingPages/images/cinnamate/boost1.png'
import Card_1_mobile from '@/assets/ProductLandingPages/images/cinnamate/boost1-mobile.png'
import Card_2 from '@/assets/ProductLandingPages/images/cinnamate/boost2.png'
import Card_2_mobile from '@/assets/ProductLandingPages/images/cinnamate/boost2-mobile.png'
import Card_3 from '@/assets/ProductLandingPages/images/cinnamate/boost3.png'
import Card_3_mobile from '@/assets/ProductLandingPages/images/cinnamate/boost3-mobile.png'

export default {
  name: 'ProductLandingCinnamateBoost',
  data() {
    return {
      cards: [
        {
          img: Card_1,
          imgMobile: Card_1_mobile,
          title: 'card1.title',
          content: 'card1.content',
        },
        {
          img: Card_2,
          imgMobile: Card_2_mobile,
          title: 'card2.title',
          content: 'card2.content',
        },
        {
          img: Card_3,
          imgMobile: Card_3_mobile,
          title: 'card3.title',
          content: 'card3.content',
        },
      ],
    }
  },
  computed: {
    isEnglish() {
      return this.$i18n.locale === 'en'
    },
  },
}
</script>

<i18n> 
  {
    "en": {
      "title": "A balanced boost",
      "subtitle": "True wellness is all about balance. With Cinna<b>Mate</b>, there’s no need to trade a later crash or sugar spike for energy. In fact, it’s quite the opposite. Cinna<b>Mate</b> contains adaptogens and herbs that help the body better manage blood sugar, promoting balanced energy levels throughout the day. Learn more below about some of the ingredients that make this happen.",
      "card1": {
        "title": "Banaba Leaf",
        "content": "<strong>Banaba Leaf</strong> is a natural ally in supporting the pancreas and maintaining balanced blood sugar levels. It contains a potent compound called corosolic acid which acts like insulin, helping to lower blood sugar levels by transporting glucose into cells and promoting its use for energy."
      },
      "card2": {
        "title": "Nopal Cactus Fruit",
        "content": "<strong>Nopal Cactus Fruit</strong> also known as prickly fruit pear, is rich in dietary fiber and pectin, both of which are known to slow down the absorption of sugar into the bloodstream, thereby preventing spikes in blood sugar and helping to maintain stable glucose levels throughout the day."
      },
      "card3": {
        "title": "Cinnamon Bark",
        "content": "<strong>Cinnamon Bark</strong> contains a compound called cinnamaldehyde which has been found to stimulate insulin receptors and inhibit an enzyme that inactivates them, thereby improving the sensitivity of cells to insulin and extending its utilization in the blood. This enhanced insulin action helps lower blood sugar levels and maintain them within a healthy range."
      }
    },   
    "es": {
      "title": "Un impulso equilibrado",
      "subtitle": "El verdadero bienestar tiene que ver con equilibrio. Con el Cinna<b>Mate</b>, no tienes que sentir una subida de azúcar a cambio de energía. De hecho es lo contrario. Cinna<b>Mate</b> contiene adaptógenos y hierbas que ayudan al cuerpo a controlar mejor el azúcar en la sangre brindando equilibrio de energía durante el día. Aprende más sobre los ingredientes que hacen esto una realidad.",
      "card1": {
        "title": "Hoja de Banaba",
        "content": "<b>Hoja de Banaba</b>, es una aliada natural de apoyo al páncreas y para mantener los niveles de azúcar. Contiene un compuesto potente llamado ácido corosólico que actúa como insulina ayudando a reducir los niveles de azúcar en la sangre al transportar la glucosa a las células y promover su uso como energía."
      },
      "card2": {
        "title": "Fruta del Nopal",
        "content": "<b>Fruta del Nopal</b>, también conocida como tuna, es rica en fibra dietética y pectina, conocidas por ralentizar la absorción del azúcar en la sangre previniendo así los ‘picos’ de azúcar, y ayudar a mantener estables los niveles de glucosa durante el día."
      },
      "card3": {
        "title": "Canela",
        "content": "<b>Canela</b>, contiene un compuesto llamado cinamaldehído que estimula los receptores de insulina e inhibe una enzima que los inactiva, mejorando así la sensibilidad de las células a la insulina y extendiendo su utilización en la sangre. Esta acción mejorada ayuda a reducir los niveles de azúcar en la sangre, y a mantenerlos dentro de un rango saludable."
      }
    }
  } 
</i18n>

<template>
  <section class="boost">
    <product-landing-container>
      <div class="boost__content">
        <div class="boost__header">
          <product-landing-animation :delay="200">
            <h2>{{ $t('title') }}</h2>
          </product-landing-animation>
          <product-landing-animation :delay="400">
            <p v-html="$t('subtitle')" />
          </product-landing-animation>
        </div>
      </div>
      <div class="directions__list">
        <div v-for="(card, indx) in cards" :key="indx" class="card">
          <div class="card__wrapper">
            <div class="card__image">
              <product-landing-animation variant="opacity" :delay="200">
                <img :src="card.img" :alt="card.title" />
                <img class="mobile" :src="card.imgMobile" :alt="card.title" />
              </product-landing-animation>
            </div>
            <div class="card__content">
              <div class="card__block">
                <product-landing-animation :delay="300">
                  <p class="card__content" v-html="$t(card.content)" />
                </product-landing-animation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </product-landing-container>
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.boost {
  &__content {
    @include flexColumn();
    row-gap: toRem(73);
    max-width: toRem(820);
    width: 100%;
    margin: 0 auto;
    text-align: center;

    @media (max-width: $mobile) {
      row-gap: toRem(38);
    }
  }

  &__header {
    @include flexColumn();
    row-gap: toRem(41);

    & p {
      line-height: 168.75%; /* 27/16 */
    }

    @media (max-width: $mobile) {
      row-gap: toRem(18);

      & p {
        font-size: toRem(12);
      }
    }
  }
}

.directions {
  margin: toRem(25) auto 0;
  max-width: toRem(1007);
  width: 100%;

  &__list {
    @include flexColumn();
    row-gap: toRem(60);
    width: 100%;
    margin-top: toRem(50);

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
  display: flex;
  flex-direction: column;
  align-items: center;

  &__wrapper {
    display: flex;
    align-items: center;
    position: relative;
    border-radius: toRem(20);
    background-color: #eceade;
    padding: toRem(10);
    width: 100%;
    text-align: left;
    max-width: toRem(820);

    @media (max-width: $pc) {
      padding: toRem(38) toRem(32);
    }

    @media (max-width: $mobile) {
      padding: toRem(28) toRem(22);
    }
  }

  &:first-child &__wrapper {
    padding: toRem(35);
  }

  &__content {
    position: relative;
    z-index: $zIndex_1;
    padding-left: toRem(28);

    & p {
      line-height: 150%;
    }
  }

  &__block {
    max-width: toRem(476);

    @media (max-width: $mobile) {
      font-size: toRem(10);
    }
  }

  &__image {
    width: toRem(218);

    img {
      display: block;
      max-width: 100%;
    }
    img.mobile {
        display: none;
    }

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
        display: none;
      }
      & img.mobile {
        display: block;
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
