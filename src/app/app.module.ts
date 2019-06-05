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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MinhasTransferenciasComponent } from './minhas-transferencias/minhas-transferencias.component';
import { MinhasTransferenciasService } from './minhas-transferencias.service';




const appRoutes: Routes  = [
    { path:"dashboard", component: DashboardComponent },
    { path:"cadastr-opessoa", component: CadastroPessoaComponent },
    { path:"transferir-moedas", component: TransferirMoedasComponent },
    { path:"transferencias", component: TransferenciasComponent },
    { path:"minhas-transferencias", component: MinhasTransferenciasComponent },

    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    TransferenciasComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    MinhasTransferenciasComponent,
    CadastroPessoaComponent,
    TransferirMoedasComponent,
    PageNotFoundComponent
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
      PessoaService,
      MinhasTransferenciasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
