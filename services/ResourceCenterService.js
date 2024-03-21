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
  async getResourceCenterCategories(language_id, country_id) {
    let response = await apiClient.get(
      `/reports/name/resource_center_categories/results?language_id=${language_id}&country_id=${country_id}`
    )
    return response.data.results
  },

  async getResourceCenterItems(language_id, country_id) {
    let response = await apiClient.get(
      `/reports/name/resource_center_items/results?language_id=${language_id}&country_id=${country_id}`
    )
    return response.data.results
  },

  async getLegacyCategories() {
    let { data } = await apiClient.get('/resource-center/legacy/categories')
    return data
  },

  async getLegactyFileTypes() {
    let { data } = await apiClient.get('/resource-center/legacy/file-types')
    return data
  },

  async createLegacyItem(
    itemName,
    categoryId,
    countryIds,
    languageId,
    fileTypeId,
    fileUrl,
    thumbnailUrl
  ) {
    let { data } = await apiClient.post('resource-center/legacy/items', {
      itemName,
      categoryId,
      countryIds,
      languageId,
      fileTypeId,
      fileUrl,
      thumbnailUrl,
    })
    return data
  },
}
