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
  // Ingredient Categories ------------------------------------------

  async getIngredientCategories() {
    const response = await apiClient.get(`/ingredients/categories`)
    return response.data.ingredientCategories
  },

  // Ingredients ----------------------------------------------------

  async getAllIngredients() {
    const response = await apiClient.get('/ingredients')
    return response.data.ingredients
  },

  async getIngredientBySlug(slug) {
    const response = await apiClient.get(`/ingredients/slug/${slug}`)
    return response.data.ingredient
  },

  async getIngredientById(ingredientId) {
    const response = await apiClient.get(`/ingredients/id/${ingredientId}`)
    return response.data.ingredient
  },

  async createIngredient(data = {}) {
    return (await apiClient.post('/ingredients', data)).data.ingredient
  },

  async updateIngredient(ingredientId, data) {
    return (await apiClient.put(`/ingredients/id/${ingredientId}`, data)).data
      .ingredient
  },

  async deleteIngredient(ingredientId) {
    return apiClient.delete(`/ingredients/id/${ingredientId}`)
  },

  // Ingredient Benefits --------------------------------------------

  async createIngredientBenefit(ingredientId, data = {}) {
    return (
      await apiClient.post('/ingredients/benefits', { ingredientId, ...data })
    ).data.ingredientBenefit
  },

  async updateIngredientBenefit(ingredientBenefitId, data) {
    return (
      await apiClient.put(`/ingredients/benefits/${ingredientBenefitId}`, data)
    ).data.ingredientBenefit
  },

  async deleteIngredientBenefit(ingredientBenefitId) {
    return apiClient.delete(`/ingredients/benefits/${ingredientBenefitId}`)
  },

  // Ingredient Studies ---------------------------------------------

  async createIngredientStudy(ingredientId, data = {}) {
    return (
      await apiClient.post('/ingredients/studies', { ingredientId, ...data })
    ).data.ingredientStudy
  },

  async updateIngredientStudy(ingredientStudyId, data) {
    return (
      await apiClient.put(`/ingredients/studies/${ingredientStudyId}`, data)
    ).data.ingredientStudy
  },

  async deleteIngredientStudy(ingredientStudyId) {
    return apiClient.delete(`/ingredients/studies/${ingredientStudyId}`)
  },

  // Ingredient Product Links ---------------------------------------

  async setIngredientProductXref(ingredientId, productId, displayOrder = null) {
    return (
      await apiClient.post('/ingredients/product-xrefs', {
        ingredientId,
        productId,
        displayOrder,
      })
    ).data.ingredientProductXref
  },

  async deleteIngredientProductXref(ingredientId, productId) {
    return apiClient.delete('/ingredients/product-xrefs', {
      data: { ingredientId, productId },
    })
  },

  // Ingredient Category Xrefs --------------------------------------

  async setIngredientCategoryXref(
    ingredientId,
    ingredientCategoryId,
    displayOrder = null
  ) {
    return (
      await apiClient.post('/ingredients/category-xrefs', {
        ingredientId,
        ingredientCategoryId,
        displayOrder,
      })
    ).data.ingredientCategoryXref
  },

  async deleteIngredientCategoryXref(ingredientId, ingredientCategoryId) {
    return apiClient.delete('/ingredients/category-xrefs', {
      data: { ingredientId, ingredientCategoryId },
    })
  },
}
