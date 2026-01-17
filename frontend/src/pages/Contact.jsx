import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const whatsappNumber = '38344123456'
    let whatsappMessage = `Pershendetje! Une jam ${formData.name}.`
    
    if (formData.email) {
      whatsappMessage += `\n\nEmail: ${formData.email}`
    }
    
    whatsappMessage += `\n\nMesazhi: ${formData.message}`
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Informacione Kontakti</h2>
            <p>Na kontaktoni per cdo pyetje ose per te bere nje rezervim</p>

            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Adresa</h4>
                  <p>Kamenice, Kosove</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Telefon / WhatsApp</h4>
                  <p>+383 44 123 456</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>info@rentcargeci.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">🕐</div>
                <div>
                  <h4>Orari</h4>
                  <p>E Hene - E Premte: 08:00 - 20:00</p>
                  <p>E Shtune - E Diel: 09:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="locations">
              <h3>Lokacioni Yne</h3>
              <ul>
                <li>📍 Kamenice, Kosove</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Dergoni Mesazh ne WhatsApp</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Emri i Plote *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email (opsional)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Mesazhi *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-whatsapp">
                💬 Dergo ne WhatsApp
              </button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <h2 className="section-title">Na Gjeni</h2>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244470.343623996!2d21.435705668945612!3d42.606638859973145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354e9b8828d591f%3A0xc7d803f51869f36c!2zS2FtZW5pY8Or!5e1!3m2!1sen!2s!4v1768685061131!5m2!1sen!2s" 
              width="100%" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
