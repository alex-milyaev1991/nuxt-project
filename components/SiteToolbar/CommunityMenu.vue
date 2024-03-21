<template>
  <v-list class="community-menu min-height-auto-list-item">
    <v-list-item
      v-for="(item, index) in shopItems"
      :key="index"
      class="community-menu__content"
    >
      <div class="community-menu__content__categories">
        <v-list-item
          v-for="(category, categoryIndex) in item.categories1"
          :key="categoryIndex"
          class="community-menu__content__categories__item"
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
            class="community-menu__content__categories__item__title"
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
        </v-list-item>
      </div>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'CommunityMenu',
  computed: {
    shopItems() {
      return [
        {
          title: [
            {
              text_key: this.$t('community'),
              link: '/blog/latest',
            },
          ],
          categories1: [
            // {
            //   text_key: this.$t('events'),
            //   link: '/happenings/solle-to-sol-2023',
            // },
            {
              text_key: this.$t('blog'),
              link: '/blog/latest',
            },
            {
              text_key: this.$t('wellth'),
              link: '/referral-program',
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
.community-menu {
  width: 240px;
  padding: 10px 0 31px 0;
  margin-top: 10px;
  &.v-menu__content {
    left: 0 !important;
    max-width: 100% !important;
    width: 100% !important;
    padding-top: 35px;
    padding-bottom: 60px;
  }
  &__content {
    &__categories {
      &__title {
      }
      &__item {
        &__title {
          font-size: 16px;
          line-height: 175%;
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

.hasSubCategories {
  display: block;
  > div {
    padding: 0 0 8px 42px !important;
    &:first-child {
      padding-left: 16px !important;
      font-size: 16px;
      line-height: 175%;
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
        "blog": "Blog",
        "wellth": "Share the WELLth"       
      },
      "es": {
        "blog": "Blogs",
        "wellth": "Da $10, Recibe $10"
      }
    }
  </i18n>
