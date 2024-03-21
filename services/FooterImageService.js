/* eslint-disable no-unused-vars */
import {
  FooterImageGroup,
  FooterImage,
  FooterImageOptions,
} from '../types/footer-images'
/* eslint-enable no-unused-vars */

import axios from 'axios'

/**
 * Service for interacting with the Footer Images API.
 */
const apiClient = axios.create({
  baseURL: process.env.apiUrl, // Make sure to set the correct API URL
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
   * Get footer images for a specific page.
   * @param {string} pagePath - The path of the page to fetch footer images for.
   * @returns {Promise<FooterImage[]>} A promise that resolves with an array of footer images for the specified page.
   */
  async getPageFooterImages(pagePath) {
    const response = await apiClient.get('/footer-images', {
      params: { page: pagePath },
    })
    return response.data.images
  },

  /**
   * Get all footer image groups.
   * @returns {Promise<FooterImageGroup[]>} A promise that resolves with an array of footer image groups.
   */
  async getAllFooterImageGroups() {
    const response = await apiClient.get('/footer-images/groups/')
    return response.data.footerImageGroups
  },

  /**
   * Get footer image group by ID.
   * @param {number} groupId - The ID of the footer image group to fetch.
   * @returns {Promise<FooterImageGroup>} A promise that resolves with the fetched footer image group.
   */
  async getFooterImageGroup(groupId) {
    const response = await apiClient.get(`/footer-images/group/${groupId}`)
    return response.data
  },

  /**
   * Create a new footer image group.
   * @param {FooterImageGroup} groupData - The data for the new footer image group.
   * @returns {Promise<FooterImageGroup>} A promise that resolves with the created footer image group.
   */
  async createFooterImageGroup(groupData) {
    const response = await apiClient.post('/footer-images/groups/', groupData)
    return response.data
  },

  /**
   * Update a footer image group.
   * @param {number} groupId - The ID of the footer image group to update.
   * @param {FooterImageGroup} groupData - The updated data for the footer image group.
   * @returns {Promise<FooterImageGroup>} A promise that resolves with the updated footer image group.
   */
  async updateFooterImageGroup(groupId, groupData) {
    const response = await apiClient.put(
      `/footer-images/group/${groupId}`,
      groupData
    )
    return response.data
  },

  /**
   * Delete a footer image group.
   * @param {number} groupId - The ID of the footer image group to delete.
   * @returns {Promise<void>} A promise that resolves when the group is deleted.
   */
  async deleteFooterImageGroup(groupId) {
    await apiClient.delete(`/footer-images/group/${groupId}`)
  },

  /**
   * Update a footer image
   * @param {number} footerImageId - The ID of the footer image to update.
   * @param {FooterImageOptions} data - The updated data for the footer image group.
   * @returns {Promise<FooterImage>} A promise that resolves with the updated footer image group.
   */
  async updateFooterImage(footerImageId, data) {
    try {
      const response = await apiClient.put(
        `/footer-images/image/${footerImageId}`,
        data
      )
      return response.data
    } catch (error) {
      throw new Error('Error updating footer image')
    }
  },
}
