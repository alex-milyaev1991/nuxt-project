export const state = () => ({
  enrollingAsSpecialist: false,

  firstName: null,
  lastName: null,
  birthDate: null,

  phoneNumber: null,
  email: null,
  confirmEmail: null,

  receivePromotions: false,
  acceptTerms: false,
})

export const mutations = {
  SET_ENROLLING_AS_SPECIALIST(state, enrollingAsSpecialist) {
    state.enrollingAsSpecialist = enrollingAsSpecialist
  },

  SET_FIRST_NAME(state, firstName) {
    state.firstName = firstName
  },
  SET_LAST_NAME(state, lastName) {
    state.lastName = lastName
  },
  SET_BIRTH_DATE(state, birthDate) {
    state.birthDate = birthDate
  },

  SET_PHONE_NUMBER(state, phoneNumber) {
    state.phoneNumber = phoneNumber
  },
  SET_EMAIL(state, email) {
    state.email = email
  },
  SET_CONFIRM_EMAIL(state, confirmEmail) {
    state.confirmEmail = confirmEmail
  },

  SET_RECEIVE_PROMOTIONS(state, receivePromotions) {
    state.receivePromotions = receivePromotions
  },
  SET_ACCEPT_TERMS(state, acceptTerms) {
    state.acceptTerms = acceptTerms
  },
}

export const actions = {
  setEnrollingAsSpecialist({ commit }, enrollingAsSpecialist) {
    commit('SET_ENROLLING_AS_SPECIALIST', enrollingAsSpecialist)
  },

  setFirstName({ commit }, firstName) {
    commit('SET_FIRST_NAME', firstName)
  },
  setLastName({ commit }, lastName) {
    commit('SET_LAST_NAME', lastName)
  },
  setBirthDate({ commit }, birthDate) {
    commit('SET_BIRTH_DATE', birthDate)
  },

  setPhoneNumber({ commit }, phoneNumber) {
    commit('SET_PHONE_NUMBER', phoneNumber)
  },
  setEmail({ commit }, email) {
    commit('SET_EMAIL', email)
  },
  setConfirmEmail({ commit }, confirmEmail) {
    commit('SET_CONFIRM_EMAIL', confirmEmail)
  },

  setReceivePromotions({ commit }, receivePromotions) {
    commit('SET_RECEIVE_PROMOTIONS', receivePromotions)
  },
  setAcceptTerms({ commit }, acceptTerms) {
    commit('SET_ACCEPT_TERMS', acceptTerms)
  },
}

export const getters = {
  isRequired: () => (value) => !!value || 'Field Is Required',
  validEmail: () => (value) => /.+@.+\..+/.test(value) || 'Invalid E-mail',
  emailsMatch: (state) => (value) =>
    value === state.email || 'Emails Do Not Match',
  mustAccept: () => (value) =>
    value === true || 'You must accept the terms and conditions to continue',

  signUpFormValid(state, getters) {
    return (
      getters.isRequired(state.firstName) === true &&
      getters.isRequired(state.lastName) === true &&
      getters.isRequired(state.birthDate) === true &&
      getters.isRequired(state.phoneNumber) === true &&
      getters.isRequired(state.email) === true &&
      getters.validEmail(state.email) === true &&
      getters.isRequired(state.confirmEmail) === true &&
      getters.validEmail(state.confirmEmail) === true &&
      getters.emailsMatch(state.confirmEmail) === true &&
      getters.mustAccept(state.acceptTerms) === true
    )
  },

  hasAdditionalProduct(_state, _getters, _rootState, rootGetters) {
    return (
      rootGetters['cart/hasSuccessKit'] &&
      rootGetters['cart/cartProducts'].length >= 2
    )
  },
}
