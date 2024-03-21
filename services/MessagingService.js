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
  async sendReturnRequest(returnData) {
    try {
      let response = await apiClient.post(
        `/messaging/return-request`,
        returnData
      )
      return response.data
    } catch (error) {
      throw error.response?.data || 'Error Sending Message'
    }
  },

  async sendClaimRequest(claimData) {
    try {
      const formData = new FormData()
      formData.append('fullName', claimData.fullName)
      formData.append('accountNumber', claimData.accountNumber)
      formData.append('orderNumber', claimData.orderNumber)
      formData.append('mailCarrier', claimData.mailCarrier)
      formData.append('claimNumber', claimData.claimNumber)
      formData.append('explanation', claimData.explanation)
      formData.append(
        'preferredCommunication',
        claimData.preferredCommunication
      )

      if (claimData.images) {
        claimData.images.forEach((image) => {
          formData.append('images', image)
        })
      }

      let response = await apiClient.post(
        `/messaging/claim-request`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )

      return response.data
    } catch (error) {
      console.error('Error sending claim: ', error)
      throw error.response?.data || 'Error Sending Message'
    }
  },

  /**
   * @param {Object} formData Object with the data collected from the form
   * @param {string} formData.name The name of the user
   * @param {string} formData.email The email of the user
   * @param {string} formData.helpCategory The category selected under What-Can-We-Help-You-With
   * @param {string} formData.message The message the user provides
   */
  async sendContactUsMessage(formData) {
    try {
      let response = await apiClient.post(`/messaging/contact-us`, formData)
      return response.data
    } catch (error) {
      throw error.response?.data || 'Error Sending Message'
    }
  },
}
