import { useProductStore } from '@/stores/productStore'
import { computed, onMounted } from 'vue'

export function useProduct(autoLoad = true) {
  const productStore = useProductStore()

  const products = computed(() => productStore.products)
  const productList = computed(() => productStore.productList)
  const productDetail = computed(() => productStore.productDetail)
  const loading = computed(() => productStore.loading)
  const error = computed(() => productStore.error)
  const countProduct = computed(() => productStore.countProduct)
  const countProductByCategory = computed(
    () => (categoryId) => productStore.countProductByCategory(categoryId),
  )
  const featuredProducts = computed(() => productStore.featuredProducts)
  const NewProducts = computed(() => productStore.NewProducts)

  const fetchProducts = async (params = {}) => {
    await productStore.fetchProducts(params)
  }
  const fetchProductList = async (params = {}) => {
    await productStore.fetchProductList(params)
  }
  const fetchDetail = async (slug) => {
    await productStore.fetchDetail(slug)
  }

  if (autoLoad) {
    onMounted(() => {
      fetchProducts()
    })
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
    fetchProducts,
    fetchProductList,
    fetchDetail,
  }
}
