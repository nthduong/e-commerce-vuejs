import { createOrder } from '@/services/orderService'
import { ref } from 'vue'
export function useOder() {
  const loading = ref(false)
  const error = ref(false)

  const submitOrder = async (orderData) => {
    loading.value = true
    try {
      const res = await createOrder(orderData)
      return res
    } catch (err) {
      error.value = err
      throw err
    } finally {
      loading.value = false
    }
  }

  return { loading, error, submitOrder }
}
