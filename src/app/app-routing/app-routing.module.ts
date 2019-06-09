import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { TransferenciasComponent } from "../transferencias/transferencias.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { MinhasTransferenciasComponent } from "../minhas-transferencias/minhas-transferencias.component";
import { TransferirMoedasComponent } from '../transferir-moedas/TransferirMoedasComponent';

const appRoutes: Routes  = [


    { path:"minhastransferencia", component: MinhasTransferenciasComponent },
    { path:"transferencias", component: TransferenciasComponent },
    { path:"minhas-transferencias", component: MinhasTransferenciasComponent },
    { path: "transferir-moedas", component: TransferirMoedasComponent },
    { path: '',   redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
      )
  ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
