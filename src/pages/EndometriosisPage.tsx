import EndometriosisInsights from "../components/EndometriosisInsights"
import { Link } from "react-router-dom"
import { FileText, ArrowLeft } from "lucide-react"

export default function EndometriosisPage() {
  return (
    <main className="bg-blue-50 min-h-screen flex flex-col">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 font-medium mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-2 text-blue-700">
          Endometriosis Early Detection Insights
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          This dedicated tool uses advanced algorithms to help clinicians and patients assess the risk of early-stage endometriosis. All data is processed locally and never stored.
        </p>
        <EndometriosisInsights />
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            Documentation & Resources
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>
              <a
                href="https://www.who.int/news-room/fact-sheets/detail/endometriosis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                WHO: Endometriosis Fact Sheet
              </a>
            </li>
            <li>
              <a
                href="https://www.acog.org/womens-health/faqs/endometriosis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                ACOG: Endometriosis FAQ
              </a>
            </li>
            <li>
              <a
                href="https://www.nichd.nih.gov/health/topics/endometri/conditioninfo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                NIH: Endometriosis Information
              </a>
            </li>
            <li>
              <a
                href="https://www.endometriosis-uk.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Endometriosis UK
              </a>
            </li>
          </ul>
          <div className="bg-white rounded-xl shadow p-6 mt-6">
            <h3 className="text-xl font-semibold mb-2">Algorithm & Validation</h3>
            <p className="text-gray-700 mb-2">
              The risk assessment algorithm is rules-based, transparent, and documented. For details, see:
            </p>
            <a
              href="https://github.com/your-org/timoth/blob/main/src/components/EndometriosisInsights.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              EndometriosisInsights.md – Algorithm Documentation
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
