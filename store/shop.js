import ProductService from '../services/ProductService'
import { SHOP_CATEGORIES } from '@/constants'

export const state = () => ({
  fetchedForNoLogin: false,
  userRegionProducts: [],
  selectedRegionProducts: [],
  purchasedProducts: [],
  successKits: [],
  categories: [
    {
      category_id: 4,
      i18Text: 'nav.shop.balance',
      APIname: 'Balance Products',
      route: '/shop/balance',
      param: 'balance',
      country_ids: [185, 32, 114],
    },
    {
      category_id: 1,
      i18Text: 'nav.shop.lift',
      APIname: 'Lift Products',
      route: '/shop/lift',
      param: 'lift',
      country_ids: [185, 32, 114],
    },
    {
      category_id: 2,
      i18Text: 'nav.shop.clarify',
      APIname: 'Clarify Products',
      route: '/shop/clarify',
      param: 'clarify',
      country_ids: [185, 32, 114],
    },
    {
      category_id: 5,
      i18Text: 'nav.shop.calm',
      APIname: 'Calm Products',
      route: '/shop/calm',
      param: 'calm',
      country_ids: [185, 32, 114],
    },
    {
      category_id: 10,
      i18Text: 'nav.shop.starterKits',
      APIname: 'Starter Kits',
      route: '/shop/starterKits',
      param: 'starterKits',
      country_ids: [],
    },
    {
      category_id: 6,
      i18Text: 'nav.shop.packages',
      APIname: 'Packages',
      route: '/shop/packages',
      param: 'packages',
      country_ids: [185, 32, 114],
    },
    {
      category_id: 8,
      i18Text: 'solleMerch',
      APIname: 'Solle Merch',
      route: '/shop/solle-merch',
      param: 'solle-merch',
      country_ids: [185, 32, 114],
    },
    {
      category_id: 0,
      i18Text: 'nav.shop.showAll',
      APIname: 'All',
      route: '/shop/showAll',
      param: 'showAll',
      country_ids: [185, 32, 114],
    },
  ],
  categoryThemes: [
    {
      name: SHOP_CATEGORIES.BALANCE,
      bgClass: 'balance',
    },
    {
      name: SHOP_CATEGORIES.LIFT,
      bgClass: 'lift',
    },
    {
      name: SHOP_CATEGORIES.CLARIFY,
      bgClass: 'clarify',
    },
    {
      name: SHOP_CATEGORIES.CALM,
      bgClass: 'calm',
    },
    {
      name: SHOP_CATEGORIES.PACKAGES,
      bgClass: 'package',
    },
    {
      name: SHOP_CATEGORIES.MERCHANDISE,
      bgClass: 'merchandise',
    },
  ],
  productTheme: null,
})

export const mutations = {
  SET_USER_REGION_PRODUCTS(state, products) {
    state.userRegionProducts = products
  },
  SET_SELECTED_REGION_PRODUCTS(state, products) {
    state.selectedRegionProducts = products
  },
  SET_FETCHED_FOR_NO_LOGIN(state, val) {
    state.fetchedForNoLogin = val
  },
  SET_PURCHASED_PRODUCTS(state, products) {
    state.purchasedProducts = products
  },
  SET_SUCCESS_KITS(state, products) {
    state.successKits = products
  },
  SET_PRODUCT_THEME(state, categoryTheme) {
    state.productTheme = categoryTheme
  },
}

export const actions = {
  async fetchUserRegionProducts(
    { commit, dispatch },
    { countryId, orderTypeId }
  ) {
    let products = await ProductService.getProducts(countryId, orderTypeId)
    commit('SET_USER_REGION_PRODUCTS', products)
    commit('SET_FETCHED_FOR_NO_LOGIN', true)

    dispatch('fetchSuccessKits', countryId)
  },

  async fetchSelectedRegionProducts(
    { commit, dispatch, rootState },
    { countryId, orderTypeId }
  ) {
    let products = await ProductService.getProducts(countryId, orderTypeId)
    commit('SET_SELECTED_REGION_PRODUCTS', products)

    dispatch('fetchSuccessKits', countryId)

    if (!rootState.auth?.loggedIn) {
      commit('SET_USER_REGION_PRODUCTS', products)
    }
  },

  async fetchSuccessKits({ commit }, countryId) {
    const successKitOrderTypeId = 4
    let products = await ProductService.getProducts(
      countryId,
      successKitOrderTypeId
    )

    products = products.map((product) => ({ ...product, isSuccessKit: true }))
    products.reverse()

    commit('SET_SUCCESS_KITS', products)
  },

  async fetchPurchasedProducts({ commit }, username) {
    let products = await ProductService.getPurchasedProducts(username)
    commit('SET_PURCHASED_PRODUCTS', products)
  },

  clearPurchasedProducts({ commit }) {
    commit('SET_PURCHASED_PRODUCTS', [])
  },

  findProductTheme({ commit, state }, productCategory) {
    let categoryTheme = state.categoryThemes.find(
      (theme) => theme.name === productCategory
    )

    commit('SET_PRODUCT_THEME', categoryTheme)
  },
}

export const getters = {
  productAvaiableInUserRegion: (state) => (productId) =>
    state.userRegionProducts.some(
      (product) => product.product_id === parseInt(productId)
    ),

  hasBeenPurchased: (state) => (productId) =>
    state.purchasedProducts.includes(productId),

  // Returns an array of each product a user is allowed to have in their cart
  availableProducts: (state) => [
    ...state.userRegionProducts,
    ...state.successKits,
  ],

  // Return a function to find the product object from the availableProducts array, given the productId
  getProduct: (_state, getters) => (productId) =>
    getters.availableProducts.find((p) => p.product_id === productId),

  getSelectedRegionProduct: (state) => (productId) =>
    state.selectedRegionProducts.find((p) => p.product_id === productId),

  onePerCustomerProducts: (state) =>
    state.selectedRegionProducts.filter((p) => p.one_per_customer),

  isSuccessKit: (state) => (productId) => {
    const successKitsIds = state.successKits.map((i) => i.product_id)
    return successKitsIds.includes(productId)
  },

  isOnePerCustomer: (_state, getters) => (productId) => {
    const product = getters.getProduct(productId)
    return !!product?.one_per_customer
  },

  getIsAvailableToPurchase: (_state, getters) => (productId) => {
    const availableInUserRegion = getters.productAvaiableInUserRegion(productId)
    const isSuccessKit = getters.isSuccessKit(productId)
    const isOnePerCustomer = getters.isOnePerCustomer(productId)
    const hasBeenPurchased = getters.hasBeenPurchased(productId)

    return (
      availableInUserRegion &&
      !isSuccessKit &&
      !(hasBeenPurchased && isOnePerCustomer)
    )
  },

  getProductsByCategory: (state) => (categorySlug) => {
    return state.selectedRegionProducts
      .map((product) => {
        const productCategory = product.categories.find(
          (category) => category.product_category.slug === categorySlug
        )
        return {
          ...product,
          productCategory,
          productDisplayOrder: productCategory?.display_order,
        }
      })
      .filter((product) => !!product.productCategory)
      .filter((product) =>
        product.productVariant ? product.productVariant?.showInShop : true
      )
      .sort((a, b) => a.productDisplayOrder - b.productDisplayOrder)
  },
  getBestSellers: (_state, getters) => {
    return getters.getProductsByCategory(SHOP_CATEGORIES.BEST_SELLERS)
  },
}
