import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { MaterialImportsModule } from "../material-imports/material-imports.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PessoaRoutingModule,
      MaterialImportsModule
  ]
})
export class PessoaModule { }
