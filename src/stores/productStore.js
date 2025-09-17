import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import * as productService from '@/services/productService'

export const useProductStore = defineStore('product', () => {
  // 1. STATE
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  // 2. GETTERS
  const featuredProducts = computed(() => {
    return products.value.filter((product) => product.isFeatured)
  })
  const NewProducts = computed(() => {
    return products.value.filter((product) => product.isNew)
  })
  const countProductByCategory = computed(
    () => (categoryId) =>
      products.value.filter((product) => product.categoryId === categoryId).length,
  )
  
  // 3. ACTIONS
  const fetchProducts = async (params = {}) => {
    loading.value = true
    error.value = null
    try {
      products.value = await productService.getAll(params)
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return {
    products,
    loading,
    error,
    featuredProducts,
    countProductByCategory,
    NewProducts,
    fetchProducts,
  }
})
