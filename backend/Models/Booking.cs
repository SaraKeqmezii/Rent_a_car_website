namespace RentCarGeci.Models;

public class Booking
{
    public int Id { get; set; }
    public int CarId { get; set; }
    public int CustomerId { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public decimal TotalPrice { get; set; }
    public string Status { get; set; } = "Pending"; // Pending, Confirmed, Completed, Cancelled
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public string PickupLocation { get; set; } = string.Empty;
    public string ReturnLocation { get; set; } = string.Empty;

    public Car Car { get; set; } = null!;
    public Customer Customer { get; set; } = null!;
}
