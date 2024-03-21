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
  async getPrimeStatus(username, month) {
    let results = await apiClient.get(
      `/prime?username=${username}&month=${month}`
    )
    return results.data
  },

  async getPrimeSnapshots(month) {
    let results = await apiClient.get(`/prime/snapshots`, {
      params: {
        month: month,
        hasEarnings: true,
        limit: 2500,
      },
    })
    let snapshots = results.data.snapshots
    snapshots.forEach((i) => {
      i.jsonData = JSON.parse(i.jsonData)
    })
    return snapshots
  },
  async getCompensationLevels(username, month) {
    let result = await apiClient.get(`/prime/compensation-level`, {
      params: {
        username,
        month,
      },
    })
    return result
  },
}
