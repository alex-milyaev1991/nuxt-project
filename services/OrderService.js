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
  async getOrder(order_id) {
    let response = await apiClient.get(`/orders/id/${order_id}`)
    return response.data.order
  },

  async getOrderDetails(order_id) {
    let response = await apiClient.get(`/orders/id/${order_id}/details`)

    return response.data
  },

  async getOrdersByUsername(username, limit = 10, offset = 0) {
    let response = await apiClient.get(
      `/orders/username/${username}?limit=${limit}&offset=${offset}`
    )
    response.data.orders.forEach((order) => {
      order.date = new Date(order.timestamp)
    })
    return response.data.orders
  },
  async getOrdersByUsernameAndOrderType(
    username,
    limit = 10,
    offset = 0,
    orderTypeId
  ) {
    let response = await apiClient.get(
      `/orders/username/${username}?limit=${limit}&offset=${offset}&orderTypeId=${orderTypeId} `
    )
    response.data.orders.forEach((order) => {
      order.date = new Date(order.timestamp)
    })
    return response.data.orders
  },
  async getOrdersByUsernameAndOrderTypeCount(
    username,
    offset = 0,
    orderTypeId = null
  ) {
    let response = await apiClient.get(
      `/orders/username/${username}?&offset=${offset}&orderTypeId=${orderTypeId} `
    )
    response.data.orders.forEach((order) => {
      order.date = new Date(order.timestamp)
    })
    return response.data.count
  },
  async getOrdersByUsernameAndOrderStatusType(
    username,
    limit = 10,
    offset = 0,
    orderStatusTypeId = null
  ) {
    let response = await apiClient.get(
      `/orders/username/${username}?limit=${limit}&offset=${offset}&orderStatusTypeId=${orderStatusTypeId} `
    )
    response.data.orders.forEach((order) => {
      order.date = new Date(order.timestamp)
    })
    return response.data.orders
  },
  async getOrdersByUsernameAndOrderStatusTypeCount(
    username,
    offset = 0,
    orderStatusTypeId
  ) {
    let response = await apiClient.get(
      `/orders/username/${username}?offset=${offset}&orderStatusTypeId=${orderStatusTypeId} `
    )
    response.data.orders.forEach((order) => {
      order.date = new Date(order.timestamp)
    })
    return response.data.count
  },

  async getLastOrderByUsername(username) {
    let response = await apiClient.get(`/orders/username/${username}/last`)
    response.data.order.date = new Date(response.data.order.timestamp)
    return response.data.order
  },

  async getOrderCountByUsername(username) {
    let response = await apiClient.get(`/orders/username/${username}/count`)
    return response.data.count
  },

  async getOrderTypes() {
    let response = await apiClient.get(`/orders/order-types`)
    return response.data.orderTypes
  },

  setDisplayProperties(order) {
    order.display_products = this.getDisplayableProducts(order.order_products)

    order.total_quanty = this.getTotalQuantity(order.display_products)

    return order
  },

  displayOrderProduct(orderProducts) {
    return orderProducts.filter(
      (product) =>
        product.sku !== 'DISCOUNT_CODE' &&
        product.sku !== 'SPENT_REWARDS' &&
        product.sku !== 'SPENT_GIFTCARD' &&
        product.product_types.some((type) => type.define_name !== 'kit_item')
    )
  },

  getTotalQuantity(orderProducts) {
    let totalQuantity = 0

    orderProducts.forEach((product) => {
      totalQuantity += parseInt(product.quantity)
    })

    return totalQuantity
  },

  async getOnlyTrialPack(username) {
    let response = await apiClient.get(
      `/orders/username/${username}/only-trial-pack`
    )
    return response.data
  },
}
