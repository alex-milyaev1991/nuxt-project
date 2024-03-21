<template>
  <div class="banner-curved-img-container d-flex" :class="bgImgClass">
    <div class="banner-curved-img">
      <curve-shape class="banner" />
    </div>

    <slot />
  </div>
</template>

<script>
import CurveShape from '@/components/CurveShape'

export default {
  name: 'CurvedImgContainer',
  components: {
    CurveShape,
  },
  props: {
    bgImgClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
.banner-curved-img-container {
  width: 100%;
  height: calc(100vh - 175px);
  max-height: 990px;
  min-height: 660px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center bottom;
  margin-bottom: 24px;

  @include atXSmall {
    background-position: 40% bottom;
  }

  @media (min-width: 530px) {
    margin-bottom: 0;
  }

  @include atSmallAndDown {
    max-height: 550px;
  }

  @media (min-width: 1264px) and (min-height: 900px) {
    min-height: 750px;
  }

  @media (min-width: 1500px) {
    margin-bottom: 44px;
  }

  @include atXLarge {
    background-position-y: 96%;
  }

  & .banner-curved-img {
    width: 100%;
    overflow: hidden;
    position: absolute;
    bottom: 0px;
    top: 75%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    svg {
      width: 100%;

      @include atSmallAndDown {
        height: 100%;
      }
    }
  }

  &.shop__best-sellers-bg-image {
    @include atXSmall {
      background-position-x: 25%;
    }
  }
  &.shop__mental-health-bg-image {
    @include atSmallAndDown {
      background-position-y: 50%;
    }
  }
  &.shop__gut-health-bg-image,
  &.shop__sleep-bg-image,
  &.shop__energy-bg-image,
  &.shop__hormonal-health-bg-image,
  &.shop__immunity-bg-image,
  &.shop__anti-aging-bg-image,
  &.shop__weight-management-bg-image {
    background-position-y: 25%;
  }
}
</style>
