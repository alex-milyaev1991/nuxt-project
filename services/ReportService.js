import axios from 'axios'
import DateService from '@/services/DateService.js'

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

// ReportService
export default {
  parseColumnObjects(rows, delimiter = '.') {
    return rows.map((row) => {
      let rowObj = {}

      for (const key of Object.keys(row)) {
        const value = row[key]
        const subKeys = key.split(delimiter)

        let ref = rowObj
        for (let i = 0; i < subKeys.length; i++) {
          const subKey = subKeys[i]

          if (i == subKeys.length - 1) {
            ref[subKey] = value
          } else if (!ref.hasOwnProperty(subKey)) {
            ref[subKey] = {}
          }

          ref = ref[subKey]
        }
      }

      return rowObj
    })
  },

  async getAllReports() {
    let response = await apiClient.get('/')
    return response.data
  },

  async getReportResults(reportName, parameterValues) {
    let response = await apiClient.get(`/name/${reportName}/results`, {
      params: parameterValues,
    })
    return response.data.results
  },

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
  async getSetting(setting_name) {
    let response = await apiClient.get(
      `/name/get_settings/results?setting_name=${setting_name}`
    )
    return response.data.results
  },
  async getMentorGroupSimple(username) {
    let response = await apiClient.get(
      `/name/mentor_group_simple/results?username=${username}`
    )
    return response.data.results
  },
  async getMentorGroupMentor(username, month, days_since) {
    let response = await apiClient.get(
      `/name/mentor_group_mentor/results?username=${username}&month=${month}&days_since=${days_since}`
    )
    return response.data.results
  },
  async getMentorGroupOther(username, month, days_since) {
    let response = await apiClient.get(
      `/name/mentor_group_other/results?username=${username}&month=${month}&days_since=${days_since}`
    )
    return response.data.results
  },
  async getTopMentors(username, start_month, end_month) {
    let response = await apiClient.get(
      `/name/top_mentors/results?username=${username}&start_month=${start_month}&end_month=${end_month}`
    )
    return response.data.results
  },
  async getCustomDownlineReport(report, params) {
    var temp = []
    for (var p in params)
      if (params.hasOwnProperty(p)) {
        temp.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]))
      }
    var paramters = temp.join('&')

    let response = await apiClient.get(`/name/${report}/results?${paramters}`)

    return response.data.results
  },
  async getBatchFinanceReport(start_date, end_date) {
    let response = await apiClient.get(
      `/name/batch_finance_report/results?startdate=${start_date}&enddate=${end_date}`
    )
    return response.data.results
  },
  async getCelebr8TeamLeaders(event_id) {
    let response = await apiClient.get(
      `/name/get_celebr8_leaders/results?event_id=${event_id}`
    )
    return response.data.results
  },
  async getCelebr8Team(username, event_id, router) {
    var finalResult = {}

    // First query to get leader usernames
    let responseOne = await apiClient.get(
      `/name/get_celebr8_leaders/results?event_id=${event_id}`
    )

    const found = responseOne.data.results.find(
      (leader) => leader.username === username
    )

    if (found) {
      var leader_usernames_array = []

      responseOne.data.results.forEach((leader) => {
        leader_usernames_array.push('leader_usernames[]=' + leader.username)
      })

      var leader_usernames_string = leader_usernames_array.join('&')

      // Second query using leader username string
      let responseTwo = await apiClient.get(
        `/name/get_celebr8_leader/results?username=${username}&${leader_usernames_string}`
      )

      finalResult['leader'] = {
        username: responseTwo.data.results[0].leader_username,
        first_name: responseTwo.data.results[0].leader_first_name,
        last_name: responseTwo.data.results[0].leader_last_name,
      }

      // Third query to get team members
      let responseThree = await apiClient.get(
        `/name/get_celebr8_team_simple/results?leader_username=${responseTwo.data.results[0].leader_username}&event_id=${event_id}`
      )

      finalResult['team'] = responseThree.data.results

      return finalResult
    } else {
      router.push('/unauthorized')
    }
  },
  async getCommissionPeriodsByType(type_id) {
    let response = await apiClient.get(
      `/name/commission_periods_by_type/results?commission_period_type_id=${type_id}`
    )

    if (response.data.results) {
      response.data.results.forEach((period) => {
        period.title = DateService.getMonthYearText(period.end_date)
      })
    }

    return response.data.results
  },
  async getMonthlyVolumeSummary(commission_period_id, business_center_id) {
    let response = await apiClient.get(
      `/name/monthly_volume_summary/results?commission_period_id=${commission_period_id}&business_center_id=${business_center_id}`
    )
    return response.data.results
  },
  async getMonthlyVolumeDetails(commission_period_id, business_center_id) {
    let response = await apiClient.get(
      `/name/monthly_volume_details/results?commission_period_id=${commission_period_id}&business_center_id=${business_center_id}`
    )
    return response.data.results
  },
  async getMonthlyCommissionDetails(commission_period_id, username) {
    let response = await apiClient.get(
      `/name/monthly_commission_details/results?commission_period_id=${commission_period_id}&username=${username}`
    )
    return response.data.results
  },
  async getCommissionHistoryCommissionsList(username) {
    let response = await apiClient.get(
      `/name/commission_history_commission_list/results?username=${username}`
    )
    return response.data.results
  },
  async getCommissionHistoryCommissionsHeadline(
    username,
    commission_period_id
  ) {
    let response = await apiClient.get(
      `/name/commission_history_commission_headline/results?username=${username}&commission_period_id=${commission_period_id}`
    )
    return response.data.results
  },
  async getCommissionHistoryCommissionsBreakdown(
    username,
    commission_period_id
  ) {
    let response = await apiClient.get(
      `/name/commission_history_commission_breakdown/results?username=${username}&commission_period_id=${commission_period_id}`
    )
    return response.data.results
  },
  async getCommissionHistoryBreakdownHeadline(username, commission_payout_id) {
    let response = await apiClient.get(
      `/name/commission_history_breakdown_headline/results?username=${username}&commission_payout_id=${commission_payout_id}`
    )
    return response.data.results
  },
  async getCommissionHistoryBreakdownDetails(username, commission_payout_id) {
    let response = await apiClient.get(
      `/name/commission_history_breakdown_details/results?username=${username}&commission_payout_id=${commission_payout_id}`
    )
    return response.data.results
  },
  async getAllOrdersList(username) {
    let response = await apiClient.get(
      `/name/temp_all_orders_list/results?username=${username}`
    )
    return response.data.results
  },
  async getRecentOrdersList(username) {
    let response = await apiClient.get(
      `/name/temp_recent_orders_list/results?username=${username}`
    )
    return response.data.results
  },
  async getSolleSafeLeaderboard(cutoffDate) {
    let response = await apiClient.get(
      `/sollesafe-leaderboard?cutoffDate=${cutoffDate}`
    )
    return response.data
  },
  async getTripQualifyingQV(username) {
    let response = await apiClient.get(
      `/name/red_rock_rally_2022_individual/results?username=${username}`
    )
    return response.data.results
  },
  async getMXEnrollments() {
    let response = await apiClient.get(`/mx-enrollments`)
    return response.data
  },
  async getMXOrders(startDate, endDate) {
    let response = await apiClient.get(
      `/mx-orders?startDate=${startDate}&endDate=${endDate}`
    )
    return response.data
  },
  async rewardsHistoryIndividual(username) {
    let response = await apiClient.get(
      `/name/rewards_history_individual/results?username=${username}`
    )
    return response.data.results
  },
  async rewardsBalanceIndividual(username) {
    let response = await apiClient.get(
      `/name/rewards_balance_individual/results?username=${username}`
    )
    return response.data.results
  },
  async getEnrollmentsData(startDate, endDate, countryId, timeId) {
    let response = await apiClient.get(
      `${process.env.API_URL}/reports/enrollment`,
      {
        params: {
          startDate,
          endDate,
          countryId,
          timeId,
        },
      }
    )
    return response.data
  },

  async getPrime2022Admin(month) {
    let response = await apiClient.get(
      `${process.env.API_URL}/prime/prime-2022-admin`,
      {
        params: {
          month,
        },
      }
    )
    return response
  },

  async getEnrollmentsOverview(date = null) {
    let params = {}
    if (date) params = { date }

    let response = await apiClient.get(
      `${process.env.API_URL}/reports/admin/enrollments-overview`,
      { params }
    )
    return response.data
  },

  async getEnrollmentsDetails(startDate, endDate, options = {}) {
    for (let key in options) {
      if (
        options[key] === undefined ||
        options[key] === null ||
        options[key] === ''
      ) {
        delete options[key]
      }
    }

    let params = { startDate, endDate, ...options }

    let response = await apiClient.get(
      `${process.env.API_URL}/reports/admin/enrollments-details`,
      { params }
    )
    return response.data
  },

  async getOrdersStats(startDate, endDate) {
    let response = await apiClient.get(`/name/orders_stats/results`, {
      params: {
        startDate,
        endDate,
      },
    })
    return response.data.results.length ? response.data.results[0] : null
  },

  async getMentoredGroupActivity(month_start_date, username) {
    let response = await apiClient.get(
      `/name/selected_mentor_group_activity/results`,
      {
        params: {
          month_start_date,
          username,
        },
      }
    )
    return response.data.results
  },

  async getMentorAutoship(month, year, username) {
    let response = await apiClient.get(
      `/name/mentored_autoship_summary/results`,
      {
        params: {
          month,
          year,
          username,
        },
      }
    )
    return response.data.results
  },

  async getSolleDrivenReport(commissionPeriodId) {
    let response = await apiClient.get('/admin/solle-driven', {
      params: {
        commissionPeriodId,
      },
    })
    return response.data.solleDrivenEarners
  },

  async getMentorBonusReport(commissionPeriodId) {
    let response = await apiClient.get('/admin/mentor-bonus', {
      params: {
        commissionPeriodId,
      },
    })

    return response.data.results
  },

  async getOrderTypeHistory(username) {
    let response = await apiClient.get(`/name/order_type_history/results`, {
      params: { username },
    })
    return response.data.results
  },
}
