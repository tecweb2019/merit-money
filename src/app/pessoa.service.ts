import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pessoa} from "./classes/Pessoa";


@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  static Url = "https://api-meriti-money.azurewebsites.net/api/v1/pessoas";
  constructor( private http : HttpClient,) { }


  getForId(id): Observable<any>{
    return this.http.get(PessoaService.Url +"/"+ id );
  }

  save(pessoa): void{
    console.log("Estou aqui ");
     this.http.post(PessoaService.Url,pessoa,PessoaService.httpOptions)
         .subscribe(erro=>{

     });
  }

  getAll():Observable<object>{
     return this.http.get(PessoaService.Url +"/");
  }
}
