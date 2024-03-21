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
  // Faq Groups -----------------------------------------------------

  async getAllFaqGroups() {
    const response = await apiClient.get('/faqs/groups')
    return response.data.faqGroups
  },

  async getFaqGroupById(faqGroupId) {
    const response = await apiClient.get(`/faqs/groups/${faqGroupId}`)
    return response.data.faqGroup
  },

  async createFaqGroup(data = {}) {
    return (await apiClient.post('/faqs/groups', data)).data.faqGroup
  },

  async updateFaqGroup(faqGroupId, data) {
    return (await apiClient.put(`/faqs/groups/${faqGroupId}`, data)).data
      .faqGroup
  },

  async deleteFaqGroup(faqGroupId) {
    return apiClient.delete(`/faqs/groups/${faqGroupId}`)
  },

  // Faq Questions --------------------------------------------------

  async getAllFaqQuestions() {
    const response = await apiClient.get('/faqs/questions')
    return response.data.faqQuestions
  },

  async getAllFaqQuestionsByGroupId(faqGroupId) {
    const response = await apiClient.get(`/faqs/groups/${faqGroupId}/questions`)
    return response.data.faqQuestions
  },

  async getFaqQuestionById(faqQuestionId) {
    const response = await apiClient.get(`/faqs/questions/${faqQuestionId}`)
    return response.data.faqQuestion
  },

  async createFaqQuestion(data = {}) {
    return (await apiClient.post('/faqs/questions', data)).data.faqQuestion
  },

  async updateFaqQuestion(faqQuestionId, data) {
    return (await apiClient.put(`/faqs/questions/${faqQuestionId}`, data)).data
      .faqQuestion
  },

  async deleteFaqQuestion(faqQuestionId) {
    return apiClient.delete(`/faqs/questions/${faqQuestionId}`)
  },
}
