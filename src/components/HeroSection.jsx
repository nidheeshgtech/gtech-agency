import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>

      <div className="hero-topbar">
        <span className="hero-tag">Creative Agency — Est. 2020</span>
        <span className="hero-available">● Available for projects</span>
      </div>

      <div className="hero-watermark">GTECH</div>

      <div className="hero-content">
        <h1 className="hero-headline">
          We craft brands <br />
          that <em>feel</em> alive
        </h1>

        <div className="hero-bottom">
          <p className="hero-sub">
            gtech is a creative agency specialising in brand identity,
            web design and digital experiences for ambitious companies.
          </p>

          <div className="hero-actions">
            <a href="#services" className="btn-primary">Our Services</a>
            <a href="#projects" className="btn-ghost">View Work →</a>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default HeroSection
