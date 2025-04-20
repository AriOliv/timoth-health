import { FlaskConical, Users2 } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

export default function Research() {
  const { t } = useI18n()
  return (
    <section id="research" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span dangerouslySetInnerHTML={{ __html: t.research.heading.replace("<1>", '<span class="text-blue-600">').replace("</1>", "</span>") }} />
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-white rounded-xl p-8 shadow flex flex-col items-center hover:shadow-lg transition">
            <FlaskConical className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-xl mb-2">{t.research.research.title}</h3>
            <p className="text-gray-600 text-center">
              {t.research.research.desc}
            </p>
          </div>
          <div className="flex-1 bg-white rounded-xl p-8 shadow flex flex-col items-center hover:shadow-lg transition">
            <Users2 className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-xl mb-2">{t.research.impact.title}</h3>
            <p className="text-gray-600 text-center">
              {t.research.impact.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
