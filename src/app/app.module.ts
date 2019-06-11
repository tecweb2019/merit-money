import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TransferenciaService } from './transferencia.service';
import { DetaisPessoaComponent } from './pessoa/detais-pessoa/detais-pessoa.component';
import { PessoaService} from "./pessoa/service/pessoa.service";
import { CadastroPessoaComponent } from './pessoa/cadastro-pessoa/cadastro-pessoa.component';
import { FormsModule} from "@angular/forms";
import { MinhasTransferenciasComponent } from './minhas-transferencias/minhas-transferencias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PessoaModule } from './pessoa/pessoa.module';
import { LoginModule} from "./login/login.module";
import { MatCardModule} from "@angular/material";
import { MaterialImportsModule } from "./material-imports/material-imports.module";
import { TransferirMoedasComponent } from "./transferir-moedas/transferir-moedas.component";
import { AngularWebStorageModule } from 'angular-web-storage';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';


@NgModule({
  declarations: [
    AppComponent,
    TransferenciasComponent,
    HeaderComponent,
    FooterComponent,
    DetaisPessoaComponent,
    CadastroPessoaComponent,
    MinhasTransferenciasComponent,
    PageNotFoundComponent,
      TransferirMoedasComponent,
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      PessoaModule,
      LoginModule,
      AppRoutingModule,
      MatCardModule,
      MaterialImportsModule,
      AngularWebStorageModule,


  ],
  providers: [
      TransferenciaService,
      PessoaService,
      {
          provide: STEPPER_GLOBAL_OPTIONS,
          useValue: { displayDefaultIndicatorType: false }
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
