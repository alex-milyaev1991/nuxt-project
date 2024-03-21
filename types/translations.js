/* eslint-disable no-unused-vars */

const { Language } = require('./language')

/**
 * Represents a translation.
 *
 * @typedef {Object} Translation
 * @property {string} translationStringText - The translated text.
 * @property {Language} language - The language information.
 */
exports.Translation = this.Translation

/**
 * Represents a translation item.
 *
 * @typedef {Object} TranslationItem
 * @property {number} translationItemId - The translation item ID.
 * @property {Translation[]} translations - An array of translation objects.
 */
exports.TranslationItem = this.TranslationItem

/**
 * Represents translation options for various languages.
 *
 * @typedef {Object} TranslationOptions
 * @property {string} [description] - The description.
 * @property {string} [en] - The translation in English.
 * @property {string} [es] - The translation in Spanish.
 */
exports.TranslationOptions = this.TranslationOptions
