import axios from 'axios'

const apiClient = axios.create({
  baseURL: `${process.env.apiUrl}/ranks`,
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
  async getRankHistory(username) {
    let response = await apiClient.get('/rank-history/', {
      params: { username },
    })
    return response.data
  },

  async getRankProgress(username) {
    let response = await apiClient.get('/rank-progress', {
      params: { username },
    })
    return response.data
  },
}
