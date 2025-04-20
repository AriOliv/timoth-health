import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import en from "./en"
import ptBR from "./pt-BR"

type Lang = "en" | "pt-BR"
type Dict = typeof en

const translations: Record<Lang, Dict> = {
  en,
  "pt-BR": ptBR,
}

const LANG_KEY = "jurismedai_lang"

interface I18nContextProps {
  lang: Lang
  t: Dict
  setLang: (lang: Lang) => void
}

const I18nContext = createContext<I18nContextProps>({
  lang: "en",
  t: en,
  setLang: () => {},
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  // Detect language on first load
  useEffect(() => {
    const stored = localStorage.getItem(LANG_KEY) as Lang | null
    if (stored && translations[stored]) {
      setLangState(stored)
      return
    }
    // Only detect if not set
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_code === "BR") {
          setLangState("pt-BR")
          localStorage.setItem(LANG_KEY, "pt-BR")
        } else {
          setLangState("en")
          localStorage.setItem(LANG_KEY, "en")
        }
      })
      .catch(() => {
        setLangState("en")
        localStorage.setItem(LANG_KEY, "en")
      })
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem(LANG_KEY, l)
  }

  return (
    <I18nContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
