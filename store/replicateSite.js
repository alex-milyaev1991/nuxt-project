import Cookie from 'js-cookie'
import ReplicateSiteService from '@/services/ReplicateSiteService.js'

export const state = () => ({
  replicate_site_data: {
    business_name: null,
    email: null,
    first_name: null,
    last_name: null,
    my_story: null,
    phone: null,
    profile_image: null,
    referral_code: null,
    site_name: null,
    username: null,
  },
  modelOpened: false,
})

export const mutations = {
  SET_REPLICATE_SITE_DATA(state, data) {
    state.replicate_site_data = data
  },
  SET_MODEL_OPENED(state, data) {
    state.modelOpened = data
  },
}

export const actions = {
  async fetchSiteData({ commit }, payload) {
    try {
      const response = await ReplicateSiteService.getSiteData(payload)

      Cookie.set('solle_specialist_site', response.data.site_name)

      commit('SET_REPLICATE_SITE_DATA', response.data)
    } catch (error) {
      console.error('fetchSiteData', error)
    }
  },
  setSiteData({ commit }, payload) {
    commit('SET_REPLICATE_SITE_DATA', payload)
  },
  setOpenedModel({ commit }, payload) {
    commit('SET_MODEL_OPENED', payload)
  },
  async setCurrentReplicateSite(
    { state, rootState, dispatch },
    { route, cookies }
  ) {
    if (rootState.auth.loggedIn) return null

    let currentSiteName = state.replicate_site_data?.site_name

    let siteName =
      route.params?.replicateSite ||
      route.query?.specialistSite ||
      cookies.solle_specialist_site ||
      Cookie.get('solle_specialist_site')

    if (siteName && siteName !== currentSiteName) {
      await dispatch('fetchSiteData', { site_name: siteName })
      siteName = state.replicate_site_data?.site_name
    }

    return siteName
  },
}

export const getters = {
  onReplicateSite: (state, _getters, rootState) => {
    return !rootState.auth.loggedIn && !!state.replicate_site_data.site_name
  },

  siteName: (state, getters, rootState) => {
    if (
      rootState.auth.loggedIn &&
      Object.values(rootState.auth.user.groups).includes('Specialist')
    ) {
      return rootState.auth.user.site_name
    } else if (getters.onReplicateSite) {
      return state.replicate_site_data.site_name
    } else return null
  },
  referallAccountName: (state, getters) => {
    if (getters.onReplicateSite) {
      return (
        state.replicate_site_data.business_name ||
        `${state.replicate_site_data.first_name} ${state.replicate_site_data.last_name}`
      )
    }

    return ''
  },
}
