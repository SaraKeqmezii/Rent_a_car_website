using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RentCarGeci.Data;
using RentCarGeci.Models;

namespace RentCarGeci.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CarsController : ControllerBase
{
    private readonly AppDbContext _context;

    public CarsController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/cars
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Car>>> GetCars()
    {
        return await _context.Cars.ToListAsync();
    }

    // GET: api/cars/available
    [HttpGet("available")]
    public async Task<ActionResult<IEnumerable<Car>>> GetAvailableCars()
    {
        return await _context.Cars.Where(c => c.IsAvailable).ToListAsync();
    }

    // GET: api/cars/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Car>> GetCar(int id)
    {
        var car = await _context.Cars.FindAsync(id);

        if (car == null)
        {
            return NotFound();
        }

        return car;
    }

    // POST: api/cars
    [HttpPost]
    public async Task<ActionResult<Car>> CreateCar(Car car)
    {
        _context.Cars.Add(car);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetCar), new { id = car.Id }, car);
    }

    // PUT: api/cars/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCar(int id, Car car)
    {
        if (id != car.Id)
        {
            return BadRequest();
        }

        _context.Entry(car).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.Cars.Any(e => e.Id == id))
            {
                return NotFound();
            }
            throw;
        }

        return NoContent();
    }

    // DELETE: api/cars/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCar(int id)
    {
        var car = await _context.Cars.FindAsync(id);
        if (car == null)
        {
            return NotFound();
        }

        _context.Cars.Remove(car);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
