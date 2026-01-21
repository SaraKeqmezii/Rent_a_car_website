import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCar } from '../services/api'
import './CarDetails.css'

function CarDetails() {
  const { id } = useParams()
  const [car, setCar] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await getCar(id)
        setCar(response.data)
      } catch (error) {
        console.error('Error fetching car:', error)
        // Mock data
        setCar({
          id: 1,
          brand: 'Mercedes-Benz',
          model: 'E-Class',
          year: 2023,
          color: 'Black',
          pricePerDay: 80,
          imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
          fuelType: 'Diesel',
          transmission: 'Automatic',
          seats: 5,
          isAvailable: true,
          description: 'Luxury sedan with premium features and comfort. Perfect for business trips and special occasions.'
        })
      } finally {
        setLoading(false)
      }
    }
    fetchCar()
  }, [id])

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    )
  }

  if (!car) {
    return (
      <div className="container">
        <div className="not-found">
          <h2>Makina nuk u gjet</h2>
          <Link to="/cars" className="btn btn-primary">Kthehu te Makinat</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="car-details-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Kryefaqja</Link>
          <span>/</span>
          <Link to="/cars">Makinat</Link>
          <span>/</span>
          <span>{car.brand} {car.model}</span>
        </div>

        <div className="car-details-content">
          <div className="car-details-image">
            <img src={car.imageUrl} alt={`${car.brand} ${car.model}`} />
            {car.isAvailable ? (
              <span className="availability available">✓ Disponueshëm</span>
            ) : (
              <span className="availability unavailable">✗ I Zënë</span>
            )}
          </div>

          <div className="car-details-info">
            <h1>{car.brand} {car.model}</h1>
            <p className="car-year">{car.year} • {car.color}</p>

            <div className="car-price-box">
              <span className="price">€{car.pricePerDay}</span>
              <span className="per-day">/ ditë</span>
            </div>

            <div className="car-specs">
              <div className="spec">
                <span className="spec-icon">⛽</span>
                <div>
                  <span className="spec-label">Karburanti</span>
                  <span className="spec-value">{car.fuelType}</span>
                </div>
              </div>
              <div className="spec">
                <span className="spec-icon">⚙️</span>
                <div>
                  <span className="spec-label">Transmisioni</span>
                  <span className="spec-value">{car.transmission}</span>
                </div>
              </div>
              <div className="spec">
                <span className="spec-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
                <div>
                  <span className="spec-label">Vendet</span>
                  <span className="spec-value">{car.seats}</span>
                </div>
              </div>
              <div className="spec">
                <span className="spec-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"/><path d="m5 2 5 5"/><path d="M2 13h15"/><path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"/></svg></span>
                <div>
                  <span className="spec-label">Ngjyra</span>
                  <span className="spec-value">{car.color}</span>
                </div>
              </div>
            </div>

            <div className="car-description">
              <h3>Përshkrimi</h3>
              <p>{car.description || 'Makinë e shkëlqyer për çdo lloj udhëtimi. Komode, ekonomike dhe e sigurt.'}</p>
            </div>

            <div className="car-features-list">
              <h3>Veçoritë</h3>
              <ul>
                <li>✓ Kondicioner (AC)</li>
                <li>✓ GPS Navigacion</li>
                <li>✓ Bluetooth</li>
                <li>✓ USB Port</li>
                <li>✓ Airbags</li>
                <li>✓ ABS</li>
              </ul>
            </div>

            {car.isAvailable && (
              <Link to={`/booking/${car.id}`} className="btn btn-primary btn-large">
                Rezervo Tani
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetails
