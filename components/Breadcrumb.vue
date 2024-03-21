<template>
  <v-breadcrumbs
    divider=">"
    :items="items"
    large
    class="breadcrumbs"
    :class="breadcrumbClasses"
  >
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item :to="item.routePath">
        <span class="breadcrumb-colors"> {{ item.text }} </span>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    breadcrumbClasses: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

.breadcrumbs {
  width: 100%;
  padding: 0;

  .breadcrumb-colors {
    color: #2e2930 !important;

    @include atSmallAndDown {
      font-size: 12px !important;
    }
  }

  &.cart-breadcrumbs {
    max-width: 90%;

    @include atSmallAndDown {
      max-width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  &.contact-me {
    @include atSmallAndDown {
      max-width: 90%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0;
      justify-content: flex-start;
    }

    span {
      font-weight: 300;
      @include atSmallAndDown {
        font-size: 14px !important;
      }
    }
  }

  &.ingredient-indivdual {
    ::v-deep .v-breadcrumbs__item--disabled {
      pointer-events: all;
    }
  }
}
</style>
