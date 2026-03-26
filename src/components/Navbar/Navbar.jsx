import './Navbar.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    })
  }, [])

  let navClass = 'navbar'
  if (scrolled) {
    navClass = 'navbar scrolled'
  }

  return (
    <nav className={navClass}>

      <Link to="/" className="navbar-logo">GTECH</Link>

      {/* Desktop links */}
      <ul className={menuOpen ? 'navbar-links open' : 'navbar-links'}>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Work</a></li>
        <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>

      <a href="#contact" className="nav-cta">Start a Project</a>

      {/* Hamburger button - only shows on mobile */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  )
}

export default Navbar
