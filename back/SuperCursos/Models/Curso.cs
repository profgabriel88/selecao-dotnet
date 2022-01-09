using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SuperCursos.Models
{
    public class Curso
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public int CargaHoraria { get; set; }
        
        public Curso()
        {
            
        }
        public Curso(int id, string nome, int ch)
        {
            Id = id;
            Nome = nome;
            CargaHoraria = ch;        
        }
    }
}