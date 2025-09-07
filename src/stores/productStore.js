// src/stores/productStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { ProductService } from '@/services/productService'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    try {
      const data = await ProductService.getAll()
      products.value = data
    } catch (err) {
      error.value = 'Failed to fetch products'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const fetchProductById = async (id) => {
    loading.value = true
    error.value = null
    try {
      return await ProductService.getById(id)
    } catch (err) {
      error.value = 'Failed to fetch product'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const totalProducts = computed(() => products.value.length)

  return {
    products,
    loading,
    error,
    fetchProducts,
    fetchProductById,
    totalProducts
  }
})
