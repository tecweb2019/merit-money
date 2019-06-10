import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatFormFieldModule, MatSelectModule, MatSnackBarModule,MatListModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule} from "@angular/material";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      BrowserAnimationsModule ,
      MatCardModule ,
      MatButtonModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatIconModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      MatSnackBarModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatStepperModule,
  ],
    exports: [
        CommonModule,
        BrowserAnimationsModule ,
        MatCardModule ,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatStepperModule

    ]
})
export class MaterialImportsModule { }
