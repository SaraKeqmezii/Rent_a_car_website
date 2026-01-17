import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Cars API
export const getCars = () => api.get('/cars')
export const getAvailableCars = () => api.get('/cars/available')
export const getCar = (id) => api.get(`/cars/${id}`)
export const createCar = (car) => api.post('/cars', car)
export const updateCar = (id, car) => api.put(`/cars/${id}`, car)
export const deleteCar = (id) => api.delete(`/cars/${id}`)

// Customers API
export const getCustomers = () => api.get('/customers')
export const getCustomer = (id) => api.get(`/customers/${id}`)
export const createCustomer = (customer) => api.post('/customers', customer)
export const updateCustomer = (id, customer) => api.put(`/customers/${id}`, customer)
export const deleteCustomer = (id) => api.delete(`/customers/${id}`)

// Bookings API
export const getBookings = () => api.get('/bookings')
export const getBooking = (id) => api.get(`/bookings/${id}`)
export const createBooking = (booking) => api.post('/bookings', booking)
export const updateBooking = (id, booking) => api.put(`/bookings/${id}`, booking)
export const cancelBooking = (id) => api.put(`/bookings/${id}/cancel`)
export const deleteBooking = (id) => api.delete(`/bookings/${id}`)

export default api
