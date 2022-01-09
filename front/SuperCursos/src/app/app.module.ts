import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { EstudanteComponent } from './estudante/estudante.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatriculaComponent } from './matricula/matricula.component';
import { MatriculaServiceService } from './matricula/MatriculaService.service';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagamentService } from './pagamento/Pagamento.service';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    EstudanteComponent,
    MenuComponent,
    MatriculaComponent,
    PagamentoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [MatriculaServiceService,
              PagamentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
