import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../Models/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

url = 'https://localhost:5001/cursos';

constructor(private http: HttpClient) { }

getCursos(): Observable<Curso[]> {
  return this.http.get<Curso[]>(`${this.url}`);
}
}
