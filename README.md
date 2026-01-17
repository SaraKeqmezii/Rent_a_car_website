# 🚗 Rent a Car Geci

Një website modern për qira makinash, ndërtuar me ASP.NET Core dhe React.

## 📋 Përmbajtja

- [Teknologjitë](#teknologjitë)
- [Struktura e Projektit](#struktura-e-projektit)
- [Instalimi](#instalimi)
- [Ekzekutimi](#ekzekutimi)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)

## 🛠️ Teknologjitë

### Backend
- ASP.NET Core 8.0 Web API
- Entity Framework Core
- SQLite Database
- Swagger/OpenAPI

### Frontend
- React 18
- Vite
- React Router DOM
- Axios
- CSS Modern

## 📁 Struktura e Projektit

```
RentCar/
├── backend/                 # ASP.NET Core Web API
│   ├── Controllers/         # API Controllers
│   ├── Models/              # Data Models
│   ├── Data/                # DbContext
│   ├── Program.cs           # Entry point
│   └── RentCarGeci.csproj   # Project file
│
├── frontend/                # React Application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── App.jsx          # Main App
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## 🚀 Instalimi

### Kërkesat
- .NET 8.0 SDK
- Node.js 18+ dhe npm
- Git

### Hapat

1. **Klono repository-n**
```bash
git clone <repository-url>
cd RentCar
```

2. **Instalo backend dependencies**
```bash
cd backend
dotnet restore
```

3. **Instalo frontend dependencies**
```bash
cd ../frontend
npm install
```

## ▶️ Ekzekutimi

### Backend (Port 5000)
```bash
cd backend
dotnet run
```

API do të jetë në: `http://localhost:5000`
Swagger UI: `http://localhost:5000/swagger`

### Frontend (Port 5173)
```bash
cd frontend
npm run dev
```

Aplikacioni do të jetë në: `http://localhost:5173`

## 📡 API Endpoints

### Cars
- `GET /api/cars` - Merr të gjitha makinat
- `GET /api/cars/available` - Merr makinat e disponueshme
- `GET /api/cars/{id}` - Merr një makinë specifike
- `POST /api/cars` - Krijo një makinë të re
- `PUT /api/cars/{id}` - Përditëso një makinë
- `DELETE /api/cars/{id}` - Fshi një makinë

### Customers
- `GET /api/customers` - Merr të gjithë klientët
- `GET /api/customers/{id}` - Merr një klient specifik
- `POST /api/customers` - Krijo një klient të ri
- `PUT /api/customers/{id}` - Përditëso një klient
- `DELETE /api/customers/{id}` - Fshi një klient

### Bookings
- `GET /api/bookings` - Merr të gjitha rezervimet
- `GET /api/bookings/{id}` - Merr një rezervim specifik
- `POST /api/bookings` - Krijo një rezervim të ri
- `PUT /api/bookings/{id}` - Përditëso një rezervim
- `PUT /api/bookings/{id}/cancel` - Anulo një rezervim
- `DELETE /api/bookings/{id}` - Fshi një rezervim

## 🎨 Veçoritë

- ✅ Dizajn modern dhe responsive
- ✅ Listim i makinave me filtra
- ✅ Detaje të plota për çdo makinë
- ✅ Sistem rezervimi online
- ✅ Formular kontakti
- ✅ Faqe "Rreth Nesh"
- ✅ API RESTful
- ✅ Swagger documentation

## 📞 Kontakt

- **Email**: info@rentcargeci.al
- **Telefon**: +355 69 123 4567
- **Adresa**: Rruga e Durrësit, Tiranë

## 📄 Liçensa

© 2024 Rent a Car Geci. Të gjitha të drejtat e rezervuara.
