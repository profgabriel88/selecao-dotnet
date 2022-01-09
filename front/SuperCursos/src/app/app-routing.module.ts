import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './curso/curso.component';
import { EstudanteComponent } from './estudante/estudante.component';
import { PagamentoComponent } from './pagamento/pagamento.component';

const routes: Routes = [
  { path: 'cursos' , component: CursoComponent },
  { path: 'estudante' , component: EstudanteComponent },
  { path: 'pagamento', component: PagamentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
