import qs from 'qs'

export default async function ({ store, route, redirect }) {
  // uli stands for USER LOGGED IN
  if (!route.query.hasOwnProperty('uli')) {
    // The loggedIn variable will be true or false, the + converts it to a number (either 1 or 0)
    route.query.uli = +store.state.auth.loggedIn
    return redirect(`${route.path}?${qs.stringify(route.query)}${route.hash}`)
  }
}
