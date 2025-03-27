using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Scrum1314.Data;

namespace Scrum1314.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoodController : ControllerBase
    {
        private readonly ScrumDbContext _context;

        public MoodController(ScrumDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetMoods([FromQuery] int user_id)
        {
            var moods = _context.Mood
                .Where(m => m.user_id == user_id)
                .ToList();

            return Ok(moods); // Always returns an array (could be empty)
        }

        [HttpPost]
        public IActionResult CreateMood([FromBody] Mood mood)
        {
            _context.Mood.Add(mood);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetMoods), new { user_id = mood.user_id }, mood);
        }
    }
}