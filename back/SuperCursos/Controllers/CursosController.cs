using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SuperCursos.Models;
using SuperCursos.Persistencia;

namespace SuperCursos.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CursosController : ControllerBase
    {
        private readonly SuperCursosContext _context;
        public CursosController(SuperCursosContext context)
        {
            _context = context;
            
        }
       
        [HttpGet]
        public IEnumerable<Curso> Get()
        {
            return _context.Cursos;
        }
    }
}
