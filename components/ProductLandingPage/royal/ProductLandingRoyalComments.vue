<script>
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
SwiperCore.use([Navigation, Pagination, Autoplay])

export default {
  name: 'ProductLandingRoyalComments',
  data() {
    return {
      COMMENTS: [
        {
          text: 'comment1',
          name: 'Nancy A.',
          status: 'status',
        },
        {
          text: 'comment2',
          name: 'Dasha C.',
          status: 'status',
        },
        {
          text: 'comment3',
          name: 'Ruthanne A.',
          status: 'status',
        },
        {
          text: 'comment4',
          name: 'Judy W.',
          status: 'status',
        },
        {
          text: 'comment5',
          name: 'Christian G.',
          status: 'status',
        },
      ],
      swiperOptions: {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 24,
        autoplay: {
          delay: 10000,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          modifierClass: 'royal-comments__',
          bulletClass: 'royal-comments__bullet',
          bulletActiveClass: 'royal-comments__bullet-active',
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
      "title":"What people are saying",
      "comment1": "“Solle Royal is a wonderful product. It has help stabilize my mood. I used to have so much anxiety, but this product has helped me lessen that so much. I love the variety of the ingredients and the taste is wonderful. I love that is plant based and does not contain lactose. I highly recommend this product.”",
      "comment2": "“This product is absolutely my favorite, MY lines around the eyes diminished, over all skin is firmer and looking in the mirror I look younger.”",
      "comment3": "“My hair was thinning and I was in a panic. Angela suggested this product Solle Royal and it’s been thicker ever since! Just love the taste as well”",
      "comment4": "“My hair, nails, and skin have all improved since I have started this product.”",
      "comment5": "“It has helped me to restore my gut as well as with stabilizing & strengthening my tendons on my legs. It surely also benefits my stomach lining , and keeping a good pH balance.”",
      "status": "Verified Customer"
    },   
    "es": {
      "title": "Lo que dice la gente",
      "comment1": "“Solle Royal es un producto  fantástico. Me ha ayudado a estabilizar mi ánimo. Solía tener mucha ansiedad, y este producto me ha ayudado a disminuirla. Me encanta la variedad de ingredientes y su rico sabor. Me encanta que es a base de plantas y no contiene lactosa. Lo recomiendo ampliamente.”",
      "comment2": "“Definitivamente este es mi producto favorito. Las líneas alrededor de mis ojos han disminuido, mi piel en general está más firme, y al mirarme al espejo luzco más joven.”",
      "comment3": "“Mi cabello se estaba haciendo muy delgado y me dio pánico. ¡Angela me sugirió el Solle Royal y desde entonces mi cabello está más grueso! También me encanta su sabor”",
      "comment4": "“Mi cabello, uñas y piel han mejorado desde que comencé a usar este producto.”",
      "comment5": "“Me ha ayudado a restaurar el intestino y a estabilizar y fortalecer los tendones de mis piernas. Ha beneficiado mi revestimiento estomacal, y me ha ayudado a mantener un buen equilibrio del pH.”",
      "status": "Cliente Verificado"
    }
  } 
</i18n>

<template>
  <section class="comments">
    <div class="comments__wrapper">
      <product-landing-container>
        <v-row no-gutters class="comments__header">
          <v-col>
            <h3>{{ $t('title') }}</h3>
          </v-col>
        </v-row>
        <div class="comments__content">
          <div ref="swiper" class="comments__swiper swiper">
            <div class="swiper-wrapper">
              <div
                v-for="(comment, index) in COMMENTS"
                :key="index"
                class="swiper-slide"
              >
                <div class="comment" outlined>
                  <p class="comment__text">{{ $t(comment.text) }}</p>
                  <div class="comment__block">
                    <p class="comment__name">{{ comment.name }}</p>
                    <div class="comment__status">{{ $t(comment.status) }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <button class="swiper-button-prev">
            <svg
              width="31"
              height="52"
              viewBox="0 0 31 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.4688 48.9766L4.23695 26.2299L26.9836 2.99825"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <button class="swiper-button-next">
            <svg
              width="31"
              height="52"
              viewBox="0 0 31 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.4688 48.9766L4.23695 26.2299L26.9836 2.99825"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </product-landing-container>
      <div class="comments__bg">
        <img
          :src="
            require('~/assets/ProductLandingPages/images/royal/comment-bg.png')
          "
          alt="background"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.comments {
  position: relative;
  overflow: hidden;

  &__wrapper {
    background-color: $pink;
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
  }

  &__content {
    position: relative;
    margin-top: toRem(80);

    @media (max-width: $tablet) {
      margin-top: toRem(30);
    }
  }

  &__swiper {
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
  background-color: $white;
  border-radius: toRem(30) toRem(30) toRem(30) 0;
  box-shadow: 2px 4px 4px 0px #bcbab180;
  height: toRem(303);
  overflow-y: auto;
  padding: toRem(24) toRem(48);
  @include adaptiveValue('height', 350, 530, 1350, 991, 1);

  @media (max-width: $tablet) {
    @include adaptiveValue('height', 400, 530, 991, 767, 1);
  }

  @media (max-width: $tablet) {
    padding: toRem(24) toRem(14);
  }

  @media (max-width: $mobile) {
    height: toRem(220);
    max-width: toRem(400);
    margin: 0 auto;
  }

  &__text {
    font-size: toRem(18);

    @media (max-width: $tablet) {
      font-size: toRem(16);
    }

    @media (max-width: $mobile) {
      font-size: toRem(12);
      line-height: 150%; /* 18/12 */
    }
  }

  &__name {
    font-weight: 600;
    font-size: toRem(12);
    line-height: 150%; /* 18/12 */

    @media (max-width: $mobile) {
      font-size: toRem(10);
    }
  }

  &__status {
    font-size: toRem(12);
    line-height: 150%; /* 18/12 */

    @media (max-width: $mobile) {
      font-size: toRem(8);
    }
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

<style lang="scss">
@import 'assets/ProductLandingPages/styles/variables.scss';

.royal-comments {
  &__bullets {
    @include flexRow(center, center);
    column-gap: toRem(6);
    margin-top: toRem(40);

    @media (max-width: $tablet) {
      margin-top: toRem(32);
    }
  }

  &__bullet {
    position: relative;
    display: inline-block;
    width: toRem(20);
    height: toRem(20);
    cursor: pointer;
    transition: width $transition;

    @media (any-hover: hover) {
      &:hover:not(&-active)::before {
        opacity: 0.8;
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: $grey_light;
      width: 100%;
      height: toRem(6);
      border-radius: toRem(5);
      transition: opacity $transition, width $transition;
    }

    &-active {
      width: toRem(27);

      &::before {
        background-color: #a42f8a;
      }
    }
  }
}
</style>
