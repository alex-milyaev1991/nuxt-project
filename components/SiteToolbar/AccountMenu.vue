<template>
  <v-card
    :min-width="$vuetify.breakpoint.mdAndDown ? '100%' : 400"
    elevation="0"
  >
    <v-list-item class="py-2 px-7">
      <v-list-item-avatar>
        <v-img
          :src="
            user.profile_image
              ? user.profile_image
              : require('@/assets/account.svg')
          "
        ></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="text-h6">
          {{ user.first_name }} {{ user.last_name }}
        </v-list-item-title>
        <v-list-item-subtitle class="text-capitalize">
          {{ userType }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list nav class="px-lg-12">
      <v-list-item
        v-for="(item, index) in menuItems"
        :key="index"
        link
        :to="item.link || undefined"
        :href="item.href || undefined"
        style="min-height: 40px"
        exact-path
      >
        <v-list-item-content class="py-1 px-3 pl-lg-12">
          <v-list-item-title>
            <span v-html="item.title"></span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-card-text class="pt-4 pb-8 px-3 px-lg-12">
      <v-btn
        block
        to="/logout"
        color="solleGreen"
        large
        depressed
        class="white--text"
      >
        LOGOUT
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { USER_GROUPS } from '@/constants'

export default {
  name: 'AccountMenu',
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    username() {
      return this.user?.username
    },
    userType() {
      if (this.user.group_id == 2) {
        return this.$t('member')
      }

      if (this.user.group_id == 10) {
        return this.$t('brandSpecialist')
      }

      const maxGroupId = Math.max(...Object.keys(this.user.groups))
      return this.user.groups[maxGroupId]
    },

    backofficeDashboardUrl() {
      const backofficeUrl = process.env.backofficeUrl
      const { username, ssoKey } = this.$store.state.auth.user
      const auth = `&username=${username}&key=${ssoKey}`

      return this.isSpecialist
        ? `${backofficeUrl}/?navigation_item_id=132&navigation_item_type_id=1${auth}`
        : `${backofficeUrl}/profile/account_information.php?ref=%2Findex.php${auth}`
    },

    menuItems() {
      const menuItems = [
        {
          title: `${this.$t('my')} ${this.$t('account')}`,
          link: `/account/${this.username}`,
          userGroups: [
            USER_GROUPS.MEMBER,
            USER_GROUPS.SPECIALIST,
            USER_GROUPS.CUSTOMER_SERVICE,
          ],
        },
        {
          title: `${this.$t(
            'my'
          )} Solle<span class="font-weight-medium">Subscription</span>`,
          link: `/account/${this.username}/solle-safe`,
          userGroups: [USER_GROUPS.MEMBER, USER_GROUPS.SPECIALIST],
        },
        {
          title: `${this.$t('my')} ${this.$t('orderHistory')}`,
          link: `/account/${this.username}/orders`,
          userGroups: [USER_GROUPS.MEMBER, USER_GROUPS.SPECIALIST],
        },
        {
          title: `${this.$t('my')} ${this.$t('dashboard')}`,
          link: `/beta/specialist/${this.username}/dashboard`,
          userGroups: [USER_GROUPS.SPECIALIST],
        },
        {
          title: `Admin ${this.$t('dashboard')}`,
          link: `/beta/admin/dashboard`,
          userGroups: [USER_GROUPS.CUSTOMER_SERVICE],
        },
        {
          title: this.$t('backoffice'),
          href: this.backofficeDashboardUrl,
          userGroups: [USER_GROUPS.SPECIALIST, USER_GROUPS.CUSTOMER_SERVICE],
        },
        {
          title: this.$t('resourceCenter'),
          link: `/specialist/resource-center`,
          userGroups: [USER_GROUPS.SPECIALIST],
        },
      ]

      return menuItems.filter((item) =>
        item.userGroups.some((groupId) => this.user.group_id === groupId)
      )
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin.scss';

.account-menu {
  width: 390px;
  height: 330px;
  padding: 14px 14px 40px 36px;

  &__list {
    padding: 0;

    &__item {
      padding: 0;
      &.has-icon {
        justify-content: flex-end;
        margin-bottom: 14px;
        img {
          cursor: pointer;
        }
      }

      &__links {
        width: 100%;
        h3 {
          font-weight: 600;
          font-size: 16px;
        }

        &__container {
          margin-top: 18px;
          margin-left: 30px;

          a {
            font-weight: 400;
            font-size: 16px;
            display: inline-block;
            color: #2e2930;
            text-decoration: none;
            padding: 6px 0;
          }
        }
      }

      &__logout {
        margin-top: 40px;
        width: 100%;
        padding-right: 20px;

        @include atXSmall {
          width: 50%;
          padding-right: 0px;
          height: 35px !important;
        }

        a {
          text-decoration: none;
          border-radius: 4px;
          font-size: 20px;
          color: #fff;
          padding: 12px;
          text-align: center;
          background-color: #828281;
          width: 100%;
          display: block;
          text-transform: uppercase;

          @include atXSmall {
            height: 35px;
            padding: 4px;
          }
        }
      }
    }
  }
}
</style>
