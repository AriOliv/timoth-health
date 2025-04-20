import { Link } from "react-router-dom"
import { ShieldCheck } from "lucide-react"

export default function EndometriosisCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-4">
          <ShieldCheck className="w-12 h-12 text-blue-600" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="text-blue-600">Endometriosis</span> Early Detection Insights
        </h2>
        <p className="text-gray-700 mb-6">
          Leverage advanced AI to assess early-stage endometriosis risk. For clinicians and patients—private, secure, and clinically transparent.
        </p>
        <Link
          to="/endometriosis"
          className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Try Endometriosis Insights
        </Link>
      </div>
    </section>
  )
}
