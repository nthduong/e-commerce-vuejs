import { defineStore } from 'pinia'
import * as categoryService from '@/services/categoryService'
import { ref } from 'vue'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchCategory = async (params = {}) => {
    loading.value = true
    error.value = null
    try {
      categories.value = await categoryService.getAllCategories(params)
    } catch (error) {
      error.value = error
    } finally {
      loading.value = false
    }
  }
  return {
    categories,
    loading,
    error,
    fetchCategory,
  }
})
