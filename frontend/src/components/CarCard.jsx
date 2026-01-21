import { Link } from 'react-router-dom'
import './CarCard.css'

function CarCard({ car }) {
  return (
    <div className="car-card card">
      <div className="car-image">
        <img src={car.imageUrl} alt={`${car.brand} ${car.model}`} />
        {car.isAvailable ? (
          <span className="badge available">Disponueshëm</span>
        ) : (
          <span className="badge unavailable">I Zënë</span>
        )}
      </div>
      <div className="car-info">
        <h3>{car.brand} {car.model}</h3>
        <p className="car-year">{car.year}</p>
        
        <div className="car-features">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle', marginRight: '4px'}}><path d="M3 22h18"/><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/></svg>{car.fuelType}</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle', marginRight: '4px'}}><circle cx="12" cy="12" r="3"/><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"/></svg>{car.transmission}</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle', marginRight: '4px'}}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>{car.seats} Vende</span>
        </div>
        
        <div className="car-footer">
          <div className="car-price">
            <span className="price">€{car.pricePerDay}</span>
            <span className="per-day">/ ditë</span>
          </div>
          <Link to={`/cars/${car.id}`} className="btn btn-primary">
            Shiko
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CarCard
