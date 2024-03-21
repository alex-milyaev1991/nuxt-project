import axios from 'axios'

/**
 * Service for interacting with the ProductItem API.
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
   * Get all product items.
   * @returns {Promise<Array>} A promise that resolves with an array of product items.
   */
  async getAllProductItems() {
    const response = await apiClient.get('/product-items/')
    return response.data.productItems
  },

  /**
   * Get a product item by its ID.
   * @param {number} productItemId - The ID of the product item.
   * @returns {Promise<Object>} A promise that resolves with the product item object.
   */
  async getProductItemById(productItemId) {
    const response = await apiClient.get(`/product-items/${productItemId}`)
    return response.data.productItem
  },

  /**
   * Create a product item.
   * @param {Object} data - The data for creating the product item.
   * @returns {Promise<Object>} A promise that resolves with the created product item object.
   */
  async createProductItem(data = {}) {
    const response = await apiClient.post('/product-items/', data)
    return response.data.productItem
  },

  /**
   * Update a product item.
   * @param {number} productItemId - The ID of the product item to update.
   * @param {Object} data - The updated data for the product item.
   * @returns {Promise<Object>} A promise that resolves with the updated product item object.
   */
  async updateProductItem(productItemId, data) {
    const response = await apiClient.put(
      `/product-items/${productItemId}`,
      data
    )
    return response.data.productItem
  },

  /**
   * Delete a product item.
   * @param {number} productItemId - The ID of the product item to delete.
   * @returns {Promise} A promise that resolves after deleting the product item.
   */
  async deleteProductItem(productItemId) {
    return apiClient.delete(`/product-items/${productItemId}`)
  },

  /**
   * Get product items by product ID.
   * @param {number} productId - The ID of the product.
   * @returns {Promise<Array>} A promise that resolves with an array of product items.
   */
  async getProductItemsByProductId(productId) {
    const response = await apiClient.get(
      `/product-items/product/${productId}/items`
    )
    return response.data.productItems
  },

  /**
   * Set product item cross-reference.
   * @param {number} product_id - The ID of the product.
   * @param {number} productItemId - The ID of the product item.
   * @param {number} displayOrder - The display order of the cross-reference.
   * @returns {Promise<Object>} A promise that resolves with the product item cross-reference object.
   */
  async setProductItemXref(product_id, productItemId, displayOrder = null) {
    const response = await apiClient.post(
      `/product-items/product/${product_id}/xref/${productItemId}`,
      { displayOrder }
    )
    return response.data.productItemXref
  },

  /**
   * Delete product item cross-reference.
   * @param {number} product_id - The ID of the product.
   * @param {number} productItemId - The ID of the product item.
   * @returns {Promise} A promise that resolves after deleting the product item cross-reference.
   */
  async deleteProductItemXref(product_id, productItemId) {
    return apiClient.delete(
      `/product-items/product/${product_id}/xref/${productItemId}`
    )
  },
}
