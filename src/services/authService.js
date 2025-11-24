import api from './api'

export const registerUser = async (payload) => {
  try {
    const response = await api.post('/users', payload)
    return response.data
  } catch (error) {
    console.error('Failed to register user:', error)
    throw error
  }
}

export const loginUser = async ({ email, password }) => {
  try {
    const response = await api.get(`/users?email=${email}&password=${password}`)
    if (response.data.length) return response.data[0]
    throw new Error('Invalid email or password')
  } catch (error) {
    console.error('Failed to login user:', error)
    throw error
  }
}

export const getCurrentUser = async (id) => {
  try {
    const response = await api.get(`/users/${id}`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw error
  }
}
