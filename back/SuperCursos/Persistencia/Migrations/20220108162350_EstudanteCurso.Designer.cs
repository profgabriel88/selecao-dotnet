﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SuperCursos.Persistencia;

namespace SuperCursos.Persistencia.Migrations
{
    [DbContext(typeof(SuperCursosContext))]
    [Migration("20220108162350_EstudanteCurso")]
    partial class EstudanteCurso
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.4");

            modelBuilder.Entity("SuperCursos.Models.Cartao", b =>
                {
                    b.Property<string>("NumeroCartao")
                        .HasColumnType("TEXT");

                    b.Property<int>("EstudanteId")
                        .HasColumnType("INTEGER");

                    b.HasKey("NumeroCartao");

                    b.ToTable("Cartoes");
                });

            modelBuilder.Entity("SuperCursos.Models.Curso", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("CargaHoraria")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nome")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Cursos");
                });

            modelBuilder.Entity("SuperCursos.Models.Estudante", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .HasColumnType("TEXT");

                    b.Property<bool>("Pagamento")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Senha")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Estudantes");
                });

            modelBuilder.Entity("SuperCursos.Models.EstudanteCurso", b =>
                {
                    b.Property<int>("EstudanteId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("CursoId")
                        .HasColumnType("INTEGER");

                    b.HasKey("EstudanteId", "CursoId");

                    b.ToTable("EstudanteCurso");
                });
#pragma warning restore 612, 618
        }
    }
}
