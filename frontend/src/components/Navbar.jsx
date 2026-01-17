import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🚗</span>
          <span className="logo-text">Rent a Car <span className="logo-highlight">Geci</span></span>
        </Link>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Kryefaqja</Link></li>
          <li><Link to="/cars" onClick={() => setIsOpen(false)}>Makinat</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>Rreth Nesh</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Kontakt</Link></li>
          <li><Link to="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Rezervo Tani</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
