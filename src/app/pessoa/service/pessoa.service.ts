import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable} from "rxjs";
import { LocalStorageService } from "angular-web-storage";


@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  static httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            "Authorization": "JWT "+ new LocalStorageService().get("token")
        })
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
     return this.http.get(PessoaService.Url +"/",PessoaService.httpOptions);
  }

    pegarUsuarioLogado(): Observable<any>{

        return this.http.get( PessoaService.Url +"/me",PessoaService.httpOptions);
    }
}
