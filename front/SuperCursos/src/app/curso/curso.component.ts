import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatriculaServiceService } from '../matricula/MatriculaService.service';
import { Curso } from '../Models/Curso';
import { CursoService } from './CursoService.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  public cursos: Curso[] = [];
  public cursoSelecionado: string = '';
  public cursoId: number;

  constructor(private http: HttpClient,
              private cursoService: CursoService,
              ) { }

  ngOnInit(): void {
    this.getCursos();
  }

  public getCursos() {
    this.cursoService.getCursos().subscribe(
      (cursos: Curso[]) => {
        this.cursos = cursos;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  public selecionaCurso(curso: Curso) {
    this.cursoSelecionado = curso.nome;
    this.cursoId = curso.id;
  }

  public deselectCurso() {
    this.cursoSelecionado = ''
  }

}
