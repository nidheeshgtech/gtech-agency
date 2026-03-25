import './Marquee.css'

// Items that scroll across the screen
const items = [
  'Brand Identity',
  'Web Design',
  'Digital Experience',
  'Motion Design',
  'Strategy',
  'Creative Direction',
  'UI & UX',
  'Webflow',
]

function Marquee() {

  // We duplicate the list so the scroll looks seamless
  const allItems = [...items, ...items]

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {allItems.map((item, index) => (
          <span key={index} className="marquee-item">
            {item} <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
