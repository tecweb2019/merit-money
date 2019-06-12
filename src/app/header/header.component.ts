import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {LoginserviceService} from "../login/loginservice.service";
import { Router} from "@angular/router";
import { SessionStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  public usuario;

  constructor(private breakpointObserver: BreakpointObserver, private loginservice:LoginserviceService,
              private router:Router, private storage) {
      this.pegarUsuarioStorage()
  }


  sair(){
    this.loginservice.loguot();
    this.router.navigate(['login']);
  }

  pegarUsuarioStorage(){

  }
}
