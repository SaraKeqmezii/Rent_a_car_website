import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg></span>
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
