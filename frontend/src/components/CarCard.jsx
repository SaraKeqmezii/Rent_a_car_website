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
          <span>⛽ {car.fuelType}</span>
          <span>⚙️ {car.transmission}</span>
          <span>👥 {car.seats} Vende</span>
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
