import './ProjectsSection.css'
import ProjectCard from './ProjectCard'

const projects = [
  {
    category: 'Brand Identity',
    title: 'Aurum — Luxury Skincare',
    year: '2025',
    size: 'large',
    image: 'https://www.gtechme.com/wp-content/uploads/2026/01/EXIMIUS-4-Static-Web@2x-1.webp',
  },
  {
    category: 'Web Design',
    title: 'Alat',
    year: '2025',
    size: 'medium',
    image: 'https://www.gtechme.com/wp-content/uploads/2026/01/Alat-Static-4-Web-scaled.jpg',
  },
  {
    category: 'Digital Experience',
    title: 'EXIMIUS',
    year: '2024',
    size: 'small',
    image: 'https://www.gtechme.com/wp-content/uploads/2026/01/EXIMIUS-4-Static-Web@2x-1.webp',
  },
  {
    category: 'Growth & SEO',
    title: 'TII',
    year: '2024',
    size: 'small',
    image: 'https://www.gtechme.com/wp-content/uploads/2026/01/tii-logo-white-1-1-1.png',
  },
]

function ProjectsSection() {
  return (
    <section className="work" id="projects">
      <div className="section-header">
        <div>
          <p className="section-label">Our Work</p>
          <h2 className="section-title">Recent <em>Projects</em></h2>
        </div>
        <a href="#contact" className="section-link">All Projects</a>
      </div>

      <div className="work-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            category={project.category}
            title={project.title}
            year={project.year}
            image={project.image}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
