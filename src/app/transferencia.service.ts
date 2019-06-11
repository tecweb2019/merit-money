import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {HttpClient , HttpHeaders } from "@angular/common/http";
import { SessionStorageService} from "angular-web-storage";


@Injectable({ providedIn: "root"})
export class TransferenciaService {
    private httpOptions;
  static url = "http://localhost:3001/api/v1/transferencias";

  constructor( private http : HttpClient, private storage: SessionStorageService) {
      this.httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json',
              'authorization': this.storage.get('token')})
      };
  }

  listar(): Observable<object> {
      return this.http.get(TransferenciaService.url);
  }

  save(transferencia){
      return this.http.post(TransferenciaService.url,transferencia,this.httpOptions)
          .subscribe(data =>{});
  }

}
