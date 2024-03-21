/* eslint-disable no-unused-vars */

/**
 * Represents a footer image group.
 *
 * @typedef {Object} FooterImageGroup
 * @property {number} [footerImageGroupId] - The ID of the footer image group.
 * @property {string} [groupName] - The name of the footer image group.
 * @property {boolean} [isDefault] - Indicates if the group is the default one.
 * @property {string} [pagePath] - The path associated with the group.
 * @property {FooterImage[]} [footerImages] - The array of footer images associated with the group.
 */
exports.FooterImageGroup = this.FooterImageGroup

/**
 * Represents query options for fetching footer image groups.
 *
 * @typedef {Object} FooterImageGroupQueryOptions
 * @property {number} [limit] - The maximum number of results to return.
 * @property {number} [offset] - The number of results to skip.
 * @property {string} [groupName] - The name of the footer image group.
 * @property {boolean} [isDefault] - Indicates if the group is the default one.
 * @property {string} [pagePath] - The path associated with the group.
 */
exports.FooterImageGroupQueryOptions = this.FooterImageGroupQueryOptions

/**
 * Represents options for creating/updating a footer image group.
 *
 * @typedef {Object} FooterImageGroupOptions
 * @property {string} [groupName] - The name of the footer image group.
 * @property {boolean} [isDefault] - Indicates if the group is the default one.
 * @property {string} [pagePath] - The path associated with the group.
 */
exports.FooterImageGroupOptions = this.FooterImageGroupOptions

/**
 * Represents a footer image.
 *
 * @typedef {Object} FooterImage
 * @property {number} [footerImageId] - The ID of the footer image.
 * @property {number} [displayOrder] - The display order of the footer image.
 * @property {string} [altText] - The alt text of the footer image.
 * @property {string} [src] - The source URL of the footer image.
 * @property {string} [href] - The URL to navigate to when the image is clicked.
 * @property {number} [productId] - The ID of the associated product.
 * @property {number} [ingredientId] - The ID of the associated ingredient.
 */
exports.FooterImage = this.FooterImage

/**
 * Represents options for creating/updating a footer image.
 *
 * @typedef {Object} FooterImageOptions
 * @property {number} [displayOrder] - The display order of the footer image.
 * @property {string} [altText] - The alt text of the footer image.
 * @property {string} [src] - The source URL of the footer image.
 * @property {string} [href] - The URL to navigate to when the image is clicked.
 * @property {number} [productId] - The ID of the associated product.
 * @property {number} [ingredientId] - The ID of the associated ingredient.
 */
exports.FooterImageOptions = this.FooterImageOptions
