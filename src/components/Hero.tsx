import { ArrowRight } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&amp;fit=crop&amp;w=1200&amp;q=80'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-b from-white to-blue-50 pt-16">
      <div className="flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          <span dangerouslySetInnerHTML={{ __html: t.hero.title1.replace("<1>", '<span class="text-blue-600">').replace("</1>", "</span>") }} />
          <br className="hidden md:block" />
          <span dangerouslySetInnerHTML={{ __html: t.hero.title2.replace("<1>", '<span class="text-gray-800">').replace("</1>", "</span>") }} />
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          {t.hero.desc}
        </p>
        <a
          href="#solutions"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
        >
          {t.hero.discover} <ArrowRight className="w-5 h-5" />
        </a>
      </div>
      <img
        src={HERO_IMAGE}
        alt="AI medical innovation"
        className="rounded-2xl shadow-2xl mt-16 w-full max-w-3xl object-cover object-center border border-blue-100"
        style={{ minHeight: 320 }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/60 to-blue-100/80" />
    </section>
  )
}
