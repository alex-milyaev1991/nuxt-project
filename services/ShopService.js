/* eslint-disable no-unused-vars */
import {
  ProductIngredient,
  ProductIngredientOptions,
  ProductPair,
  ProductPairOptions,
} from '../types/products'
/* eslint-enable no-unused-vars */

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
  // Products (Backoffice) ------------------------------------------

  /**
   * @param {Object} params Query Parameters to filter products
   * @param {number?} params.countryId countryId
   * @param {number?} params.categoryId categoryId
   * @param {number?} params.orderTypeId orderTypeId
   * @param {boolean?} params.retired retired
   */
  async getProducts(params) {
    const response = await apiClient.get('/shop/products', { params })
    return response.data.products
  },

  async getBackofficeProduct(productId) {
    const response = await apiClient.get('/shop/product', {
      params: { productId },
    })
    return response.data.product
  },

  async updateBackofficeProduct(product_id, data) {
    const response = await apiClient.put('/shop/product', {
      product_id,
      ...data,
    })
    return response.data.product
  },

  // Products (SolleDB) ---------------------------------------------

  async getProductDetails(productId) {
    const response = await apiClient.get('/shop/product-details', {
      params: { productId },
    })
    return response.data.product
  },

  async getProductFaqGroup(productId) {
    const response = await apiClient.get('/shop/product-details/faqs', {
      params: { productId },
    })
    return response.data
  },

  // Categories -----------------------------------------------------

  async getCategories() {
    const response = await apiClient.get('/shop/categories')
    return response.data.categories
  },

  /**
   * @param {string} slug The unique url slug that identifies a category
   * @returns {Promise<{
   *   categoryId: number;
   *   slug: string;
   *   quoteTextTranslation: TranslationItem;
   *   quoteAuthorTranslation: TranslationItem;
   *   blogPosts: {
   *     blogPostId: number;
   *     postTitleTranslationItem: TranslationItem;
   *     thumbnail: string;
   *     authors: {
   *       firstName: string;
   *       lastName: string;
   *       titleTranslationItem: TranslationItem
   *     }[]
   *   }[];
   * }>}
   */
  async getCategoryDetails(slug) {
    const response = await apiClient.get(`/shop/categories/${slug}/details`)
    return response.data.category
  },

  async setProductCategoryXref(productId, categoryId, displayOrder = null) {
    const response = await apiClient.post('/shop/product-category', {
      productId,
      categoryId,
      displayOrder,
    })
    return response.data.productCategoryXref
  },

  async deleteProductCategoryXref(productId, categoryId) {
    const response = await apiClient.delete('/shop/product-category', {
      params: {
        productId,
        categoryId,
      },
    })
    return response.data
  },

  // Order Types ----------------------------------------------------

  async getOrderTypes() {
    const response = await apiClient.get('/shop/order-types')
    return response.data.orderTypes
  },

  async setProductOrderTypeXref(productId, orderTypeId) {
    const response = await apiClient.post('/shop/product-order-type', {
      productId,
      orderTypeId,
    })
    return response.data.productOrderTypeXref
  },

  async deleteProductOrderTypeXref(productId, orderTypeId) {
    const response = await apiClient.delete('/shop/product-order-type', {
      params: {
        productId,
        orderTypeId,
      },
    })
    return response.data
  },

  // Product Types --------------------------------------------------

  async getProductTypes() {
    const response = await apiClient.get('/shop/product-types')
    return response.data.productTypes
  },

  async setProductTypeXref(productId, productTypeId) {
    const response = await apiClient.post('/shop/product-type-xref', {
      productId,
      productTypeId,
    })
    return response.data.productTypeXref
  },

  async deleteProductTypeXref(productId, productTypeId) {
    const response = await apiClient.delete('/shop/product-type-xref', {
      params: {
        productId,
        productTypeId,
      },
    })
    return response.data
  },

  // Benefit Icons --------------------------------------------------

  async getBenefitIcons() {
    const response = await apiClient.get('/shop/product-benefits/icons')
    return response.data.icons
  },
  async createBenefitIcon({ url, isDefault }) {
    const response = await apiClient.post('/shop/product-benefits/icons', {
      url,
      isDefault,
    })
    return response.data.icon
  },
  async updateBenefitIcon(productBenefitIconId, { url, isDefault }) {
    const response = await apiClient.put(
      `/shop/product-benefits/icons/${productBenefitIconId}`,
      {
        url,
        isDefault,
      }
    )
    return response.data.icon
  },
  deleteBenefitIcon(productBenefitIconId) {
    return apiClient.delete(
      `/shop/product-benefits/icons/${productBenefitIconId}`
    )
  },

  // Variant Groups -------------------------------------------------

  async getVariantGroups() {
    const response = await apiClient.get('/shop/product-variant-groups')
    return response.data.groups
  },

  async createVariantGroup() {
    const response = await apiClient.post('/shop/product-variant-groups')
    return response.data.group
  },

  async getVariantGroup(productVariantGroupId) {
    const response = await apiClient.get(
      `/shop/product-variant-groups/${productVariantGroupId}`
    )
    return response.data.group
  },

  async updateVariantGroup(productVariantGroupId, data) {
    const response = await apiClient.put(
      `/shop/product-variant-groups/${productVariantGroupId}`,
      data
    )
    return response.data.group
  },

  deleteVariantGroup(productVariantGroupId) {
    return apiClient.delete(
      `/shop/product-variant-groups/${productVariantGroupId}`
    )
  },

  async getVariantGroupForProduct(productId) {
    const response = await apiClient.get(
      `/shop/product-variant-group/product/${productId}`
    )
    return response.data.group
  },

  // Product Variants -----------------------------------------------

  async createVariant(data) {
    const response = await apiClient.post('/shop/product-variants', data)
    return response.data.productVariant
  },

  async getVariant(productVariantId) {
    const response = await apiClient.get(
      `/shop/product-variants/${productVariantId}`
    )
    return response.data.productVariant
  },

  async updateVariant(productVariantId, data) {
    const response = await apiClient.put(
      `/shop/product-variants/${productVariantId}`,
      data
    )
    return response.data.productVariant
  },

  deleteVariant(productVariantId) {
    return apiClient.delete(`/shop/product-variants/${productVariantId}`)
  },

  // Product Ingredients --------------------------------------------

  /**
   * Create a new product ingredient.
   *
   * @param {ProductIngredientOptions} data - Data for creating the product ingredient.
   * @returns {Promise<ProductIngredient>} The created product ingredient.
   */
  async createProductIngredient(data) {
    const response = await apiClient.post('/shop/product-ingredients', data)
    return response.data.productIngredient
  },

  /**
   * Get a product ingredient by its ID.
   *
   * @param {number} productIngredientId - The ID of the product ingredient.
   * @returns {Promise<ProductIngredient>} The product ingredient.
   */
  async getProductIngredient(productIngredientId) {
    const response = await apiClient.get(
      `/shop/product-ingredients/${productIngredientId}`
    )
    return response.data.productIngredient
  },

  /**
   * Update a product ingredient by its ID.
   *
   * @param {number} productIngredientId - The ID of the product ingredient.
   * @param {ProductIngredientOptions} data - Updated data for the product ingredient.
   * @returns {Promise<ProductIngredient>} The updated product ingredient.
   */
  async updateProductIngredient(productIngredientId, data) {
    const response = await apiClient.put(
      `/shop/product-ingredients/${productIngredientId}`,
      data
    )
    return response.data.productIngredient
  },

  /**
   * Delete a product ingredient by its ID.
   *
   * @param {number} productIngredientId - The ID of the product ingredient to delete.
   */
  async deleteProductIngredient(productIngredientId) {
    await apiClient.delete(`/shop/product-ingredients/${productIngredientId}`)
  },

  /**
   * Get all product ingredients.
   *
   * @returns {Promise<ProductIngredient[]>} An array of product ingredients.
   */
  async getAllProductIngredients() {
    const response = await apiClient.get('/shop/product-ingredients')
    return response.data.productIngredients
  },

  /**
   * Get product ingredients by product ID.
   *
   * @param {number} productId - The ID of the product.
   * @returns {Promise<ProductIngredient[]>} An array of product ingredients for the given product.
   */
  async getProductIngredientsByProductId(productId) {
    const response = await apiClient.get(
      `/shop/product-ingredients/product/${productId}`
    )
    return response.data.productIngredients
  },

  // Product Pairs --------------------------------------------------

  /**
   * Get product pairs by product ID.
   *
   * @param {number} productId - The ID of the source product.
   * @returns {Promise<ProductPair[]>} An array of product pairs for the given product ID.
   */
  async getProductProductLinksByProductId(productId) {
    const response = await apiClient.get(
      `/shop/product-pairs/product/${productId}`
    )
    return response.data.productPairs
  },

  /**
   * Create a new product pair.
   *
   * @param {ProductPairOptions} options - Data for creating the product pair.
   * @returns {Promise<ProductPair>} The created product pair.
   */
  async createProductProductLink(options) {
    const response = await apiClient.post(
      '/shop/product-pairs/product-pair',
      options
    )
    return response.data.productPair
  },

  /**
   * Update a product pair by its ID.
   *
   * @param {number} productProductId - The ID of the product pair.
   * @param {ProductPairOptions} options - Updated data for the product pair.
   * @returns {Promise<ProductPair>} The updated product pair.
   */
  async updateProductProductLink(productProductId, options) {
    const response = await apiClient.put(
      `/shop/product-pairs/product-pair/${productProductId}`,
      options
    )
    return response.data.productPair
  },

  /**
   * Delete a product pair by its ID.
   *
   * @param {ProductPairOptions} options - Data for creating the product pair.
   * @returns {Promise<number>} The number of records deleted.
   */
  async deleteProductProductLink(options) {
    const response = await apiClient.delete(
      '/shop/product-pairs/product-pair',
      {
        data: options,
      }
    )
    return response.data
  },
}
