using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RentCarGeci.Data;
using RentCarGeci.Models;

namespace RentCarGeci.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BookingsController : ControllerBase
{
    private readonly AppDbContext _context;

    public BookingsController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/bookings
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Booking>>> GetBookings()
    {
        return await _context.Bookings
            .Include(b => b.Car)
            .Include(b => b.Customer)
            .ToListAsync();
    }

    // GET: api/bookings/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Booking>> GetBooking(int id)
    {
        var booking = await _context.Bookings
            .Include(b => b.Car)
            .Include(b => b.Customer)
            .FirstOrDefaultAsync(b => b.Id == id);

        if (booking == null)
        {
            return NotFound();
        }

        return booking;
    }

    // POST: api/bookings
    [HttpPost]
    public async Task<ActionResult<Booking>> CreateBooking(Booking booking)
    {
        // Check if car is available
        var car = await _context.Cars.FindAsync(booking.CarId);
        if (car == null || !car.IsAvailable)
        {
            return BadRequest("Car is not available");
        }

        // Check if customer exists
        var customer = await _context.Customers.FindAsync(booking.CustomerId);
        if (customer == null)
        {
            return BadRequest("Customer not found");
        }

        // Calculate total price
        var days = (booking.EndDate - booking.StartDate).Days;
        if (days <= 0) days = 1;
        booking.TotalPrice = car.PricePerDay * days;
        booking.CreatedAt = DateTime.UtcNow;
        booking.Status = "Confirmed";

        _context.Bookings.Add(booking);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetBooking), new { id = booking.Id }, booking);
    }

    // PUT: api/bookings/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateBooking(int id, Booking booking)
    {
        if (id != booking.Id)
        {
            return BadRequest();
        }

        _context.Entry(booking).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.Bookings.Any(e => e.Id == id))
            {
                return NotFound();
            }
            throw;
        }

        return NoContent();
    }

    // PUT: api/bookings/5/cancel
    [HttpPut("{id}/cancel")]
    public async Task<IActionResult> CancelBooking(int id)
    {
        var booking = await _context.Bookings.FindAsync(id);
        if (booking == null)
        {
            return NotFound();
        }

        booking.Status = "Cancelled";
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // DELETE: api/bookings/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBooking(int id)
    {
        var booking = await _context.Bookings.FindAsync(id);
        if (booking == null)
        {
            return NotFound();
        }

        _context.Bookings.Remove(booking);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
