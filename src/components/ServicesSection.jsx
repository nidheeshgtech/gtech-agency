import './ServicesSection.css'
import ServiceCard from './ServiceCard'

const services = [
  {
    number: '01',
    title: 'Brand Identity',
    description: 'Logos, colour systems and visual language that make your brand instantly recognisable.',
    tags: ['Logo', 'Guidelines', 'Typography'],
  },
  {
    number: '02',
    title: 'Web Design',
    description: 'Clean, modern websites designed to convert visitors into customers.',
    tags: ['UI/UX', 'Figma', 'Webflow'],
  },
  {
    number: '03',
    title: 'Digital Experience',
    description: 'Fully responsive builds that work beautifully on every device and screen.',
    tags: ['React', 'Motion', 'CMS'],
  },
  {
    number: '04',
    title: 'Growth & SEO',
    description: 'Strategy and optimisation to help your business rank higher and reach more people.',
    tags: ['SEO', 'Analytics', 'Strategy'],
  },
]

function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="section-header">
        <div>
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Services We <em>Offer</em></h2>
        </div>
        <a href="#contact" className="section-link">All Services</a>
      </div>

      <div className="services-list">
        {services.map((service) => (
          <ServiceCard
            key={service.number}
            number={service.number}
            title={service.title}
            description={service.description}
            tags={service.tags}
          />
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
