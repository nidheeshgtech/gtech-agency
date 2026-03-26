import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Marquee from './components/Marquee/Marquee'
import StatsSection from './components/StatsSection/StatsSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'


function Home() {
  return (
    <div>
      <HeroSection />
      <Marquee />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
