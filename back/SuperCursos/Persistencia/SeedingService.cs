using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SuperCursos.Models;

namespace SuperCursos.Persistencia
{
    public class SeedingService
    {
        private SuperCursosContext _context;

        public SeedingService(SuperCursosContext context)
        {
            _context = context;
        }

        public void Seed ()
        {
            if (_context.Cursos.Any())
                return;


            Curso c1 = new Curso(1, "Marcenaria", 128);
            Curso c2 = new Curso(2, "Confeitaria", 128);
            Curso c3 = new Curso(3, "Eletrônica", 64);
            Curso c4 = new Curso(4, "Arduino", 86);
            Curso c5 = new Curso(5, "Android", 96);
            Curso c6 = new Curso(6, "Costura", 128);
            Curso c7 = new Curso(7, "Construção", 358);
            Curso c8 = new Curso(8, "Astronomia", 96);

            _context.Cursos.AddRange(c1, c2, c3, c4, c5, c6, c7, c8);
            _context.SaveChanges();
        }
    }
}