import './Navbar.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const [scrolled, setScrolled] = useState(false)

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

      <a href="#" className="navbar-logo">GTECH</a>

      <ul className="navbar-links">
        <li><Link to="/services">Services</Link></li>
        <li><a href="#projects">Work</a></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#contact" className="nav-cta">Start a Project</a>

    </nav>
  )
}

export default Navbar
