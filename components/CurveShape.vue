<template>
  <div class="curve-shape">
    <white-curve-monitor-shape class="monitor-shape" />

    <white-curve-desktop-shape class="desktop-shape" />

    <white-curve-mobile-shape class="mobile-shape" />
  </div>
</template>

<script>
import WhiteCurveDesktopShape from '@/assets/svg/white-curve-desktop.svg?inline'
import WhiteCurveMonitorShape from '@/assets/svg/white-curve-monitor.svg?inline'
import WhiteCurveMobileShape from '@/assets/svg/white-curve-mobile.svg?inline'

export default {
  name: 'CurveShape',
  components: {
    WhiteCurveDesktopShape,
    WhiteCurveMonitorShape,
    WhiteCurveMobileShape,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

.curve-shape {
  &.banner {
    position: relative;
    top: 1px;
  }
  .monitor-shape {
    display: none;

    @media (min-width: 1500px) {
      display: block;
    }
  }

  .desktop-shape {
    display: none;

    @media (min-width: 380px) {
      display: block;
    }

    @media (min-width: 1500px) {
      display: none;
    }
  }

  .mobile-shape {
    display: none;

    @media (max-width: 379px) {
      display: block;
    }
  }

  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
