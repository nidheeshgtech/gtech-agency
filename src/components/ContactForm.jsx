import './ContactForm.css'
import { useState } from 'react'

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Thanks ${name}! We will get back to you soon.`)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-left">
        <p className="contact-label">Get In Touch</p>
        <h2 className="contact-heading">
          Let's build something <em>great</em> together
        </h2>

        <div className="contact-info">
          <div className="contact-info-item">
            <span className="contact-info-icon">📧</span>
            hello@gtechme.com
          </div>
          <div className="contact-info-item">
            <span className="contact-info-icon">📍</span>
            United Arab Emirates
          </div>
          <div className="contact-info-item">
            <span className="contact-info-icon">🕐</span>
            Mon – Fri, 9am – 6pm
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              className="form-input"
              type="text"
              placeholder="John Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea
            className="form-textarea"
            placeholder="Tell us about your project..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="form-submit">Send Message</button>
      </form>
    </section>
  )
}

export default ContactForm
