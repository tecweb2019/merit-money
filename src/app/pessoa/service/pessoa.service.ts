import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {SessionStorageService} from "ngx-webstorage";
import connect from "../../../conect-api";


@Injectable({
    providedIn: 'root'
})
export class PessoaService {
    private httpOptions;
    private Url = connect.host+"pessoas";

    constructor(private http: HttpClient, private storage: SessionStorageService) {


    }

    getForId(id): Observable<any> {
        this.atualizaheader();
        return this.http.get(this.Url + "/" + id, this.httpOptions);
    }

    save(pessoa): Observable<any> {
        this.atualizaheader();
        return this.http.post(this.Url, pessoa, this.httpOptions);
    }

    getAll(): Observable<object> {
        this.atualizaheader();
        return this.http.get(this.Url + "/", this.httpOptions);
    }

    listaSemUsuarioLogado(): Observable<any> {
       this.atualizaheader();
        return this.http.get(this.Url + /listausuarios/ + this.storage.retrieve("usuario").user.login.email,this.httpOptions)
    }

    pegarUsuarioLogado(): Observable<any> {
        this.atualizaheader();
        debugger
        console.log()
        return this.http.get(this.Url + "/me", this.httpOptions);

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
