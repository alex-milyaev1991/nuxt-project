import AuthorizationService from '@/services/AuthorizationService.js'

export default async function ({ store, redirect, route }) {
  // Checks if user is logged in
  if (store.state.auth.loggedIn) {
    // If looking at own data, then continue
    if (route.params.username == store.state.auth.user.username) {
      store.dispatch('masquerade/setTarget', null)
      return
    } else {
      // Procede to masqurade if Customer Support
      if (
        store.state.auth.user.groups.hasOwnProperty('20') || // Allow Customer Support
        store.state.auth.user.groups.hasOwnProperty('90') || // Allow Admin
        store.state.auth.user.groups.hasOwnProperty('1001') // Allow Developers
      ) {
        await store.dispatch('masquerade/setTarget', route.params.username)
        return
      }

      // Procede to masquerade if current user is mentor to <username>
      let isMentor = await AuthorizationService.isMentorTo(
        route.params.username
      )
      if (isMentor) {
        await store.dispatch('masquerade/setTarget', route.params.username)
        return
      }

      // Redirect to unauthorized error page if not authorized
      else {
        return redirect('/unauthorized')
      }
    }

    // Redirect to login page if not logged in
  } else {
    return redirect('/login')
  }
}
