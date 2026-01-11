import { createI18n } from 'vue-i18n'
import zh from './locales/zh'
import en from './locales/en'

export type MessageSchema = typeof zh

const i18n = createI18n<[MessageSchema], 'zh' | 'en'>({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages: {
    zh,
    en,
  },
})

export default i18n
