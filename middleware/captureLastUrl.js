export default async function ({ store, from }) {
  // Save the current URL as the last URL in the session storage
  await store.dispatch('app/setLastUrl', from?.path)
}
