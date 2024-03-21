export default async function ({ store }) {
  if (store.state.auth.user) {
    await store.dispatch(
      'shop/fetchPurchasedProducts',
      store.state.auth.user.username
    )
  }
  return
}
