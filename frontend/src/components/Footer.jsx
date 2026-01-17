import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🚗 Rent a Car Geci</h3>
            <p>Ofrimi shërbimin më të mirë të qirasë së makinave në Kosovë. Cilësi, besueshmëri dhe çmime konkurruese.</p>
          </div>

          <div className="footer-section">
            <h4>Lidhje të Shpejta</h4>
            <ul>
              <li><Link to="/">Kryefaqja</Link></li>
              <li><Link to="/cars">Makinat</Link></li>
              <li><Link to="/about">Rreth Nesh</Link></li>
              <li><Link to="/contact">Kontakt</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontakt</h4>
            <ul className="contact-info">
              <li>📍 Kamenicë, Kosovë</li>
              <li>📞 +383 44 123 456</li>
              <li>✉️ info@rentcargeci.com</li>
              <li>🕐 E Hënë - E Diel: 08:00 - 20:00</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Rent a Car Geci. Të gjitha të drejtat e rezervuara.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
