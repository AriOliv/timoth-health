import { useI18n } from '../i18n/I18nContext'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="py-8 bg-white border-t border-blue-100 text-center text-gray-500 text-sm">
      <span>{t.footer.copyright}</span>
    </footer>
  )
}
