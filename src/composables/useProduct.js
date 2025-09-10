import { useProductStore } from '@/stores/productStore'
import { computed, onMounted } from 'vue'


export function useProduct(autoLoad = true) {
  const productStore = useProductStore()

  const products = computed(() => productStore.products)
  const loading = computed(() => productStore.loading)
  const error = computed(() => productStore.error)

  const fetchProducts = async () => {
    await productStore.fetchProducts()
  }
  if (autoLoad) {
    onMounted(() => {
      fetchProducts()
    })
  }

  return {
    products,
    loading,
    error,
    fetchProducts,
  }
}
