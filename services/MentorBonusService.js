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
  async getMentorBonusReport(username, month = null) {
    let results = await apiClient.get('/mentor-bonus', {
      params: { username, month },
    })
    return results.data
  },

  async getMentorBonusLevels() {
    let results = await apiClient.get('/mentor-bonus/levels')
    return results.data
  },
}
