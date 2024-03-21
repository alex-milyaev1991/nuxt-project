<script>
export default {
  name: 'ProductLandingAnimation',
  props: {
    delay: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 650,
    },
    variant: {
      type: String,
      default: 'slideDown',
      validator: (value) =>
        ['slideDown', 'slideLeft', 'opacity'].includes(value),
    },
    visible: {
      type: String,
      default: 'visibleOnce',
      validator: (value) => ['visibleOnce', 'visible', 'enter'].includes(value),
    },
  },
  data() {
    return {
      style: ``,
      observer: null,
      isVisible: false,
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              this.isVisible = true
            }, this.$props.delay)

            this.observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    this.observer.observe(this.$refs.observerRef)
  },
  destroyed() {
    this.observer.disconnect()
  },
}
</script>

<template>
  <div
    ref="observerRef"
    :style="{ transitionDuration: `${$props.duration}ms` }"
    :class="['animate', variant, { isVisible: isVisible }]"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import 'assets/ProductLandingPages/styles/variables.scss';

.animate {
  opacity: 0;

  &.slideDown {
    transform: translateY(toRem(50));
  }

  &.slideLeft {
    transform: translateX(toRem(-50));
  }

  &.opacity {
    opacity: 0;
  }

  &.leafLeft {
    transform: translateX(-50%);
  }

  &.leaftRight {
    transform: translateX(50%);
  }

  &.isVisible {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
