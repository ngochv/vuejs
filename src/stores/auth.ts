import { defineStore } from 'pinia'
import router from '@/router'

import { loginApi } from '@/api/authApi'
import type { User } from '@/types/auth'
import { clearToken, getToken, saveToken } from '@/utils/cookies'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user || !!getToken(),
    isAdmin: (state) => state.user?.role === 'admin',
  },
  actions: {
    async login(username: string, password: string) {
      const res = await loginApi(username, password)
      this.user = res.user
      saveToken(res.token)
      return res
    },
    logout() {
      this.user = null
      clearToken()
      router.push({ name: 'home' })
    },
  },
  persist: true,
})
