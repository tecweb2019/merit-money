import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TransferenciaService } from './transferencia.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PessoaService} from "./pessoa.service";
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import {FormsModule} from "@angular/forms";
import { TransferirMoedasComponent } from "./transferir-moedas/TransferirMoedasComponent";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PegeNotFoundComponent } from './pege-not-found/pege-not-found.component';

const appRoutes: Routes  = [
    { path:"perfilpessoa", component: DashboardComponent },
    { path:"cadastropessoa", component: CadastroPessoaComponent },
    { path:"transferir-moedas", component: TransferirMoedasComponent },
    { path:"transferencias", component: TransferenciasComponent },

    { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
    { path: '**', component: PegeNotFoundComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    TransferenciasComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CadastroPessoaComponent,
    TransferirMoedasComponent,
    PegeNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
      )
  ],
  providers: [
      TransferenciaService,
      PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
