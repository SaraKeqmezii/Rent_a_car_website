import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CarCard from '../components/CarCard'
import { getCars } from '../services/api'
import './Home.css'

function Home() {
  const [featuredCars, setFeaturedCars] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await getCars()
        setFeaturedCars(response.data.slice(0, 3))
      } catch (error) {
        console.error('Error fetching cars:', error)
        // Use mock data if API is not available
        setFeaturedCars([
          { id: 1, brand: 'Mercedes-Benz', model: 'E-Class', year: 2023, color: 'Black', pricePerDay: 80, imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800', fuelType: 'Diesel', transmission: 'Automatic', seats: 5, isAvailable: true },
          { id: 2, brand: 'BMW', model: 'X5', year: 2023, color: 'White', pricePerDay: 95, imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', fuelType: 'Petrol', transmission: 'Automatic', seats: 7, isAvailable: true },
          { id: 3, brand: 'Audi', model: 'A4', year: 2022, color: 'Silver', pricePerDay: 65, imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800', fuelType: 'Diesel', transmission: 'Automatic', seats: 5, isAvailable: true }
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Mirë se Vini tek <span className="highlight">Rent a Car Geci</span></h1>
          <p>Zgjidhni makinën e ëndrrave tuaja dhe nisuni për një udhëtim të paharrueshëm</p>
          <div className="hero-buttons">
            <Link to="/cars" className="btn btn-primary">Shiko Makinat</Link>
            <Link to="/contact" className="btn btn-outline">Na Kontaktoni</Link>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Makina</span>
            </div>
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Klientë të Kënaqur</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Mbështetje</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <h2 className="section-title">Pse të Zgjidhni Ne?</h2>
          <p className="section-subtitle">Ofrojmë shërbimin më të mirë të qirasë së makinave në Shqipëri</p>
          
          <div className="features-grid grid grid-4">
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.5 0-3 1-3 2.5s1.5 2 3 2.5c1.5.5 3 1 3 2.5 0 1.5-1.5 2.5-3 2.5-1 0-2-.5-2.5-1.5"></path><line x1="12" y1="6" x2="12" y2="8"></line><line x1="12" y1="16" x2="12" y2="18"></line></svg>
              </div>
              <h3>Çmime Konkurruese</h3>
              <p>Çmimet më të mira në treg pa kompromis në cilësi</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
              </div>
              <h3>Makina Moderne</h3>
              <p>Flota jonë përfshin makinat më të reja dhe më luksoze</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h3>Lokacioni Ynë</h3>
              <p>Na gjeni në Kamenicë, Kosovë - gati për t'ju shërbyer</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3>Siguri e Plotë</h3>
              <p>Të gjitha makinat kanë sigurim të plotë dhe asistencë rrugore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="featured-cars section">
        <div className="container">
          <h2 className="section-title">Makinat Tona të Veçanta</h2>
          <p className="section-subtitle">Zbuloni koleksionin tonë të makinave premium</p>
          
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="cars-grid grid grid-3">
              {featuredCars.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
          
          <div className="view-all">
            <Link to="/cars" className="btn btn-secondary">Shiko të Gjitha Makinat</Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works section">
        <div className="container">
          <h2 className="section-title">Si Funksionon?</h2>
          <p className="section-subtitle">Procesi i thjeshtë i qirasë në 3 hapa</p>
          
          <div className="steps-grid grid grid-3">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Zgjidhni Makinën</h3>
              <p>Shfletoni flotën tonë dhe zgjidhni makinën që ju përshtatet më mirë</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Bëni Rezervimin</h3>
              <p>Plotësoni formularin e rezervimit me datat dhe të dhënat tuaja</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Merrni Makinën</h3>
              <p>Paraqituni në lokacionin e zgjedhur dhe merrni çelësat</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Gati për Udhëtimin Tuaj të Ardhshëm?</h2>
            <p>Rezervoni tani dhe përfitoni nga ofertat tona speciale</p>
            <Link to="/cars" className="btn btn-primary">Rezervo Tani</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
