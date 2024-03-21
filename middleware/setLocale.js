import qs from 'qs'

const generateURL = (path, query, hash) => {
  let queryString = qs.stringify(query)
  if (queryString) queryString = '?' + queryString
  return `${path}${queryString}${hash}`
}

export default async function ({ store, route, redirect }) {
  let query = { ...route.query }

  // const currentLang = store.$i18n.locale
  // if (query.lang) {
  //   query.lang = query.lang.toLowerCase()
  //   if (query.lang != currentLang) {
  //     store.$i18n.setLocale(query.lang)
  //   }
  // } else {
  //   query.lang = currentLang
  // }
  if (!query.country) {
    query.country = store.state.geolocation.selectedRegion.country_code
  }
  if (!query.lang) {
    query.lang = store.$i18n.locale
  }

  // const currentCountry = store.state.geolocation.selectedRegion
  // if (query.country) {
  //   query.country = query.country.toUpperCase()
  //   if (query.country != currentCountry.country_code) {
  //     let newCountry = store.state.geolocation.availableRegions.find(
  //       x => x.country_code === query.country
  //     )
  //     if (!newCountry) newCountry = store.state.geolocation.userRegion
  //     store.dispatch('geolocation/setSelectedRegionInfo', newCountry.country_id)
  //   }
  // } else {
  //   query.country = currentCountry.country_code
  // }

  // if (!query.sngl) {
  //   query.sngl = store.state.geolocation.userRegion.country_code
  //   if (query.sngl == 'US') {
  //     query.sngl = 'AJ47BJ'
  //   }
  //   if (query.sngl == 'CA') {
  //     query.sngl = 'ZTUP49'
  //   }
  //   if (query.sngl == 'MX') {
  //     query.sngl = 'VPEW86'
  //   }
  // }

  const newPath = generateURL(route.path, query, route.hash)
  if (newPath !== route.fullPath) {
    return redirect(newPath)
  }
  return
}
