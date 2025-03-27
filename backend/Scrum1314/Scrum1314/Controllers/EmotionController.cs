using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Scrum1314.Data;

namespace Scrum1314.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmotionController : ControllerBase
    {
        private readonly ScrumDbContext _context;

        public EmotionController(ScrumDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetEmotions()
        {
            var emotions = _context.Emotion.ToList();
            return Ok(emotions);
        }
    }
}