using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SuperCursos.Models
{
    public class Estudante
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public bool Pagamento { get; set; }
        // public IEnumerable<EstudanteCurso>? Cursos { get; set; }
    }
}