using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SuperCursos.Models
{
    public class Cartao
    {
        public int EstudanteId { get; set; }

        [Key]
        public string NumeroCartao { get; set; }
    }
}