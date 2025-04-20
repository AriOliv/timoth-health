import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { X, Menu } from "lucide-react"
import LanguageToggle from "./LanguageToggle"
import ProductsDropdown from "./ProductsDropdown"
import { useI18n } from "../i18n/I18nContext"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useI18n()
  
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const scrollToSection = (sectionId: string) => {
    try {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: sectionId } })
        return
      }

      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsMenuOpen(false)
      } else {
        console.warn(`Section with id "${sectionId}" not found`)
      }
    } catch (error) {
      console.error('Navigation error:', error)
    }
  }

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
      window.history.replaceState({}, document.title)
    }
  }, [location])

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    e.stopPropagation()
    scrollToSection(sectionId)
  }
  
  return (
    <nav className="bg-white shadow sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center text-2xl font-bold text-blue-700 tracking-tight"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 mr-2 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
            {t.brand}
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 items-center">
              <li>
                <ProductsDropdown />
              </li>
              <li>
                <button
                  onClick={(e) => handleNavClick(e, 'solutions')}
                  className="font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  {t.nav.solutions}
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNavClick(e, 'research')}
                  className="font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  {t.nav.research}
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
            
            <LanguageToggle />
            
            <button
              onClick={(e) => handleNavClick(e, 'contact')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {t.nav.getInTouch}
            </button>
          </div>
          
          <button 
            onClick={(e) => {
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
            }}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="px-3 py-2">
                <Link
                  to="/ecg"
                  className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  ECG Analysis
                </Link>
                <Link
                  to="/endometriosis"
                  className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  Endometriosis Insights
                </Link>
              </div>
              
              <button
                onClick={(e) => handleNavClick(e, 'solutions')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                {t.nav.solutions}
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'research')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                {t.nav.research}
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'about')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                {t.nav.about}
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'contact')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                {t.nav.contact}
              </button>
              
              <div className="px-3 py-2">
                <LanguageToggle />
              </div>
              
              <button
                onClick={(e) => handleNavClick(e, 'contact')}
                className="block w-full px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
              >
                {t.nav.getInTouch}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
