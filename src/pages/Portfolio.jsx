import './Portfolio.css'

const projects = [
  {
    id: 1,
    title: 'Engineering Speed: AFM (Aspire Formula) High-Performance Website by GTECH',
    category: 'Brand Identity',
    year: '2025',
    description: 'AFM is the Middle East’s premier single-seater private testing program',
    image: 'https://www.gtechme.com/wp-content/uploads/2026/01/AFM-1-Static-KB-scaled.jpg',
  }
]

function Portfolio() {
  return (
    <div className="portfolio-page">

      <div className="portfolio-header">
        <p className="portfolio-label">Our Work</p>
        <h1 className="portfolio-title">All <em>Projects</em></h1>
        <p className="portfolio-sub">A collection of our work across branding, web design and digital experiences.</p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div className="portfolio-card" key={project.id}>

            <div className="portfolio-card-img">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="portfolio-card-info">
              <div className="portfolio-card-top">
                <span className="portfolio-cat">{project.category}</span>
                <span className="portfolio-year">{project.year}</span>
              </div>
              <h3 className="portfolio-card-title">{project.title}</h3>
              <p className="portfolio-card-desc">{project.description}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Portfolio
