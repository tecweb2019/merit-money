import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { TransferenciasComponent } from "../transferencias/transferencias.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { MinhasTransferenciasComponent } from "../minhas-transferencias/minhas-transferencias.component";
import { DetaisPessoaComponent } from '../pessoa/detais-pessoa/detais-pessoa.component';
import { RecompensasComponent } from '../recompensas/recompensas.component';
import { TransferirMoedasComponent } from '../transferir-moedas/transferir-moedas.component';

const appRoutes: Routes  = [

    { path: '',   redirectTo: 'login', pathMatch: 'full' },
    { path: "transferencias", component: TransferenciasComponent },
    { path: "recompensas", component : RecompensasComponent},
    { path: "minhas-transferencias", component: MinhasTransferenciasComponent },
    { path: "transferir-moedas", component: TransferirMoedasComponent },
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
