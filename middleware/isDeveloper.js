export default function ({ store, redirect }) {
  // Checks if user is logged in
  if (store.state.auth.loggedIn) {
    //Continue to page if in authorized group
    if (
      store.state.auth.user.groups.hasOwnProperty('1001') // Allow Developers
    )
      return
    // Redirect to unauthorized error page if not in authorized group
    else {
      return redirect('/unauthorized')
    }

    // Redirect to login page if not logged in
  } else {
    return redirect('/login')
  }
}
