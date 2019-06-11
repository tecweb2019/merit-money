import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable} from "rxjs";
import { SessionStorageService } from "angular-web-storage";


@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private  httpOptions;
  static Url = "http://localhost:3001/api/v1/pessoas";
  constructor( private http : HttpClient, private storage: SessionStorageService) {

      this.httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              "Authorization": "JWT " + this.storage.get("token")
          })
      };
  }


  getForId(id): Observable<any>{
    return this.http.get(PessoaService.Url +"/"+ id );
  }

  save(pessoa): Observable<any>{
    console.log("Estou aqui ");
    return this.http.post(PessoaService.Url,pessoa,this.httpOptions);
  }

  getAll():Observable<object>{
     return this.http.get(PessoaService.Url +"/",this.httpOptions);
  }

    pegarUsuarioLogado(): Observable<any>{

        return this.http.get(PessoaService.Url +"/me",this.httpOptions);
    }
}
