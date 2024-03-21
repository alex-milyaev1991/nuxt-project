import axios from 'axios'

const apiClient = axios.create({
  baseURL: `${process.env.apiUrl}/reports`,
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
  exportCSV(arrayHeader, arrayData, delimiter, fileName) {
    let header = arrayHeader.join(delimiter) + '\n'
    let csv = header

    arrayData.forEach((array) => {
      csv += array.join(delimiter) + '\n'
    })

    let csvData = new Blob([csv], { type: 'text/csv' })
    let csvUrl = URL.createObjectURL(csvData)

    let hiddenElement = document.createElement('a')
    hiddenElement.href = csvUrl
    hiddenElement.target = '_blank'
    hiddenElement.download = fileName + '.csv'
    hiddenElement.click()
  },
  async getDailyEnrollments() {
    let response = await apiClient.get(`/name/daily_enrollments/results?`)
    return response.data.results
  },
  async getMonthlyEnrollmentHistory(months) {
    let response = await apiClient.get(
      `/name/monthly_enrollment_history/results?months=${months}`
    )
    return response.data.results
  },
  async getRankAdvancement(current_month) {
    let response = await apiClient.get(
      `/name/rank_advancement/results?current_month=${current_month}`
    )
    return response.data.results
  },
  async getOrderReport(start_date, end_date, country_id) {
    let response = await apiClient.get(
      `/name/order_report/results?start_date=${start_date}&end_date=${end_date}&country_id=${country_id}`
    )
    return response.data.results
  },
  async getAccountsMentoredSummary() {
    let response = await apiClient.get(
      `/name/accounts_mentored_summary/results?`
    )
    return response.data.results
  },
  async getHeartAndSolleReport(year) {
    let response = await apiClient.get(
      `/name/heart_and_solle_report/results?year=${year}`
    )
    return response.data.results
  },
  async getAllRewardPoints(days_left) {
    let response = await apiClient.get(
      `/name/all_reward_points/results?days_left=${days_left}`
    )
    return response.data.results
  },
}
