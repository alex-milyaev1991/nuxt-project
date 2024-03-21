export default async function ({ store }) {
  if (!store.state.auth.loggedIn && !store.state.shop.fetchedForNoLogin) {
    await store.dispatch('shop/fetchUserRegionProducts', {
      countryId: store.state.geolocation.userRegion.country_id,
      orderTypeId: '8',
    })

    await store.dispatch('shop/fetchSelectedRegionProducts', {
      countryId: store.state.geolocation.selectedRegion.country_id,
      orderTypeId: '8',
    })
  }
}
