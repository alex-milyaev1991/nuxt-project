import AutoshipService from '~/services/AutoshipService'
export const state = () => ({
  active: null,
  autoshipDay: null,
  subtotalAmount: 0,
  taxAmount: 0,
  shippingAmount: 0,
  autoshipAmount: 0,
  commissionVolume: null,
  qualificationVolume: 150,
  products: [],
  useSolleRewards: null,
  shippingAddress: {},
  shippingType: {},
})

export const mutations = {
  SET_ACTIVE_STATUS(state, isActive) {
    state.active = isActive
  },
  SET_AUTOSHIP_DAY(state, autoshipDay) {
    state.autoshipDay = autoshipDay
  },
  SET_COMMISSION_VOLUME(state, commissionVolume) {
    state.commissionVolume = commissionVolume
  },
  SET_QUALIFICATION_VOLUME(state, qualificationVolume) {
    state.qualificationVolume = qualificationVolume
  },
  SET_AUTOSHIP_PRODUCTS(state, products) {
    state.products = products
  },
  SET_SUBTOTAL_AMOUNT(state, subtotalAmount) {
    state.subtotalAmount = parseFloat(subtotalAmount) || 0
  },
  SET_TAX_AMOUNT(state, taxAmount) {
    state.taxAmount = parseFloat(taxAmount) || 0
  },
  SET_SHIPPING_AMOUNT(state, shippingAmount) {
    state.shippingAmount = parseFloat(shippingAmount) || 0
  },
  SET_AUTOSHIP_AMOUNT(state, autoshipAmount) {
    state.autoshipAmount = parseFloat(autoshipAmount) || 0
  },
  SET_USE_SOLLE_REWARDS(state, status) {
    state.useSolleRewards = status
  },
  SET_SHIPPING_ADDRESS(state, shippingAddress) {
    state.shippingAddress = shippingAddress
  },
  SET_SHIPPING_TYPE(state, shippingType) {
    state.shippingType = shippingType
  },
}
export const actions = {
  async getAutoshipDetails({ commit }, username) {
    try {
      let autoship = await AutoshipService.getAutoshipByUsername(username)
      let extraDetails = await AutoshipService.getAutoshipDetails(username)

      let products = Object.values(autoship.autoship_products)
      commit('SET_AUTOSHIP_PRODUCTS', products)
      commit('SET_ACTIVE_STATUS', autoship.active)
      commit('SET_AUTOSHIP_DAY', autoship.autoship_day)

      commit(
        'SET_COMMISSION_VOLUME',
        autoship.autoship_volumes.commission_volume
      )
      commit(
        'SET_QUALIFICATION_VOLUME',
        autoship.autoship_volumes.qualification_volume
      )

      // Extra Details
      commit('SET_USE_SOLLE_REWARDS', extraDetails.use_rewards)

      commit('SET_SUBTOTAL_AMOUNT', extraDetails.order_details?.subtotal_amount)
      commit('SET_TAX_AMOUNT', extraDetails.order_details?.tax_amount)
      commit('SET_SHIPPING_AMOUNT', extraDetails.order_details?.shipping_amount)
      commit('SET_AUTOSHIP_AMOUNT', extraDetails.order_details?.total_amount)

      commit('SET_SHIPPING_ADDRESS', extraDetails.shipping_details?.address)
      commit('SET_SHIPPING_TYPE', extraDetails.shipping_details?.shipping_type)
    } catch (error) {
      console.error(error)
    }
  },
  async updateProductAmount({ dispatch }, { productId, quantity, username }) {
    try {
      await AutoshipService.setProductQuantity(productId, quantity, username)
    } catch (error) {
      console.error(error)
    } finally {
      dispatch('getAutoshipDetails', username)
    }
  },
  async updateUseSolleRewards({ dispatch }, { username, status }) {
    try {
      await AutoshipService.updateUseRewardsStatus(username, status)
    } catch (error) {
      console.error(error)
    } finally {
      dispatch('getAutoshipDetails', username)
    }
  },
  async updateActiveStatus({ dispatch }, { username, status }) {
    try {
      await AutoshipService.changeActiveStatus(username, status)
    } catch (error) {
      console.error(error)
    } finally {
      dispatch('getAutoshipDetails', username)
    }
  },
  async updateAutoshipDay({ dispatch }, { username, day }) {
    try {
      await AutoshipService.updateSolleSafeDay(username, day)
    } catch (error) {
      console.error(error)
    } finally {
      dispatch('getAutoshipDetails', username)
    }
  },
}

export const getters = {
  commissionVolume(state) {
    return (parseFloat(state.commissionVolume) || 0).toFixed(2)
  },
  qualificationVolume(state) {
    return (parseFloat(state.qualificationVolume) || 0).toFixed(2)
  },
  activeStatus(state) {
    return state.active
  },
}
