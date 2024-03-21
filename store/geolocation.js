import GeolocationService from '@/services/GeolocationService.js'
import Cookie from 'js-cookie'

export const state = () => ({
  fetchedForNoLogin: false,

  // Acutal user info
  userRegion: {
    country_name: 'United States',
    country_code: 'US',
    country_id: '185',
    country_flag: 'https://cdn.ipwhois.io/flags/us.svg',
    currency_code: 'USD',
    currency_symbol: '$',
    countryId: 1,
    backofficeId: 185,
  },

  // temporary/locally set info
  selectedRegion: {
    country_name: 'United States',
    country_code: 'US',
    country_id: '185',
    country_flag: 'https://cdn.ipwhois.io/flags/us.svg',
    currency_code: 'USD',
    currency_symbol: '$',
    countryId: 1,
    backofficeId: 185,
  },

  // Available/open countries
  availableRegions: [
    {
      country_name: 'United States',
      country_code: 'US',
      country_id: '185',
      country_flag: 'https://cdn.ipwhois.io/flags/us.svg',
      currency_code: 'USD',
      currency_symbol: '$',
      countryId: 1,
      backofficeId: 185,
    },
    {
      country_name: 'Canada',
      country_code: 'CA',
      country_id: '32',
      country_flag: 'https://cdn.ipwhois.io/flags/ca.svg',
      currency_code: 'CAD',
      currency_symbol: '$',
      countryId: 2,
      backofficeId: 32,
    },
    {
      country_name: 'Mexico',
      country_code: 'MX',
      country_id: '114',
      country_flag: 'https://cdn.ipwhois.io/flags/mx.svg',
      currency_code: 'MXN',
      currency_symbol: '$',
      countryId: 3,
      backofficeId: 114,
    },
  ],
})
export const mutations = {
  SET_USER_REGION_INFO(state, regionInfo) {
    state.userRegion = regionInfo
  },
  SET_SELECTED_REGION_INFO(state, regionInfo) {
    Cookie.set('region', regionInfo.country_id)
    state.selectedRegion = regionInfo
  },
  SET_FETCHED_FOR_NO_LOGIN(state, val) {
    state.fetchedForNoLogin = val
  },
}
export const actions = {
  async fetchUserRegionInfo({ commit, state, dispatch }) {
    let countryId = null

    try {
      const region = Cookie.get('region')
      if (!process.server && region) {
        countryId = region
        return countryId
      }

      const response = await GeolocationService.getGeolocation()

      switch (response.country_code) {
        case 'CA':
          countryId = '32'
          break
        case 'MX':
          countryId = '114'
          this.app.i18n.setLocale('es')
          break
        default: {
          countryId = '185'
        }
      }
    } catch (error) {
      console.error('Error Loading Geolocation Data')
      countryId = '185'
    }

    let regionInfo = state.availableRegions.find(
      (country) => country.country_id == countryId
    )
    if (!regionInfo) {
      regionInfo = state.availableRegions[0]
    }

    commit('SET_USER_REGION_INFO', regionInfo)
    commit('SET_SELECTED_REGION_INFO', regionInfo)
    commit('SET_FETCHED_FOR_NO_LOGIN', true)

    dispatch(
      'shop/fetchUserRegionProducts',
      { countryId, orderTypeId: '8' },
      { root: true }
    )

    dispatch(
      'shop/fetchSelectedRegionProducts',
      { countryId, orderTypeId: '8' },
      { root: true }
    )
  },

  setUserRegionInfo({ commit, state }, countryId) {
    let found = state.availableRegions.find(
      (country) => country.country_id == countryId
    )

    if (found) {
      commit('SET_USER_REGION_INFO', found)
    } else {
      commit('SET_USER_REGION_INFO', state.availableRegions[0])
    }
  },

  setSelectedRegionInfo({ commit, state }, countryId) {
    let found = state.availableRegions.find(
      (country) => country.country_id == countryId
    )

    if (found) {
      commit('SET_SELECTED_REGION_INFO', found)
    } else {
      commit('SET_SELECTED_REGION_INFO', state.availableRegions[0])
    }
  },
}
