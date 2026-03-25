import './ServiceCard.css'

function ServiceCard({ number, title, description, tags }) {
  return (
    <div className="service-row">
      <span className="service-row-num">{number}</span>
      <h3 className="service-row-title">{title}</h3>
      <p className="service-row-desc">{description}</p>

      <div className="service-row-tags">
        {tags.map((tag) => (
          <span key={tag} className="service-tag">{tag}</span>
        ))}
      </div>

      <span className="service-row-arrow">↗</span>
    </div>
  )
}

export default ServiceCard
