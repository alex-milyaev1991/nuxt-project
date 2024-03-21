export const state = () => ({})

export const mutations = {
  REMOVE_SSO_KEY(state) {
    state.auth.user.ssoKey = '[deleted]'
  },
}

export const actions = {
  removeSSOKey({ commit }) {
    commit('REMOVE_SSO_KEY')
  },
  async nuxtServerInit({ dispatch }, { req }) {
    if (req) {
      if (req.headers.cookie) {
        const cookie = req.headers.cookie
          .split(';')
          .map((v) => v.split('='))
          .reduce((acc, v) => {
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(
              v[1].trim()
            )
            return acc
          }, {})

        dispatch('geolocation/setSelectedRegionInfo', cookie.region)
      }
    }
  },

  // nuxtServerInit({ commit, dispatch, rootstate }, { req }) {
  //   Check Local Storage for a saved JWT
  //   if (this.$auth.getToken('local')) {
  //       let token = this.$auth.getToken('local')
  //       token = token.charAt(0).toUpperCase() + token.slice(1)
  //       axios.defaults.headers.common[
  //           'Authorization'
  //       ] = token
  //   }
  // },
}

export const getters = {}
