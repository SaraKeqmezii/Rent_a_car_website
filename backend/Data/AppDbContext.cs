using Microsoft.EntityFrameworkCore;
using RentCarGeci.Models;

namespace RentCarGeci.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Car> Cars { get; set; }
    public DbSet<Customer> Customers { get; set; }
    public DbSet<Booking> Bookings { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Seed some cars
        modelBuilder.Entity<Car>().HasData(
            new Car
            {
                Id = 1,
                Brand = "Mercedes-Benz",
                Model = "E-Class",
                Year = 2023,
                Color = "Black",
                PricePerDay = 80,
                ImageUrl = "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
                FuelType = "Diesel",
                Transmission = "Automatic",
                Seats = 5,
                IsAvailable = true,
                Description = "Luxury sedan with premium features and comfort."
            },
            new Car
            {
                Id = 2,
                Brand = "BMW",
                Model = "X5",
                Year = 2023,
                Color = "White",
                PricePerDay = 95,
                ImageUrl = "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
                FuelType = "Petrol",
                Transmission = "Automatic",
                Seats = 7,
                IsAvailable = true,
                Description = "Premium SUV with spacious interior and powerful engine."
            },
            new Car
            {
                Id = 3,
                Brand = "Audi",
                Model = "A4",
                Year = 2022,
                Color = "Silver",
                PricePerDay = 65,
                ImageUrl = "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
                FuelType = "Diesel",
                Transmission = "Automatic",
                Seats = 5,
                IsAvailable = true,
                Description = "Elegant sedan with advanced technology features."
            },
            new Car
            {
                Id = 4,
                Brand = "Volkswagen",
                Model = "Golf",
                Year = 2023,
                Color = "Blue",
                PricePerDay = 45,
                ImageUrl = "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=800",
                FuelType = "Petrol",
                Transmission = "Manual",
                Seats = 5,
                IsAvailable = true,
                Description = "Compact car perfect for city driving."
            },
            new Car
            {
                Id = 5,
                Brand = "Toyota",
                Model = "Camry",
                Year = 2023,
                Color = "Red",
                PricePerDay = 55,
                ImageUrl = "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800",
                FuelType = "Hybrid",
                Transmission = "Automatic",
                Seats = 5,
                IsAvailable = true,
                Description = "Reliable and fuel-efficient sedan."
            },
            new Car
            {
                Id = 6,
                Brand = "Range Rover",
                Model = "Sport",
                Year = 2023,
                Color = "Green",
                PricePerDay = 150,
                ImageUrl = "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800",
                FuelType = "Diesel",
                Transmission = "Automatic",
                Seats = 5,
                IsAvailable = true,
                Description = "Ultimate luxury SUV with off-road capabilities."
            }
        );
    }
}
