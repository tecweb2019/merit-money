import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {HttpClient , HttpHeaders } from "@angular/common/http";



@Injectable({ providedIn: "root"})
export class MinhasTransferenciasService {
    static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  static url = "https://api-meriti-money.azurewebsites.net/api/v1/transferencias";

  constructor( private http : HttpClient) { }

  minhasTransferencias(idUsuarioLogado): Observable<any>{
    return this.http.get("https://api-meriti-money.azurewebsites.net/api/v1/pessoas" +"/"+ idUsuarioLogado );
  }

}
