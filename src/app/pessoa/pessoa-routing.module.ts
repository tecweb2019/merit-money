import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetaisPessoaComponent} from "./detais-pessoa/detais-pessoa.component";
import {CadastroPessoaComponent} from "./cadastro-pessoa/cadastro-pessoa.component";

const routes: Routes = [
    { path:"perfilpessoa/:id", component: DetaisPessoaComponent },
    { path:"cadastropessoa", component: CadastroPessoaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
