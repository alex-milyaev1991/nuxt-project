import moment from 'moment'

export default {
  current_date() {
    var date = new Date()
    return (
      date.toLocaleString('default', { month: 'short' }) +
      ' ' +
      date.getDate() +
      ', ' +
      date.getFullYear()
    )
  },
  current_month() {
    var date = new Date()
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-01'
  },
  next_month() {
    var date = new Date()
    return date.getFullYear() + '-' + (date.getMonth() + 2) + '-01'
  },
  previous_month_calculate(month) {
    var date = new Date()
    date.setDate(1)
    date.setMonth(month)
    date.setMonth(date.getMonth() - 1)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-01'
  },
  next_month_calculate(month) {
    var date = new Date()
    date.setDate(1)
    date.setMonth(month)
    date.setMonth(date.getMonth() + 1)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-01'
  },
  next_weekday(weekday) {
    var day_index = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    }

    var target_day = day_index[weekday] || 0
    var date = new Date()
    var today = date.getDay()
    var days_ahead = target_day - today

    if (days_ahead < 0) {
      days_ahead += 7
    }

    var final_day = today + days_ahead
    return final_day
  },
  days_till_sunday(day_int) {
    switch (day_int) {
      case 1:
        //Moday
        return 6
      case 2:
        //Tuesday
        return 5
      case 3:
        //Wednesday
        return 4
      case 4:
        //Thursday
        return 3
      case 5:
        //Friday
        return 2
      case 6:
        //Saturday
        return 1
      default:
        //Sunday
        return 0
    }
  },
  getNextDayOfTheWeek(dayName, excludeToday = true, refDate = new Date()) {
    const dayOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].indexOf(
      dayName.slice(0, 3).toLowerCase()
    )

    if (dayOfWeek < 0) return
    refDate.setHours(0, 0, 0, 0)
    refDate.setDate(
      refDate.getDate() +
        !!excludeToday +
        ((dayOfWeek + 7 - refDate.getDay() - !!excludeToday) % 7)
    )

    return refDate.toLocaleDateString()
  },
  getTodayIsoDate() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let dt = date.getDate()

    if (dt < 10) {
      dt = '0' + dt
    }
    if (month < 10) {
      month = '0' + month
    }

    return year + '-' + month + '-' + dt
  },
  getSevenDaysAgoIsoDate(first_date) {
    let date = new Date(first_date)
    date.setDate(date.getDate() - 7)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let dt = date.getDate()

    if (dt < 10) {
      dt = '0' + dt
    }
    if (month < 10) {
      month = '0' + month
    }

    return year + '-' + month + '-' + dt
  },

  convertISOtoDate(dateString) {
    return moment(dateString).format('lll')
  },

  convertISOtoTime(date_string) {
    var date = new Date(date_string)
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes
    var strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
  },
  getIsoFromDate(date_string, date_day = null) {
    if (date_string != null || date_string != '') {
      var date = new Date(date_string)
      var month = date.getMonth() + 1
      var day = date.getDate()

      if (date_day != null) {
        day = date_day
      }

      return (
        date.getFullYear() +
        '-' +
        month.toString().padStart(2, '0') +
        '-' +
        day.toString().padStart(2, '0')
      )
    } else {
      return ''
    }
  },
  getMonthYearText(date_string) {
    var date = new Date(date_string)
    let year = date.getFullYear()
    let month = date.toLocaleString('default', { month: 'long' })

    return month + ' ' + year
  },
  getMonthAbbreviationFromString(month) {
    switch (month) {
      case 'January':
        return 'Jan'
      case 'February':
        return 'Feb'
      case 'March':
        return 'Mar'
      case 'April':
        return 'Apr'
      case 'May':
        return 'May'
      case 'June':
        return 'Jun'
      case 'July':
        return 'Jul'
      case 'August':
        return 'Aug'
      case 'September':
        return 'Sep'
      case 'October':
        return 'Oct'
      case 'November':
        return 'Nov'
      case 'December':
        return 'Dec'
      default:
        return 'Unk'
    }
  },
}
