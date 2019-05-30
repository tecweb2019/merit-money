import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {HttpClient , HttpHeaders } from "@angular/common/http";



@Injectable({ providedIn: "root"})
export class TransferenciaService {
    static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  static url = "https://api-meriti-money.azurewebsites.net/api/v1/transferencias";

  constructor( private http : HttpClient) { }

  listar(): Observable<object> {
      return this.http.get(TransferenciaService.url);
  }

  save(transferencia){
      return this.http.post(TransferenciaService.url,transferencia,TransferenciaService.httpOptions)
          .subscribe(erro =>{});
  }

}
