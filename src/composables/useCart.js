import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'

export function useCart() {
  const cartStore = useCartStore()
  const { cart, getTotalItems, getTotalPrice, getVAT, getTotalWithVAT } = storeToRefs(cartStore)

  const addToCart = (product, quantity) => {
    return cartStore.addToCart(product, quantity)
  }
  const clearItemFromCart = (productId) => {
    return cartStore.clearItemFromCart(productId)
  }
  const clearAllItem = () => {
    return cartStore.clearAllItem()
  }

  return {
    cart,
    getTotalItems,
    getTotalPrice,
    getVAT,
    getTotalWithVAT,
    addToCart,
    clearItemFromCart,
    clearAllItem,
  }
}
