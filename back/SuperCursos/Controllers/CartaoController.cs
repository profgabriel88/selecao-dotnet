using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SuperCursos.Models;
using SuperCursos.Persistencia;

namespace SuperCursos.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartaoController : ControllerBase
    {
        private readonly SuperCursosContext _context;
        public CartaoController(SuperCursosContext context)
        {
            _context = context;
        }
       
        [HttpPost]
        public bool post(Cartao cartao)
        {
            // if (estudante == null)
            //     return false;

            _context.Add(cartao);
            
            if(_context.SaveChanges() != 0)
                return true;
            return false;
        }

        [HttpGet("{email}")]
        public string GetEstudanteMatricula(string email)
        {            
            if (_context.Estudantes.Any(e => e.Email == email))
            {
                int id = _context.Estudantes.FirstOrDefault(e => e.Email == email).Id;

                if (_context.Cartoes.Any(e => e.EstudanteId == id))
                {
                    return  _context.Cartoes.FirstOrDefault(e => e.EstudanteId == id).NumeroCartao;
                }
            }
            
            return "0";
        }
    }
}
