import api from './api'

export const registerUser = async (payload) => {
  try {
    const response = await api.get('/users')
    const users = response.data

    const isEmailTaken = users.some((user) => user.email === payload.email)

    if (isEmailTaken) {
      return { success: false, message: 'Email already exists' }
    }

    const createResponse = await api.post('/users', payload)
    const user = createResponse.data

    return { success: true, user: user }
  } catch (error) {
    console.error('Failed to register user:', error)
    throw error
  }
}

export const loginUser = async (payload) => {
  try {
    const response = await api.get('/users')
    const users = response.data
    const user = users.find((u) => u.email === payload.email && u.password === payload.password)

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
