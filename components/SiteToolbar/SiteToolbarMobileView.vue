<template>
  <nav style="max-width: 100vw; overflow-x: auto">
    <div elevation="0" class="site-menu-container" flat tile>
      <v-app-bar-nav-icon @click.stop="showDrawer = !showDrawer">
      </v-app-bar-nav-icon>

      <site-menu-items
        :show-drawer.sync="showDrawer"
        @closeMenu="showDrawer = false"
      />

      <nuxt-link class="logo-container" text to="/">
        <img src="../../assets/SolleLogo.svg" class="logo-img" />
      </nuxt-link>

      <div
        v-if="$auth.loggedIn"
        class="menu-icons__wrapper"
        @click.stop="showAccountMenu = !showAccountMenu"
      >
        <img
          :src="
            user.profile_image
              ? user.profile_image
              : require('@/assets/account.svg')
          "
          class="menu-icons rounded-circle"
        />

        <v-navigation-drawer v-model="showAccountMenu" fixed right>
          <account-menu @closeMenu="showAccountMenu = false" />
        </v-navigation-drawer>
      </div>

      <nuxt-link v-else text to="/login" class="menu-icons__wrapper">
        <img class="menu-icons" :src="require('@/assets/account.svg')" />
      </nuxt-link>

      <div
        class="menu-icons__wrapper"
        @click.stop="showAccountMenu = !showAccountMenu"
      >
        <v-badge
          :value="cartTotalQuantity"
          color="solleGreen"
          dot
          left
          offset-x="6px"
          offset-y="9px"
        >
          <img
            :src="require('@/assets/shopping_cart.svg')"
            class="menu-icons"
            @click.stop="showCartMenu = !showCartMenu"
          />
        </v-badge>
      </div>

      <v-navigation-drawer v-model="showCartMenu" fixed right>
        <cart-menu @closeMenu="showCartMenu = false" />
      </v-navigation-drawer>

      <div
        class="menu-icons__wrapper"
        @click.stop="showLangMenu = !showLangMenu"
      >
        <img src="@/assets/language.svg" class="menu-icons" />
      </div>

      <v-navigation-drawer v-model="showLangMenu" fixed right>
        <language-menu @closeMenu="showLangMenu = false" />
      </v-navigation-drawer>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import SiteMenuItems from './SiteMenuItemsMobile.vue'
import CartMenu from './CartMenu.vue'
import LanguageMenu from './LanguageMenu.vue'
import AccountMenu from './AccountMenu.vue'

export default {
  name: 'SiteToolbarMobileView',
  components: {
    SiteMenuItems,
    CartMenu,
    LanguageMenu,
    AccountMenu,
  },
  data() {
    return {
      showDrawer: false,
      showLangMenu: false,
      showCartMenu: false,
      showAccountMenu: false,
      showSearchMenu: false,
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
    ...mapGetters({
      cartTotalQuantity: 'cart/cartTotalQuantity',
    }),
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin.scss';

.site-menu-container {
  min-width: 100% !important;
  width: 100% !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding-left: 12px;
}

::v-deep .v-toolbar__content {
  width: 100%;
}
.site-menu {
  background-color: #fff !important;
}

.logo-container {
  display: flex;
  width: 100%;
  justify-content: center;
}
.logo-img {
  width: 80px;
  height: 30px;
}

.menu-icons {
  width: 20px !important;
  height: 20px !important;

  &__wrapper {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
  }
}
.searchIcon {
  width: 20px;
  height: 20px;
  color: #2e2930;

  @include atSmallAndDown {
    width: 17px;
    height: 18px;
  }
}
</style>
