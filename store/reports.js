export const state = () => ({
  developerReports: {},
  adminReports: {},
  customerSupportReports: {},
  specialistReports: {},
})

export const mutations = {
  SET_DEVELOPER_REPORTS(state, data) {
    state.developerReports = data
  },
  ADD_TO_DEVELOPER_REPORTS(state, data) {
    state.developerReports[data.key] = data.value
  },
  SET_ADMIN_REPORTS(state, data) {
    state.adminReports = data
  },
  ADD_TO_ADMIN_REPORTS(state, data) {
    state.adminReports[data.key] = data.value
  },
  SET_CUSTOMER_SUPPORT_REPORTS(state, data) {
    state.customerSupportReports = data
  },
  ADD_TO_CUSTOMER_SUPPORT_REPORTS(state, data) {
    state.customerSupportReports[data.key] = data.value
  },
  SET_SPECIALIST_REPORTS(state, data) {
    state.specialistReports = data
  },
  ADD_TO_SPECIALIST_REPORTS(state, data) {
    state.specialistReports[data.key] = data.value
  },
}

export const actions = {
  setDeveloperReports({ commit }, payload) {
    commit('SET_DEVELOPER_REPORTS', payload)
  },
  addToDeveloperReports({ commit }, payload) {
    commit('ADD_TO_DEVELOPER_REPORTS', payload)
  },
  setAdminReports({ commit }, payload) {
    commit('SET_ADMIN_REPORTS', payload)
  },
  addToAdminReports({ commit }, payload) {
    commit('ADD_TO_ADMIN_REPORTS', payload)
  },
  setCustomerSupportReports({ commit }, payload) {
    commit('SET_CUSTOMER_SUPPORT_REPORTS', payload)
  },
  addToCustomerSupportReports({ commit }, payload) {
    commit('ADD_TO_CUSTOMER_SUPPORT_REPORTS', payload)
  },
  setSpecialistReports({ commit }, payload) {
    commit('SET_SPECIALIST_REPORTS', payload)
  },
  addToSpecialistReports({ commit }, payload) {
    commit('ADD_TO_SPECIALIST_REPORTS', payload)
  },
}

export const getters = {
  getLoadingByKey: (state) => (group, key) => {
    if (
      state[group].hasOwnProperty(key) &&
      state[group][key].hasOwnProperty('loading')
    ) {
      return state[group][key].loading
    } else {
      return false
    }
  },
  getReportByKey: (state) => (group, key) => {
    if (
      state[group].hasOwnProperty(key) &&
      state[group][key].hasOwnProperty('data')
    ) {
      return state[group][key].data
    } else {
      return {}
    }
  },
}
