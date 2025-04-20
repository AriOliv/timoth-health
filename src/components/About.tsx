import { BookOpen, Stethoscope, HeartPulse } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

export default function About() {
  const { t } = useI18n()
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span dangerouslySetInnerHTML={{ __html: t.about.heading.replace("<1>", '<span class="text-blue-600">').replace("</1>", "</span>") }} />
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex-1 bg-blue-50 rounded-xl p-8 flex flex-col items-center shadow hover:shadow-lg transition">
            <Stethoscope className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-xl mb-2">{t.about.diagnostics.title}</h3>
            <p className="text-gray-600 text-center">
              {t.about.diagnostics.desc}
            </p>
          </div>
          <div className="flex-1 bg-blue-50 rounded-xl p-8 flex flex-col items-center shadow hover:shadow-lg transition">
            <HeartPulse className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-xl mb-2">{t.about.ecg.title}</h3>
            <p className="text-gray-600 text-center">
              {t.about.ecg.desc}
            </p>
          </div>
          <div className="flex-1 bg-blue-50 rounded-xl p-8 flex flex-col items-center shadow hover:shadow-lg transition">
            <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-xl mb-2">{t.about.research.title}</h3>
            <p className="text-gray-600 text-center">
              {t.about.research.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
