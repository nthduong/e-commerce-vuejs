import api from './api'

export const registerUser = async (payload) => {
  try {
    const response = await api.post('/users', payload)
    const user = response.data
    return { success: true, user: user }
  } catch (error) {
    console.error('Failed to register user:', error)
    throw error
  }
}

export const loginUser = async ({ email, password }) => {
  try {
    const response = await api.get('/users')
    const users = response.data
    const user = users.find((u) => u.email === email && u.password === password)

    if (!user) {
      return { success: false, message: 'Incorrect email or password' }
    }

    return { success: true, user }
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
