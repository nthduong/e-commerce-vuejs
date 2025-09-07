// src/services/productService.js
import axios from 'axios'

const API_URL = 'http://localhost:3000/products'

export const ProductService = {
  async getAll() {
    const response = await axios.get(API_URL)
    return response.data
  },

  async getById(id) {
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data
  },
}
