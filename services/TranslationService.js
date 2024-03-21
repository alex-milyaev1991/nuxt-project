import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.apiUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  remapTranslationArray(translations) {
    let mappedTranslations = translations.reduce((res, t) => {
      res[t.langId] = t.translationStringText
      return res
    }, {})
    return mappedTranslations
  },

  async getTranslations(
    limit,
    offset,
    sortBy = 'translationItemId',
    sortDesc = false
  ) {
    let result = await apiClient.get('/translations', {
      params: { limit, offset, sortBy, sortDesc },
    })
    return result.data
  },

  async getRawTranslationItem(id) {
    let result = await apiClient.get(`/translations/id/${id}`)
    let translationItem = result.data.translation
    return translationItem
  },

  async getTranslationItem(id) {
    let result = await apiClient.get(`/translations/id/${id}`)
    let translationItem = result.data.translation

    translationItem.translations = this.remapTranslationArray(
      translationItem.translations
    )

    return translationItem
  },

  async updateTranslation(id, langId, text) {
    let result = await apiClient.put(`/translations/id/${id}`, {
      langId: langId,
      text: text,
    })
    return result.data.translation
  },

  getTranslationString(tranlsationItem, langCode, defaultLangCode = 'en') {
    try {
      // Find the translation for the langCode we are looking for
      let translation = tranlsationItem.translations.find(
        (item) =>
          item.language.langCode === langCode && item.translationStringText
      )

      // If langCode didn't have a translation, check if defaultLangCode does
      if (!translation) {
        translation = tranlsationItem.translations.find(
          (item) =>
            item.language.langCode === defaultLangCode &&
            item.translationStringText
        )
      }

      // If neither langCode nor defaultLangCode had a translation, check if at least one translation exists
      if (!translation && tranlsationItem.translations.length >= 1) {
        translation = tranlsationItem.translations.find(
          ({ translationStringText }) => !!translationStringText
        )
      }

      // If we found at least one translation, return it's string, otherwise return empty string
      return translation ? translation.translationStringText : ''
    } catch (error) {
      return ''
    }
  },

  getPlainTextString(tranlsationItem, langCode, defaultLangCode = 'en') {
    const rawString = this.getTranslationString(
      tranlsationItem,
      langCode,
      defaultLangCode
    )
    const element = document.createElement('div')
    element.innerHTML = rawString
    return element.textContent || element.innerText || ''
  },
}
