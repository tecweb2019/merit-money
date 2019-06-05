import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { TransferirMoedasComponent } from "./transferir-moedas/TransferirMoedasComponent";
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MinhasTransferenciasComponent } from './minhas-transferencias/minhas-transferencias.component';

const routes: Routes = [
  {path: 'transferencias', component: TransferenciasComponent },
  {path: 'transferir-moedas', component: TransferirMoedasComponent },
  {path: 'cadastro-pessoa', component: CadastroPessoaComponent},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'minhas-transferencias', component: MinhasTransferenciasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
