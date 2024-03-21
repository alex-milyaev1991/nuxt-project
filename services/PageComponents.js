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
  async getHomePageSliders(locale = 'en-US') {
    let response = await apiClient.get(
      `/page-components/pages/home/sliders?locale=${locale}`
    )
    return response.data.sliders
  },

  async getDashboardNews() {
    const rootComponentName = 'dashboard_news_root'
    let response = await apiClient.get(
      `/page-components/name/${rootComponentName}/children`
    )
    return response.data.pageComponents
  },
  async getFilteredNewsCard(langId, countryId) {
    const rootComponentName = 'dashboard_news_root'
    let response = await apiClient.get(
      `/page-components/name/${rootComponentName}/children/public?langId=${langId}&countryId=${countryId}`
    )
    return response.data.pageComponents
  },
  async getDashboardNewsById(id) {
    let response = await apiClient.get(`/page-components/id/${id}`)
    return response.data.pageComponent
  },
  async putDashboardNewsById(
    id,
    title,
    route,
    href,
    published,
    publishDate,
    unpublishDate
  ) {
    try {
      let response = await apiClient.put(`/page-components/id/${id}`, {
        componentName: title,
        route: route,
        href: href,
        published: published,
        publishDate: publishDate,
        unpublishDate: unpublishDate,
      })
      return response
    } catch (error) {
      console.error(error)
      return false
    }
  },
  async setDisplayOrder(id, orderNumber) {
    try {
      let response = await apiClient.put(`/page-components/id/${id}`, {
        displayOrder: orderNumber,
      })
      return response
    } catch (error) {
      console.error(error)
      return false
    }
  },
  async addCountryToNewsCard(id, countryId) {
    let response = await apiClient.post(
      `/page-components/id/${id}/country/${countryId}`
    )
    return response
  },
  async deleteCountryToNewsCard(id, countryId) {
    let response = await apiClient.delete(
      `/page-components/id/${id}/country/${countryId}`
    )
    return response
  },
  async addLangToNewsCard(id, langId) {
    let response = await apiClient.post(
      `/page-components/id/${id}/lang/${langId}`
    )
    return response
  },
  async deleteLangToNewsCard(id, langId) {
    let response = await apiClient.delete(
      `/page-components/id/${id}/lang/${langId}`
    )
    return response
  },
  async addLangTextTo(id, langId) {
    let response = await apiClient.post(
      `/page-components/id/${id}/lang/${langId}`
    )
    return response
  },
  async addTextToCard(id, langId, text) {
    let response = await apiClient.post(
      `/page-components/id/${id}/text/${langId}`,
      {
        translationText: text,
      }
    )
    return response
  },
  async getTextFromCard(id) {
    let response = await apiClient.get(`/page-components/id/${id}`)
    return response.data.pageComponent.textTranslationItem.translations
  },
  async deleteCard(id) {
    let response = await apiClient.delete(`/page-components/id/${id}`)
    return response
  },

  async getTopSellers(id = 161) {
    let response = await apiClient.get(`/page-components/id/${id}/children`)
    return response.data.pageComponents
  },
  async createTopSeller(data) {
    let response = await apiClient.post(`/page-components/`, data)
    return response.data
  },

  async createDashboardNews(
    cardTitle,
    route,
    href,
    published,
    publishDate,
    unpublishDate
  ) {
    try {
      let response = await apiClient.post(`/page-components/`, {
        parentComponentId: 73,
        componentName: cardTitle,
        route: route,
        href: href,
        published: published,
        publishDate: publishDate,
        unpublishDate: unpublishDate,
      })
      return response.data.pageComponent.pageComponentId
    } catch (error) {
      console.error(error)
      return false
    }
  },

  async getPromoBanners(langId, countryId) {
    const rootComponentName = 'promo_banner_root'
    let response = await apiClient.get(
      `/page-components/name/${rootComponentName}/children/public?langId=${langId}&countryId=${countryId}`
    )
    return response.data.pageComponents
  },
}
