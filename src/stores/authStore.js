import { defineStore } from 'pinia'
import { ref } from 'vue'
import { registerUser, loginUser } from '@/services/authService'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const register = async (payload) => {
    loading.value = true
    error.value = null
    try {
      const data = await registerUser(payload)
      user.value = data
      return data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }
  const login = async (payload) => {
    loading.value = true
    error.value = null
    try {
      const data = await loginUser(payload)
      user.value = data
      return data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  function logout() {
    user.value = null
  }

  return {
    user,
    loading,
    error,
    register,
    login,
    logout,
  }
})
