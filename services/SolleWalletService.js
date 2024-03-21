import axios from 'axios'

const apiClient = axios.create({
  baseURL: `${process.env.apiUrl}`,
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
  async sendToWallet(username, amount, note) {
    let response = await apiClient.post(`/backoffice/ewalletPayment`, {
      username: username,
      amount: amount,
      note: note,
    })
    return response.data
  },

  async getBalance(username) {
    try {
      let result = await apiClient.get(
        `/solle-wallet/balance?username=${username}`
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },

  async getTransactionHistory(username, limit = null, offset = null) {
    try {
      let result = await apiClient.get(
        `/solle-wallet/transaction-history?username=${username}&limit=${limit}&offset=${offset}`
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },

  async getAutomaticPayout(username) {
    try {
      let result = await apiClient.get(
        `/solle-wallet/automatic-payout?username=${username}`
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },

  async setAutomaticPayout(username, amount) {
    try {
      let response = await apiClient.post(
        `/solle-wallet/automatic-payout?username=${username}`,
        { amount: amount }
      )
      return response
    } catch (error) {
      console.error(error)
      return error
    }
  },

  async sendToBank(username, amount, note) {
    try {
      let result = await apiClient.post(
        `/solle-wallet/manual-payout?username=${username}`,
        { amount: amount, note: note }
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
}
