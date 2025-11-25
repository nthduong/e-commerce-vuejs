import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'

export function useAuth() {
  const authStore = useAuthStore()
  const { user, loading, error } = storeToRefs(authStore)

  const register = async (values) => {
    return await authStore.register(values)
  }

  const login = async (values) => {
    return await authStore.login(values)
  }

  const logout = () => authStore.logout()

  return {
    user,
    loading,
    error,
    register,
    login,
    logout,
  }
}
