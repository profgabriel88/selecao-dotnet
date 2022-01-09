import { HttpClient } from '@angular/common/http';
import { TemplateRef } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Estudante } from '../Models/Estudante';
import { PagamentService } from './Pagamento.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css'],

})
export class PagamentoComponent implements OnInit {

  @Input() emailInput: string = "";
  @Input() matriculaInput: boolean = false;
  private _email: string;
  public   isCollapsed: boolean = true;
  public numeroCartao: string;
  public resposta: any;
  public estudante: Estudante;

  constructor(private pgtService: PagamentService) {
  }

  ngOnInit(): void {
    if (this.emailInput != "")
    {
      this.isCollapsed = !this.isCollapsed;
      this.pgtService.get(this.emailInput).subscribe(
        (response: string) => {
          this.numeroCartao = response;
        },
        (error) => {
          console.error(error);
        },
        () => {
          console.log(this.numeroCartao)
        }
      );
    }
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public getCartao() {
    this.pgtService.get(this._email).subscribe(
      (response: string) => {
        this.numeroCartao = response;
      },
      (error) => {
        console.error(error);
      },
      () => {
        if (this.numeroCartao != "") {
          console.log(this.numeroCartao)
        }
      }
    );
  }

  public atualizaPagamento() {
    if (this.emailInput != "")
    {
      this.pgtService.put(this.emailInput, this.estudante).subscribe(
        response => this.resposta = response,
        error => console.error(error),
        () => console.log(this.resposta)
      );
    }

    else {
      this.pgtService.put(this._email, this.estudante).subscribe(
        response => this.resposta = response,
        error => console.error(error),
        () => console.log(this.resposta)
      );
    }


  }

  public getEstudante() {
    if (this.emailInput != "")
    {
      this.pgtService.getEstudante(this.emailInput).subscribe(
        response => this.estudante = response,
        error => console.error(error),
        () => {
          this.estudante.pagamento = true;
          this.atualizaPagamento();
        }

      );
    }

    else {
      this.pgtService.getEstudante(this._email).subscribe(
        response => this.estudante = response,
        error => console.error(error),
        () => {
          this.estudante.pagamento = true;
          this.atualizaPagamento();
        }

      );
    }
  }
}
