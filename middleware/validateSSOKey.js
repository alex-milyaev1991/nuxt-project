import AuthorizationService from '@/services/AuthorizationService.js'

export default async function ({ store, route, redirect }) {
  if (store.state.auth.loggedIn) {
    var authorized = await AuthorizationService.validateSSO(store)

    if (!authorized) {
      redirect('/login?securityMsg=true&route=' + route.fullPath)
    }
  } else {
    return redirect('/login')
  }
}
