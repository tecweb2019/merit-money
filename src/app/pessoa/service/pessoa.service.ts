import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  static Url = "http://localhost:3001/api/v1/pessoas";
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
