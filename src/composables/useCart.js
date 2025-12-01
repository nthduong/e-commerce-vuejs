import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'

export function useCart() {
  const cartStore = useCartStore()
  const { cart, getTotalItems } = storeToRefs(cartStore)

  const addToCart = (product, quantity) => {
    return cartStore.addToCart(product, quantity)
  }

  return { cart, getTotalItems, addToCart }
}
