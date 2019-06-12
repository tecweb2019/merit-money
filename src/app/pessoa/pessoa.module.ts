import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { MaterialImportsModule } from "../material-imports/material-imports.module";
import { NgCircleProgressModule } from "ng-circle-progress";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PessoaRoutingModule,
      MaterialImportsModule,
      NgCircleProgressModule
  ]
})
export class PessoaModule { }
