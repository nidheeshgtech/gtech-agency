import './Navbar.css'
import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <a href="#" className="navbar-logo">GTECH</a>

      <ul className="navbar-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#contact" className="nav-cta">Start a Project</a>
    </nav>
  )
}

export default Navbar
