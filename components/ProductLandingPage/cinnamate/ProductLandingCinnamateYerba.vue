<script>
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
SwiperCore.use([Navigation, Pagination, Autoplay])

import Img_1 from '@/assets/ProductLandingPages/images/cinnamate/mate1.png'
import Img_2 from '@/assets/ProductLandingPages/images/cinnamate/mate2.png'
import Img_3 from '@/assets/ProductLandingPages/images/cinnamate/mate3.png'
import Img_4 from '@/assets/ProductLandingPages/images/cinnamate/mate4.png'
import Img_5 from '@/assets/ProductLandingPages/images/cinnamate/mate5.png'
import Img_6 from '@/assets/ProductLandingPages/images/cinnamate/mate6.png'

export default {
  name: 'ProductLandingCinnamateYerba',
  data() {
    return {
      images: [
        {
          img: Img_1,
        },
        {
          img: Img_2,
        },
        {
          img: Img_3,
        },
        {
          img: Img_4,
        },
        {
          img: Img_5,
        },
        {
          img: Img_6,
        },
      ],
      swiperOptions: {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 5,
        autoplay: {
          delay: 10000,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          modifierClass: 'comments__',
          bulletClass: 'comments__bullet',
          bulletActiveClass: 'comments__bullet-active',
          renderBullet: (index, className) => {
            return `<button class='${className}' type='button'></button>`
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          767: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      },
    }
  },
  mounted() {
    new SwiperCore(this.$refs.swiper, this.swiperOptions)
  },
}
</script>

<i18n> 
  {
    "en": {
      "title":"Yerba mate",
      "subtitle": "A nutritional powerhouse",
      "text1": "The yerba mate leaf is a densely nutritious plant that originates from South America, <strong>packed with a multitude of vitamins, minerals, and amino acids</strong>. It contains seven out of the nine essential amino acids, which are vital for protein synthesis in the body yet can't be produced by the body itself.",
      "text2": "Yerba mate is also <strong>rich in vitamins A, C, E, B1, B2, B3, B5, and B Complex</strong>. As for its mineral content, it boasts significant amounts of calcium, manganese, iron, selenium, potassium, magnesium, phosphorus, and zinc. These nutrients work together to <strong>help your body and mind curb cravings, fill nutritional gaps, support immune health and hone focus</strong>."
    },   
    "es": {
      "title": "Yerba mate",
      "subtitle": " Fuente de poderosa nutrición",
      "text1": "La hoja de yerba mate es densamente nutritiva y es originaria de América del Sur. <b>Está llena de abundantes  vitaminas, minerales y aminoácidos</b>. Contiene siete de los nueve aminoácidos esenciales que son vitales para la síntesis de las proteínas en el cuerpo y que el cuerpo por sí mismo no puede producir. ",
      "text2": "La Yerba mate es rica en vitaminas A, C, E, B1, B2, B3, B5, y Complejo B. Debido a su contenido mineral, ostenta cantidades significativas de calcio, manganeso, hierro, selenio, potasio, magnesio, fósforo y zinc. Estos nutrientes funcionan en conjunto para <b>ayudar al cuerpo y a la mente a controlar los antojos, llenar los vacíos nutricionales, apoyar la salud inmunológica y afinar la concentración</b>."
    }
  } 
</i18n>

<template>
  <section class="mates">
    <div class="mates__image">
      <img
        :src="
          require('~/assets/ProductLandingPages/images/vital/minerals-wave.png')
        "
        alt="wave"
      />
    </div>
    <div class="mates__wrapper">
      <product-landing-container>
        <div class="mates__content">
          <div class="mates__header">
            <product-landing-animation :delay="200">
              <h2>{{ $t('title') }}</h2>
            </product-landing-animation>
            <product-landing-animation :delay="400">
              <p class="mates__subtitle" v-html="$t('subtitle')" />
            </product-landing-animation>
          </div>
        </div>
        <div class="comments__content">
          <div ref="swiper" class="comments__swiper swiper">
            <div class="swiper-wrapper">
              <div
                v-for="(comment, index) in images"
                :key="index"
                class="swiper-slide"
              >
                <div class="comment" outlined>
                  <img class="comment__img" :src="comment.img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mates__description">
          <div class="mates__text">
            <product-landing-animation :delay="400">
              <p class="mates__text" v-html="$t('text1')" />
            </product-landing-animation>
          </div>
          <div class="mates__text1">
            <product-landing-animation :delay="400">
              <p class="mates__text" v-html="$t('text2')" />
            </product-landing-animation>
          </div>
        </div>
      </product-landing-container>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.mates {
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

  &__subtitle {
    font-size: 27px;
    line-height: 47px;
    color: #2e2930;
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
  &__description {
    padding: toRem(70) 0;
    text-align: center;
  }
  &__text {
    margin-bottom: toRem(30);
  }
}

.comments {
  position: relative;
  overflow: hidden;

  &__wrapper {
    background-color: $red;
    position: relative;
    padding: toRem(124) 0;
    overflow: hidden;

    @media (max-width: $mobile) {
      padding: toRem(45) 0;
    }
  }

  &__header {
    position: relative;
    text-align: center;
    z-index: $zIndex_1;

    @media (max-width: $mobile) {
      max-width: toRem(472);
      margin: 0 auto;
    }

    & h3 {
      color: $white;
    }
  }

  &__content {
    position: relative;
    margin-top: toRem(50);

    @media (max-width: $tablet) {
      margin-top: toRem(30);
    }
  }

  &__swiper {
    overflow: hidden;
    padding: toRem(8) 0;
    @media (max-width: em($maxWidthContainer)) {
      margin: 0 $paddingContainerMinus;
      padding: toRem(4) $paddingContainer;
    }
  }

  &__bg {
    position: absolute;
    right: 0;
    bottom: -10%;

    @media (max-width: $mobile) {
      right: auto;
      left: 0;
      bottom: 0;

      & img {
        transform: scale(-1, 1);
        width: toRem(164);
        max-height: toRem(383);
        object-fit: contain;
        object-position: right;
      }
    }

    @media (max-width: $mobileSmall) {
      & img {
        max-height: toRem(333);
      }
    }
  }
}
.comment {
  border: none;
  position: relative;
  @include flexColumn(center, center);
  text-align: center;
  row-gap: toRem(15);
  height: toRem(303);
  overflow: hidden;
  @include adaptiveValue('height', 368, 350, 1100, 767, 1);


  @media (max-width: $mobile) {
    height: toRem(170);
    max-width: toRem(400);
    margin: 0 auto;
  }

  &__img {
    width: 100%;
    height: auto;
  }
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  color: $white;
  margin: toRem(-40) toRem(24) 0;
  z-index: $zIndex_1;
  transition: opacity $transition;

  @media (any-hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: em($maxWidthContainer)) {
    display: none;
  }
}

.swiper-button-prev {
  right: 100%;
}
.swiper-button-next {
  left: 100%;

  & svg {
    transform: scale(-1, 1);
  }
}
</style>
