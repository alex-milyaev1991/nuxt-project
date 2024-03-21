<template>
  <div class="search-menu">
    <div class="search-menu__input">
      <v-text-field
        v-model="searchInput"
        solo
        :label="$t('search')"
        prepend-inner-icon="mdi-magnify"
        @input="$emit('closeResults', showFilteredValues)"
      ></v-text-field>
      <v-btn
        icon
        class=""
        absolute
        top
        right
        title="close"
        @click="$emit('closeMenu', showFilteredValues)"
      >
        <img
          :src="require('@/assets/close.svg')"
          width="15"
          height="13"
          alt="close btn"
        />
      </v-btn>
    </div>

    <div v-if="showFilteredValues" class="search-result d-flex flex-column">
      <v-list class="min-height-auto-list-item">
        <v-list-item
          v-for="product in searchFilteredValues"
          :key="product.product_id"
          class="product d-flex flex-row align-center justify-flex-start solleBlack--text py-2"
          :to="`/product/${product.product_id}`"
        >
          <img :src="product.thumbnail_image" class="search-item-image" />
          <div
            class="product-details d-flex flex-column align-start justify-flex-center"
          >
            <div
              v-if="getTranslation(product.foramatedNameTranslation)"
              class="product-name solleBlack--text"
              v-html="getTranslation(product.foramatedNameTranslation)"
            ></div>
            <div v-else class="product-name">
              {{ product.name }}
            </div>
            <span
              v-if="getTranslation(product.product_tagline)"
              class="product-description"
            >
              {{ getTranslation(product.product_tagline) }}
            </span>
            <div v-if="false" class="product-price">
              ${{ product.wholesale_price }}
            </div>
          </div>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
import TranslationService from '@/services/TranslationService'

export default {
  name: 'SearchMenu',
  data() {
    return {
      searchInput: '',
      searchFilteredProducts: [],
      products: [],
    }
  },
  computed: {
    currentLang() {
      return this.$i18n.locale
    },
    showFilteredValues() {
      return this.searchInput?.length && this.searchFilteredValues?.length
    },
  },
  watch: {
    searchInput(newVal) {
      this.filterValues(newVal)
    },
  },
  mounted() {
    this.products = this.$store.state.shop.selectedRegionProducts
  },
  methods: {
    getTranslation(translationItem) {
      return TranslationService.getTranslationString(
        translationItem,
        this.currentLang
      )
    },

    filterValues(value) {
      const searchValue = value.toLowerCase()
      const filterValues = this.products.filter(function (product) {
        return (
          searchValue != '' && product.name.toLowerCase().includes(searchValue)
        )
      })

      this.searchFilteredValues = filterValues
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin.scss';

.search-menu {
  margin-top: 10px;
  width: 391px;
  min-height: 61px;
  background: #fff;
  border-radius: 0px 0px 8px 8px;
  box-shadow: 2px 6px 24px 0px rgba(16, 24, 40, 0.05);
  padding: 13px 10px;
  overflow: hidden;
  height: 98%;

  &__input {
    .v-input {
      padding: 0;
      margin: 0;
      height: 64px;
      overflow: hidden;
      margin-right: 46px;

      ::v-deep .v-input__slot {
        display: flex;
        width: 98%;
        padding: 10px 4px 10px 12px !important;
        align-items: center;
        gap: 10px;
        border-radius: 4px;
        background: #fff;
        box-shadow: 2px 4px 9px 0px rgba(16, 24, 40, 0.05) !important;
      }

      ::v-deep .v-icon {
        color: #98a2b3;
      }

      ::v-deep label {
        color: #d0d5dd;
      }
    }

    .v-btn--icon {
      top: 45px;
    }
  }

  .btn-x {
    position: absolute;
    top: 31px;
    right: 7px;
  }

  .search-result {
    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
    width: 100%;
    height: 100%;
    padding: 20px;

    @include atLarge {
      height: 797px;
    }

    ::v-deep .v-list-item {
      padding: 0 !important;
    }
    .product {
      margin-bottom: 26px;

      .product-details {
        padding-left: 25px;
        gap: 5px 0;
      }
      .product-name {
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 114%;
        letter-spacing: 0.35px;
        text-transform: capitalize;
      }
      .product-description {
        color: #000;
        font-family: Poppins;
        font-size: 10px;
        font-style: normal;
        font-weight: 300;
        line-height: 100%;
        letter-spacing: 0.35px;
      }

      .product-price {
        color: #2e2930;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 114%;
        letter-spacing: 0.35px;
        text-transform: capitalize;
        padding-top: 7px;
      }
    }
  }

  @include atLarge {
    width: 351px;
    height: fit-content;
  }
}

.search-item-image {
  width: 80px;
  height: 80px;
}
</style>

<i18n>
    {
      "en": {
        
      },
      "es": {
        
      }
    }
  </i18n>
