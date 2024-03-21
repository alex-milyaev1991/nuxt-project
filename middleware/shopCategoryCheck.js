export default async function ({ store, route, redirect }) {
  let paramCategory = route.params.category
  let found = store.state.shop.categories.find(
    (category) => category.param == paramCategory
  )

  if (found === undefined) {
    return redirect('/shop/balance')
  }

  return
}
