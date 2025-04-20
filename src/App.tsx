import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Hero from './components/Hero'
import About from './components/About'
import Solutions from './components/Solutions'
import ECGHighlight from './components/ECGHighlight'
import Research from './components/Research'
import CTA from './components/CTA'
import Footer from './components/Footer'
import EndometriosisInsights from './components/EndometriosisInsights'
import EndometriosisCTA from './components/EndometriosisCTA'
import Navbar from './components/Navbar'
import EndometriosisPage from './pages/EndometriosisPage'
import { I18nProvider } from './i18n/I18nContext'

function MainPage() {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <ECGHighlight />
      <EndometriosisCTA />
      <Research />
      <CTA />
      <Footer />
    </>
  )
}

function App() {
  return (
    <I18nProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/endometriosis" element={<EndometriosisPage />} />
        </Routes>
      </Router>
    </I18nProvider>
  )
}

export default App
