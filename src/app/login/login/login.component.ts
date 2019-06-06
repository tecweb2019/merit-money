import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup , FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

private formLogin = new FormGroup({
    usuario: new FormControl(),
    senha: new FormControl('12345'),
});
  constructor( private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(){
    if(this.formLogin.valid) {
        this.router.navigate(['/transferencias']);
    }
  }

}
