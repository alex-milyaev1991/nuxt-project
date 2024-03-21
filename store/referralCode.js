import Cookie from 'js-cookie'

export const state = () => ({
  referralCode: null,
})

export const mutations = {
  SET_REFERRAL_CODE(state, referralCode) {
    state.referralCode = referralCode
  },
}

export const actions = {
  setReferralCode({ commit }, referralCode) {
    Cookie.set('solle_referral_code', referralCode)
    commit('SET_REFERRAL_CODE', referralCode)
  },

  clearReferralCode({ commit }) {
    commit('SET_REFERRAL_CODE', null)
  },

  async getReferralCode({ dispatch, state }, { query, cookies }) {
    const currentReferralCode = state.referralCode

    let newReferralCode =
      query.referralCode ||
      cookies.solle_referral_code ||
      Cookie.get('solle_referral_code')

    if (newReferralCode === 'undefined' || newReferralCode === 'null') {
      newReferralCode = null
    }

    if (newReferralCode && newReferralCode !== currentReferralCode) {
      await dispatch('setReferralCode', newReferralCode)
    }

    return newReferralCode
  },
}

export const getters = {
  referralCode: (state, _getters, rootState) => {
    if (rootState.auth.loggedIn) {
      return rootState.auth.user.referral_code
    } else
      return (
        state.referralCode ||
        rootState.replicateSite.replicate_site_data?.referral_code
      )
  },
}
