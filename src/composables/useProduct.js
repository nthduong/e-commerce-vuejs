import { useProductStore } from '@/stores/productStore'
import { computed, onMounted } from 'vue'

export function useProduct(autoLoad = true) {
  const productStore = useProductStore()

  const products = computed(() => productStore.products)
  const loading = computed(() => productStore.loading)
  const error = computed(() => productStore.error)
  const featuredProducts = computed(() => {
    return products.value.filter((product) => product.isFeatured)
  })
  const NewProducts = computed(() => {
    return products.value.filter((product) => product.isNew)
  })

  const fetchProducts = async (params = {}) => {
    await productStore.fetchProducts(params)
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
    featuredProducts,
    NewProducts,
  }
}
