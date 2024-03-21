import qs from 'qs'

export default {
  namespaced: true,

  state: () => ({
    title: 'Solle Naturals',
    globalNavigation: [
      {
        id: 1,
        i18n: 'nav.home',
        icon: 'mdi-home',
        button: true,
        exact: true,
        menu: false,
        href: false,
        ssoKeyInfo: {
          needed: false,
          qm: false,
          and: true,
        },
        defaultRoute: '/',
        menuColumns: [],
      },
      {
        id: 2,
        i18n: 'nav.shop.title',
        icon: 'mdi-shopping',
        button: true,
        menu: true,
        exact: false,
        href: false,
        ssoKeyInfo: {
          needed: false,
          qm: false,
          and: true,
        },
        defaultRoute: '/shop/packages',
        menuColumns: [
          {
            columnId: 1,
            i18nTitle: 'nav.shop.productLines',
            routes: [
              {
                id: 1,
                i18n: 'nav.shop.balance',
                route: '/shop/balance',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              {
                id: 2,
                i18n: 'nav.shop.lift',
                route: '/shop/lift',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              {
                id: 3,
                i18n: 'nav.shop.clarify',
                route: '/shop/clarify',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              {
                id: 4,
                i18n: 'nav.shop.calm',
                route: '/shop/calm',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
            ],
          },
          {
            columnId: 2,
            i18nTitle: 'nav.shop.otherCategories',
            routes: [
              {
                id: 1,
                i18n: 'nav.shop.packages',
                route: '/shop/packages',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              {
                id: 2,
                i18n: 'nav.shop.starterKits',
                route: '/shop/starterKits',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [],
              },
              {
                id: 3,
                i18n: 'solleMerch',
                route: '/shop/solle-merch',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              {
                id: 4,
                i18n: 'nav.shop.showAll',
                route: '/shop/showAll',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        i18n: 'nav.opportunity.title',
        icon: 'mdi-chart-line',
        button: true,
        menu: true,
        exact: false,
        href: false,
        ssoKeyInfo: {
          needed: false,
          qm: false,
          and: true,
        },
        defaultRoute: '/opportunity',
        menuColumns: [
          {
            columnId: 1,
            i18nTitle: '',
            routes: [
              {
                id: 1,
                i18n: 'nav.opportunity',
                route: '/opportunity',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              {
                id: 2,
                i18n: 'nav.opportunity.sevenWays',
                route: '/opportunity/seven-ways-to-earn',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              {
                id: 3,
                i18n: 'nav.opportunity.twoWays',
                route: '/become-a-brand-specialist',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              {
                id: 3,
                i18n: 'nav.opportunity.referralProgram',
                route: '/referral-program',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        button: false,
      },
      {
        id: 5,
        i18n: 'nav.aboutUs.title',
        icon: 'mdi-information',
        button: true,
        menu: true,
        exact: false,
        href: false,
        ssoKeyInfo: {
          needed: false,
          qm: false,
          and: true,
        },
        defaultRoute: '/about',
        menuColumns: [
          {
            columnId: 1,
            i18nTitle: '',
            routes: [
              {
                id: 1,
                i18n: 'nav.aboutUs.ourPhilosophy',
                route: '/about/ourphilosophy',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              {
                id: 2,
                i18n: 'nav.aboutUs.ourPassion',
                route: '/about/ourpassion',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              {
                id: 3,
                i18n: 'nav.aboutUs.ourTeam',
                route: '/about/ourteam',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              {
                id: 4,
                i18n: 'nav.aboutUs.ourGuarentee',
                route: '/about/ourguarentee',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              {
                id: 5,
                i18n: 'nav.aboutUs.ourFoundtation',
                route: '/heart-and-solle',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
            ],
          },
        ],
      },
      {
        id: 6,
        i18n: 'nav.happenings.title',
        icon: 'mdi-calendar-month',
        button: true,
        menu: true,
        exact: false,
        href: false,
        ssoKeyInfo: {
          needed: false,
          qm: false,
          and: true,
        },
        defaultRoute: '/happenings',
        menuColumns: [
          {
            columnId: 1,
            i18nTitle: '',
            routes: [
              {
                id: 2,
                i18n: 'nav.happenings.calendar',
                route: '/happenings/calendar',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              // {
              //   id: 3,
              //   i18n: 'nav.happenings.events.summit2022.title',
              //   route: '/happenings/summit-2022',
              //   visible: true,
              //   href: false,
              //   ssoKeyInfo: {
              //     needed: false,
              //     qm: false,
              //     and: true
              //   },
              //   country_ids: [185, 32, 114]
              // },
              // {
              //   id: 4,
              //   i18n: 'nav.happenings.events.solleIgnite2022.title',
              //   route: '/happenings/solle-ignite',
              //   visible: true,
              //   href: false,
              //   ssoKeyInfo: {
              //     needed: false,
              //     qm: false,
              //     and: true
              //   },
              //   country_ids: [185, 32]
              // },
              // {
              //   id: 4,
              //   i18n: 'nav.happenings.events.redRockRally2022.title',
              //   route: '/happenings/red-rock-rally',
              //   visible: true,
              //   href: false,
              //   ssoKeyInfo: {
              //     needed: false,
              //     qm: false,
              //     and: true
              //   },
              //   country_ids: [185, 32]
              // },
              {
                id: 5,
                i18n: 'nav.happenings.events.solleIgnite2023.title',
                route: '/happenings/solle-ignite',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32],
              },
              {
                id: 6,
                i18n: 'nav.happenings.events.solleToSol2023.title',
                route: '/happenings/solle-to-sol-2023',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32],
              },
            ],
          },
        ],
      },
      {
        id: 7,
        i18n: 'nav.blog.title',
        icon: 'mdi-post',
        button: true,
        menu: true,
        exact: false,
        href: false,
        ssoKeyInfo: {
          needed: false,
          qm: false,
          and: true,
        },
        defaultRoute: '/blog',
        menuColumns: [
          {
            columnId: 1,
            i18nTitle: '',
            routes: [
              {
                id: 1,
                i18n: 'nav.blog.latest',
                route: '/blog/latest',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              {
                id: 2,
                i18n: 'nav.blog.adaptogens',
                route: '/blog/tag/adaptogens',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              {
                id: 3,
                i18n: 'nav.blog.mindBodyHealth',
                route: '/blog/tag/mind-body health',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              {
                id: 4,
                i18n: 'nav.blog.personalDevelopment',
                route: '/blog/tag/personal development',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
              {
                id: 5,
                i18n: 'nav.blog.NutritionFitness',
                route: '/blog/tag/nutrition & fitness',
                visible: true,
                href: false,
                ssoKeyInfo: {
                  needed: false,
                  qm: false,
                  and: true,
                },
                country_ids: [185, 32, 114],
              },
            ],
          },
        ],
      },
    ],
    appDrawer: false,
    dashboardDrawer: true,
    cartDrawer: false,
    cartDrawerPin: false,
    ssoCheckRedirectInfo: {
      route: null,
      href: false,
      blank: true,
      addQm: true,
      addAnd: false,
      params: null,
    },
    loginSecurityMsg: false,
    loginSecurityRedirectRoute: null,
    lastUrl: undefined,
    quizSession: {
      stressQuizSessionId: null,
      username: null,
      referrerCode: null,
      referrerUsername: null,
      countryId: null,
    },
  }),
  mutations: {
    SET_APP_DRAWER(state, payload) {
      state.appDrawer = payload
    },
    SET_DASHBOARD_DRAWER(state, payload) {
      state.dashboardDrawer = payload
    },
    SET_CART_DRAWER(state, payload) {
      state.cartDrawer = payload
    },
    SET_SSO_CHECK_REDIRECT_INFO(state, payload) {
      state.ssoCheckRedirectInfo = payload
    },
    SET_LOGIN_SECURITY_MSG(state, payload) {
      state.loginSecurityMsg = payload
    },
    SET_LOGIN_REDIRECT_ROUTE(state, payload) {
      state.loginSecurityRedirectRoute = payload
    },
    SET_LAST_URL(state, payload) {
      state.lastUrl = payload
    },
    SET_QUIZ_SESSION(state, payload) {
      state.quizSession = payload
    },
  },
  actions: {
    setAppDrawer({ commit }, payload) {
      commit('SET_APP_DRAWER', payload)
    },
    setDashboardDrawer({ commit }, payload) {
      commit('SET_DASHBOARD_DRAWER', payload)
    },
    setCartDrawer({ commit }, payload) {
      commit('SET_CART_DRAWER', payload)
    },
    setSsoCheckRedirectInfo({ commit }, payload) {
      commit('SET_SSO_CHECK_REDIRECT_INFO', payload)
    },
    clearSsoCheckRedirectInfo({ commit }) {
      commit('SET_SSO_CHECK_REDIRECT_INFO', {
        route: null,
        href: false,
        blank: true,
        addQm: true,
        addAnd: false,
        params: null,
      })
    },
    setLoginSecurityMsg({ commit }, payload) {
      commit('SET_LOGIN_SECURITY_MSG', payload)
    },
    setLoginSecurityRedirectRoute({ commit }, payload) {
      commit('SET_LOGIN_REDIRECT_ROUTE', payload)
    },
    setLastUrl({ commit }, payload) {
      commit('SET_LAST_URL', payload)
    },
    setQuizSession({ commit }, payload) {
      commit('SET_QUIZ_SESSION', payload)
    },
  },
  getters: {
    getBackofficeCredentials: (state, getters, rootstate) => {
      var credentials = ''

      if (rootstate.auth.loggedIn) {
        credentials +=
          '&username=' +
          rootstate.auth.user.username +
          '&key=' +
          rootstate.auth.user.ssoKey
      }

      return credentials
    },

    getShopColor: () => {
      if (process.client) {
        switch ($nuxt.$route.params.category) {
          case 'balance':
            return '#C0D701'
          case 'lift':
            return '#c8102e'
          case 'clarify':
            return '#ffcd00'
          case 'calm':
            return '#63b1bc'
          default:
            return '#C0D701'
        }
      } else {
        return '#C0D701'
      }
    },

    showShareButton: (_state, _getters, rootState, rootGetters) => {
      return (
        rootState.auth.loggedIn ||
        rootGetters['replicateSite/onReplicateSite'] ||
        !!rootState.referralCode.referralCode
      )
    },

    shareParameters: (_state, _getters, rootState, rootGetters) => {
      let params = {}

      if (rootGetters['replicateSite/siteName'])
        params.specialistSite = rootGetters['replicateSite/siteName']

      if (rootGetters['referralCode/referralCode'])
        params.referralCode = rootGetters['referralCode/referralCode']

      return params
    },

    getShareLink:
      (_state, getters) =>
      (path, domain = process.env.solleFrontendUrl) => {
        let url = `${domain}${path}`
        const queryString = qs.stringify(getters.shareParameters)

        if (queryString) url += '?' + queryString

        return url
      },
  },
}
