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
  async getAutoshipByUsername(username) {
    let response = await apiClient.get(`/autoship/username/${username}`)
    return response.data.autoship
  },
  async getAutoshipDetails(username) {
    try {
      let response = await apiClient.get(
        `/autoship/get-autoship-details?username=${username}`
      )
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getShippingTypes(username) {
    try {
      let response = await apiClient.get(
        `/autoship/get-shipping-types?username=${username}`
      )
      let result = Object.values(response.data)
      return result
    } catch (error) {
      console.error(error)
    }
  },
  async setShippingType(username, shippingTypeId) {
    try {
      let response = await apiClient.post(
        `/autoship/set-shipping-type?username=${username}&shippingTypeId=${shippingTypeId}`
      )
      return response.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async getShippingData(username) {
    try {
      let response = await apiClient.get(
        `/autoship/shipping-data?username=${username}`
      )
      return response.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async updateShippingData(username, shippingData) {
    try {
      let response = await apiClient.post(
        `/autoship/shipping-data?username=${username}`,
        shippingData
      )
      return response.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async changeActiveStatus(username, status) {
    try {
      if (status == false) {
        status = 0
      } else {
        status = 1
      }
      let response = await apiClient.post(
        `/autoship/set-autoship-active?status=${status}&username=${username}`
      )
      return response.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async updateSolleSafeDay(username, date) {
    try {
      let response = await apiClient.post(
        `/autoship/set-autoship-day?username=${username}&autoshipDay=${date}`
      )
      return response.data
    } catch (error) {
      console.error(error)
      return error
    }
  },

  async setProductQuantity(productId, quantity, username) {
    try {
      let response = await apiClient.post(
        `/autoship/set-product-quantity?productId=${productId}&username=${username}&quantity=${quantity}`
      )
      return response.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async updateUseRewardsStatus(username, status) {
    try {
      let response = await apiClient.post(
        `/autoship/set-use-solle-rewards?username=${username}&status=${status}`
      )
      return response.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
}
