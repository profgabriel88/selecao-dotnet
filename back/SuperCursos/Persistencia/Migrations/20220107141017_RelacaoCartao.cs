using Microsoft.EntityFrameworkCore.Migrations;

namespace SuperCursos.Persistencia.Migrations
{
    public partial class RelacaoCartao : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cartoes",
                columns: table => new
                {
                    NumeroCartao = table.Column<string>(type: "TEXT", nullable: false),
                    EstudanteId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cartoes", x => x.NumeroCartao);
                });

            migrationBuilder.CreateTable(
                name: "Cursos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", nullable: true),
                    CargaHoraria = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cursos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Estudantes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    Senha = table.Column<string>(type: "TEXT", nullable: true),
                    Pagamento = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estudantes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EstudanteCurso",
                columns: table => new
                {
                    EstudanteId = table.Column<int>(type: "INTEGER", nullable: false),
                    CursoId = table.Column<int>(type: "INTEGER", nullable: false),
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EstudanteCurso", x => new { x.EstudanteId, x.CursoId });
                    table.ForeignKey(
                        name: "FK_EstudanteCurso_Cursos_CursoId",
                        column: x => x.CursoId,
                        principalTable: "Cursos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EstudanteCurso_Estudantes_EstudanteId",
                        column: x => x.EstudanteId,
                        principalTable: "Estudantes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EstudanteCurso_CursoId",
                table: "EstudanteCurso",
                column: "CursoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cartoes");

            migrationBuilder.DropTable(
                name: "EstudanteCurso");

            migrationBuilder.DropTable(
                name: "Cursos");

            migrationBuilder.DropTable(
                name: "Estudantes");
        }
    }
}
