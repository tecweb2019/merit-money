import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {SessionStorageService} from "ngx-webstorage";


@Injectable({
    providedIn: 'root'
})
export class PessoaService {
    private httpOptions;
    static Url = "http://localhost:3001/api/v1/pessoas";

    constructor(private http: HttpClient, private storage: SessionStorageService) {


    }

    getForId(id): Observable<any> {
        this.atualizaheader();
        return this.http.get(PessoaService.Url + "/" + id, this.httpOptions);
    }

    save(pessoa): Observable<any> {
        this.atualizaheader();
        return this.http.post(PessoaService.Url, pessoa, this.httpOptions);
    }

    getAll(): Observable<object> {
        this.atualizaheader();
        return this.http.get(PessoaService.Url + "/", this.httpOptions);
    }

    listaSemUsuarioLogado(): Observable<any> {
       this.atualizaheader();
        return this.http.get(PessoaService.Url + /listausuarios/ + this.storage.retrieve("usuario").user.login.email,this.httpOptions)
    }

    pegarUsuarioLogado(): Observable<any> {
        this.atualizaheader();
        return this.http.get(PessoaService.Url + "/me", this.httpOptions);
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
