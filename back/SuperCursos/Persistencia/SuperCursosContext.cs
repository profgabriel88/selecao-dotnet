using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SuperCursos.Models;

namespace SuperCursos.Persistencia
{
    public class SuperCursosContext : DbContext
    {
        public SuperCursosContext(DbContextOptions<SuperCursosContext> options) : base(options)
        {
        }

        public DbSet<Estudante> Estudantes { get; set; }
        public DbSet<Curso> Cursos { get; set; }
        public DbSet<EstudanteCurso> EstudanteCurso { get; set; }
        public DbSet<Cartao> Cartoes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EstudanteCurso>().HasKey(EC => new {EC.EstudanteId, EC.CursoId});
        }

    }
}