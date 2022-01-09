using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SuperCursos.Models;
using SuperCursos.Persistencia;

namespace SuperCursos.Controllers
{
    [ApiController]
    [Route("matricula")]
    public class EstudanteCursoController : ControllerBase
    {
        private readonly SuperCursosContext _context;
        public EstudanteCursoController(SuperCursosContext context)
        {
            _context = context;
            
        }
        [HttpGet]
        public string Get()
        {
            return "";
        }

        [HttpGet("{email}")]
        public async Task<int> GetEstudanteMatricula(string email)
        {            
            if (!_context.Estudantes.Any(e => e.Email == email))
                return 0;

            return _context.Estudantes.FirstOrDefault(e => e.Email == email).Id;
        }

        [HttpPost]
        public async Task<bool> Post(EstudanteCurso ec)
        {
            if (!_context.EstudanteCurso.Any(obj => obj.EstudanteId == ec.EstudanteId && obj.CursoId == ec.CursoId))
            {
                _context.Add(ec);
                if(await _context.SaveChangesAsync() > 0)
                    return true;
            }
            return false;
        }
    }
}