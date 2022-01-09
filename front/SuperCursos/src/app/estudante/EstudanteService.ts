import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cartao } from '../Models/Cartao';
import { Estudante } from '../Models/Estudante';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private http: HttpClient) { }

  url = 'https://localhost:5001/';

  get(): Observable<number> {
    return this.http.get<number>(`${this.url}estudantes`);
  }

  getPagamento(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}estudantes/${id}`);
  }

  cadastraEstudante(estudante: Estudante): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}estudantes`, estudante);
  }

  cadastrarCartao(cartao: Cartao): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}cartao`, cartao);
  }
}
