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
  async sendResults(
    results,
    name,
    email,
    sendToSelf,
    sendToMentor,
    replicateSiteData,
    lang
  ) {
    try {
      let response = await apiClient.post(`/product-selector/send-results`, {
        results: results,
        name: name,
        email: email,
        sendToSelf: sendToSelf,
        replicateSiteData: replicateSiteData,
        sendToMentor: sendToMentor,
        lang: lang,
      })
      return response
    } catch (error) {
      console.error(error)
      return false
    }
  },
}
