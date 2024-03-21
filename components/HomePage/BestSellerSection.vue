<template>
  <v-sheet class="section-container">
    <h2 class="section-title text-center solleBlack--text sn-text-h2">{{
      $t('shopBestSellers')
    }}</h2>
    <client-only>
      <vueper-slides
        class="no-shadow slider__content"
        :visible-slides="4"
        slide-multiple
        :gap="2"
        :slide-ratio="1 / 4"
        :dragging-distance="100"
        :bullets="false"
        :arrows-outside="true"
        :breakpoints="{
          1264: { visibleSlides: 3, slideMultiple: 2, gap: 3 },
          768: { visibleSlides: 2, slideMultiple: 1, gap: 7 },
          550: { visibleSlides: 1, slideMultiple: 1, gap: 8 },
        }"
      >
        <vueper-slide v-for="(product, i) in bestSellers" :key="i">
          <template v-slot:content>
            <product-card :product="product" />
          </template>
        </vueper-slide>
      </vueper-slides>
    </client-only>
  </v-sheet>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'BestSellerSection',
  components: {
    ProductCard,
    VueperSlides,
    VueperSlide,
  },
  computed: {
    bestSellers() {
      return this.$store.getters['shop/getBestSellers']
    },
  },
}
</script>

<i18n> 
  {
    "en": {
      "shopBestSellers": "Shop Best Sellers"
    },   
    "es": {
      "shopBestSellers": "Comprar los más vendidos"
    }
  } 
</i18n>

<style lang="scss" scoped>
@import '../../assets/scss/mixin.scss';

.section-container {
  padding: 100px 0;
}

.section-title {
  line-height: 1.2;
  margin-bottom: 75px;
  @include atSmallAndDown {
    font-size: 26px !important;
  }

  @include atXSmall {
    font-size: 20px !important;
  }
}

.slider__content {
  ::v-deep .vueperslides__inner {
    max-width: 65%;
    margin: 0 auto;
    @include atSmall {
      max-width: 80%;
    }
    @include atMedium {
      max-width: 75%;
    }

    .vueperslides__parallax-wrapper {
      padding-bottom: 0 !important;
      height: 290px;
      z-index: 1;
      @include atSmall {
        height: 315px;
      }
      @include atMedium {
        height: 360px;
      }
      @include atLarge {
        height: 430px;
      }

      .vueperslide {
        display: flex;
        justify-content: center;

        .product-image {
          @include atLarge {
            max-width: 245px;
            max-height: 245px;
          }
          @media (min-width: 1500px) {
            max-width: 300px;
            max-height: 300px;
          }
        }
      }

      .product-image {
        @include atXSmall {
          max-width: 190px;
          max-height: 190px;
        }
      }
      .product-text-holder {
        @include atXSmall {
          justify-content: center;
        }
      }
    }

    .vueperslides__arrows {
      color: #2e2930;
      position: absolute;
      top: 0;
      width: 100%;
      height: 190px;

      @include atSmall {
        height: 200px;
      }

      @include atMedium {
        height: 220px;
      }

      @include atLarge {
        height: 245px;
      }

      @media (min-width: 1500px) {
        height: 300px;
      }

      button {
        top: 70px;
        @include atSmallAndDown {
          opacity: 1;
        }
        @include atSmall {
          top: 100px;
        }
        @include atMedium {
          top: 110px;
        }
        @include atLarge {
          top: 122.5px;
        }
        @media (min-width: 1500px) {
          top: 150px;
        }
        &.vueperslides__arrow--prev {
          @include atSmallAndDown {
            left: -2em;
          }
          @include atXSmall {
            left: -2.5em;
          }
        }
        &.vueperslides__arrow--next {
          @include atSmallAndDown {
            right: -2em;
          }
          @include atXSmall {
            right: -2.5em;
          }
        }

        svg {
          width: 18px;
          height: 32px;
          padding: 0;
          @include atXSmall {
            width: 14px;
            height: 20px;
          }
        }
      }
    }
  }
}
</style>
