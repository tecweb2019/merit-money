import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionStorageService} from "ngx-webstorage";
import {Transferencia} from "./classes/Tranferencia";


@Injectable({providedIn: "root"})
export class TransferenciaService {
    private httpOptions;
    static url = "http://localhost:3001/api/v1/transferencias";

    constructor(private http: HttpClient, private storage: SessionStorageService) {
        let token = this.storage.retrieve('token');
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
    }

    listar(): Observable<object> {
        this.atualizaheader()
        return this.http.get(TransferenciaService.url, this.httpOptions);
    }

    save(transferencia: Transferencia): Observable<any> {
        this.atualizaheader()
        return this.http.post(TransferenciaService.url, transferencia, this.httpOptions)
    }

    atualizaheader() {
        let token = this.storage.retrieve("token");
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                "Authorization": "JWT " + token
            })
        };
    }

    getTransferenciasFeirtas(){
        this.atualizaheader();
        let id = this.storage.retrieve("usuario").user._id;
        return this.http.get(TransferenciaService.url +"/remetidas/"+ id, this.httpOptions);
    }

    getTransferenciasRecebidas(){
        this.atualizaheader();
        let id = this.storage.retrieve("usuario").user._id;
        return this.http.get(TransferenciaService.url+"/recebidas/"+id, this.httpOptions);
    }

    getTransferenciasEnvolvido(){
        this.atualizaheader();
        let id = this.storage.retrieve("usuario").user._id;
        return this.http.get(TransferenciaService.url+"/envolvido/"+id, this.httpOptions);
    }
}
