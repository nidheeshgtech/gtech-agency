import './Footer.css'

function Footer() {
  return (
    <footer className="footer">

      {/* Logo */}
      <a href="#" className="footer-logo">gtech</a>

      {/* Links */}
      <ul className="footer-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Copyright */}
      <p className="footer-copy">© 2026 gtech. All rights reserved.</p>

    </footer>
  )
}

export default Footer
