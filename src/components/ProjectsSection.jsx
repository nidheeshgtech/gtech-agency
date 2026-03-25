import './ProjectsSection.css'
import ProjectCard from './ProjectCard'

const projects = [
  {
    category: 'Brand Identity',
    title: 'Aurum — Luxury Skincare',
    year: '2025',
    size: 'large',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1400&q=80',
  },
  {
    category: 'Web Design',
    title: 'Verdant Studio',
    year: '2025',
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
  },
  {
    category: 'Digital Experience',
    title: 'Violet Agency',
    year: '2024',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    category: 'Growth & SEO',
    title: 'Peak Ventures',
    year: '2024',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
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
            size={project.size}
            image={project.image}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
