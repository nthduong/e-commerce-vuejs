import axios from 'axios'

const API_URL = 'http://localhost:3000'

const api = axios.create({
  baseURL: API_URL, 
  timeout: 5000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status
    if (status === 401) {
      console.warn('Unauthorized! Redirecting to login...')
    }
    if (status >= 500) {
      console.error('Server error:', error)
    }
    return Promise.reject(error)
  },
)
export default api