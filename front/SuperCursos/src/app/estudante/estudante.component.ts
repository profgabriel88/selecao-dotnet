import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cartao } from '../Models/Cartao';
import { Estudante } from '../Models/Estudante';
import { EstudanteService } from './EstudanteService';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
})
export class EstudanteComponent implements OnInit {

  public estudanteForm: FormGroup;
  public estudanteCadastro: Estudante;
  public cadastraEstudante: boolean = false;
  public estudanteTeste: number;
  public id: number = 0;

  public cartaoForm: FormGroup;
  public estudanteCartao: Cartao;
  public cadastraCartao: boolean = false;

  public modo: string;

  constructor(private fb: FormBuilder,
              private cartaoFb: FormBuilder,
              public estudanteService: EstudanteService
              ) {
      this.criarForm();
    }

  ngOnInit(): void {
    this.getEstudante();
  }

  ngDoCheck() {
    if (this.cadastraEstudante || this.cadastraCartao) {
      this.reloadPage();
    }
  }

  criarForm() {
    this.estudanteForm = this.fb.group({
      id: [],
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      pagamento: [false]
    });

    this.cartaoForm = this.cartaoFb.group({
      id: [],
      numeroCartao: ['']
    });
  }

  getEstudante() {
    this.estudanteService.get().subscribe(
      (response: number) => {this.estudanteTeste = response;},
      erro => console.log(erro),
      () => console.log(this.estudanteTeste)
    );

    // this.estudanteTeste;
  }

  submit() {
    this.estudanteSubmit();
    this.cartaoSubmit();
  }

  estudanteSubmit() {

    this.estudanteCadastro = new Estudante(this.estudanteForm.value);

    if(this.estudanteTeste != 0)
      this.estudanteCadastro.id = this.estudanteTeste + 1

    else
      this.estudanteCadastro.id = 1;

    // console.log(this.estudanteCadastro);
    this.estudanteService.cadastraEstudante(this.estudanteCadastro).subscribe(
      (estudante: boolean) => {
        this.cadastraEstudante = estudante;
      },
      (erro: any) => {
        console.error(erro);
      },
      () => {
        console.log(this.cadastraEstudante);
      }
    );
  }

  cartaoSubmit () {
    this.estudanteCartao = new Cartao(this.cartaoForm.value);

    if (this.estudanteCartao.numeroCartao != '') {

      this.estudanteCartao.estudanteId = this.estudanteTeste + 1

      this.estudanteService.cadastrarCartao(this.estudanteCartao).subscribe(
        (cartao: boolean) => {
          this.cadastraCartao = cartao;
        },
        (erro: any) => {
          console.error(erro);
        },
        () => {
          console.log(this.cadastraCartao);
        }
      );
    }
  }

  reloadPage() {
    window.location.reload();
  }
}
