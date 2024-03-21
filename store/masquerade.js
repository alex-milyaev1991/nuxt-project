import UserService from '@/services/UserService.js'
import CartService from '@/services/CartService.js'

export const state = () => ({
  targetUsername: '',
  targetUser: null,
  targetUserCart: [],
  recentTargets: [],
  isMasquerading: false,
})

export const mutations = {
  SET_TARGET_USER(state, payload) {
    state.targetUser = payload

    if (!payload) {
      state.isMasquerading = false
      state.targetUsername = ''
    } else {
      state.isMasquerading = true
      state.targetUsername = payload.username
    }
  },
  SET_TARGET_USER_CART(state, cart) {
    state.targetUserCart = cart.cart_items
  },
}

export const actions = {
  async setTarget({ commit, state, rootState }, username) {
    // If username is not empty
    if (username) {
      // If it is the current logged in user, turn off masquerading
      if (username == rootState.auth.user.username) {
        commit('SET_TARGET_USER', null)
      }

      // If the targetUsername is different than the current target user, fetch the new data
      else if (username != state.targetUsername) {
        try {
          const response = await UserService.getUserByUsername(username)
          commit('SET_TARGET_USER', response)
        } catch (error) {
          console.error('Error Loading Masquerade Target User')
          console.error(error)
          commit('SET_TARGET_USER', null)
        }
      }

      // If the username is empty, set masquerading to false
    } else if (state.isMasquerading != false) {
      commit('SET_TARGET_USER', null)
    }
  },
  clearTarget({ commit }) {
    commit('SET_TARGET_USER', null)
  },
  async getTargetCartItems({ commit }, payload) {
    try {
      const response = await CartService.postCartItems(payload)
      commit('SET_TARGET_USER_CART', response.data.cart)
    } catch (error) {
      console.error('getTargetCartItems', error)
    }
  },
  async updateTargetCartItems({ commit }, payload) {
    try {
      const response = await CartService.putCartItems(payload)
      commit('SET_TARGET_USER_CART', response.data.cart)
    } catch (error) {
      console.error('updateTargetCartItems', error)
    }
  },
}

export const getters = {
  getIsMasquerading: (state) => {
    return state.isMasquerading
  },
  getTargetUsername: (state) => {
    return state.targetUsername
  },
  getTargetUser: (state) => {
    return state.targetUser
  },
  isMentorView: (state, getters, rootstate) => {
    // isSpecialist check is in place to avoid
    // errors if logging out while masquerading
    var isSpecialist = false
    if (rootstate.auth.user) {
      isSpecialist = rootstate.auth.user.groups.hasOwnProperty('10')
    }

    return state.isMasquerading && isSpecialist
  },
  getCartItemQuantityById: (state) => (id) => {
    var item = state.targetUserCart.find((item) => item.product_id === id)

    if (item !== undefined) {
      return item.quantity
    } else {
      return 0
    }
  },
}
