import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudante } from '../Models/Estudante';

@Injectable({
  providedIn: 'root'
})
export class PagamentService {

constructor(private http: HttpClient) { }

url = 'https://localhost:5001';

  get(email: string): Observable<string> {
    return this.http.get<string>(`${this.url}/cartao/${email}`);
  }

  getEstudante(email: string): Observable<Estudante> {
    return this.http.get<Estudante>(`${this.url}/estudantes/get/${email}`);
  }

  put(email: string, estudante: Estudante) {
    return this.http.put(`${this.url}/estudantes/put/${email}`, estudante);
  }
}
