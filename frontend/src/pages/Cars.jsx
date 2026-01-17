import { useState, useEffect } from 'react'
import CarCard from '../components/CarCard'
import { getCars } from '../services/api'
import './Cars.css'

function Cars() {
  const [cars, setCars] = useState([])
  const [filteredCars, setFilteredCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    brand: '',
    fuelType: '',
    transmission: '',
    minPrice: '',
    maxPrice: ''
  })

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await getCars()
        setCars(response.data)
        setFilteredCars(response.data)
      } catch (error) {
        console.error('Error fetching cars:', error)
        // Mock data
        const mockCars = [
          { id: 1, brand: 'Mercedes-Benz', model: 'E-Class', year: 2023, color: 'Black', pricePerDay: 80, imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800', fuelType: 'Diesel', transmission: 'Automatic', seats: 5, isAvailable: true },
          { id: 2, brand: 'BMW', model: 'X5', year: 2023, color: 'White', pricePerDay: 95, imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', fuelType: 'Petrol', transmission: 'Automatic', seats: 7, isAvailable: true },
          { id: 3, brand: 'Audi', model: 'A4', year: 2022, color: 'Silver', pricePerDay: 65, imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800', fuelType: 'Diesel', transmission: 'Automatic', seats: 5, isAvailable: true },
          { id: 4, brand: 'Volkswagen', model: 'Golf', year: 2023, color: 'Blue', pricePerDay: 45, imageUrl: 'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=800', fuelType: 'Petrol', transmission: 'Manual', seats: 5, isAvailable: true },
          { id: 5, brand: 'Toyota', model: 'Camry', year: 2023, color: 'Red', pricePerDay: 55, imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', fuelType: 'Hybrid', transmission: 'Automatic', seats: 5, isAvailable: true },
          { id: 6, brand: 'Range Rover', model: 'Sport', year: 2023, color: 'Green', pricePerDay: 150, imageUrl: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800', fuelType: 'Diesel', transmission: 'Automatic', seats: 5, isAvailable: true }
        ]
        setCars(mockCars)
        setFilteredCars(mockCars)
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [])

  useEffect(() => {
    let result = cars

    if (filters.brand) {
      result = result.filter(car => car.brand.toLowerCase().includes(filters.brand.toLowerCase()))
    }
    if (filters.fuelType) {
      result = result.filter(car => car.fuelType === filters.fuelType)
    }
    if (filters.transmission) {
      result = result.filter(car => car.transmission === filters.transmission)
    }
    if (filters.minPrice) {
      result = result.filter(car => car.pricePerDay >= parseInt(filters.minPrice))
    }
    if (filters.maxPrice) {
      result = result.filter(car => car.pricePerDay <= parseInt(filters.maxPrice))
    }

    setFilteredCars(result)
  }, [filters, cars])

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  const clearFilters = () => {
    setFilters({
      brand: '',
      fuelType: '',
      transmission: '',
      minPrice: '',
      maxPrice: ''
    })
  }

  const uniqueBrands = [...new Set(cars.map(car => car.brand))]

  return (
    <div className="cars-page">
      <div className="cars-hero">
        <h1>Makinat Tona</h1>
        <p>Zgjidhni nga koleksioni ynë i makinave moderne dhe luksoze</p>
      </div>

      <div className="container">
        <div className="cars-content">
          {/* Filters Sidebar */}
          <aside className="filters-sidebar">
            <div className="filters-header">
              <h3>Filtrat</h3>
              <button onClick={clearFilters} className="clear-filters">Pastro</button>
            </div>

            <div className="filter-group">
              <label>Marka</label>
              <select name="brand" value={filters.brand} onChange={handleFilterChange}>
                <option value="">Të gjitha</option>
                {uniqueBrands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Karburanti</label>
              <select name="fuelType" value={filters.fuelType} onChange={handleFilterChange}>
                <option value="">Të gjitha</option>
                <option value="Petrol">Benzinë</option>
                <option value="Diesel">Naftë</option>
                <option value="Hybrid">Hibrid</option>
                <option value="Electric">Elektrik</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Transmisioni</label>
              <select name="transmission" value={filters.transmission} onChange={handleFilterChange}>
                <option value="">Të gjitha</option>
                <option value="Automatic">Automatik</option>
                <option value="Manual">Manual</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Çmimi Min (€/ditë)</label>
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                placeholder="0"
              />
            </div>

            <div className="filter-group">
              <label>Çmimi Max (€/ditë)</label>
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                placeholder="500"
              />
            </div>
          </aside>

          {/* Cars Grid */}
          <div className="cars-main">
            <div className="cars-header">
              <p>{filteredCars.length} makina të gjetura</p>
            </div>

            {loading ? (
              <div className="loading">
                <div className="spinner"></div>
              </div>
            ) : filteredCars.length > 0 ? (
              <div className="cars-grid grid grid-3">
                {filteredCars.map(car => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="no-cars">
                <p>Nuk u gjetën makina me këto filtra.</p>
                <button onClick={clearFilters} className="btn btn-primary">Pastro Filtrat</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cars
