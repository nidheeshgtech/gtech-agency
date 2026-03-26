import './ProjectCard.css'

function ProjectCard({ category, title, year, image }) {
  return (
    <div className="project-card">

      <div className="project-card-img">
        <img src={image} alt={title} />
        <span className="project-card-year">{year}</span>
      </div>

      <div className="project-card-body">
        <span className="project-card-cat">{category}</span>
        <h3 className="project-card-title">{title}</h3>
        <a href="#contact" className="project-card-link">View Project ↗</a>
      </div>

    </div>
  )
}

export default ProjectCard
