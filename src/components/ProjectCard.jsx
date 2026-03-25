import './ProjectCard.css'

function ProjectCard({ category, title, year, size, image }) {
  return (
    <div className={`work-card ${size}`}>
      <div
        className="work-card-bg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="work-card-top">
        <span className="work-cat">{category}</span>
        <span className="work-year">{year}</span>
      </div>

      <div className="work-card-overlay"></div>

      <div className="work-card-content">
        <h3 className="work-title">{title}</h3>
        <span className="work-arrow">↗</span>
      </div>
    </div>
  )
}

export default ProjectCard
