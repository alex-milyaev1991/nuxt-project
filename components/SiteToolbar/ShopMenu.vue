<template>
  <v-list class="shop-menu min-height-auto-list-item">
    <v-list-item
      v-for="(item, index) in shopItems"
      :key="index"
      class="shop-menu__content"
    >
      <div class="shop-menu__content__categories">
        <div class="main-links">
          <v-list-item
            v-for="(category, categoryIndex) in item.categories1"
            :key="categoryIndex"
            class="shop-menu__content__categories__item"
            :class="{
              hasSubCategories: category.subcategories,
              'd-none': category.hidden,
              'mb-2':
                categoryIndex !== item.categories1.length - 1 &&
                !category.subcategories,
              'mb-4':
                categoryIndex !== item.categories1.length - 1 &&
                category.subcategories,
            }"
          >
            <v-list-item
              v-if="category.link"
              class="shop-menu__content__categories__item__title"
              ><v-btn
                class="solleBlack--text"
                text
                :to="category.link"
                @click="$emit('closeMenu')"
                >{{ category.text_key }}</v-btn
              >
            </v-list-item>
            <v-list-item v-else class="pl-4 py-2">{{
              category.text_key
            }}</v-list-item>

            <template v-if="category.subcategories">
              <v-list-item
                v-for="(
                  subcategory, subCategoryIndex
                ) in category.subcategories"
                :key="subCategoryIndex"
                class="shop-menu__content__subcategory"
              >
                <v-list-item-title
                  class="shop-menu__content__subcategory__title"
                  ><v-btn
                    class="solleBlack--text"
                    text
                    :to="subcategory.link"
                    @click="$emit('closeMenu')"
                    >{{ subcategory.text_key }}</v-btn
                  ></v-list-item-title
                >
              </v-list-item>
            </template>
          </v-list-item>
        </div>

        <div class="with-subcategories1">
          <v-list-item
            v-for="(category, categoryIndex) in item.categories2"
            :key="categoryIndex"
            class="shop-menu__content__categories__item"
            :class="{
              hasSubCategories: category.subcategories,
              'd-none': category.hidden,
              'mb-2':
                categoryIndex !== item.categories1.length - 1 &&
                !category.subcategories,
              'mb-4':
                categoryIndex !== item.categories1.length - 1 &&
                category.subcategories,
            }"
          >
            <v-list-item
              v-if="category.link"
              class="shop-menu__content__categories__item__title"
            >
              <v-btn
                class="solleBlack--text"
                text
                :to="category.link"
                @click="$emit('closeMenu')"
              >
                {{ category.text_key }}
              </v-btn>
            </v-list-item>

            <v-list-item v-else class="py-2 list-item-title">
              {{ category.text_key }}
            </v-list-item>

            <section>
              <template v-if="category.subcategories">
                <v-btn
                  v-for="(
                    subcategory, subCategoryIndex
                  ) in category.subcategories"
                  :key="subCategoryIndex"
                  class="solleBlack--text"
                  text
                  :to="subcategory.link"
                  @click="$emit('closeMenu')"
                >
                  <img
                    width="56"
                    height="56"
                    :src="subcategory.img"
                    :alt="'solle natural category ' + subcategory.text_key"
                  />
                </v-btn>
              </template>
            </section>
          </v-list-item>
        </div>

        <div class="with-subcategories2">
          <v-list-item
            v-for="(category, categoryIndex) in item.categories3"
            :key="categoryIndex"
            class="shop-menu__content__categories__item"
            :class="{
              hasSubCategories: category.subcategories,
              'd-none': category.hidden,
              'mb-2':
                categoryIndex !== item.categories1.length - 1 &&
                !category.subcategories,
              'mb-4':
                categoryIndex !== item.categories1.length - 1 &&
                category.subcategories,
            }"
          >
            <v-list-item
              v-if="category.link"
              class="shop-menu__content__categories__item__title"
              ><v-btn
                class="solleBlack--text"
                text
                :to="category.link"
                @click="$emit('closeMenu')"
                >{{ category.text_key }}</v-btn
              >
            </v-list-item>
            <v-list-item v-else class="py-2 list-item-title">{{
              category.text_key
            }}</v-list-item>

            <section class="pl-4">
              <template v-if="category.subcategories">
                <v-btn
                  v-for="(
                    subcategory, subCategoryIndex
                  ) in category.subcategories"
                  :key="subCategoryIndex"
                  class="solleBlack--text"
                  text
                  :to="subcategory.link"
                  @click="$emit('closeMenu')"
                  >{{ subcategory.text_key }}</v-btn
                >
              </template>
            </section>
          </v-list-item>
        </div>
      </div>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'ShopMenu',
  computed: {
    shopItems() {
      return [
        {
          title: [
            {
              text_key: this.$t('nav.shop.title'),
              link: '/shop/all',
            },
          ],
          categories1: [
            {
              text_key: this.$t('bestSellers'),
              link: '/shop/best-sellers',
            },
            {
              text_key: this.$t('nav.shop.packages'),
              link: '/shop/packages',
            },
            {
              text_key: this.$t('ingredient'),
              link: '/discover/ingredients',
            },
            {
              text_key: this.$t('merchandise'),
              link: '/shop/merchandise',
            },
          ],
          categories2: [
            {
              text_key: this.$t('byCategory'),
              subcategories: [
                {
                  text_key: this.$t('nav.shop.balance'),
                  link: '/shop/balance',
                  img: require('@/assets/category_icons/IconBalanceCategory.png'),
                },
                {
                  text_key: this.$t('nav.shop.lift'),
                  link: '/shop/lift',
                  img: require('@/assets/category_icons/IconLiftCategory.png'),
                },
                {
                  text_key: this.$t('nav.shop.clarify'),
                  link: '/shop/clarify',
                  img: require('@/assets/category_icons/IconClarifyCategory.png'),
                },
                {
                  text_key: this.$t('nav.shop.calm'),
                  link: '/shop/calm',
                  img: require('@/assets/category_icons/IconCalmCategory.png'),
                },
              ],
            },
          ],
          categories3: [
            {
              text_key: this.$t('purpose'),
              subcategories: [
                {
                  text_key: this.$t('mentalHealth'),
                  link: '/shop/mental-health',
                },
                {
                  text_key: this.$t('gutHealth'),
                  link: '/shop/gut-health',
                },
                {
                  text_key: this.$t('sleep'),
                  link: '/shop/sleep',
                },
                {
                  text_key: this.$t('immunity'),
                  link: '/shop/immunity',
                },
                {
                  text_key: this.$t('hormonalHealth'),
                  link: '/shop/hormonal-health',
                },
                {
                  text_key: this.$t('antiAging'),
                  link: '/shop/anti-aging',
                },
                {
                  text_key: this.$t('energy'),
                  link: '/shop/energy',
                },
                {
                  text_key: this.$t('weightManagement'),
                  link: '/shop/weight-management',
                },
              ],
            },
          ],
        },
      ]
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin.scss';
.shop-menu {
  width: 750px;
  padding: 15px 0 31px 0;
  margin-top: 10px;

  &.v-menu__content {
    left: 0 !important;
    max-width: 100% !important;
    width: 100% !important;
    padding-top: 35px;
    padding-bottom: 60px;
  }
  &__content {
    padding: 0;
    &__categories {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      &__item {
        &__title {
          text-align: left;
          padding-left: 0px !important;
          border-radius: 4px;

          &:hover {
            background-color: #f6f5ef;
            .actionless {
              background: white;
            }
          }
          .actionless {
            padding-left: 20px;
          }

          a {
            font-size: 16px;
            line-height: 175%;
            letter-spacing: normal;
            text-transform: initial;
            font-weight: 400;
          }
        }
      }
    }
    &__subcategory {
      &__title {
        &:hover {
          background-color: #f6f5ef;
        }
      }
    }
  }
}

.main-links {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: self-start;
  height: 176px;

  ::v-deep .v-list-item {
    align-items: flex-start;
    line-height: 100%;
  }
}

.with-subcategories1 {
  height: 176px;
  padding: 0 24px 0 36px;
  border-left: 1px solid #c0df16;
  min-width: 189px;
  ::v-deep .v-list-item {
    padding: 0px !important;
  }

  .list-item-title {
    padding: 8px 0 !important;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    width: 142px;
    padding-top: 16px;
    gap: 4px;

    ::v-deep .v-btn:not(.v-btn--round).v-size--default {
      height: 56px;
      width: 56px;
      min-width: 56 !important;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Poppins !important;
      font-style: normal;
      height: 28px;
      font-size: 12px;
      color: #2e2930 !important;
      line-height: 28px;
      padding: 0 !important;
      text-transform: capitalize;

      &:hover {
        cursor: pointer;
      }
    }

    ::v-deep .v-list-item {
      padding: 0px !important;
    }
  }
}
.with-subcategories2 {
  border-left: 1px solid #c0df16;
  padding-left: 14px;
  height: 176px;
  ::v-deep .v-list-item {
    padding: 0px !important;
  }

  .list-item-title {
    padding: 8px 0 !important;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;

    ::v-deep v-item .v-btn:not(.v-btn--round).v-size--default {
      height: 28px;
    }

    a {
      font-family: Poppins !important;
      font-style: normal;
      width: 150px !important;
      height: 28px;
      font-size: 12px;
      color: #2e2930 !important;
      line-height: 28px;
      padding: 0 11px !important;
      text-transform: capitalize;

      &:last-child {
        width: 173px !important;
      }

      &:hover {
        cursor: pointer;
        background-color: #f6f5ef;
      }
    }
  }
}
.hasSubCategories {
  display: block;
  > div {
    padding: 0 0 8px 42px !important;
    &:first-child {
      padding-left: 16px !important;
      font-size: 16px;
      line-height: 100%;
    }
    &:last-child {
      padding-bottom: 0 !important;
    }

    .v-list-item__title {
      border-radius: 4px;
    }

    a {
      font-size: 16px;
      line-height: 175%;
      text-transform: initial;
      font-weight: 400;
      letter-spacing: normal;
    }
  }
}
.hasSubCategories .categories-subcategories a {
  padding-left: 65px !important;
}
</style>

<i18n>
      {
        "en": {
          "bestSellers": "Best Sellers",
          "byCategory": " Category",
          "ingredient": "By Ingredients",
          "merchandise": "Merchandise",
          "purpose": " Purpose",
          "mentalHealth": "Mental Health",
          "gutHealth": "Gut Health",
          "sleep": "Sleep",
          "immunity": "Immunity",
          "hormonalHealth": "Hormonal Health",
          "antiAging": "Anti-aging",
          "energy": "Energy",
          "weightManagement": "Weight Management"
        },
        "es": {
          "bestSellers": "Más Vendidos",
          "byCategory": "Categorías",
          "ingredient": "Por Ingrediente",
          "merchandise": "Artículos",
          "purpose": "Objetivo",
          "mentalHealth": "Salud Mental",
          "gutHealth": "Salud Intestinal",
          "sleep": "Dormir",
          "immunity": "Inmunidad",
          "hormonalHealth": "Salud Hormonal",
          "antiAging": "Anti-edad",
          "energy": "Energía",
          "weightManagement": "Control de Peso"
        }
      }
    </i18n>
