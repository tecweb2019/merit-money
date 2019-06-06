import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatFormFieldModule , MatSelectModule} from '@angular/material';
import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule} from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule, BrowserAnimationsModule ,
      MatCardModule ,
      MatButtonModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatIconModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule

  ]
})
export class LoginModule { }
