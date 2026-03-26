import './ServiceCard.css'

function ServiceCard(props) {
  return (
    <div className="service-row">

      <span className="service-row-num">{props.number}</span>
      <h3 className="service-row-title">{props.title}</h3>
      <p className="service-row-desc">{props.description}</p>

      <div className="service-row-tags">
        {props.tags.map((tag) => (
          <span key={tag} className="service-tag">{tag}</span>
        ))}
      </div>

      <span className="service-row-arrow">↗</span>

    </div>
  )
}

export default ServiceCard
