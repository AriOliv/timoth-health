import { useI18n } from "../i18n/I18nContext"
import { GB, BR } from "country-flag-icons/react/3x2"

export default function LanguageToggle() {
  const { lang, setLang, t } = useI18n()

  const toggleLanguage = () => {
    setLang(lang === "en" ? "pt-BR" : "en")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex items-center justify-center w-8 h-6 rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400 hover:opacity-80 transition-opacity"
      aria-label={t.langToggle.label}
      title={lang === "en" ? t.langToggle.pt : t.langToggle.en}
    >
      {lang === "en" ? (
        <GB className="w-full h-full object-cover" />
      ) : (
        <BR className="w-full h-full object-cover" />
      )}
      <span className="sr-only">
        {lang === "en" ? t.langToggle.en : t.langToggle.pt}
      </span>
    </button>
  )
}
