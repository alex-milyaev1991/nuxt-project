import qs from 'qs'

function getCookies(req) {
  try {
    const {
      headers: { cookie },
    } = req
    return cookie.split(';').reduce((res, item) => {
      const data = item.trim().split('=')
      return { ...res, [data[0]]: data[1] }
    }, {})
  } catch (error) {
    return {}
  }
}

function getFullPath(path, query, hash) {
  let queryString = qs.stringify(query)
  if (queryString) queryString = '?' + queryString
  return `${path}${queryString}${hash}`
}

export default async function ({ store, route, redirect, req, res }) {
  let path = route.path
  let query = route.query
  const hash = route.hash
  const cookies = getCookies(req)

  // --- Global Navigation Root URL Routing Logic ---
  switch (path) {
    case '/shop':
      path = store.state.app.globalNavigation.find((x) => x.id === 2)
        .menuColumns[0].routes[0].route
      break
    case '/opportunity':
      path = store.state.app.globalNavigation.find((x) => x.id === 3)
        .menuColumns[0].routes[0].route
      break
    case '/about':
      path = store.state.app.globalNavigation.find((x) => x.id === 5)
        .menuColumns[0].routes[0].route
      break
    case '/happenings':
      path = store.state.app.globalNavigation.find((x) => x.id === 6)
        .menuColumns[0].routes[0].route
      break
    case '/blog':
      path = store.state.app.globalNavigation.find((x) => x.id === 7)
        .menuColumns[0].routes[0].route
      break
  }

  // --- Legacy Route Redirects ---
  switch (path) {
    case '/shop/digestion':
      path = '/shop/gut-health'
      break
  }

  // --- Replicate Site Routing Logic ---

  // If NOT logged in
  if (!store.state.auth.loggedIn) {
    // Get site name from route, query param, or cookie, then set data in vuex
    const specialistSite = await store.dispatch(
      'replicateSite/setCurrentReplicateSite',
      { route, cookies }
    )

    if (specialistSite) {
      query.specialistSite = specialistSite

      if (process.server) {
        res.setHeader(
          'Set-Cookie',
          `solle_specialist_site=${specialistSite}; Path=/;`
        )
      }

      if (path == '/') {
        path = `/${specialistSite}`
      }

      if (path == `/${specialistSite}`) {
        delete query.specialistSite
      }
    }

    let referralCode = await store.dispatch('referralCode/getReferralCode', {
      query,
      cookies,
    })

    if (referralCode === 'undefined' || referralCode === 'none') {
      referralCode = null
    }

    if (referralCode) {
      query.referralCode = referralCode

      if (process.server) {
        res.setHeader(
          'Set-Cookie',
          `solle_referral_code=${referralCode}; Path=/;`
        )
      }
    } else {
      delete query.referralCode
    }

    // If logged in
  } else {
    delete query.specialistSite
    delete query.referralCode

    // If going to any _replicateSite url, redirect to the homepage
    if (route.params.replicateSite) {
      path = '/'
    }
  }

  const newPath = getFullPath(path, query, hash)

  if (newPath === route.fullPath) {
    return
  } else {
    return redirect(newPath)
  }
}
