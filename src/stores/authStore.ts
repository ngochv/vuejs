import { defineStore } from 'pinia'
import type { User } from '@/types/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
    isAdmin: (state) => state.user?.role === 'admin',
  },
  actions: {
    setUser(user: User | null) {
      this.user = user
    },
  },
  persist: true,
})
