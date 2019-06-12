import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {HttpClient , HttpHeaders } from "@angular/common/http";
import { SessionStorageService} from "ngx-webstorage";
import {Transferencia} from "./classes/Tranferencia";


@Injectable({ providedIn: "root"})
export class TransferenciaService {
    private httpOptions;
  static url = "http://localhost:3001/api/v1/transferencias";

  constructor( private http : HttpClient, private storage: SessionStorageService) {
      let token = this.storage.retrieve('token');
      this.httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json',
              'Authorization': token
          })
      };
  }

  listar(): Observable<object> {
      this.atualizaheader()
      return this.http.get(TransferenciaService.url,this.httpOptions);
  }

  save(transferencia: Transferencia):Observable<any>{
      this.atualizaheader()
      return this.http.post(TransferenciaService.url,transferencia,this.httpOptions)
  }

    atualizaheader(){
        let token  = this.storage.retrieve("token");
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                "Authorization": "JWT " + token
            })
        };
    }
}
