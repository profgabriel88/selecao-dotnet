export class EstudanteCurso {
  estudanteId: number;
  cursoId: number;

  public constructor(init?: Partial<EstudanteCurso>) {
    Object.assign(this, init);
  }
}
