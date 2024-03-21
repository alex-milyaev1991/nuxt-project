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
  async getDashboardMetrics(username) {
    let response = await apiClient.get(
      `/specialist/username/${username}/dashboard`
    )
    return response.data.dashboard
  },
  async getMonthlyEnrollmentHistoryByUsername(username, months) {
    let response = await apiClient.get(
      `/reports/name/monhtly_enrollment_history_by_username/results?username=${username}&months=${months}`
    )
    return response.data.results
  },
  async getPersonalVolumeHistoryAndRank(username) {
    let response = await apiClient.get(
      `/reports/name/rank_history/results?username=${username}`
    )
    return response.data.results
  },
  async getSolleSafeReport(username, date) {
    let response = await apiClient.get(
      `/specialist/username/${username}/solleSafe?date=${date}`
    )
    return response.data
  },
  async getOrganization(username) {
    let response = await apiClient.get(
      `/specialist/username/${username}/orgchart`
    )
    return response.data
  },
  async getMentorGroupReport(username) {
    let response = await apiClient.get(
      `/specialist/username/${username}/mentor-group-report`
    )
    return response.data
  },
}
