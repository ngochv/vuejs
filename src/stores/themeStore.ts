import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: false,
  }),
  actions: {
    toggleDark() {
      this.isDark = !this.isDark
      localStorage.setItem('isDark', String(this.isDark))
    },
    loadTheme() {
      const saved = localStorage.getItem('isDark')
      this.isDark = saved === 'true'
    },
  },
})
