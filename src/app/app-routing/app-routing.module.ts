import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { TransferenciasComponent } from "../transferencias/transferencias.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { MinhasTransferenciasComponent } from "../minhas-transferencias/minhas-transferencias.component";
import { TransferirMoedasComponent } from '../transferir-moedas/TransferirMoedasComponent';
import { DetaisPessoaComponent } from '../pessoa/detais-pessoa/detais-pessoa.component';
import { RecompensasComponent } from '../recompensas/recompensas.component';

const appRoutes: Routes  = [

    { path: '',   redirectTo: 'login', pathMatch: 'full' },
    { path:"dashboard", component: DetaisPessoaComponent },
    { path:"transferencias", component: TransferenciasComponent },
    { path:"minhas-transferencias", component: MinhasTransferenciasComponent },
    { path: "transferir-moedas", component: TransferirMoedasComponent },
    { path: "recompensas", component: RecompensasComponent },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } 
      )
  ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
