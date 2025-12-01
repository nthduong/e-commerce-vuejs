import { defineStore } from 'pinia'

import { ref, computed } from 'vue'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cart = ref([])

    const getTotalItems = computed(() => {
      return cart.value.reduce((total, item) => total + item.quantity, 0)
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

    return {
      cart,
      getTotalItems,
      addToCart,
    }
  },
  {
    persist: true,
  },
)
