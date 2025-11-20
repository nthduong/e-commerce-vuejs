import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import * as productService from '@/services/productService'

export const useProductStore = defineStore('product', () => {
  // 1. STATE
  const products = ref([])
  const productList = ref([])
  const productDetail = ref(null)
  const loading = ref(false)
  const error = ref(null)

  // 2. GETTERS
  const featuredProducts = computed(() => {
    return products.value.filter((product) => product.isFeatured)
  })
  const NewProducts = computed(() => {
    return products.value.filter((product) => product.isNew)
  })
  const countProduct = computed(() => products.value.length)
  const countProductByCategory = computed(
    () => (categoryId) =>
      products.value.filter((product) => product.categoryId == categoryId).length,
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
  const fetchProductList = async (params = {}) => {
    loading.value = true
    error.value = null
    try {
      productList.value = await productService.getAll(params)
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const fetchDetail = async (slug) => {
    loading.value = true
    error.value = null
    try {
      productDetail.value = await productService.getBySlug(slug)
    } catch (err) {
      productDetail.value = null
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return {
    products,
    productList,
    productDetail,
    loading,
    error,
    countProduct,
    countProductByCategory,
    featuredProducts,
    NewProducts,
    fetchProductList,
    fetchDetail,
    fetchProducts,
  }
})
