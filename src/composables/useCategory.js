import { useCategoryStore } from '@/stores/categoryStore'
import { computed, onMounted } from 'vue'

export function useCategory(autoLoad = true) {
  const categoryStore = useCategoryStore()

  const categories = computed(() => categoryStore.categories)
  const loading = computed(() => categoryStore.loading)
  const error = computed(() => categoryStore.error)

  const fetchCategory = async (params = {}) => {
    await categoryStore.fetchCategory(params)
  }
  if (autoLoad) {
    onMounted(() => {
      fetchCategory()
    })
  }

  return {
    categories,
    loading,
    error,
    fetchCategory,
  }
}
