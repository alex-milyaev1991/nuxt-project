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
  async getEnrollmentOverview(username) {
    let response = await apiClient.get(
      `/dashboard/${username}/enrollments/overview`
    )
    return response.data
  },
  async getDirectLineEnrollmentCounts(username) {
    let response = await apiClient.get(
      `/dashboard/${username}/enrollments/personal/counts`
    )
    return response.data
  },
  async getDirectLineEnrollments(username, monthStartDate) {
    let response = await apiClient.get(
      `/dashboard/${username}/enrollments/personal`,
      { params: { monthStartDate } }
    )
    return response.data
  },

  async getOrganizationalEnrollmentCounts(username) {
    let response = await apiClient.get(
      `/dashboard/${username}/enrollments/organizational/counts`
    )
    return response.data
  },
  async getOrganizationalEnrollments(username, monthStartDate) {
    let response = await apiClient.get(
      `/dashboard/${username}/enrollments/organizational`,
      { params: { monthStartDate } }
    )
    return response.data
  },
}
