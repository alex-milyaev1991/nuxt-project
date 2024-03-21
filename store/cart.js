import qs from 'qs'
import CartService from '@/services/CartService.js'
import GoogleAnalyticsService from '@/services/GoogleAnalyticsService.js'

export const state = () => ({
  cartItems: [],
})

export const mutations = {
  REPLACE_CART(state, cart) {
    state.cartItems = cart
  },
  ADD_TO_CART(state, { productId, quantity }) {
    state.cartItems.push({ productId, quantity })
  },
  UPDATE_CART(state, { productId, quantity }) {
    const cartItem = state.cartItems.find(
      (item) => item.productId === productId
    )
    if (cartItem) cartItem.quantity = quantity
  },
  REMOVE_FROM_CART(state, productId) {
    state.cartItems = state.cartItems.filter(
      (item) => item.productId !== productId
    )
  },
  CLEAR_CART(state) {
    state.cartItems = []
  },
}

export const actions = {
  async setQuantity(
    { state, commit, dispatch, rootState, rootGetters },
    { productId, quantity }
  ) {
    // Prevent success kits from being added if the user is logged in
    let isSuccessKit = rootGetters['shop/isSuccessKit'](productId)
    if (rootState.auth.loggedIn && isSuccessKit && quantity > 0) return

    // Get current cart item
    const cartItem = state.cartItems.find((p) => p.productId == productId)
    const oldQuantity = cartItem?.quantity || 0

    // Update local cart array
    if (!cartItem && quantity) {
      commit('ADD_TO_CART', { productId, quantity })
    }

    if (cartItem) {
      if (quantity > 0) {
        commit('UPDATE_CART', { productId, quantity })
      } else {
        commit('REMOVE_FROM_CART', productId)
      }
    }

    // Update database if logged in
    if (rootState.auth.loggedIn) {
      await dispatch('updateCartInDB', { productId, quantity })
    }

    // Push data to Google Analytics
    const product = rootGetters['shop/getProduct'](productId)
    const quantityDifference = quantity - oldQuantity
    if (product && quantityDifference)
      GoogleAnalyticsService.updateCart(product, quantityDifference)
  },

  async fetchCartFromDB({ rootState, dispatch }) {
    try {
      const username = rootState.auth.user?.username
      const response = await CartService.postCartItems({ username })
      dispatch('importDBCartItems', response.data.cart.cart_items)
    } catch (error) {
      console.error('Vuex.Cart.fetchCartFromDB', error)
    }
  },

  async updateCartInDB({ rootState, dispatch }, { productId, quantity }) {
    const username = rootState.auth.user?.username
    const response = await CartService.putCartItems({
      username,
      quantity,
      product_id: productId,
    })
    dispatch('importDBCartItems', response.data.cart.cart_items)
  },

  importDBCartItems({ commit }, cartItems) {
    commit(
      'REPLACE_CART',
      cartItems.map((item) => ({
        productId: item.product_id,
        quantity: item.quantity,
      }))
    )
  },

  clearCart({ commit }) {
    commit('CLEAR_CART')
  },

  clearInvalidItems({ state, dispatch, rootGetters }) {
    state.cartItems.forEach(({ productId }) => {
      const product = rootGetters['shop/getProduct'](productId)
      if (!product) {
        dispatch('setQuantity', {
          productId,
          quantity: 0,
        })
      }
    })
  },
}

export const getters = {
  findProductInCart: (_state, getters) => (productId) => {
    let cartProducts = getters.cartProducts
    return cartProducts.find((p) => p.product_id == productId)
  },

  cartProducts: (state, _getters, _rootState, rootGetters) => {
    // filter to only include available products
    return state.cartItems
      .map((cartItem) => {
        const product = rootGetters['shop/getProduct'](cartItem.productId)
        return product ? { ...cartItem, ...product } : null
      })
      .filter((cartProduct) => !!cartProduct)
  },

  cartTotalQuantity: (_state, getters) =>
    getters.cartProducts.reduce(
      (total, cartItem) => (total += cartItem.quantity),
      0
    ),

  cartSubtotal: (_state, getters) =>
    getters.cartProducts.reduce(
      (subtotal, product) =>
        subtotal + product.wholesale_price * product.quantity,
      0
    ),

  cartQV: (_state, getters) =>
    getters.cartProducts.reduce((total, product) => {
      if (product.productVolumes.length > 1) {
        return total + product.productVolumes[1].value * product.quantity
      } else return total
    }, 0),

  hasSuccessKit: (_state, getters) =>
    getters.cartProducts.some((product) => !!product.isSuccessKit),

  getShareCartLink:
    (_state, getters, _rootState, rootGetters) =>
    (specialistSignup = false, successKit = null) => {
      const shareParameters = rootGetters['app/shareParameters']

      const products = getters.cartProducts.reduce((productsObj, product) => {
        productsObj[product.product_id] = product.quantity
        return productsObj
      }, {})

      if (successKit) {
        products[successKit.product_id] = 1
      }

      const queryString = qs.stringify({
        ...shareParameters,
        products,
        specialistSignup: specialistSignup || undefined,
      })

      return `${process.env.solleFrontendUrl}/cart?${queryString}`
    },
}
