using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SuperCursos.Models;
using SuperCursos.Persistencia;

namespace SuperCursos.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EstudantesController : ControllerBase
    {
        private readonly SuperCursosContext _context;
        public EstudantesController(SuperCursosContext context)
        {
            _context = context;
        }
       
        [HttpGet]
        public int Get()
        {            
            if (_context.Estudantes.OrderBy(e => e.Id).LastOrDefault() == null)
                return 0;

            return _context.Estudantes.OrderBy(e => e.Id).LastOrDefault().Id;
        }

        [HttpGet("{id}")]
        public bool GetPagamento(int id)
        {            
            if (_context.Estudantes.FirstOrDefault(e => e.Id == id).Pagamento)
                return true;

            return false;
        }

        [HttpGet("get/{email}")]
        public Estudante GetPagamento(string email)
        {            
            return _context.Estudantes.FirstOrDefault(e => e.Email == email);
        }

        [HttpPost]
        public bool post(Estudante estudante)
        {
            // if (estudante == null)
            //     return false;

            _context.Add(estudante);
            
            _context.SaveChangesAsync();
            return true;
        }

        [HttpPut("put/{email}")]
        public bool put(string email, Estudante obj)
        {
            if (_context.Estudantes.Any(e => e.Email == email))
            {
                _context.Update(obj);
                _context.SaveChanges();
                return true;
            }
            return false;
        }
    }
}
