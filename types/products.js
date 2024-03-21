/* eslint-disable no-unused-vars */

const { TranslationOptions, TranslationItem } = require('./translations')

/**
 * Represents a product ingredient.
 *
 * @typedef {Object} ProductIngredient
 * @property {number} [productIngredientId] - The ID of the product ingredient.
 * @property {number} [productId] - The ID of the associated product.
 * @property {number} [displayOrder] - The display order of the product ingredient.
 * @property {number} [nameTranslationId] - The ID of the translation for the name.
 * @property {TranslationItem} [nameTranslation] - The translation options for the name.
 * @property {string} [url] - The URL of the product ingredient.
 * @property {boolean} [isAdaptogen] - Indicates if the product ingredient is an adaptogen.
 */
exports.ProductIngredient = this.ProductIngredient

/**
 * Represents a product ingredient.
 *
 * @typedef {Object} ProductIngredientOptions
 * @property {number} [productId] - The ID of the associated product.
 * @property {number} [displayOrder] - The display order of the product ingredient.
 * @property {TranslationOptions} [nameTranslation] - The translation options for the name.
 * @property {string} [url] - The URL of the product ingredient.
 * @property {boolean} [isAdaptogen] - Indicates if the product ingredient is an adaptogen.
 */
exports.ProductIngredientOptions = this.ProductIngredientOptions

/**
 * Represents a product pair.
 *
 * @typedef {Object} ProductPair
 * @property {number} product_product_link_id - The ID of the product pair.
 * @property {number} product_id - The ID of the source product.
 * @property {number} target_product_id - The ID of the target product.
 * @property {number} product_product_link_type_id - The ID of the product pair type.
 * @property {string} product_product_link_title - The title of the product pair.
 * @property {number} displayOrder - The display order of the product pair.
 */
exports.ProductPair = this.ProductPair

/**
 * Represents options for creating/updating a product pair.
 *
 * @typedef {Object} ProductPairOptions
 * @property {number} product_id - The ID of the source product.
 * @property {number} target_product_id - The ID of the target product.
 * @property {number} displayOrder - The display order of the product pair.
 */
exports.ProductPairOptions = this.ProductPairOptions
