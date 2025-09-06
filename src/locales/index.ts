import { createI18n } from 'vue-i18n'
import en from './en.json'
import vi from './vi.json'
import jp from './jp.json'

const savedLocale = localStorage.getItem('locale') || 'en'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    vi,
    jp,
  },
})

export default i18n
