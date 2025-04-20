import { useI18n } from '../i18n/I18nContext'

export default function ECGHighlight() {
  const { t } = useI18n()
  return (
    <section className="py-24 bg-white" id="ecg">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <img
          src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"
          alt="ECG AI system"
          className="rounded-2xl shadow-lg w-full md:w-1/2 object-cover"
        />
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span dangerouslySetInnerHTML={{ __html: t.ecgHighlight.heading.replace("<1>", '<span class="text-blue-600">').replace("</1>", "</span>") }} />
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            {t.ecgHighlight.desc}
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            {t.ecgHighlight.features.map((f: string, i: number) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
          >
            {t.ecgHighlight.demo}
          </a>
        </div>
      </div>
    </section>
  )
}
