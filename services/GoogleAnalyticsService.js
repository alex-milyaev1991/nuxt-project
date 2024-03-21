export default {
  async pushItemEvent(event, product, quantity = undefined) {
    await window.dataLayer.push({
      event,
      ecommerce: {
        items: [
          {
            item_id: product.product_id,
            item_name: product.name,
            price: parseFloat(product.wholesale_price),
            quantity,
          },
        ],
      },
    })
  },

  async updateCart(product, quantityChange) {
    let eventName = quantityChange > 0 ? 'add_to_cart' : 'remove_from_cart'
    await this.pushItemEvent(eventName, product, Math.abs(quantityChange))
  },

  async viewItem(product) {
    await this.pushItemEvent('view_item', product)
  },
}
