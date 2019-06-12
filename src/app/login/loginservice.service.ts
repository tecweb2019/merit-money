import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {PessoaService} from "../pessoa/service/pessoa.service";
import {SessionStorageService} from "ngx-webstorage";

@Injectable({
    providedIn: 'root'
})


export class LoginserviceService {
    private httpOptions;
    static Url = "http://localhost:3001/api/v1/login/token";

    constructor(private http: HttpClient, private PessoaService: PessoaService, private storage: SessionStorageService) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
    }

    logar(email, senha): Observable<any> {
        return this.http.post(LoginserviceService.Url,
            JSON.stringify({"email": email, "senha": senha}), this.httpOptions);

    }

    pegarusuarioLogado(): Observable<any> {
        return this.PessoaService.pegarUsuarioLogado();
    }

    loguot() {
        this.storage.clear("token");
        this.storage.clear('usuario');
    }

    estaLogado(): boolean {
        return this.storage.retrieve("token") ? true : false;
    }
}