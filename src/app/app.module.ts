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
import { MatCardModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from "@angular/material";
import { LayoutModule } from '@angular/cdk/layout';
import { TransferirMoedasComponent } from './transferir-moedas/TransferirMoedasComponent';


@NgModule({
  declarations: [
    AppComponent,
    TransferenciasComponent,
    HeaderComponent,
    FooterComponent,
    TransferirMoedasComponent,
    DetaisPessoaComponent,
    CadastroPessoaComponent,
    MinhasTransferenciasComponent,
    PageNotFoundComponent,
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
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule


  ],
  providers: [
      TransferenciaService,
      PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
