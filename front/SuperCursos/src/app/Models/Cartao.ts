export class Cartao {

  public constructor(init?: Partial<Cartao>) {
    Object.assign(this, init);
  }

  estudanteId: number;
  numeroCartao: string;
}
