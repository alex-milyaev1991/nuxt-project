<template>
  <v-navigation-drawer
    v-model="passedShowDrawer"
    fixed
    app
    class="site-menu-mobile"
  >
    <v-list>
      <v-navigation-drawer
        v-model="showSearchMenu"
        fixed
        left
        width="391"
        overflow="hidden"
        background-color="#fff"
        class="search-drawer search-drawer__mobile"
      >
        <search-menu
          @closeMenu="handleCloseMenu()"
          @closeResults="closeResults()"
        />
      </v-navigation-drawer>

      <div
        v-if="!showSearchMenu && showMenuLinks"
        class="site-menu-mobile-links"
      >
        <template v-for="item in navItems">
          <!-- Top Level Group -->
          <v-list-group
            v-if="item.categories"
            :key="item.key + '-group'"
            :class="{
              'd-none': item.hidden,
              'last-nav-item': item.bottomMargin,
            }"
            sub-group
            :value="openGroup"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title @click="setOpenGroup()">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <template v-for="category in item.categories">
              <!-- Second Level Group -->
              <v-list-group
                v-if="category.subcategories"
                :key="category.key + '-group'"
                sub-group
                prepend-icon="$expand"
                :class="{
                  'd-none': category.hidden,
                }"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>{{ category.title }}</v-list-item-title>
                  </v-list-item-content>
                </template>

                <!-- Third Level Link -->
                <v-list-item
                  v-for="subcategory in category.subcategories"
                  :key="subcategory.key"
                  :to="subcategory.link"
                  exact
                  :class="{
                    'd-none': subcategory.hidden,
                  }"
                >
                  <v-list-item-title v-if="subcategory.title">{{
                    subcategory.title
                  }}</v-list-item-title>
                  <img
                    v-else-if="subcategory.src"
                    :src="subcategory.src"
                    :alt="subcategory.key"
                  />
                  <div
                    v-else
                    class="subcategory-icon"
                    v-html="subcategory.icon"
                  />
                </v-list-item>
              </v-list-group>

              <!-- Second Level Link -->

              <v-list-item
                v-else-if="category.onClick"
                :key="category.key + '-item-click'"
                :class="{
                  'd-none': category.hidden,
                }"
                @click="category.onClick"
              >
                <v-list-item-title>{{ category.title }}</v-list-item-title>
              </v-list-item>

              <v-list-item
                v-else
                :key="category.key + '-item-link'"
                :to="category.link"
                exact
                :class="{
                  'd-none': category.hidden,
                }"
              >
                <v-list-item-title>{{ category.title }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-list-group>

          <!-- Top Level Link -->
          <v-list-item
            v-else
            :key="item.key + '-item'"
            :to="item.link"
            exact
            :class="{
              'd-none': item.hidden,
              'last-nav-item': item.bottomMargin,
            }"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </div>
    </v-list>

    <v-dialog v-model="enrollModal" max-width="450">
      <redirect-enrollment
        :member="enrollingMember"
        @closeModal="enrollModal = false"
      />
    </v-dialog>
  </v-navigation-drawer>
</template>

<script>
import AuthorizationService from '@/services/AuthorizationService.js'
import { mapState, mapGetters } from 'vuex'
import SearchMenu from './SearchMenu.vue'
import BalanceIcon from '@/assets/svg/balance_category_w_text.svg?raw'
import CalmIcon from '@/assets/svg/calm_category_w_text.svg?raw'
import ClarifyIcon from '@/assets/svg/clarify_category_w_text.svg?raw'
import LiftIcon from '@/assets/svg/lift_category_w_text.svg?raw'

export default {
  name: 'SiteMenuItemsMobile',
  components: {
    RedirectEnrollment: () =>
      import('~/components/pages/RedirectEnrollment2.vue'),
    SearchMenu,
  },
  props: {
    showDrawer: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    enrollModal: false,
    enrollingMember: true,
    showSearchMenu: false,
    showMenuLinks: true,
    openGroup: undefined,
  }),
  computed: {
    ...mapState({
      loggedIn: (state) => state.auth.loggedIn,
      referralCode: (state) => state.referralCode.referralCode,
    }),
    ...mapGetters({
      onReplicateSite: 'replicateSite/onReplicateSite',
    }),
    showTakeQuizButton() {
      return this.loggedIn || this.onReplicateSite || this.referralCode
    },
    passedShowDrawer: {
      get() {
        return this.showDrawer
      },
      set(show) {
        this.$emit('update:showDrawer', show)
      },
    },
    navItems() {
      return [
        {
          key: 'shop',
          title: this.$t('siteMenu.shop.title'),
          link: '/shop/all',
          categories: [
            {
              key: 'shop-best-sellers',
              link: '/shop/best-sellers',
              title: this.$t('siteMenu.shop.bestSellers'),
            },
            {
              key: 'shop-category',
              link: '/shop/balance',
              title: this.$t('siteMenu.shop.categories.title'),
              subcategories: [
                {
                  key: 'shop-category-balance',
                  link: '/shop/balance',
                  icon: BalanceIcon,
                },
                {
                  key: 'shop-category-lift',
                  link: '/shop/lift',
                  icon: LiftIcon,
                },
                {
                  key: 'shop-category-clarify',
                  link: '/shop/clarify',
                  icon: ClarifyIcon,
                },
                {
                  key: 'shop-category-calm',
                  link: '/shop/calm',
                  icon: CalmIcon,
                },
              ],
            },
            {
              key: 'shop-purpose',
              link: '/shop/mental-health',
              title: this.$t('siteMenu.shop.purpose.title'),
              subcategories: [
                {
                  key: 'shop-purpose-mental-health',
                  link: '/shop/mental-health',
                  title: this.$t('siteMenu.shop.purpose.mentalHealth'),
                },
                {
                  key: 'shop-purpose-gut-health',
                  link: '/shop/gut-health',
                  title: this.$t('siteMenu.shop.purpose.gutHealth'),
                },
                {
                  key: 'shop-purpose-sleep',
                  link: '/shop/sleep',
                  title: this.$t('siteMenu.shop.purpose.sleep'),
                },
                {
                  key: 'shop-purpose-immunity',
                  link: '/shop/immunity',
                  title: this.$t('siteMenu.shop.purpose.immunity'),
                },
                {
                  key: 'shop-purpose-hormonal-health',
                  link: '/shop/hormonal-health',
                  title: this.$t('siteMenu.shop.purpose.hormonalHealth'),
                },
                {
                  key: 'shop-purpose-anti-aging',
                  link: '/shop/anti-aging',
                  title: this.$t('siteMenu.shop.purpose.antiAging'),
                },
                {
                  key: 'shop-purpose-energy',
                  link: '/shop/energy',
                  title: this.$t('siteMenu.shop.purpose.energy'),
                },
                {
                  key: 'shop-purpose-weight-management',
                  link: '/shop/weight-management',
                  title: this.$t('siteMenu.shop.purpose.weightManagement'),
                },
              ],
            },
            {
              key: 'shop-by-ingredients',
              link: '/discover/ingredients',
              title: this.$t('siteMenu.shop.byIngredient'),
            },
            {
              key: 'shop-packages',
              link: '/shop/packages',
              title: this.$t('siteMenu.shop.packages'),
            },
            {
              key: 'shop-merchandise',
              link: '/shop/merchandise',
              title: this.$t('siteMenu.shop.merchandise'),
            },
          ],
        },
        {
          key: 'discover',
          link: '/discover/out-story',
          title: this.$t('siteMenu.discover.title'),
          categories: [
            {
              key: 'discover-our-story',
              link: '/discover/our-story',
              title: this.$t('siteMenu.discover.ourStory'),
            },
            {
              key: 'discover-our-team',
              link: '/discover/our-team',
              title: this.$t('siteMenu.discover.ourTeam'),
            },
            {
              key: 'discover-our-philosophy',
              link: '/discover/our-philosophy',
              title: this.$t('siteMenu.discover.ourPhilosophy'),
            },
            {
              key: 'discover-our-guarantee',
              link: '/discover/our-guarantee',
              title: this.$t('siteMenu.discover.ourGuarantee'),
            },
            {
              key: 'discover-our-ingredients',
              link: '/discover/ingredients',
              title: this.$t('siteMenu.discover.ourIngredients'),
            },
            {
              key: 'discover-our-foundation',
              link: '/discover/our-foundation',
              title: this.$t('siteMenu.discover.ourFoundation'),
            },
            // {
            //   key: 'discover-our-reviews',
            //   link: '/discover/our-reviews',
            //   title: this.$t('siteMenu.community.reviews'),
            // },
            // {
            //   key: 'discover-our-faqs',
            //   link: '/discover/our-faqs',
            //   title: this.$t('siteMenu.community.faq'),
            // },
          ],
        },
        {
          key: 'blog',
          link: '/blog/latest',
          title: this.$t('siteMenu.community.blog'),
        },
        {
          key: 'reward',
          link: '/rewards',
          title: this.$t('siteMenu.rewards'),
          categories: [
            {
              key: 'rewards-maximize',
              link: '/rewards',
              title: this.$t('siteMenu.reward.maximize'),
            },
            {
              key: 'community-share-the-wellth',
              link: '/referral-program',
              title: this.$t('siteMenu.reward.wellth'),
            },
          ],
        },
        {
          key: 'stressAndYou',
          link: '/how-stress-affects-your-health',
          // title: this.$t('siteMenu.stressAndYou'),
          // link: '/product-selector',
          title: this.$t('siteMenu.takeQuiz'),
          hidden: !this.showTakeQuizButton,
        },
        {
          key: 'join',
          link: '/become-a-brand-specialist',
          title: this.$t('siteMenu.becomeSpecialist'),
          hidden: true,
        },
        {
          key: 'account',
          link: '/account/' + this.username,
          title: this.$t('nav.account.title'),
          hidden: !this.loggedIn,
          bottomMargin: !this.userIsSpecialist,
        },

        {
          key: 'quick-links',
          link: '/dashboard',
          title: this.$t('siteMenu.quickLinks.title'),
          hidden: !this.userIsSpecialist,
          categories: [
            {
              key: 'quick-links-dashboard',
              link: `/beta/specialist/${this.username}/dashboard`,
              title: this.$t('nav.specialist.dashboard'),
            },
            {
              key: 'quick-links-accountInfo',
              link: `/account/${this.username}`,
              title: this.$t('siteMenu.quickLinks.accountInfo'),
            },
            {
              key: 'quick-links-bankAccount',
              link: `/beta/account/${this.username}/bank-account`,
              title: this.$t('siteMenu.quickLinks.bankAccount'),
            },
            {
              key: 'quick-links-enrollments',
              link: `/specialist/${this.username}/dashboard/reports/downline-reportV2`,
              title: this.$t('siteMenu.quickLinks.enrollments'),
            },
            {
              key: 'quick-links-order-history',
              link: `/account/${this.username}/orders`,
              title: this.$t('siteMenu.quickLinks.orderHistory'),
            },
            {
              key: 'quick-links-reports',
              link: `/specialist/${this.username}/dashboard/reports/V2`,
              title: this.$t('siteMenu.quickLinks.reports'),
            },
            {
              key: 'quick-links-resourceCenter',
              link: `/specialist/resource-center`,
              title: this.$t('siteMenu.quickLinks.resourceCenter'),
            },
            {
              key: 'quick-links-solleSubscription',
              link: `/account/${this.username}/solle-safe`,
              title: this.$t('siteMenu.quickLinks.solleSubscription'),
            },
          ],
        },

        {
          key: 'enroll',
          link: '/become-a-brand-specialist',
          title: this.$t('siteMenu.enroll.title'),
          hidden: !this.userIsSpecialist,
          bottomMargin: this.userIsSpecialist,
          categories: [
            {
              key: 'enroll-member',
              title: this.$t('siteMenu.enroll.member'),
              onClick: this.openEnrollMemberModal,
            },
            {
              key: 'enroll-specialist',
              title: this.$t('siteMenu.enroll.brandSpecialist'),
              onClick: this.openEnrollSpecialistModal,
            },
          ],
        },
      ]
    },
    user() {
      if (this.$store.getters['masquerade/getIsMasquerading']) {
        return this.$store.getters['masquerade/getTargetUser']
      } else {
        return this.$auth.user
      }
    },
    username() {
      return this.user?.username || ''
    },
    userIsSpecialist() {
      if (!this.user) return false

      return AuthorizationService.isSpecialist(this.user)
    },
  },
  methods: {
    openEnrollSpecialistModal() {
      this.enrollingMember = false
      this.enrollModal = true
    },
    openEnrollMemberModal() {
      this.enrollingMember = true
      this.enrollModal = true
    },
    closeResults(showFilteredValues) {
      if (this.$vuetify.breakpoint.mobile && !this.showMenuLinks) {
        this.showMenuLinks = true
      }

      if (showFilteredValues) {
        this.showSearchMenu = true
      } else {
        this.showSearchMenu = false
      }
    },
    handleCloseMenu(showFilteredValues) {
      this.passedShowDrawer = !this.passedShowDrawer

      if (showFilteredValues) {
        this.showMenuLinks = false
      } else {
        this.showMenuLinks = true
      }
    },
    setOpenGroup() {
      if (this.openGroup === false) {
        this.openGroup = undefined
      }
    },
  },
}
</script>

<style lang="scss">
.subcategory-icon {
  width: 58px;
  padding: 8px 10px;
  display: flex;

  svg {
    width: 100%;
    height: auto;
  }
}

.last-nav-item {
  margin-bottom: 67px;
}
.site-menu-mobile {
  width: 100% !important;
  height: calc(100vh - 67px) !important;
  top: 67px !important;
  box-shadow: 2px 6px 24px 0px rgba(16, 24, 40, 0.05) !important;
  min-height: -webkit-fill-available;

  .v-list {
    padding-top: 0;
  }

  .search-menu {
    width: 100%;
    margin: 0;
    padding: 0 0 0 24px;

    .v-input {
      margin-right: 0;
      .v-input__control {
        min-height: auto;

        .v-input__slot {
          padding: 6px 4px 6px 16px !important;
          width: 80%;
        }

        .v-input__icon {
          width: 14px;
          height: 14px;
          min-width: 14px;

          i {
            font-size: 20px;
            color: #98a2b3;
          }
        }

        .v-text-field__slot {
          label {
            color: #d0d5dd;
          }
          input {
            font-size: 12px;
          }
        }
      }
    }

    .v-btn--icon {
      top: 20px;
      width: auto;
      height: auto;
      img {
        width: 18px;
        height: 18px;
      }
    }
  }

  .search-result {
    padding: 20px 0;
    max-width: 80%;
  }

  .v-list-item {
    color: #2e2930;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 24px;
  }

  .v-list-item__title {
    white-space: normal;
  }

  .v-list > .site-menu-mobile-links > .v-list-item,
  .v-list > .site-menu-mobile-links > .v-list-group > .v-list-item {
    padding-top: 8px;
    padding-bottom: 8px;

    .v-list-item__title {
      font-weight: 600 !important;
      font-size: 18px !important;
      line-height: 1.2 !important;
    }
  }

  .v-list-group--sub-group .v-list-group__header,
  .v-list-group__items > .v-list-item {
    padding-left: 24px !important;
  }

  .v-list-group--sub-group .v-list-group__items .v-list-item {
    padding-left: 56px !important;
  }

  .v-list-group--sub-group .v-list-group__header__prepend-icon {
    order: 2;
    align-self: center;
    margin: 0 !important;
    min-width: 48px;
    justify-content: flex-end;
  }

  .search-drawer__mobile {
    transform: translateX(0) !important;
    position: sticky;
    top: 0;
    visibility: visible;
    width: 100% !important;
    padding-top: 20px;
  }

  .v-list-group__items .v-list-group:nth-child(2) .v-list-group__items {
    display: flex;
    padding-left: 56px !important;
    margin-bottom: 10px;
    .v-list-item {
      padding: 0 !important;
      flex: none;
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .v-list-group__items .v-list-group:nth-child(3) a.v-list-item {
    padding-left: 92px !important;
  }

  .v-list-group__items
    .v-list-group__header
    .v-list-group__header__prepend-icon
    .v-icon {
    transform: rotate(0);
  }
  .v-list-group__items
    .v-list-group__header.v-list-item--active
    .v-list-group__header__prepend-icon
    .v-icon {
    transform: rotate(-180deg);
  }
}
</style>
