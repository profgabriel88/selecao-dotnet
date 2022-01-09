import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EstudanteService } from '../estudante/EstudanteService';
import { Curso } from '../Models/Curso';
import { EstudanteCurso } from '../Models/EstudanteCurso';
import { MatriculaServiceService } from './MatriculaService.service';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

  @Input() curso: string;
  @Input() cursoId: number;
  public estudanteMatricula: EstudanteCurso;
  public cursoMatricula: Curso;
  public confereEmail: number = 0;
  public resposta: boolean;
  public pagamentoResposta: boolean = false;
  public pgtModal: boolean;

  private _estudanteEmail: string;
  public emailInput: string;

  modalRef?: BsModalRef;
  public modalTexto: string;

  constructor(private fb: FormBuilder,
              private matriculaService: MatriculaServiceService,
              private estudanteService: EstudanteService,
              private modalService: BsModalService
              ) {
  }

  ngOnInit(): void {
    // this.matriculaService.get("maria@maria");
    // this.matriculaService.get("maria@maria.com");
  }

  ngDoCheck() {

    // console.log(this.pagamentoResposta);
  }
  public get estudanteEmail(): string {
    return this._estudanteEmail;
  }

  public set estudanteEmail(value: string){
    this._estudanteEmail = value;
    this.emailInput = this._estudanteEmail;
  }

  public checkEmail() {
    this.matriculaService.get(this._estudanteEmail).subscribe(
      response => this.confereEmail = response,
      error => console.error(error),
      () => {
        if (this.confereEmail == 0) {
          console.log("Email ou Senha Incorretos");
          this.modalTexto = "Email ou Senha Incorretos"
        }

        else {
          console.log("Conta verificada");
          this.estudanteMatricula = new EstudanteCurso ();
          this.estudanteMatricula.estudanteId = this.confereEmail;
          this.estudanteMatricula.cursoId = this.cursoId;
          this.checkPagamento(this.estudanteMatricula.estudanteId);
        }
      }
    );
  }

  public checkPagamento(id: number) {
    this.estudanteService.getPagamento(id).subscribe(
      response => this.pagamentoResposta = response,
      error => console.error(error),
      () => {
        if (!this.pagamentoResposta) {
          console.log("Efetue Pagamento");
          this.confereEmail = -1;
          this.pagamentoResposta = false;
          this.pgtModal = false;
          this.modalTexto = "Para se matricular é necessário efetuar um pagamento"
        }
        else {
          console.log("Pagamento efetuado");
          this.pgtModal = true;
          this.matriculaService.post(this.estudanteMatricula).subscribe(
            (response: boolean) => { this.resposta = response },
            (error) => { console.error(error) },
            () => {
              this.confereEmail = -1;
              this.pagamentoResposta = false;
              console.log(this.pagamentoResposta, this.confereEmail)
              if (this.resposta) {
                console.log("Matricula realizada");
                this.modalTexto = "Matrícula realizada com sucesso. Você receberá um e-mail de confirmação.";
              }
              else {
                console.log("Já matriculado nesse curso");
                this.modalTexto = "Já matriculado nesse curso";
              }
            }
          );
        }
      }
    );
  }

  public submit() {
    this.checkEmail();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  reloadPage() {
    window.location.reload();
  }
}
