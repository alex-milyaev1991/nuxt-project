/* eslint-disable no-unused-vars */
import { User, UserOptions, Address, ReferralData } from '../types/user'
/* eslint-enable no-unused-vars */

import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.apiUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  (config) => {
    if (process.client) {
      let token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('auth._token.local='))

      if (token) {
        token = decodeURIComponent(token.split('=')[1])
        config.headers['Authorization'] = token
      }
    }
    return config
  },
  function (error) {
    console.error(`${error}`)
    return Promise.reject(error)
  }
)

export default {
  /**
   * Create a new user
   *
   * @param {UserOptions & ReferralData} userOptions - User options and referral data.
   * @returns {Promise<{ user: User, address: Address, ssoKey: string }>} A promise that resolves with the created user data.
   */
  async createUser(userOptions) {
    const response = await apiClient.post('/user', userOptions)
    return response.data
  },

  async searchUsers(query, options = {}) {
    let groupIDs

    if (options.groupIDs) {
      groupIDs = options.groupIDs

      if (typeof groupIDs == 'string' || typeof groupIDs == 'number') {
        groupIDs = [groupIDs]
      }
    }

    let response = await apiClient.get(`/user/search`, {
      params: {
        query,
        groupIDs,
      },
    })
    return response.data.users
  },

  async getUserPaymentInfo(username) {
    let response = await apiClient.get(`/payments/${username}`)
    return response.data
  },

  async updateUserPaymentInfo(data, username) {
    let response = await apiClient.post(`/payments/${username}`, data)
    return response
  },

  async getUserByUsername(username) {
    let response = await apiClient.get(`/user/username/${username}`)
    return response.data.user
  },

  async getPublicUserData(username) {
    let response = await apiClient.get(`/user/username/${username}/chart-data`)
    return response.data
  },

  async getGeneralUserData(username) {
    let response = await apiClient.get(
      `/user/username/${username}/general-info`
    )
    return response.data
  },
  async updateGeneralUserData(data, username) {
    let response = await apiClient.post(
      `/user/username/${username}/general-info`,
      data
    )
    return response
  },
  async updateShippingData(data, username) {
    let response = await apiClient.post(
      `/user/username/${username}/shipping-info`,
      { data }
    )
    return response
  },
  async updateBillingData(data, username) {
    let response = await apiClient.post(`/user/username/${username}/billing`, {
      data,
    })
    return response
  },
  async updatePassword(data, username) {
    let response = await apiClient.post(`/user/username/${username}/password`, {
      data,
    })
    return response
  },
  async updateCommissionDirectDeposit(data, username) {
    let response = await apiClient.post(
      `/user/username/${username}/commission-direct-deposit`,
      { data }
    )
    return response
  },

  async getGroups(username) {
    let response = await apiClient.get(`/user/username/${username}/groups`)
    return response.data.groups
  },

  async addUserToGroup(username, groupId) {
    let response = await apiClient.post(`/user/username/${username}/groups`, {
      groupId,
    })
    return response.data.groups
  },

  // Stub function for user billing data
  async postUserBilling(username, billingInfo) {
    return billingInfo
  },

  // Stub function for user info
  async postUserInfo(username, userData) {
    return userData
  },

  async removeUserFromGroup(username, groupId) {
    let response = await apiClient.delete(`/user/username/${username}/groups`, {
      data: { groupId },
    })
    return response.data.groups
  },

  async getMonthlyReferralCodeUsage(username) {
    let response = await apiClient.get(
      `/user/username/${username}/monthly-referral-code-usage`
    )
    return response.data
  },

  async getUserSummary(username) {
    let response = await apiClient.get('/reports/name/user_summary/results', {
      params: { username },
    })
    let result = {}
    if (response.data.results.length) {
      result = {
        ...response.data.results[0],
        profilePicture: this.getProfilePictureURL(username),
      }
    }
    return result
  },

  getProfilePictureURL(username) {
    return `${process.env.BACKOFFICE_URL}/profile/profile_image.php?username=${username}`
  },

  async getReferrer(username) {
    const response = await apiClient.get(`/user/username/${username}/referrer`)
    return response.data
  },
}
