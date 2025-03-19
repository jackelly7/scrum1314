using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Scrum1314.Data;

namespace Scrum1314.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ScrumController : ControllerBase
    {
        private ScrumDbContext _context;

        public ScrumController(ScrumDbContext temp)
        {
            _context = temp;
        }
    }
}
