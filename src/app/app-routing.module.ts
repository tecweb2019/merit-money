import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { CadastroTransferenciaComponent } from './cadastro-transferencia/cadastro-transferencia.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { DetailsPessoaComponent } from './details-pessoa/details-pessoa.component';

const routes: Routes = [
  {path: 'transferencias', component: TransferenciasComponent },
  {path: 'cadastroTransferencias', component: CadastroTransferenciaComponent },
  {path: 'cadastroPessoa', component: CadastroPessoaComponent},
  {path: 'detailsPessoa', component: DetailsPessoaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
