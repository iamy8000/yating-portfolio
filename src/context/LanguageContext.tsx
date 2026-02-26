import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import { translations, getTranslation, getTranslationArray, type Locale } from '../i18n/translations'

type TranslationRecord = (typeof translations)[Locale]

const LANG_STORAGE_KEY = 'portfolio-locale'

function getStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem(LANG_STORAGE_KEY)
  if (stored === 'zh-TW' || stored === 'en') return stored
  return 'en'
}

type LanguageContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  t: (key: string) => string
  tArray: (key: string) => string[]
  /** Raw translations for current locale (e.g. experience.items, projects.list) */
  tr: TranslationRecord
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getStoredLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(LANG_STORAGE_KEY, next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'zh-TW' ? 'zh-Hant' : 'en'
  }, [locale])

  const t = useCallback((key: string) => getTranslation(locale, key), [locale])
  const tArray = useCallback((key: string) => getTranslationArray(locale, key), [locale])
  const tr = translations[locale]

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, tArray, tr }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
