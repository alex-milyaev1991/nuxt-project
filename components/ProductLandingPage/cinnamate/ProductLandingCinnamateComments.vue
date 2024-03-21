<script>
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
SwiperCore.use([Navigation, Pagination, Autoplay])

export default {
  name: 'ProductLandingCinnamateComments',
  data() {
    return {
      COMMENTS: [
        {
          text: 'comment1',
          name: 'Lauren J.',
          status: 'status',
        },
        {
          text: 'comment2',
          name: 'Scott K.',
          status: 'status',
        },
        {
          text: 'comment3',
          name: 'Tara H.',
          status: 'status',
        },
        {
          text: 'comment4',
          name: 'Katharine M.',
          status: 'status',
        },
        {
          text: 'comment5',
          name: 'Ruthanne A.',
          status: 'status',
        },
        {
          text: 'comment6',
          name: 'Shawnna F.',
          status: 'status',
        },
        {
          text: 'comment7',
          name: 'Polo L.',
          status: 'status',
        },
        {
          text: 'comment8',
          name: 'Chyrrl W.',
          status: 'status',
        },
        {
          text: 'comment9',
          name: 'Cindy J.',
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
      "title":"What people are saying<br /> about CinnaMate",
      "comment1": "“Love this drink. I find myself wanting it in the morning . It helps my blood sugar levels so much. I love too when I do want something sweet and if I drink this- I’m satisfied. Takes and curbs any cravings for sugary sweets or if my sugar feels at all off”",
      "comment2": "“Better than coffee, and it really improved my wife's blood sugars during pregnancy!”",
      "comment3": "“I feel almost an immediate difference when drinking cinnamate. My energy levels are through the roof. I feel a sustained level of energy that last all day long with no crash.”",
      "comment4": "“I add CinnaMate to my coffee everyday & then I don't need to add sugar. I have also had it hot on it's own, but mainly I add it to my coffee. I love the taste & most days I don't get the afternoon tired slump.”",
      "comment5": "“My top product of choice on a daily basis. I went from pre diabetic to normal range and this stuff is great hot or cold! ❤️❤️❤️”",
      "comment6": "“CinnaMate is a game changer. It helped me gain a lot more focus and I don't get that mid-afternoon crash.”",
      "comment7": "“Has helped me replace my coffee. Feeling more alert without a crash like I usually would with coffee.”",
      "comment8": "“My husband and I take it daily as a good preventative drink. I like it hot in the winter and it helps with sore throats. We always have it on hand and share it with others”",
      "comment9": "“CinnaMate has changed my life! For years I had a problem with being ‘regular’ and repeatedly had issues with constipation... I even got my husband to use this instead of coffee in the morning. I can’t imagine my life without CinnaMate!”",
      "status": "Verified Customer"
    },   
    "es": {
      "title": "Lo que dice la gente acerca del CinnaMate",
      "comment1": "“¡Me encanta tomar mi bebida verde todas las mañanas! Me siento mejor inmediatamente. ¡¡Solle vital ha reemplazado mis vitaminas diarias!!”",
      "comment2": "“¡Equilibra mi cuerpo, me da energía, me mantiene saludable, y es delicioso! ¡¡No puedo pasar un día sin mi Vital!!",
      "comment3": "“He sentido mayor energía desde que tomo el Solle vital. También he sufrido de depresión y ansiedad y este producto me ha ayudado a sentir mayor claridad mental.”",
      "comment4": "“Esta bebida ha ayudado a mi hijo... inmensamente, ahora puede concentrarse, tiene mejor humor y no se involucra tanto en problemas en la escuela”",
      "comment5": "“El Vital me ha ayudado con mi bienestar en general, mis senos nasales están mejor y tengo menos estrés”",
      "comment6": "“Me siento mucho mejor desde comencé a tomar Vital. Tengo más energía y menos ansiedad.”",
      "comment7": "“El Sollevital ha sido como un salvavidas para mí. Soy paciente recuperado con cáncer de linfoma no Hopkins, y el sollevital ha sido de gran ayuda al brindarme la energía que necesito. ¡Adelante Sollenaturals!”",
      "comment8": "“Este producto es excelente, me brinda  energía (sin tener bajones), y es un  super desayuno antes de mis reuniones”",
      "comment9": "“Es el comienzo ideal para mis mañanas!, que sumado a los otros productos de mi arsenal, ha ayudado  a mi salud mental y ha mejorado mi  inmunidad. No puedo empezar mi día sin él”",
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
            <h3 v-html="$t('title')"></h3>
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
            require('~/assets/ProductLandingPages/images/cinnamate/comment-bg.png')
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
  padding-top: 0;

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
      font-weight: bold;
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
  background-color: $white;
  border-radius: toRem(30) toRem(30) toRem(30) 0;
  box-shadow: 2px 4px 4px 0px #bcbab180;
  height: toRem(303);
  overflow-y: hidden;
  padding: toRem(24) toRem(48);
  @include adaptiveValue('height', 303, 350, 1100, 767, 1);

  @media (max-width: $tablet) {
    padding: toRem(24) toRem(14);
  }

  @media (max-width: $mobile) {
    height: toRem(170);
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

.comments {
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
        background-color: #eab2bd !important;
      }
    }
  }
}
</style>
