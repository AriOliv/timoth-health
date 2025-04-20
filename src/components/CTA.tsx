import { useI18n } from '../i18n/I18nContext'
import ContactForm from './ContactForm'

export default function CTA() {
  const { t } = useI18n()
  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t.cta.heading}
        </h2>
        <p className="text-blue-100 text-lg mb-8">
          {t.cta.desc}
        </p>
      </div>
      <ContactForm />
    </section>
  )
}
