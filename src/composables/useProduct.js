import { useProductStore } from '@/stores/productStore'
import { computed, onMounted } from 'vue'

export function useProduct(autoLoad = true) {
  const productStore = useProductStore()

  const products = computed(() => productStore.products)
  const loading = computed(() => productStore.loading)
  const error = computed(() => productStore.error)
  const countProduct = computed(() => productStore.countProduct)
  const countProductByCategory = computed(() => productStore.countProductByCategory)
  const featuredProducts = computed(() => productStore.featuredProducts)
  const NewProducts = computed(() => productStore.NewProducts)

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
    countProduct,
    countProductByCategory,
    featuredProducts,
    NewProducts,
    fetchProducts,
  }
}
