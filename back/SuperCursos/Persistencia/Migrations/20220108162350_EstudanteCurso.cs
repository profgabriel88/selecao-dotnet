using Microsoft.EntityFrameworkCore.Migrations;

namespace SuperCursos.Persistencia.Migrations
{
    public partial class EstudanteCurso : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EstudanteCurso_Cursos_CursoId",
                table: "EstudanteCurso");

            migrationBuilder.DropForeignKey(
                name: "FK_EstudanteCurso_Estudantes_EstudanteId",
                table: "EstudanteCurso");

            migrationBuilder.DropIndex(
                name: "IX_EstudanteCurso_CursoId",
                table: "EstudanteCurso");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "EstudanteCurso");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "EstudanteCurso",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_EstudanteCurso_CursoId",
                table: "EstudanteCurso",
                column: "CursoId");

            migrationBuilder.AddForeignKey(
                name: "FK_EstudanteCurso_Cursos_CursoId",
                table: "EstudanteCurso",
                column: "CursoId",
                principalTable: "Cursos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_EstudanteCurso_Estudantes_EstudanteId",
                table: "EstudanteCurso",
                column: "EstudanteId",
                principalTable: "Estudantes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
