import { Component, OnInit, NgModule } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginserviceService } from "../loginservice.service";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

private formLogin = new FormGroup({
    usuario: new FormControl('',[Validators.required, Validators.email ]),
    senha: new FormControl('',[Validators.required]),
});

  constructor( private router: Router, private service:LoginserviceService, private snackBar : MatSnackBar) { }

  ngOnInit() {
  }

  OnSubmit(){
    if(this.formLogin.valid) {
        let usuario = this.formLogin.value.usuario;
        let senha = this.formLogin.value.senha;
        this.service.logar(usuario, senha)
            .subscribe((data) =>{
                if(data.status) {
                    this.router.navigate(["cadastropessoa"]);
                }
            },(error) => {
                this.snackBar.open(error.error.err.message,'Fechar')
            })
    }
  }

    getErrorMessage(controls: FormControl) {
        console.log(controls.errors);
        return controls.hasError('required') ? 'campo é necessário' :
            controls.hasError('email') ? 'Isso não é um email' :
                controls.hasError('minlength') ? 'O campo deve conter pelo menos caracteres' :
                'teste';

    }
}
