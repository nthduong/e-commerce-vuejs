import { defineStore } from 'pinia'
import * as productService from '@/services/productService'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchProducts = async (params = {}) => {
    loading.value = true
    error.value = null
    try {
      products.value = await productService.getAll(params)
    } catch (error) {
      error.value = error
    } finally {
      loading.value = false
    }
  }
  return {
    products,
    loading,
    error,
    fetchProducts,
  }
})
