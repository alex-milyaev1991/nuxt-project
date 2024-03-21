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
  async getTaxReport(state, dateStart, dateEnd, group) {
    let response = await apiClient.get(
      `/tax-report/?state=${state}&dateStart=${dateStart}&dateEnd=${dateEnd}&group=${group}`
    )
    return response.data
  },

  async postTaxReport(taxInfo) {
    // let response = await apiClient.get(`/tax-report/?state=${state}&dateStart=${dateStart}&dateEnd=${dateEnd}&group=${group}`)
    return taxInfo
  },
}
