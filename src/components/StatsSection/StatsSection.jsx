import './StatsSection.css'

const stats = [
  { number: '120+', label: 'Projects Delivered' },
  { number: '40+',  label: 'Happy Clients'      },
  { number: '8',    label: 'Years Experience'    },
  { number: '15',   label: 'Awards Won'          },
]

function StatsSection() {
  return (
    <section className="stats-section">

     
      <div className="stats-intro">
        <p className="stats-label">By The Numbers</p>
        <h2 className="stats-heading">
          Results that <em>speak</em> for themselves
        </h2>
      </div>

      
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <p className="stat-number">{stat.number}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default StatsSection
