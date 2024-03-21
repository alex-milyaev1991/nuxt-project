/* eslint-disable no-unused-vars */
import {
  StressQuizSessionOptions,
  StressQuizResponseOptions,
  StressQuizCategoryOptions,
  StressQuizQuestionOptions,
  StressQuizReportItem,
} from '../types/stress-quiz'
/* eslint-enable no-unused-vars */

import axios from 'axios'

/**
 * Service for interacting with the Stress Quiz API.
 */
const apiClient = axios.create({
  baseURL: process.env.apiUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

/**
 * Request interceptor to handle authentication token.
 */
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
  /**
   * Get stress quiz questions.
   * @returns {Promise<StressQuizQuestion[]>} A promise that resolves with an array of stress quiz questions.
   */
  async getQuizQuestions() {
    const response = await apiClient.get('/stress-quiz/questions')
    return response.data.questions
  },

  /**
   * Create a new stress quiz session.
   * @param {StressQuizSessionOptions} session - The data for the new stress quiz session.
   * @returns {Promise<StressQuizSession>} A promise that resolves with the created stress quiz session.
   */
  async createQuizSession(session) {
    const response = await apiClient.post('/stress-quiz/sessions', session)
    return response.data.session
  },

  /**
   * Get a stress quiz session by ID.
   * @param {number} id - The ID of the stress quiz session to fetch.
   * @returns {Promise<StressQuizSession>} A promise that resolves with the fetched stress quiz session.
   */
  async getQuizSession(id) {
    const response = await apiClient.get(`/stress-quiz/sessions/${id}`)
    return response.data.session
  },

  /**
   * Update a stress quiz session.
   * @param {number} id - The ID of the stress quiz session to update.
   * @param {StressQuizSessionOptions} session - The updated data for the stress quiz session.
   * @returns {Promise<StressQuizSession>} A promise that resolves with the updated stress quiz session.
   */
  async updateQuizSession(id, session) {
    const response = await apiClient.put(`/stress-quiz/sessions/${id}`, session)
    return response.data.session
  },

  /**
   * Get stress quiz results for a session.
   * @param {number} sessionId - The ID of the stress quiz session to fetch results for.
   * @returns {Promise<StressQuizResult>} A promise that resolves with the stress quiz results.
   */
  async getResults(sessionId) {
    const response = await apiClient.get(`/stress-quiz/results/${sessionId}`)
    return response.data
  },

  /**
   * Get session history for a user.
   * @param {string} username - The username for which to fetch session history.
   * @param {number} [categoryId] - The category ID to filter by (optional).
   * @param {string} [startDate] - The start date for filtering sessions (optional).
   * @returns {Promise<SessionHistory[]>} A promise that resolves with the user's session history.
   */
  async getSessionHistory(username, categoryId, startDate) {
    const response = await apiClient.get(
      `/stress-quiz/session-history/${username}`,
      {
        params: { categoryId, startDate },
      }
    )
    return response.data.history
  },

  // Categories ---------------------------------------------------------------

  /**
   * Get stress quiz categories.
   * @param {object} [queryParameters] - Optional query parameters to filter categories.
   * @returns {Promise<StressQuizCategory[]>} A promise that resolves with an array of stress quiz categories.
   */
  async getCategories(queryParameters = {}) {
    const response = await apiClient.get('/stress-quiz/categories', {
      params: queryParameters,
    })
    return response.data.categories
  },

  /**
   * Create a new stress quiz category.
   * @param {StressQuizCategoryOptions} options - The data for the new stress quiz category.
   * @returns {Promise<StressQuizCategory>} A promise that resolves with the created stress quiz category.
   */
  async createCategory(options) {
    const response = await apiClient.post('/stress-quiz/categories', options)
    return response.data.category
  },

  /**
   * Get a specific stress quiz category by ID.
   * @param {number} id - The ID of the stress quiz category to fetch.
   * @returns {Promise<StressQuizCategory|null} A promise that resolves with the fetched category or null if not found.
   */
  async getCategory(id) {
    const response = await apiClient.get(`/stress-quiz/categories/${id}`)
    return response.data.category
  },

  /**
   * Update a stress quiz category.
   * @param {number} id - The ID of the stress quiz category to update.
   * @param {StressQuizCategoryOptions} options - The updated data for the stress quiz category.
   * @returns {Promise<StressQuizCategory>} A promise that resolves with the updated stress quiz category.
   */
  async updateCategory(id, options) {
    const response = await apiClient.put(
      `/stress-quiz/categories/${id}`,
      options
    )
    return response.data.category
  },

  /**
   * Delete a stress quiz category by ID.
   * @param {number} id - The ID of the stress quiz category to delete.
   * @returns {Promise<string} A promise that resolves with a success message.
   */
  async deleteCategory(id) {
    await apiClient.delete(`/stress-quiz/categories/${id}`)
    return 'Category deleted successfully'
  },

  // Questions ----------------------------------------------------------------

  /**
   * Get a specific stress quiz question by ID.
   * @param {number} id - The ID of the stress quiz question to fetch.
   * @returns {Promise<StressQuizQuestion|null} A promise that resolves with the fetched question or null if not found.
   */
  async getQuestion(id) {
    const response = await apiClient.get(`/stress-quiz/questions/${id}`)
    return response.data.question
  },

  /**
   * Create a new stress quiz question.
   * @param {StressQuizQuestionOptions} options - The data for the new stress quiz question.
   * @returns {Promise<StressQuizQuestion} A promise that resolves with the created stress quiz question.
   */
  async createQuestion(options) {
    const response = await apiClient.post('/stress-quiz/questions', options)
    return response.data.question
  },

  /**
   * Update a stress quiz question.
   * @param {number} id - The ID of the stress quiz question to update.
   * @param {StressQuizQuestionOptions} options - The updated data for the stress quiz question.
   * @returns {Promise<StressQuizQuestion} A promise that resolves with the updated stress quiz question.
   */
  async updateQuestion(id, options) {
    const response = await apiClient.put(
      `/stress-quiz/questions/${id}`,
      options
    )
    return response.data.question
  },

  /**
   * Delete a stress quiz question by ID.
   * @param {number} id - The ID of the stress quiz question to delete.
   * @returns {Promise<string} A promise that resolves with a success message.
   */
  async deleteQuestion(id) {
    await apiClient.delete(`/stress-quiz/questions/${id}`)
    return 'Question deleted successfully'
  },

  // Responses ----------------------------------------------------------------

  /**
   * Get a list of stress quiz responses with optional query parameters.
   * @param {object} [queryParameters] - Optional query parameters to filter responses.
   * @returns {Promise<StressQuizResponse[]>} A promise that resolves with an array of stress quiz responses.
   */
  async getResponses(queryParameters = {}) {
    const response = await apiClient.get('/stress-quiz/responses', {
      params: queryParameters,
    })
    return response.data.responses
  },

  /**
   * Get a specific stress quiz response by ID.
   * @param {number} id - The ID of the stress quiz response to fetch.
   * @returns {Promise<StressQuizResponse>|null} A promise that resolves with the fetched response or null if not found.
   */
  async getResponse(id) {
    const response = await apiClient.get(`/stress-quiz/responses/${id}`)
    return response.data.response
  },

  /**
   * Create a new stress quiz response.
   * @param {StressQuizResponseOptions} options - The data for the new stress quiz response.
   * @returns {Promise<StressQuizResponse>} A promise that resolves with the created stress quiz response.
   */
  async createResponse(options) {
    const response = await apiClient.post('/stress-quiz/responses', options)
    return response.data.response
  },

  /**
   * Update a stress quiz response.
   * @param {number} id - The ID of the stress quiz response to update.
   * @param {StressQuizResponseOptions} options - The updated data for the stress quiz response.
   * @returns {Promise<StressQuizResponse>} A promise that resolves with the updated stress quiz response.
   */
  async updateResponse(id, options) {
    const response = await apiClient.put(
      `/stress-quiz/responses/${id}`,
      options
    )
    return response.data.response
  },

  /**
   * Delete a stress quiz response by ID.
   * @param {number} id - The ID of the stress quiz response to delete.
   * @returns {Promise<string} A promise that resolves with a success message.
   */
  async deleteResponse(id) {
    await apiClient.delete(`/stress-quiz/responses/${id}`)
    return 'Response deleted successfully'
  },

  // Sessions -----------------------------------------------------------------

  /**
   * Get a list of stress quiz sessions with optional query parameters.
   * @param {object} [queryParameters] - Optional query parameters to filter sessions.
   * @returns {Promise<StressQuizSession[]>} A promise that resolves with an array of stress quiz sessions.
   */
  async getAllQuizSessions(queryParameters = {}) {
    const response = await apiClient.get('/stress-quiz/sessions', {
      params: queryParameters,
    })
    return response.data.sessions
  },

  /**
   * Delete a stress quiz session by ID.
   * @param {number} id - The ID of the stress quiz session to delete.
   * @returns {Promise<string} A promise that resolves with a success message.
   */
  async deleteQuizSession(id) {
    await apiClient.delete(`/stress-quiz/quiz-sessions/${id}`)
    return 'Quiz session deleted successfully'
  },

  /**
   * Get a list of stress quiz category products with optional query parameters.
   * @param {object} [queryParameters] - Optional query parameters to filter category products.
   * @returns {Promise<StressQuizCategoryProduct[]>} A promise that resolves with an array of stress quiz category products.
   */
  async getCategoryProducts(queryParameters = {}) {
    const response = await apiClient.get('/stress-quiz/category-products', {
      params: queryParameters,
    })
    return response.data.categoryProducts
  },

  // Product Recommendations --------------------------------------------------

  /**
   * Get a specific stress quiz category product by ID.
   * @param {number} id - The ID of the stress quiz category product to fetch.
   * @returns {Promise<StressQuizCategoryProduct|null} A promise that resolves with the fetched category product or null if not found.
   */
  async getCategoryProduct(id) {
    const response = await apiClient.get(`/stress-quiz/category-products/${id}`)
    return response.data.categoryProduct
  },

  /**
   * Create a new stress quiz category product.
   * @param {StressQuizCategoryProductOptions} options - The data for the new stress quiz category product.
   * @returns {Promise<StressQuizCategoryProduct} A promise that resolves with the created stress quiz category product.
   */
  async createCategoryProduct(options) {
    const response = await apiClient.post(
      '/stress-quiz/category-products',
      options
    )
    return response.data.categoryProduct
  },

  /**
   * Update a stress quiz category product.
   * @param {number} id - The ID of the stress quiz category product to update.
   * @param {StressQuizCategoryProductOptions} options - The updated data for the stress quiz category product.
   * @returns {Promise<StressQuizCategoryProduct} A promise that resolves with the updated stress quiz category product.
   */
  async updateCategoryProduct(id, options) {
    const response = await apiClient.put(
      `/stress-quiz/category-products/${id}`,
      options
    )
    return response.data.categoryProduct
  },

  /**
   * Delete a stress quiz category product by ID.
   * @param {number} id - The ID of the stress quiz category product to delete.
   * @returns {Promise<string} A promise that resolves with a success message.
   */
  async deleteCategoryProduct(id) {
    await apiClient.delete(`/stress-quiz/category-products/${id}`)
    return 'Category Product deleted successfully'
  },

  // Package Recommendations --------------------------------------------------

  /**
   * Get a list of stress quiz package recommendations with optional query parameters.
   * @param {object} [queryParameters] - Optional query parameters to filter package recommendations.
   * @returns {Promise<StressQuizPackageRecommendation[]>} A promise that resolves with an array of stress quiz package recommendations.
   */
  async getPackageRecommendations(queryParameters = {}) {
    const response = await apiClient.get(
      '/stress-quiz/package-recommendations',
      {
        params: queryParameters,
      }
    )
    return response.data.packageRecommendations
  },

  /**
   * Set a stress quiz package recommendation.
   * @param {StressQuizPackageRecommendationOptions} options - The data for the package recommendation.
   * @returns {Promise<StressQuizPackageRecommendation>} A promise that resolves with the created or updated package recommendation.
   */
  async setPackageRecommendation(options) {
    const response = await apiClient.post(
      '/stress-quiz/package-recommendations',
      options
    )
    return response.data.packageRecommendation
  },

  /**
   * Delete a stress quiz package recommendation by username, countryId, and priority.
   * @param {StressQuizPackageRecommendationOptions} options - The data to identify the package recommendation.
   * @returns {Promise<string>} A promise that resolves with a success message.
   */
  async deletePackageRecommendation(options) {
    await apiClient.delete('/stress-quiz/package-recommendations', {
      data: options,
    })
    return 'Package Recommendation deleted successfully'
  },

  /**
   * Get a report of all members in :username's mentor group who have taken the stress quiz
   * @param {string} username
   * @returns {Promise<StressQuizReportItem[]>}
   */

  async getStressQuizReport(username) {
    const response = await apiClient.get(
      `/stress-quiz/downline-report/${username}`
    )
    return response.data
  },
}
