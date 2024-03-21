export default {
  convertStringToCurrency(_lang, _country, string) {
    let currencyAmmount = parseFloat(string) || 0
    return currencyAmmount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })

    // let formatter = {
    //   style: 'currency',
    //   currency: 'USD',
    //   minimumFractionDigits: 2
    // }

    // // example format 'en-US'
    // let locale = lang + '-' + country

    // return parseInt(string).toLocaleString(locale, formatter)
  },
  addCommaToString(lang, country, string, decimal = 2) {
    if (string != null) {
      let formatter = {
        style: 'decimal',
        minimumFractionDigits: decimal,
      }

      // example format 'en-US'
      let locale = lang + '-' + country

      return parseInt(string).toLocaleString(locale, formatter)
    } else {
      return '0'
    }
  },
  addCommaToInt(int) {
    if (int != null) {
      return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    } else {
      return '0'
    }
  },
}
