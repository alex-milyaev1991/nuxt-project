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
  async getCategories() {
    let response = await apiClient.get(`/products/categories`)
    return response.data.categories
  },

  async getAllProducts() {
    let response = await apiClient.get('/products/')
    return response.data.products
  },

  async getProducts(countryId = 185, orderType = 1, showAll = false) {
    const response = await apiClient.get('/products/backoffice', {
      params: { countryId, orderType, showAll },
    })

    let products = response.data.products

    products.sort((a, b) =>
      a.sequence > b.sequence ? 1 : a.sequence < b.sequence ? -1 : 0
    )

    products = products.map((product) => ({
      ...product,
      image: product.image
        ? `${process.env.backofficeUrl}${product.image}`
        : '',
      thumbnail_image: product.thumbnail_image
        ? `${process.env.backofficeUrl}${product.thumbnail_image}`
        : '',
    }))

    return products
  },
  async getProductsForPromos(countryId = 185, orderType = 1, showAll = true) {
    const response = await apiClient.get('/products/backoffice', {
      params: { countryId, orderType, showAll },
    })

    let products = response.data.products

    products.sort((a, b) =>
      a.sequence > b.sequence ? 1 : a.sequence < b.sequence ? -1 : 0
    )

    products = products.map((product) => ({
      ...product,
      image: product.image
        ? `${process.env.backofficeUrl}${product.image}`
        : '',
      thumbnail_image: product.thumbnail_image
        ? `${process.env.backofficeUrl}${product.thumbnail_image}`
        : '',
    }))

    return products
  },

  async getProduct(id) {
    return await apiClient.get(`/products/id/${id}/details`)
  },
  async getProductDetails(id) {
    let response = await apiClient.get(`/products/id/${id}/details`)
    return response.data.product
  },

  async getBackofficeProduct(id) {
    const response = await apiClient.get(`/products/id/${id}`)
    const product = response.data.product
    return {
      ...product,
      image: product.image
        ? `${process.env.backofficeUrl}${product.image}`
        : '',
      thumbnail_image: product.thumbnail_image
        ? `${process.env.backofficeUrl}${product.thumbnail_image}`
        : '',
    }
  },

  async createOrGetProduct(id) {
    let response = await apiClient.post(`/products/id/${id}/details`)
    return response.data.details
  },

  async updateProductDetails(id, data) {
    let response = await apiClient.put(`/products/id/${id}/details`, data)
    return response.data.details
  },

  async uploadTitleImage(id, image) {
    const formData = new FormData()
    formData.append('file', image)

    let response = await apiClient.post(
      `/products/id/${id}/details/titleImage`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    return response.data.details
  },

  async deleteTitleImage(id) {
    let response = await apiClient.delete(
      `/products/id/${id}/details/titleImage`
    )
    return response
  },

  async getProductImages(id) {
    let response = await apiClient.get(`/products/id/${id}/details/images`)
    return response.data.images
  },

  async uploadProductImage(id, image, displayOrder = -1) {
    const formData = new FormData()
    formData.append('file', image)
    formData.append('display_order', displayOrder)

    let response = await apiClient.post(
      `/products/id/${id}/details/images`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    return response.data.images
  },

  async updateProductImage(id, displayOrder) {
    let response = await apiClient.put(`/products/images/id/${id}`, {
      display_order: displayOrder,
    })
    return response.data.image
  },

  async deleteProductImage(id) {
    let response = await apiClient.delete(`/products/images/id/${id}`)
    return response.data.deleted
  },

  async updateProductImageGrid(id, url, displayOrder) {
    let response = await apiClient.post(
      `/products/id/${id}/details/images/grid`,
      {
        url,
        displayOrder,
      }
    )
    return response.data.images
  },

  // Product Videos
  // TODO: CHECK THE URLS
  async getProductVideos(id) {
    let response = await apiClient.get(`/products/id/${id}/details/videos`)
    let videos = response.data.videos

    videos.sort((a, b) => {
      if (a.display_order > b.display_order) {
        return 1
      }
      if (a.display_order < b.display_order) {
        return -1
      }
      return 0
    })

    return videos
  },

  async newProductVideo(video) {
    try {
      let response = await apiClient.post(
        `/products/id/${video.product_id}/details/videos`,
        video
      )
      return response.data.video
    } catch (error) {
      console.error(error)
    }
  },

  async updateProductVideo(video, product_video_id) {
    try {
      let response = await apiClient.put(
        `/products/videos/${product_video_id}`,
        video
      )
      return response.data.video
    } catch (error) {
      console.error(error)
    }
  },

  async updateProductVideoOrder(product_video_id, index) {
    try {
      let response = await apiClient.put(
        `/products/videos/${product_video_id}`,
        {
          display_order: index,
        }
      )
      return response.data.video
    } catch (error) {
      console.error(error)
    }
  },

  async deleteProductVideo(product_video_id) {
    try {
      let response = await apiClient.delete(
        `/products/videos/${product_video_id}`
      )
      return response
    } catch (error) {
      alert('failed to delete product video')
    }
  },

  // Product Benefits
  async getProductBenefits(id) {
    let response = await apiClient.get(`/products/id/${id}/details/benefits`)
    return response.data.benefits
  },

  async addProductBenefit(id, display_order = -1) {
    let response = await apiClient.post(`/products/id/${id}/details/benefits`, {
      display_order: display_order,
    })
    return response.data.benefit
  },

  async updateProductBenefit(id, { display_order, productBenefitIconId }) {
    let response = await apiClient.put(`/products/benefits/id/${id}`, {
      display_order,
      productBenefitIconId,
    })
    return response.data.benefit
  },

  async deleteProductBenefit(id) {
    let response = await apiClient.delete(`/products/benefits/id/${id}`)
    return response
  },

  // Product Ingredients
  async getProductIngredients(id) {
    let response = await apiClient.get(`/products/id/${id}/details/ingredients`)
    return response.data.ingredients
  },

  async addProductIngredient(id, display_order = -1) {
    let response = await apiClient.post(
      `/products/id/${id}/details/ingredients`,
      {
        display_order: display_order,
      }
    )
    return response.data.ingredient
  },

  async updateProductIngredientOrder(id, display_order) {
    let response = await apiClient.put(`/products/ingredients/id/${id}`, {
      display_order: display_order,
    })
    return response.data.ingredient
  },

  async deleteProductIngredient(id) {
    let response = await apiClient.delete(`/products/ingredients/id/${id}`)
    return response
  },

  async setProductSequence(productSequence) {
    let response = await apiClient.put('/products/backoffice/sequence', {
      productSequence,
    })
    return response.data
  },

  async getPurchasedProducts(username) {
    let response = await apiClient.get(`/products/purchased/${username}`)
    return response.data
  },

  async getOutOfStockStatus(id) {
    try {
      let response = await apiClient.get(`/products/id/${id}/details`)
      return response.data.product.details.out_of_stock
    } catch (error) {
      console.error(error)
      return false
    }
  },

  async getShopCategories() {
    let response = await apiClient.get(`/products/shop-categories`)
    return response.data.categories
  },

  async getProductsByShopCategory(countryId, categoryId) {
    let response = await apiClient.get(`/products/shop-categories/products`, {
      params: {
        countryId,
        categoryId,
      },
    })
    return response.data.products
  },

  async getShopProductDetails(productId) {
    let response = await apiClient.get('/shop/product-details', {
      params: { productId },
    })
    return response.data.product
  },
}
