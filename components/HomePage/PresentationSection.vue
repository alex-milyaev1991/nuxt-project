<template>
  <div class="presentation-section">
    <curved-img-container bg-img-class="presentation-section__bg-image">
      <div class="flex-1"></div>

      <div
        class="presentation-section__headers flex-1 d-flex flex-column align-center align-md-start justify-start justify-md-center"
      >
        <h2 class="mb-2 mb-sm-4 text-center text-sm-left">
          {{ $t('holisticSupport') }}
          <span>{{ $t('mindAndBody') }}</span>
        </h2>
        <h3 class="text-center text-sm-left mb-9">{{ $t('subtitle') }}</h3>

        <NuxtLink
          to="/shop/best-sellers"
          class="presentation-section__btn py-2 py-lg-4 px-3 px-sm-6 px-lg-9 text-uppercase animate-hover-breath"
        >
          {{ $t('shopBestSellers') }}
        </NuxtLink>
      </div>
    </curved-img-container>
  </div>
</template>

<script>
import CurvedImgContainer from '@/components/CurvedImgContainer'

export default {
  name: 'PresentationSection',
  components: {
    CurvedImgContainer,
  },
}
</script>

<i18n> 
  {
    "en": {
      "holisticSupport": "Holistic Support for",
      "mindAndBody": "Mind & Body",
      "subtitle": "Wellness begins within",
      "shopBestSellers": "Shop Best Sellers"
    },   
    "es": {
      "holisticSupport": "Apoyo Holístico para",
      "mindAndBody": "Cuerpo & Mente",
      "subtitle": "El bienestar comienza por dentro",
      "shopBestSellers": "mÁS vendidos"
    }
  } 
</i18n>

<style lang="scss" scoped>
@import '../../assets/scss/mixin.scss';

.presentation-section {
  &__bg-image {
    background-image: url(../../assets/Solle_Excell_Homepage.jpg);
  }

  &__headers {
    @include atXSmall {
      flex: 2 !important;
      padding-top: 210px;
    }

    @include atSmall {
      flex: 1.5 !important;
      padding-top: 175px;
    }

    @include atMedium {
      flex: 0.85 !important;
      padding: 0;
      height: calc(105% - 20vw);
      max-height: 810px;
    }

    @include atLarge {
      flex: 0.9 !important;
      height: calc(110% - 20vw);
    }

    @media (min-width: 1500px) {
      height: calc(105% - 20vw);
    }

    @include atXLarge {
      min-height: 350px;
      height: calc(110% - 20vw);
      max-height: 100vh;
    }
  }

  h2,
  h3 {
    color: #828281;
    font-weight: 400;
  }

  h2 {
    font-size: 18px;
    line-height: 1.2;
    letter-spacing: 0.7px;

    @include atSmall {
      font-size: 30px;
    }

    @include atMedium {
      letter-spacing: 1px;
    }

    @include atLarge {
      font-size: 50px;
    }

    @include atXLarge {
      font-size: 64px;
    }

    span {
      display: block;
      font-size: 28px;
      letter-spacing: 0.7px;

      @include atSmall {
        font-size: 40px;
        letter-spacing: 4px;
      }

      @include atMedium {
        letter-spacing: 5px;
      }

      @include atLarge {
        font-size: 62px;
        letter-spacing: 10px;
      }

      @include atXLarge {
        font-size: 84px;
      }
    }
  }

  h3 {
    font-size: 14px;

    @include atSmall {
      font-size: 20px;
    }

    @include atLarge {
      font-size: 30px;
    }

    @include atXLarge {
      font-size: 40px;
    }
  }

  &__btn {
    text-decoration: none;
    font-size: 8px;
    color: #828281;
    border: 1px solid #c0df16;
    background-color: #fdfcf888;
    border-radius: 2px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 400;
    text-align: center;
    max-width: 100%;

    @include atSmall {
      font-size: 14px;
      margin-left: 0;
      margin-right: 0;
      max-width: 75%;
    }
    @include atMedium {
      border-width: 2px;
      border-radius: 4px;
    }
    @include atLarge {
      font-size: 16px;
      display: inline-block;
    }
  }
}
</style>
