import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatFormFieldModule, MatSelectModule, MatSnackBarModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";


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
      MatSnackBarModule
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
        MatSnackBarModule
    ]
})
export class MaterialImportsModule { }
