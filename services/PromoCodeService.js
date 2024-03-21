import axios from 'axios'

const apiClient = axios.create({
  baseURL: `${process.env.apiUrl}/promo-codes`,
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
  async findAll(countryId = null) {
    let params = {}
    if (countryId) {
      params.countryId = countryId
    }
    let response = await apiClient.get('/', { params })
    return response.data
  },

  async findByCode(code, countryId) {
    let response = await apiClient.get('/code/', {
      params: { code, countryId },
    })
    return response.data
  },

  async findById(id) {
    let response = await apiClient.get(`/id/${id}`)
    return response.data
  },

  async update(id, data) {
    let response = await apiClient.put(`/id/${id}`, data)
    return response.data
  },

  async create(data) {
    let response = await apiClient.post('/', data)
    return response.data
  },

  async delete(id) {
    let response = await apiClient.delete(`/id/${id}`)
    return response.data
  },
}
