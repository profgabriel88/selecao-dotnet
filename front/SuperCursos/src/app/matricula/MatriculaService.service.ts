import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstudanteCurso } from '../Models/EstudanteCurso';

@Injectable()
export class MatriculaServiceService {

  constructor(private http: HttpClient) { }

  url = 'https://localhost:5001/matricula';

  get(email: string): Observable<number> {
    return this.http.get<number>(`${this.url}/${email}`);
  }

  post(ec: EstudanteCurso): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}`, ec);
  }


}
