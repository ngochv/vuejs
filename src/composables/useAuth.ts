import { useAuthStore } from '@/stores/authStore'
import router from '@/router'
import { loginApi } from '@/api/authApi'
import { saveToken, clearToken } from '@/utils/cookies'

export function useAuth() {
  const authStore = useAuthStore()

  async function login(username: string, password: string) {
    try {
      const res = await loginApi(username, password)
      authStore.setUser(res?.data.user)
      saveToken(res?.data.token)
      return { success: true, data: res }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return { success: false, error: err.message || 'Login failed' }
    }
  }

  function logout(redirectTo: string = 'login') {
    authStore.setUser(null)
    clearToken()
    router.push({ name: redirectTo })
  }

  return {
    login,
    logout,
    authStore,
  }
}
