import { useAuthStore } from '@/stores/authStore'
import router from '@/router'
import { loginApi } from '@/api/authApi'
import { saveToken, clearToken } from '@/utils/cookies'

export function useAuth() {
  const authStore = useAuthStore()

  async function login(username: string, password: string) {
    const res = await loginApi(username, password)
    authStore.setUser(res.user)
    saveToken(res.token)
    return res
  }

  function logout() {
    authStore.setUser(null)
    clearToken()
    router.push({ name: 'home' })
  }

  return {
    login,
    logout,
    authStore,
  }
}
