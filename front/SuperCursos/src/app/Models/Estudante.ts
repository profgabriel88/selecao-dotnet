export class Estudante {

  id: number;
  nome: string;
  email: string;
  senha: string;
  pagamento: boolean;

  public constructor(init?: Partial<Estudante>) {
    Object.assign(this, init);
  }
}
