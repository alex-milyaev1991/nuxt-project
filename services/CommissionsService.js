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
  async getCommissionPeriods(options = {}) {
    const { commissionPeriodTypeId, startDate, locked } = options

    let response = await apiClient.get('/commissions/periods', {
      params: { commissionPeriodTypeId, startDate, locked },
    })
    return response.data
  },

  async getCommissionPayouts(commissionPeriodId) {
    let response = await apiClient.get(
      `/reports/name/commission_payouts/results?commission_period_id=${commissionPeriodId}`
    )
    return response.data.results
  },
}
