import api from './api'

export const createOrder = async (orderData) => {
  try {
    const response = await api.post('/orders', orderData)
    return response.data
  } catch (error) {
    console.error('failed to orders:', error)
    throw error
  }
}
