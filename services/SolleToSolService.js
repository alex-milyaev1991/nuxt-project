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
  async getIndividualSolleToSolData(username, year = 2022) {
    let response = await apiClient.get(
      `/solle-to-sol/${year}/individual-report/${username}`
    )
    return response.data
  },

  async getEvents() {
    let response = await apiClient.get(`/solle-to-sol/events`)
    return response.data.events
  },

  async getOverrides(year) {
    let response = await apiClient.get(`/solle-to-sol/${year}/overrides`)
    return response.data.overrides
  },

  async updateOverride(year, username, data) {
    let url = `/solle-to-sol/${year}/overrides/${username}`
    let response = await apiClient.put(url, data)
    return response.data.overrides
  },
  async getEvent2023(username) {
    let url = `/solle-to-sol/2023-individual-report/${username}`
    let response = await apiClient.get(url)
    return response.data
  },

  async getAllEventData(year) {
    let response = await apiClient.get(`/solle-to-sol/${year}/report`)
    return response.data.report
  },

  async get2023AdminReport() {
    let response = await apiClient.get('/solle-to-sol/2023-admin-report')
    return response.data
  },
}
