export default async function ({ store }) {
  if (!process.server) {
    if (
      !store.state.auth.loggedIn &&
      !store.state.geolocation.fetchedForNoLogin
    ) {
      await store.dispatch('geolocation/fetchUserRegionInfo')
    }
  }
}
