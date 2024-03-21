<template>
  <v-container fluid class="py-0 site-menu">
    <v-list class="site-menu__content min-height-auto-list-item">
      <v-list-item class="site-menu__content__item d-none">
        <v-btn
          icon
          class="site-menu__content__item__input--close"
          @click="$emit('closeMenu')"
        >
          <img src="../../assets/close.svg" width="17" height="17" />
        </v-btn>

        <img
          src="../../assets/search.svg"
          width="17"
          height="17"
          class="site-menu__content__item__input--icon hidden"
        />
        <input
          type="text"
          placeholder="Search"
          class="site-menu__content__item__input hidden"
        />
      </v-list-item>

      <div class="d-flex">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          class="site-menu__content__categories"
        >
          <v-list-item-title class="site-menu__content__categories__title">
            <div
              v-for="(title, titleIndex) in item.title"
              :key="titleIndex"
              class="site-menu__content__categories__title__container"
              :class="{
                'd-none': title.hidden,
              }"
            >
              <v-btn
                :to="title.link"
                class="solleBlack--text text-capitalize"
                @click="$emit('closeMenu')"
                >{{ title.text_key }}
              </v-btn>
            </div>
          </v-list-item-title>

          <div class="d-flex">
            <div v-if="item.categories1" class="site-menu__content__categories">
              <v-list-item
                v-for="(category, categoryIndex) in item.categories1"
                :key="categoryIndex"
                class="site-menu__content__categories__item"
                :class="{
                  hasSubCategories: category.subcategories,
                  'd-none': category.hidden,
                }"
              >
                <v-list-item-title
                  class="site-menu__content__categories__item__title"
                  ><v-btn
                    v-if="category.link"
                    text
                    :to="category.link"
                    @click="$emit('closeMenu')"
                    >{{ category.text_key }}</v-btn
                  >
                  <span v-else>{{ category.text_key }}</span>
                </v-list-item-title>
                <template v-if="category.subcategories">
                  <v-list-item
                    v-for="(
                      subcategory, subCategoryIndex
                    ) in category.subcategories"
                    :key="subCategoryIndex"
                    class="site-menu__content__categories__item__subcategory"
                  >
                    <v-list-item-title
                      class="site-menu__content__categories__item__subcategory__title"
                      ><v-btn
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

            <div
              v-if="item.categories2"
              class="site-menu__content__categories ml-lg-13"
            >
              <v-list-item
                v-for="(category2, category2Index) in item.categories2"
                :key="category2Index"
                class="site-menu__content__categories__item"
                :class="{ hasSubCategories: category2.subcategories }"
              >
                <v-list-item-title
                  class="site-menu__content__categories__item__title"
                >
                  <span text to="/">{{ category2.title.text_key }}</span>
                </v-list-item-title>

                <v-list-item
                  v-for="(
                    subcategory, subcategoryIndex
                  ) in category2.subcategories"
                  :key="subcategoryIndex"
                  class="site-menu__content__categories__item__subcategory"
                >
                  <v-list-item-title
                    class="site-menu__content__categories__item__subcategory__title"
                    ><v-btn
                      text
                      :to="subcategory.link"
                      @click="$emit('closeMenu')"
                      >{{ subcategory.text_key }}</v-btn
                    ></v-list-item-title
                  >
                </v-list-item>
              </v-list-item>
            </div>
          </div>
        </v-list-item>
      </div>
    </v-list>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SiteMenuItems',
  computed: {
    ...mapGetters({
      onReplicateSite: 'replicateSite/onReplicateSite',
    }),
    items() {
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
              text_key: this.$t('byCategory'),
              subcategories: [
                {
                  text_key: this.$t('nav.shop.balance'),
                  link: '/shop/balance',
                },
                {
                  text_key: this.$t('nav.shop.lift'),
                  link: '/shop/lift',
                },
                {
                  text_key: this.$t('nav.shop.clarify'),
                  link: '/shop/clarify',
                },
                {
                  text_key: this.$t('nav.shop.calm'),
                  link: '/shop/calm',
                },
              ],
            },
            {
              text_key: this.$t('ingredient'),
              link: '/discover/ingredients',
            },
            {
              text_key: this.$t('nav.shop.packages'),
              link: '/shop/packages',
            },
            {
              text_key: this.$t('merchandise'),
              link: '/shop/merchandise',
            },
          ],
          categories2: [
            {
              title: { text_key: this.$t('purpose') },
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
        {
          title: [
            {
              text_key: this.$t('discover'),
              link: '/discover/our-philosophy-old',
            },
          ],

          categories1: [
            {
              text_key: this.$t('story'),
              link: '/discover/our-story',
              hidden: true,
            },
            {
              text_key: this.$t('nav.aboutUs.ourTeam'),
              link: '/discover/our-team',
            },
            {
              text_key: this.$t('nav.aboutUs.ourPhilosophy'),
              link: '/discover/our-philosophy-old',
            },
            {
              text_key: this.$t('nav.aboutUs.ourGuarentee'),
              link: '/discover/our-guarantee',
            },
            {
              text_key: this.$t('ingredients'),
              link: '/discover/ingredients',
            },
            {
              text_key: this.$t('nav.aboutUs.ourFoundtation'),
              link: '/discover/our-foundation',
            },
            {
              text_key: this.$t('nav.aboutUs.ourStory'),
              link: '/discover/our-story',
            },
            {
              text_key: this.$t('reviews'),
              link: '/discover/our-reviews',
              hidden: true,
            },
            {
              text_key: this.$t('faq'),
              link: '/discover/faq',
              hidden: true,
            },
          ],
        },
        {
          title: [
            {
              text_key: this.$t('blog'),
              link: '/blog/latest',
            },
          ],
        },
        {
          title: [
            {
              text_key: this.$t('rewards'),
              link: '/rewards',
            },
            {
              // text_key: this.$t('siteMenu.stressAndYou'),
              link: '/how-stress-affects-your-health',
              text_key: this.$t('takequiz'),
              // link: '/product-selector',
            },
            {
              text_key: this.$t('becomeSpecialist'),
              link: '/become-a-brand-specialist',
              hidden: true,
            },
          ],
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin.scss';
.site-menu {
  &.v-menu__content {
    left: 0 !important;
    max-width: 100% !important;
    width: 100% !important;
    padding-top: 35px;
    padding-bottom: 60px;
  }

  padding: 0 80px;
  &__content {
    padding: 0;

    & > .d-flex > .site-menu__content__categories:nth-child(2),
    .site-menu__content__categories:nth-child(3) {
      margin: 0 50px !important;
      @include atXLarge {
        margin: 0 120px !important;
      }
    }

    &__item {
      padding: 0;
      margin-bottom: 40px;

      &__input {
        outline: none;
        border-top: 1px solid #2e2930;
        border-bottom: 1px solid #2e2930;
        line-height: 28px;
        width: 300px;
        height: 30px;
        color: #2e2930;
        padding-left: 24px;
        padding-top: 8px;
        padding-bottom: 8px;
        font-weight: 300;
        &--icon {
          position: absolute;
        }
        &--close {
          position: absolute;
          right: -35px;
          top: 0;
        }
      }
    }

    &__categories {
      display: block;
      padding: 0;
      flex: 0;

      &__title {
        &__container {
          display: flex;
          flex-direction: column;
          align-items: baseline;
          margin-bottom: 20px;
        }
        a {
          font-weight: 600 !important;
          height: auto !important;
          min-width: auto !important;
          padding: 0 !important;
          box-shadow: none !important;
          background-color: transparent !important;
          font-size: 16px;
          text-decoration: none;
          letter-spacing: initial;
          line-height: 1.5;
        }
      }

      &__item {
        padding: 0 0 12px 42px;

        &:last-child {
          padding-bottom: 0;
        }

        &__title {
          a,
          button,
          span {
            padding: 0 !important;
            font-size: 16px !important;
            font-weight: 400;
            height: auto !important;
            text-transform: none;
            display: inline-flex;
            justify-content: initial;
            line-height: 1.5;
            text-decoration: none;
            color: #2e2930;
            letter-spacing: initial;

            span {
              display: block;
            }
          }
        }

        &__subcategory {
          padding: 0 !important;

          &__title {
            a {
              padding: 0 !important;
              font-size: 16px !important;
              font-weight: 400;
              height: auto !important;
              text-transform: none;
              justify-content: initial;
              letter-spacing: initial;

              span {
                display: block;
              }
            }
          }
        }
      }
    }
  }
}

.hasSubCategories {
  display: block;
  > div {
    padding: 0 0 12px 42px !important;
    &:first-child {
      padding-left: 0 !important;
    }
    &:last-child {
      padding-bottom: 0 !important;
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
      "byCategory": "By Category",
      "ingredient": "By Ingredient",
      "merchandise": "Merchandise",
      "story": "Our Story",
      "ingredients": "Our Ingredients",
      "reviews": "Our Reviews",
      "faq": "FAQs",
      "blog": "Blog",
      "rewards": "Rewards",
      "purpose": "By Purpose",
      "mentalHealth": "Mental Health",
      "gutHealth": "Gut Health",
      "sleep": "Sleep",
      "immunity": "Immunity",
      "hormonalHealth": "Hormonal Health",
      "antiAging": "Anti-aging",
      "energy": "Energy",
      "weightManagement": "Weight Management",
      "takequiz": "Take Our Quiz",
      "becomeSpecialist": "Become a Brand Specialist"
    },
    "es": {
      "bestSellers": "Más Vendidos",
      "byCategory": "Categorías",
      "ingredient": "Por Ingrediente",
      "merchandise": "Artículos",
      "story": "Nuestra Historia",
      "ingredients": "Nuestros Ingredientes",
      "reviews": "Reseñas",
      "faq": "Preguntas Frecuentes",
      "blog": "Blogs",
      "rewards": "SolleRewards",
      "purpose": "Objetivo",
      "mentalHealth": "Salud Mental",
      "gutHealth": "Salud Intestinal",
      "sleep": "Dormir",
      "immunity": "Inmunidad",
      "hormonalHealth": "Salud Hormonal",
      "antiAging": "Anti-edad",
      "energy": "Energía",
      "weightManagement": "Control de Peso",
      "takequiz": "Cuestionario",
      "becomeSpecialist": "Conviértete en Especilaista"
    }
  }
</i18n>
