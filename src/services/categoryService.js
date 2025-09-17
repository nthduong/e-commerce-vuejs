import api from './api'

export const getAllCategories = async (params = {}) => {
  try {
    const response = await api.get('/categories', { params })
    return response.data
  } catch (error) {
    console.error('failed to fetch categories:', error)
    throw error
  }
}
