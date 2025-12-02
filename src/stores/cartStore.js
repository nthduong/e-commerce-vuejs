import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { TAX } from '@/config/tax.config'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cart = ref([])

    const getTotalItems = computed(() => {
      return cart.value.reduce((total, item) => total + item.quantity, 0)
    })
    const getTotalPrice = computed(() => {
      return cart.value.reduce((total, item) => total + item.price * item.quantity, 0)
    })
    const getVAT = computed(() => {
      return getTotalPrice.value * TAX.VAT_RATE
    })
    const getTotalWithVAT = computed(() => {
      return getTotalPrice.value + getVAT.value
    })

    const addToCart = (product, quantity) => {
      const existingProduct = cart.value.find((item) => item.id === product.id)
      if (existingProduct) {
        existingProduct.quantity += quantity
        return true
      } else {
        cart.value.push({ ...product, quantity })
        return true
      }
    }

    const clearItemFromCart = (productId) => {
      const existingProduct = cart.value.find((item) => item.id === productId)
      if (existingProduct) {
        cart.value = cart.value.filter((item) => item.id !== productId)
      }
    }

    const clearAllItem = () => {
      cart.value = []
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
  },
  {
    persist: true,
  },
)
