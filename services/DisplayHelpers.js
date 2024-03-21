import moment from 'moment'
export default {
  formatDecimal(number, fractionDigits = 2) {
    return (parseFloat(number) || 0).toLocaleString(undefined, {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    })
  },

  formatInteger(number) {
    return (parseFloat(number) || 0).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  },

  formatPercent(number, fractionDigits = 2) {
    return (
      (100 * (parseFloat(number) || 0)).toLocaleString(undefined, {
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
      }) + '%'
    )
  },

  formatCurrency(number) {
    if (number === null || number === undefined) return ''

    return (parseFloat(number) || 0).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  },

  formatDate(date, dateFormat = 'll') {
    return moment(date).format(dateFormat)
  },
}
