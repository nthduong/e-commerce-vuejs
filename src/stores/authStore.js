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
      const res = await registerUser(payload)
      if (res.success) {
        user.value = res.user
        return { success: true, user: res.user }
      } else {
        error.value = res.message
        return { success: false, message: res.message }
      }
    } catch (err) {
      error.value = err.message
      return { success: false, message: err.message }
    } finally {
      loading.value = false
    }
  }
  const login = async (payload) => {
    loading.value = true
    error.value = null
    try {
      const res = await loginUser(payload)
      if (res.success) {
        user.value = res.user
        return { success: true, user: res.user }
      } else {
        return { success: false }
      }
    } catch (err) {
      error.value = err.message
      return { success: false, message: err.message }
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
