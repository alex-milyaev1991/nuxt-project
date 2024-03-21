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
  async getBankAccountTypes() {
    let response = await apiClient.get(`/bank-account/bank-account-types`)
    return response.data.bank_account_types
  },

  // NEW STUB FUNCTION FOR BANK INFO
  async postBankAccount(bankInfo) {
    // let response = await apiClient.get(`/bank-account/bank-account-types`)
    return bankInfo
  },

  async getTaxStatusTypes() {
    let response = await apiClient.get(`/bank-account/tax-status-types`)
    return response.data.tax_status_types
  },

  async getBankAccount(username) {
    let response = await apiClient.get(`/bank-account/username/${username}`)
    return response.data.bank_account
  },

  async updateBankAccount(username, bankData) {
    let response = await apiClient.post(
      `/bank-account/username/${username}`,
      bankData
    )
    return response.data.bank_account
  },

  async uploadIdImage(username, file) {
    let formData = new FormData()
    formData.append('upload', file)

    let response = await apiClient.post(
      `/bank-account/username/${username}/id-image`,
      formData
    )
    return response.data.bank_account
  },

  async uploadTaxStatusImage(username, file) {
    let formData = new FormData()
    formData.append('upload', file)

    let response = await apiClient.post(
      `/bank-account/username/${username}/tax-image`,
      formData
    )
    return response.data.bank_account
  },

  async uploadTaxW9Form(username, file) {
    let formData = new FormData()
    formData.append('upload', file)

    let response = await apiClient.post(
      `/bank-account/username/${username}/tax-w9-form`,
      formData
    )
    return response.data.bank_account
  },

  async deleteTaxW9Form(username) {
    let response = await apiClient.delete(
      `/bank-account/username/${username}/tax-w9-form`
    )
    return response.data.bank_account
  },

  async getTaxID(username) {
    let response = await apiClient.get(
      `/bank-account/username/${username}/tax-number`
    )
    return response.data
  },

  async updateTaxID(username, taxNumber, taxNumberTypeId) {
    let response = await apiClient.post(
      `/bank-account/username/${username}/tax-number`,
      { taxNumber, taxNumberTypeId }
    )
    return response.data
  },

  async getTaxExemptStatus(username) {
    let response = await apiClient.get(
      `/bank-account/username/${username}/tax-exempt-status`
    )
    return response.data
  },

  async setTaxExemptStatus(username, taxExempt) {
    let response = await apiClient.post(
      `/bank-account/username/${username}/tax-exempt-status`,
      { taxExempt }
    )
    return response.data
  },

  async uploadTaxExemptionCertificate(username, file) {
    let formData = new FormData()
    formData.append('upload', file)

    let response = await apiClient.post(
      `/bank-account/username/${username}/tax-exemption-certificate`,
      formData
    )
    return response.data.bank_account
  },

  async deleteTaxExemptionCertificate(username) {
    let response = await apiClient.delete(
      `/bank-account/username/${username}/tax-exemption-certificate`
    )
    return response.data.bank_account
  },
}
