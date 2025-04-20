import { HeartPulse, Stethoscope, ShieldCheck, Users } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

export default function Solutions() {
  const { t } = useI18n()
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span dangerouslySetInnerHTML={{ __html: t.solutions.heading.replace("<1>", '<span class="text-blue-600">').replace("</1>", "</span>") }} />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center hover:shadow-lg transition">
            <Stethoscope className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">{t.solutions.diagnostics.title}</h3>
            <p className="text-gray-600 text-center">
              {t.solutions.diagnostics.desc}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center hover:shadow-lg transition">
            <HeartPulse className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">{t.solutions.ecg.title}</h3>
            <p className="text-gray-600 text-center">
              {t.solutions.ecg.desc}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center hover:shadow-lg transition">
            <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">{t.solutions.safety.title}</h3>
            <p className="text-gray-600 text-center">
              {t.solutions.safety.desc}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center hover:shadow-lg transition">
            <Users className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">{t.solutions.support.title}</h3>
            <p className="text-gray-600 text-center">
              {t.solutions.support.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
