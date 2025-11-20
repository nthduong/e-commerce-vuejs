import api from './api'

export const getAll = async (params = {}) => {
  try {
    const response = await api.get("/products", {params})
    return response.data
  } catch (error) {
    console.error("failed to fetch products:",error)
    throw error;
  }
}

export const getBySlug = async (slug) => {
  try {
    const response = await api.get('/products', { params: { slug } })
    return response.data[0] || null
  } catch (error) {
    console.error(`Failed to fetch product by slug: ${slug}`, error)
    throw error;
  }
}