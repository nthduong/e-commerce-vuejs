import { useProductStore } from '@/stores/productStore'
import { computed, ref, onMounted } from 'vue'
import { CACHE_TTL } from '@/config/cache.config'

export function useProduct(autoLoad = true) {
  const productStore = useProductStore()
  const lastFetched = ref(null)

  const products = computed(() => productStore.products)
  const loading = computed(() => productStore.loading)
  const error = computed(() => productStore.error)

  const fetchProducts = async (force = false) => {
    const now = Date.now()

    if (
      !force &&
      products.value.length > 0 &&
      lastFetched.value &&
      now - lastFetched.value < CACHE_TTL.PRODUCT_LIST
    ) {
      console.log('[STORE] Using cached products')
      return products.value
    }
    console.log(1);

    await productStore.fetchProducts()
    lastFetched.value = now
    return products.value
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
