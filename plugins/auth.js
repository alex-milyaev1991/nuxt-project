export default async function ({ store, $auth }) {
  if (!$auth.loggedIn) {
    return
  } else {
    /*
     ** This is run when a page is refreshed.
     ** No testing/experimenting has been done to see what would happen.
     ** if this page did not exists (or anything here fails to run).
     */

    // Check cookie expiration
    if ($auth.$storage.getCookie('expire')) {
      var expireDate = new Date($auth.$storage.getCookie('expire'))

      let authRefreshTokenLocal = $auth.$storage.getCookie(
        '_refresh_token.local'
      )
      let authTokenLocal = $auth.$storage.getCookie('_token.local')
      let authStrategy = $auth.$storage.getCookie('strategy')

      $auth.$storage.setCookie('_refresh_token.local', authRefreshTokenLocal, {
        expires: expireDate,
      })
      $auth.$storage.setCookie('_token.local', authTokenLocal, {
        expires: expireDate,
      })
      $auth.$storage.setCookie('strategy', authStrategy, {
        expires: expireDate,
      })
    }

    //Set user region
    try {
      store.dispatch(
        'geolocation/setUserRegionInfo',
        $auth.user.country.country_id.toString()
      )
    } catch (e) {
      console.error(e)
    }

    //Set select region
    try {
      store.dispatch(
        'geolocation/setSelectedRegionInfo',
        $auth.user.country.country_id.toString()
      )
    } catch (e) {
      console.error(e)
    }

    // Updates user and selected products
    let country = $auth.user.country.country_id.toString()
    var type = '8'

    if ($auth.user.groups['10']) {
      type = '1'
    }

    try {
      await store.dispatch('shop/fetchUserRegionProducts', {
        countryId: country,
        orderTypeId: type,
      })
    } catch (e) {
      console.error('Error fetching products: ', e)
    }

    try {
      await store.dispatch('shop/fetchSelectedRegionProducts', {
        countryId: country,
        orderTypeId: type,
      })
    } catch (e) {
      console.error('Error fetching products: ', e)
    }

    // Retrieve user cart
    store.dispatch('cart/fetchCartFromDB')
  }
}
