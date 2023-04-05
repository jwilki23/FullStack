using FullStack.Controllers.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FullStack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movies> Get()
        {
            var x = context.Movies
                .Where(p => p.Edited == "Yes")
                .OrderBy(p => p.Title)
                .ToArray();
            return x;
        }
    }
}
