import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Heart, Activity } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

export default function ProductsDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const { t } = useI18n()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <div ref={dropdownRef} className="relative" onKeyDown={handleKeyDown}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600 transition"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {t.nav.products}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
          role="menu"
        >
          <Link
            to="/ecg"
            className="flex items-center gap-3 px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition"
            role="menuitem"
          >
            <Activity className="w-5 h-5" />
            <div>
              <div className="font-medium">ECG Analysis</div>
              <div className="text-sm text-gray-500">AI-powered ECG interpretation</div>
            </div>
          </Link>

          <Link
            to="/endometriosis"
            className="flex items-center gap-3 px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition"
            role="menuitem"
          >
            <Heart className="w-5 h-5" />
            <div>
              <div className="font-medium">Endometriosis Insights</div>
              <div className="text-sm text-gray-500">Early detection & analysis</div>
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}
