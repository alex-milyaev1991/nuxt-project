<script>
export default {
  name: 'ProductLandingPreview',
  props: {
    posterSrc: {
      type: String,
      default: '',
    },
    videoSrc: {
      type: String,
      default: '',
    },
    mobileVideoSrc: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <section class="preview">
    <div class="preview__video">
      <video
        crossorigin="true"
        playsinline
        :poster="posterSrc"
        :src="videoSrc"
        muted
        loop
        autoplay
        type="video/mp4"
        class="isNotMobile"
      />
      <video
        crossorigin="true"
        playsinline
        :poster="posterSrc"
        :src="mobileVideoSrc"
        muted
        loop
        autoplay
        preload="metadata"
        type="video/mp4"
        class="isMobile"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.preview {
  position: relative;
  @include flexColumn(center, center);
  height: min(100vh, 1080px);

  padding-top: 0;

  &__video {
    position: fixed;
    left: 0;
    top: $header_height;
    width: 100%;
    height: min(100vh, 1080px);

    & video {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
